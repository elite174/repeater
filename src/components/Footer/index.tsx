import { Icon } from "../core/Icon";
import styles from "./Footer.module.scss";

const GITHUB_LINK = "https://github.com/elite174";

export const Footer = () => (
  <footer class={styles.container}>
    <strong class={styles.text}>
      Made with &lt3 by <a class={styles.link}>Vladislav Lipatov</a>
    </strong>
    <section class={styles.section}>
      <a class={styles.link} href={GITHUB_LINK}>
        <Icon name="github" class={styles.icon} />
      </a>
    </section>
  </footer>
);
