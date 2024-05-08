'use client';

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function () {
    const navigator = useRouter();
    useEffect(() => {
        navigator.push('/');
    }, [])
    return null
}