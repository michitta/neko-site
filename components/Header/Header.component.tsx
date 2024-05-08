import styles from "./Header.module.scss"
import Button from "../Button/Button.component";
import { RiArrowDownCircleFill } from "@remixicon/react";
import Image from "next/image";
import Logo from "@/assets/logo.webp";

export default function ({ version, downloadUrl }: { version?: string, downloadUrl: string }) {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <Image src={Logo} alt="Neko Launcher" width={30} height={30} />
                <p>Neko Launcher</p>
            </div>
            <div className={styles.rightSection}>
                <Button className="header" href="https://discord.gg/CEAhJd3K86">Discord</Button>
                {version && <Button className="download" href={downloadUrl}><RiArrowDownCircleFill size={20} />Скачать лаунчер</Button>}
            </div>
        </header>
    );
};