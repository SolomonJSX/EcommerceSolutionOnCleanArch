'use client';
import React, { useState } from 'react';
import Modal from '../ui/Modal/Modal';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет твоя логика авторизации (например, вызов API)
        console.log('Login attempt:', { email, password });
    };
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Вход в систему"
        >
            <form onSubmit={handleSubmit} className="space-y-6 p-6">
                {/* Поле Email */}
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="email">Email или Логин</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="focus-visible:ring-[#f26522]"
                    />
                </div>

                {/* Поле Пароля */}
                <div className="grid w-full items-center gap-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Пароль</Label>
                        <button
                            type="button"
                            className="text-xs text-[#f26522] hover:underline"
                        >
                            Забыли пароль?
                        </button>
                    </div>
                    <Input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="focus-visible:ring-[#f26522]"
                    />
                </div>

                {/* Кнопка входа */}
                <Button
                    type="submit"
                    className="mb-2 w-full bg-[#f26522] hover:bg-[#d4561c] text-white font-bold py-6 text-lg transition-all"
                >
                    Войти
                </Button>

                {/* Ссылка на регистрацию */}
                <div className="text-center text-sm text-gray-500">
                    Нет аккаунта?{' '}
                    <button
                        type="button"
                        className="text-[#f26522] font-semibold hover:underline"
                        onClick={() => {/* Здесь можно открыть модалку регистрации */ }}
                    >
                        Создать аккаунт
                    </button>
                </div>
            </form>
        </Modal>
    );
}