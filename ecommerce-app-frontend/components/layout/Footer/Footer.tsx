'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer_section} layout_padding`}>
            <div className="container">
                {/* Логотип футера */}
                <div className={styles.footer_logo}>
                    <Link href="/">
                        <img src="/images/footer-logo.png" alt="Footer Logo" />
                    </Link>
                </div>

                {/* Форма подписки */}
                <div className={styles.input_bt}>
                    <input 
                        type="text" 
                        className={styles.mail_bt} 
                        placeholder="Your Email" 
                        name="Your Email" 
                    />
                    <span className={styles.subscribe_bt}>
                        <Link href="#">Subscribe</Link>
                    </span>
                </div>

                {/* Меню футера */}
                <div className={styles.footer_menu}>
                    <ul>
                        <li><Link href="#">Best Sellers</Link></li>
                        <li><Link href="#">Gift Ideas</Link></li>
                        <li><Link href="#">New Releases</Link></li>
                        <li><Link href="#">Today's Deals</Link></li>
                        <li><Link href="#">Customer Service</Link></li>
                    </ul>
                </div>

                {/* Контакты */}
                <div className={styles.location_main}>
                    Help Line Number : <a href="tel:+1180012001200">+1 1800 1200 1200</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;