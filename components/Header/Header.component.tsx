import { FC } from "react";
import styles from "./Header.module.scss"
import Button from "../Button/Button.component";
import { RiArrowDownCircleFill } from "@remixicon/react";
import Image from "next/image";
import Logo from "@/assets/logo.webp";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <Image src={Logo} alt="Neko Launcher" width={30} height={30} />
                <p>Neko Launcher</p>
            </div>
            <div className={styles.rightSection}>
                <Button className="header" href="https://discord.gg/CEAhJd3K86">Discord</Button>
                <Button className="download" href="/api/downloads"><RiArrowDownCircleFill size={20} />Скачать лаунчер</Button>
            </div>
        </header>
    );
};

export default Header;