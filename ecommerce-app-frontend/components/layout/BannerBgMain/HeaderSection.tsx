'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './HeaderSection.module.css';
import { Search, ShoppingCart, User, ChevronDown, ChevronRight, X, Shirt, Laptop, Gem, LayoutGrid, Archive } from "lucide-react";
import { useCategories } from "@/hooks/api/useCategories";

export default function HeaderSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false); // Состояние для выпадающего списка

    const { getAll } = useCategories();
    const { data: categories } = getAll();

    // Функция для подбора иконки по названию категории
    const getCategoryIcon = (name: string) => {
        const n = name.toLowerCase();
        if (n.includes('fashion')) return <Shirt size={20} />;
        if (n.includes('electronic')) return <Laptop size={20} />;
        if (n.includes('jeweller')) return <Gem size={20} />;
        if (n.includes('all')) return <LayoutGrid size={20} />;
        return <Archive size={20} />; // Иконка по умолчанию
    };

    return (
        <div className={styles.header_section}>
            <div className="container">
                <div className={styles.containt_main}>

                    {/* --- Боковое меню (Sidenav) --- */}
                    <div className={`${styles.sidenav} ${isOpen ? styles.sidenav_open : ''}`}>

                        {/* ШАПКА МЕНЮ */}
                        <div className={styles.sidenav_header}>
                            <h3 className={styles.category_title}>Categories</h3>
                            <button className={styles.closebtn} onClick={() => setIsOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>

                        {/* СПИСОК КАТЕГОРИЙ */}
                        <nav className="mt-4">
                            {categories?.map((category: any) => (
                                <Link
                                    key={category.id}
                                    href={`/products/category/${category.id}`}
                                    className={`${styles.category_link} flex`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className={styles.category_icon}>
                                        {getCategoryIcon(category.name)}
                                    </span>
                                    <span className="grow">{category.name}</span>
                                    <ChevronRight size={14} className="opacity-30" />
                                </Link>
                            ))}
                        </nav>

                        {/* НИЖНЯЯ ЧАСТЬ (Опционально) */}
                        <div className="absolute bottom-10 left-0 w-full px-6 opacity-20 text-xs text-white">
                            © 2025 ECommerce App
                        </div>
                    </div>

                    <span className={styles.toggle_icon} onClick={() => setIsOpen(true)}>
                        <img src="/images/toggle-icon.png" alt="menu" />
                    </span>

                    {/* --- Поиск --- */}
                    <div className={styles.main}>
                        <div className={styles.search_wrapper}>
                            <input type="text" className={styles.search_input} placeholder="Search for products..." />
                            <button className={styles.search_button} type="button">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* --- Правая часть --- */}
                    <div className={styles.header_box}>
                        <div className={styles.login_menu}>
                            <ul>
                                <li>
                                    <Link href="/cart" className={styles.nav_item}>
                                        <ShoppingCart size={20} />
                                        <span className={styles.padding_10}>Cart</span>
                                    </Link>
                                </li>

                                {/* ВЫПАДАЮЩИЙ СПИСОК LOGIN/REGISTER */}
                                <li className={styles.auth_container}>
                                    <button
                                        className={styles.nav_item}
                                        onClick={() => setIsAuthOpen(!isAuthOpen)}
                                    >
                                        <User size={20} />
                                        <span className={styles.padding_10}>Login</span>
                                        <ChevronDown size={14} className={`${styles.arrow} ${isAuthOpen ? styles.arrow_rotate : ''}`} />
                                    </button>

                                    {isAuthOpen && (
                                        <div className={styles.auth_dropdown}>
                                            <Link href="/login" onClick={() => setIsAuthOpen(false)} className={styles.dropdown_link}>
                                                Login
                                            </Link>
                                            <Link href="/register" onClick={() => setIsAuthOpen(false)} className={styles.dropdown_link}>
                                                Register
                                            </Link>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}