import { $api } from '@/lib/axios';
import { LoginUser, CreateUser, LoginResponse } from '@/types/auth.types';
import {ServiceResponse} from "@/types/service.types";

export const AuthService = {
    async login(dto: LoginUser) {
        const { data } = await $api.post<LoginResponse>('/Authentication/login', dto);
        return data;
    },

    async register(dto: CreateUser) {
        const { data } = await $api.post<ServiceResponse>('/Authentication/create', dto);
        return data;
    }
};