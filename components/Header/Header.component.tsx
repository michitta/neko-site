'use client'

import { FC } from "react";
import styles from "./Header.module.scss"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: FC = () => {
    const path = usePathname();
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <p>Neko Launcher</p>
                <nav className={styles.navBar}>
                    <Link href="/" className={path === '/' ? styles.active : ''}>Главная</Link>
                    <Link href="/developers" className={path === '/developers' ? styles.active : ''}>Для разработчиков</Link>
                </nav>
            </div>
            <div className={styles.rightSection}>
                <Link href="https://discord.gg/CEAhJd3K86">Discord</Link>
                <Link href="/api/downloads">Скачать лаунчер</Link>
            </div>
        </header>
    );
};

export default Header;