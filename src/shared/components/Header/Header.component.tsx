import { FC, memo } from "react";
import styles from "./Header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Header: FC = memo(() => {
    const location = useLocation();
    const navigator = useNavigate();

    return (
        <header>
            <div className={styles.left_section}>
                <p>Neko Launcher</p>
                <div className={styles.active_panel}>
                    <button className={location.pathname === '/' ? styles.active : ''} onClick={() => navigator('/')}>Главная</button>
                    <button className={location.pathname === '/' ? styles.active : ''} onClick={() => navigator('/developers')}>Для разработчиков</button>
                </div>
            </div>
            <div className={styles.right_section}>
                <a href="https://discord.gg/AjRCWhkxdA" className={location.pathname === '/' ? styles.active : ''}>Discord</a>
            </div>
        </header >
    )
});

export default Header