'use client';

import styles from "./page.module.scss"
import clsx from "clsx";
import Button from "@/components/Button/Button.component";
import { RiArrowDownCircleFill } from "@remixicon/react";
import Header from "@/components/Header/Header.component";
import Footer from "@/components/Footer/Footer.component";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [version, setVersion] = useState();

  const downloadUrl = "https://api.yami.town/api/v1/downloads/launcher/yami";

  useEffect(() => {
    axios.get('https://api.github.com/repos/michitta/neko-launcher-updates/releases/latest').then(res => setVersion(res.data.tag_name))
  }, [])

  return (
    <>
      <Header version={version} downloadUrl={downloadUrl} />
      <main className={styles.page}>
        <div className={styles.present}>
          {version && <div className={styles.version}>
            <p>Версия {version} уже доступна</p>
          </div>}
          <h1>Раскройте свой потенциал:<br />
            мощь, стиль и инновации в одном лаунчере</h1>
          <div className={styles.buttons}>
            {version && <Button href={downloadUrl} className="download"><RiArrowDownCircleFill size={20} />Скачать лаунчер (yami)</Button>}
            <Button href="https://github.com/michitta/neko-launcher-updates/releases/latest">Список изменений</Button>
          </div>
          <video autoPlay loop muted playsInline src="main.webm" />
        </div>
        <div className={styles.features}>
          <div>
            <div className={styles.text}>
              <h2>Высокопроизводительный</h2>
              <p>Разработан на Rust и TypeScript, обеспечивает<br />
                отличную скорость и стабильность.</p>
            </div>
            <video autoPlay loop muted playsInline src="first.webm" />
          </div>
          <div>
            <div className={styles.text}>
              <h2>Кастомизация</h2>
              <p>Вы можете изменить цветовую схему и фоновое<br />
                изображение для персонализации.</p>
            </div>
            <video autoPlay loop muted playsInline src="second.webm" />
          </div>
        </div>
        <div className={styles.features}>
          <div>
            <div className={styles.text}>
              <h2>Нативный</h2>
              <p>Работает без необходимости установки<br />
                дополнительных пакетов.</p>
            </div>
            <video autoPlay loop muted playsInline src="third.webm" />
          </div>
          <div>
            <div className={styles.text}>
              <h2>Малый размер</h2>
              <p>Занимает менее 10 МБ, что экономит место<br />
                на вашем устройстве.</p>
            </div>
            <video autoPlay loop muted playsInline src="four.webm" />
          </div>
        </div>
        <div className={clsx(styles.text, styles.center)}>
          <h2>И это ещё не всё!</h2>
          <p>Фишки ниже</p>
        </div>
        <div className={styles.features}>
          <div>
            <div className={styles.text}>
              <h2>Встроенный магазин</h2>
              <p>В лаунчере встроен маркет, где вы<br />
                можете легко найти и приобрести нужные<br />
                дополнения прямо из интерфейса.</p>
            </div>
            <div className={styles.text}>
              <h2>Совместимость</h2>
              <p>Поддерживает Windows 10+ (x64), Linux<br />
                (x64) и macOS (x64, ARM64 - beta).</p>
            </div>
            <div className={styles.text}>
              <h2>Быстрый вход на сервер</h2>
              <p>Лаунчер автоматически передаст данные<br />
                о сервере в игру, что позволит вам<br />
                мгновенно попасть на сервер после<br />
                запуска, избегая лишних действий.</p>
            </div>
          </div>
          <div>
            <div className={styles.text}>
              <h2>Единая система Neko</h2>
              <p>Сервера проектов, которые используют<br />
                этот лаунчер, могут быть добавлены в<br />
                любую из ревизий лаунчера.</p>
            </div>
            <div className={styles.text}>
              <h2>Интуитивный дизайн</h2>
              <p>Самый удобный и функциональный<br />
                дизайн из всех, что мы когда-либо<br />
                создавали.</p>
            </div>
            <div className={styles.text}>
              <h2>HD скины и плащи</h2>
              <p>Возможность загрузки HD скинов и<br />
                плащей, которые выделят вас на фоне<br />
                остальных.</p>
            </div>
          </div>
        </div>
        <div className={styles.developers}>
          <div className={clsx(styles.text, styles.center)}>
            <h2>Инструмент для разработчиков</h2>
            <p>Скачайте Manifest Creator для создания манифестов в пару кликов</p>
          </div>
          <Button href="https://github.com/michitta/neko-manifest-creator"><RiArrowDownCircleFill size={20} />Скачать инструмент</Button>
        </div>
      </main >
      <Footer />
    </>
  );
}
