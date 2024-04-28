'use client';

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default async function () {
    const navigator = useRouter();
    useEffect(() => {
        navigator.push('/');
    }, [])
    return null
}