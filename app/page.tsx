import Image from "next/image";
import styles from "./page.module.scss"
import Link from "next/link";
import MainGif from "@/assets/main.gif"
import FirstGif from "@/assets/firstGif.gif"
import SecondGif from "@/assets/secondGif.gif"
import ThirdGif from "@/assets/thirdGif.gif"
import FourthGif from "@/assets/fourthGif.gif"
import clsx from "clsx";
import axios from "axios";
import GoSvg from "@/assets/go.svg";

export default async function Home() {
  const version = await axios.get('https://api.github.com/repos/michitta/updates-neko-launcher-yami/releases/latest').then((res) => res?.data?.tag_name).catch(() => '?');

  return (
    <main className={styles.page}>
      <div className={styles.info}>
        <div className={styles.version}>
          <p>Версия {version} уже доступна</p>
        </div>
        <h1>Раскройте свой потенциал:<br />
          мощь, стиль и инновации в одном лаунчере</h1>
        <div className={styles.download}>
          <Link className={styles.button} href="/api/downloads">
            <Image unoptimized={true} src={GoSvg} alt="svg" width={11} height={11} />
            Скачать
          </Link>
          <Link href="https://github.com/michitta/updates-neko-launcher-yami/releases/latest">Список изменений</Link>
        </div>
        <Image src={MainGif} alt="Neko Launcher" width={800} height={540} />
      </div>
      <div className={styles.features}>
        <div>
          <div className={styles.text}>
            <h2>Высокопроизводительный</h2>
            <p>Разработан на Rust и TypeScript, обеспечивает<br />
              отличную скорость и стабильность.</p>
          </div>
          <Image unoptimized={true} src={FirstGif} alt="gif-1" width={480} height={324} />
        </div>
        <div>
          <div className={styles.text}>
            <h2>Кастомизация</h2>
            <p>Вы можете изменить цветовую схему и фоновое<br />
              изображение для персонализации.</p>
          </div>
          <Image unoptimized={true} src={SecondGif} alt="gif-2" width={480} height={324} />
        </div>
      </div>
      <div className={styles.features}>
        <div>
          <div className={styles.text}>
            <h2>Нативный</h2>
            <p>Работает без необходимости установки<br />
              дополнительных пакетов.</p>
          </div>
          <Image unoptimized={true} src={ThirdGif} alt="gif-3" width={480} height={324} />
        </div>
        <div>
          <div className={styles.text}>
            <h2>Малый размер</h2>
            <p>Занимает менее 10 МБ, что экономит место<br />
              на вашем устройстве.</p>
          </div>
          <Image unoptimized={true} src={FourthGif} alt="gif-4" width={480} height={324} />
        </div>
      </div>
      <div className={clsx(styles.text, styles.center)}>
        <h2>И ещё чуть-чуть информации</h2>
        <p>Часть информация, которая действительно нужна</p>
      </div>
      <div className={styles.features}>
        <div>
          <div className={styles.text}>
            <h2>Встроенный магазин</h2>
            <p>В лаунчере встроен маркет, где вы можете легко<br />
              найти и приобрести нужные дополнения прямо<br />
              из интерфейса.</p>
          </div>
          <div className={styles.text}>
            <h2>Совместимость</h2>
            <p>Поддерживает Windows (x64), Linux (x64) и<br />
              macOS (x64, ARM64).</p>
          </div>
        </div>
        <div>
          <div className={styles.text}>
            <h2>Единая система Neko</h2>
            <p>Сервера проектов, которые используют этот<br />
              лаунчер, могут быть добавлены в любую из<br />
              ревизий лаунчера.</p>
          </div>
          <div className={styles.text}>
            <h2>Интуитивный дизайн</h2>
            <p>Самый удобный и функциональный дизайн из<br />
              всех, что мы когда-либо создавали.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
