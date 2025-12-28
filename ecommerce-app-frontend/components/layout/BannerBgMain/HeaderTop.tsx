'use client';

import React from 'react';
import Link from 'next/link';
import styles from './HeaderTop.module.css';

export default function HeaderTop() {
    return (
        <div className="container">
            <div className={styles.header_section_top}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className={styles.custom_menu}>
                            <ul>
                                <li>
                                    <Link href="/best-sellers">Best Sellers</Link>
                                </li>
                                <li>
                                    <Link href="/gift-ideas">Gift Ideas</Link>
                                </li>
                                <li>
                                    <Link href="/new-releases">New Releases</Link>
                                </li>
                                <li>
                                    <Link href="/today-deals">Today&#39;s Deals</Link>
                                </li>
                                <li>
                                    <Link href="/customer-service">Customer Service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}