import { ParentComponent } from "solid-js";
import cn from "clsx";

import { Footer } from "~/components/Footer";

import styles from "./PageLayout.module.scss";

export const PageLayout: ParentComponent<{ class?: string }> = (props) => {
  return (
    <div class={styles.container}>
      <main class={cn(props.class, styles.content)}>{props.children}</main>
      <Footer />
    </div>
  );
};
