import { motion } from "framer-motion"
import styles from './page.module.scss'
import { useEffect, useState } from "react"

export default function Offer() {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('https://storage.yami.town/minecraft/offer.txt').then(res => res.text()).then(data => setText(data));
    }, [])
    return (

        <motion.main
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: -10 }}
            transition={{ duration: 0.2 }}
            className={styles.main}>
            <p className="text-white">
                {text}
            </p>
        </motion.main>
    );
}