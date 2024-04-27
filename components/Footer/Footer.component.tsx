import { FC } from "react";
import styles from "./Footer.module.scss"
import Link from "next/link";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <Link href={'https://michitta-space.ru'}>Neko Launcher created by michitta</Link>
            <p>Сделано с ❤️ в России 🌸</p>
        </footer>
    );
};

export default Footer;