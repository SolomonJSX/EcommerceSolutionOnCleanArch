'use client';

import React from 'react';
import Link from 'next/link';
import styles from './BannerSection.module.css';
import {ChevronLeft, ChevronRight} from "lucide-react";

export default function BannerSection() {
    return (
        <div className={`${styles.banner_section} layout_padding`}>
            <div className="container">
                {/* ID оставляем для JS, класс добавляем для наших стилей из модуля */}
                <div
                    id="my_slider"
                    className={`${styles.slider_nav_wrapper} carousel slide`}
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {/* Первый слайд (Active) */}
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className={styles.banner_taital}>
                                        Get Start <br /> Your favorite shopping
                                    </h1>
                                    <div className={styles.buynow_bt}>
                                        <Link href="/shop">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Второй слайд */}
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className={styles.banner_taital}>
                                        Get Start <br /> Your favorite shopping
                                    </h1>
                                    <div className={styles.buynow_bt}>
                                        <Link href="/shop">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Третий слайд */}
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className={styles.banner_taital}>
                                        Get Start <br /> Your favorite shopping
                                    </h1>
                                    <div className={styles.buynow_bt}>
                                        <Link href="/shop">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Управление слайдером (Bootstrap 5 стиль) */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#my_slider"
                        data-bs-slide="prev"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#my_slider"
                        data-bs-slide="next"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}