'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
    useEffect(() => {
        // Динамический импорт JS бандла только на стороне клиента
        // @ts-ignore
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return null;
}