export interface LoginResponse {
    success: boolean;
    message: string | null;
    token: string | null;
    refreshToken: string | null;
}

export interface CreateUser {
    // поля из твоего C# класса CreateUser
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
}

export interface LoginUser {
    email: string;
    password: string;
}