import Image from "next/image";
import styles from "./page.module.scss"
import Main from "@/assets/main.webp"
import First from "@/assets/first.webp"
import Second from "@/assets/second.webp"
import Third from "@/assets/third.webp"
import Fourth from "@/assets/fourth.webp"
import clsx from "clsx";
import axios from "axios";
import Button from "@/components/Button/Button.component";
import { RiArrowDownCircleFill } from "@remixicon/react";

export default async function Home() {
  const version = await axios.get('https://api.github.com/repos/michitta/updates-neko-launcher-yami/releases/latest').then((res) => res?.data?.tag_name).catch(() => '?');

  return (
    <main className={styles.page}>
      <div className={styles.present}>
        <div className={styles.version}>
          <p>Версия {version} уже доступна</p>
        </div>
        <h1>Раскройте свой потенциал:<br />
          мощь, стиль и инновации в одном лаунчере</h1>
        <div className={styles.buttons}>
          <Button href="/api/downloads" className="download"><RiArrowDownCircleFill size={20} />Скачать лаунчер</Button>
          <Button href="https://github.com/michitta/updates-neko-launcher-yami/releases/latest">Список изменений</Button>
        </div>
        <Image src={Main} alt="Neko Launcher" width={800} height={540} />
      </div>
      <div className={styles.features}>
        <div>
          <div className={styles.text}>
            <h2>Высокопроизводительный</h2>
            <p>Разработан на Rust и TypeScript, обеспечивает<br />
              отличную скорость и стабильность.</p>
          </div>
          <Image src={First} alt="gif-1" width={480} height={324} />
        </div>
        <div>
          <div className={styles.text}>
            <h2>Кастомизация</h2>
            <p>Вы можете изменить цветовую схему и фоновое<br />
              изображение для персонализации.</p>
          </div>
          <Image src={Second} alt="gif-2" width={480} height={324} />
        </div>
      </div>
      <div className={styles.features}>
        <div>
          <div className={styles.text}>
            <h2>Нативный</h2>
            <p>Работает без необходимости установки<br />
              дополнительных пакетов.</p>
          </div>
          <Image src={Third} alt="gif-3" width={480} height={324} />
        </div>
        <div>
          <div className={styles.text}>
            <h2>Малый размер</h2>
            <p>Занимает менее 10 МБ, что экономит место<br />
              на вашем устройстве.</p>
          </div>
          <Image src={Fourth} alt="gif-4" width={480} height={324} />
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
  );
}
