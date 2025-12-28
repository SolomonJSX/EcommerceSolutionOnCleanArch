'use client';

import React from 'react';
import Link from 'next/link';
import styles from './LogoSection.module.css';

export default function LogoSection() {
    return (
        <div className={styles.logo_section}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className={styles.logo}>
                            {/* Используем Link вместо <a> для мгновенного перехода */}
                            <Link href="/">
                                <img src="/images/logo.png" alt="ECommerce Logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}