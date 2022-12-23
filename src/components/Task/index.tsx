import { Component } from "solid-js";

import { BaseTask } from "~/model";
import { ProgressCircle } from "../ProgressCircle";

import styles from "./Task.module.scss";

interface Props {
  task: BaseTask;
  currentTime: Date;
}

export const Task: Component<Props> = (props) => {
  return (
    <div class={styles.container}>
      <ProgressCircle currentValue={45} startValue={0} endValue={100} />
      <strong>{props.task.title}</strong>
    </div>
  );
};
