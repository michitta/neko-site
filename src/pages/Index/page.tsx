import styles from './page.module.scss';
import main_image from "@/shared/assets/main.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Index() {
  const [tag, set_tag] = useState('...');
  const [url, set_url] = useState('#');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Win")) set_url('https://github.com/michitta/updates-neko-launcher-yami/releases/latest/download/yami-launcher.exe');
    else if (userAgent.includes("Mac")) set_url('https://github.com/michitta/updates-neko-launcher-yami/releases/latest/download/yami-launcher.dmg');
    else if (userAgent.includes("Linux")) set_url('https://github.com/michitta/updates-neko-launcher-yami/releases/latest/download/yami-launcher.AppImage');
  }, [])

  useEffect(() => {
    const latest_version = fetch('https://api.github.com/repos/michitta/updates-neko-launcher-yami/releases/latest');
    latest_version.then(res => res.json()).then(data => set_tag('Версия ' + data?.tag_name + ' уже доступна'));
  }, [])

  return (
    <motion.main
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      exit={{ y: -10 }}
      transition={{ duration: 0.2 }}
      className={styles.main}>
      <section className={styles.top}>
        <div className={styles.tag}>
          <p>{tag}</p>
        </div>
        <div className={styles.text}>
          <h1>
            Быстрое и эффективное решение<br />
            для вашего проекта
          </h1>
          <p>Один лаунчер - все сервера Neko</p>
        </div>
        <a href={url}>
          Скачать (с привязкой к yami)
        </a>
        <img src={main_image} width={800} height={254} alt="launcher_image" />
      </section>
      <section className={styles.bento}>
        <div>
          <div className={[styles.bento_card, styles.pink].join(' ')}>
            <p className={styles.pre_title}>
              Индивидуальность в каждом пикселе
            </p>
            <p className={styles.title}>
              Широкий спектр<br />
              кастомизации*
            </p>
            <p className={styles.description}>
              *Часть кастомизации распространяется в виде<br />
              дополнения, которое можно купить в магазине
            </p>
          </div>
          <div className={[styles.bento_card, styles.green_gray].join(' ')}>
            <p className={styles.pre_title}>
              Сервера экосистемы
            </p>
            <p className={styles.title}>
              Добавьте сервер<br />
              другого проекта*
            </p>
            <p className={styles.description}>
              *Если проект работает с neko launcher,<br />
              вы можете добавить сервера по UUID
            </p>
          </div>
          <div className={[styles.bento_card, styles.blue_gray].join(' ')}>
            <p className={styles.pre_title}>
              Красивый и понятный
            </p>
            <p className={[styles.title, styles.neko_ui].join(' ')}>
              Neko UI 4
            </p>
            <p className={styles.description}>
              Лучший дизайн продукта, который мы<br />
              создавали
            </p>
          </div>
        </div>
        <div>
          <div className={[styles.bento_card, styles.gray].join(' ')}>
            <p className={styles.pre_title}>
              Работает на всех платформах
            </p>
            <p className={styles.title}>
              Поддержка Windows,<br />
              macOS* и Linux
            </p>
            <p className={styles.description}>
              *Пока только Intel<br />
              Windows - exe, macOS - dmg, Linux - AppImage
            </p>
          </div>
          <div className={[styles.bento_card, styles.red].join(' ')}>
            <p className={styles.pre_title}>
              Малый размер
            </p>
            <p className={styles.title}>
              Установщик весит<br />
              меньше 4 мб*
            </p>
            <p className={styles.description}>
              *Размер установщика может изменяться<br />
              в зависимости от версий лаунчера
            </p>
          </div>
          <div className={[styles.bento_card, styles.green].join(' ')}>
            <p className={styles.pre_title}>
              Быстрый и эффективный
            </p>
            <p className={styles.title}>
              Написан на Rust*
            </p>
            <p className={styles.description}>
              *Backend лаунчера написан на Rust.<br />
              Frontend на React (TS)
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
