import { FC } from "react";
import styles from "./Header.module.scss"
import Button from "../Button/Button.component";
import { RiArrowDownCircleFill } from "@remixicon/react";
import Image from "next/image";
import Logo from "@/assets/logo.webp";
import axios from "axios";

const Header: FC = async () => {
    const version = await axios.get('https://api.github.com/repos/michitta/updates-neko-launcher-yami/releases/latest').then((res) => res?.data?.tag_name).catch(() => '?');
    const downloadUrl = 'https://api.yami.town/api/v1/downloads/launcher/' + version;

    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <Image src={Logo} alt="Neko Launcher" width={30} height={30} />
                <p>Neko Launcher</p>
            </div>
            <div className={styles.rightSection}>
                <Button className="header" href="https://discord.gg/CEAhJd3K86">Discord</Button>
                <Button className="download" href={downloadUrl}><RiArrowDownCircleFill size={20} />Скачать лаунчер</Button>
            </div>
        </header>
    );
};

export default Header;