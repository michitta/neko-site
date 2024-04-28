import Link from "next/link";
import styles from "./Button.module.scss"

export default function Button({ href, className, children }: { href: string; className?: string; children?: React.ReactNode }) {
    return (
        <Link
            href={href}
            className={className ? styles?.[className] : styles.button}
        >
            {children}
        </Link>
    );
}