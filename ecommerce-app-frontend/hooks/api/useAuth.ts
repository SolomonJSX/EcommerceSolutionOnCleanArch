import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/services/auth.service';
import { setCookie } from 'cookies-next';
import {LoginUser} from "@/types/auth.types";

export const useLogin = () => {
    return useMutation({
        mutationFn: (credentials: LoginUser) => AuthService.login(credentials),
        onSuccess: (data) => {
            if (data.token) {
                setCookie('accessToken', data.token);
                setCookie('refreshToken', data.refreshToken);
                // Можно сделать редирект или обновить состояние юзера
            }
        },
    });
};

