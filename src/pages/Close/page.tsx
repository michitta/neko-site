import styles from './page.module.scss';
import { motion } from "framer-motion"

export default function Close() {
    if (typeof window != "undefined") {
        window.close()
    }

    return (
        <motion.main
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: -10 }}
            transition={{ duration: 0.2 }}
            className={styles.main}>
            <p>
                Осталось ещё чуть-чуть
            </p>
        </motion.main>
    );
}
