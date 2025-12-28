'use client';

import React from 'react';
import styles from './BannerBgMain.module.css';
import HeaderTop from "@/components/layout/BannerBgMain/HeaderTop";
import LogoSection from "@/components/layout/BannerBgMain/LogoSection";
import HeaderSection from "@/components/layout/BannerBgMain/HeaderSection";
import BannerSection from "@/components/layout/BannerBgMain/BannerSection";

const BannerBgMain = () => {
    return (
        <div className={styles.banner_bg_main}>
            {/* 1. Верхнее меню (Best Sellers, и т.д.) */}
            <HeaderTop />

            {/* 2. Логотип */}
            <LogoSection />

            {/* 3. Основная навигация (Поиск, Категории, Корзина) */}
            <HeaderSection />

            {/* 4. Слайдер (Carousel) */}
            <BannerSection />
        </div>
    );
};

export default BannerBgMain;