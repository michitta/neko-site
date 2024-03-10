
import styles from './page.module.scss';
import { motion } from "framer-motion"

export default function Developers() {
    return (
        <motion.main
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: -10 }}
            transition={{ duration: 0.2 }}
            className={styles.main}>
            <div className={styles.text}>
                <h1>
                    Инструменты для разработчиков
                </h1>
                <p>Здесь вы найдете программное обеспечение и утилиты для упрощения развёртывания ваших проектов</p>
            </div>
            <div className={styles.developer_tools}>
                <div className={styles.tool}>
                    <section className={styles.left_section}>
                        <p className={styles.title}>Neko Manifest CLI</p>
                        <p className={styles.description}>Мощный и гибкий командный интерфейс, созданный для облегчения работы с манифестами</p>
                    </section>
                    <section className={styles.right_section}>
                        <a href='https://raw.githubusercontent.com/michitta/neko-manifest-cli/main/a12719b1-f183-493f-95e9-6545b349dc98.json'>Пример манифеста</a>
                        <a href="https://github.com/michitta/neko-manifest-creator">GitHub</a>
                    </section>
                </div>
            </div>
        </motion.main>
    );
}
