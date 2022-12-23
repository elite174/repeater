import cn from "clsx";

import { VoidComponent } from "solid-js";

import styles from "./Loader.module.scss";

export const Loader: VoidComponent<{ class?: string }> = (props) => (
  <div class={cn(props.class, styles.container)}>
    <div class={styles.spinnerContainer}>
      <div class={styles.spinner} />
      <div class={styles.spinner2} />
    </div>
    <strong class={styles.text}>Loading</strong>
  </div>
);
