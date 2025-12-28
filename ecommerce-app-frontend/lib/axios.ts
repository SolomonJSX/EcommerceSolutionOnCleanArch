import axios from "axios";
import {deleteCookie, getCookie, setCookie} from "cookies-next";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const $api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

$api.interceptors.request.use((config) => {
    const token = getCookie('accessToken');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

$api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Если 401 и это не повторный запрос
        if (error.response?.status === 401 && !error.config._isRetry) {
            originalRequest._isRetry = true;

            try {
                const oldRefreshToken = getCookie('refreshToken');

                // ВАЖНО: Твой контроллер принимает refreshToken в URL через GET
                // [HttpGet("refreshToken/{refreshToken}")]
                const response = await axios.get(`${API_URL}/Authentication/refreshToken/${oldRefreshToken}`);

                if (response.data.success) {
                    const { accessToken, refreshToken } = response.data;

                    // Сохраняем новые токены
                    setCookie('accessToken', accessToken);
                    setCookie('refreshToken', refreshToken);

                    // Повторяем оригинальный запрос с новым токеном
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return $api.request(originalRequest);
                }
            } catch (e) {
                // Если обновить не вышло — разлогиниваем
                console.error('Not authorized');
                deleteCookie('accessToken');
                deleteCookie('refreshToken');
                // window.location.href = '/login'; // Опционально: редирект
            }
        }
        throw error;
    }
);