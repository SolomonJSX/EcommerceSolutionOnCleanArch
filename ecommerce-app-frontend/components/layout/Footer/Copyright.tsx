'use client';

import React from 'react';
import styles from './Copyright.module.css';

const Copyright = () => {
    // Получаем текущий год автоматически
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.copyright_section}>
            <div className="container">
                <p className={styles.copyright_text}>
                    © {currentYear} All Rights Reserved. Design by{' '}
                    <a 
                        href="https://html.design" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Free html Templates
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Copyright;