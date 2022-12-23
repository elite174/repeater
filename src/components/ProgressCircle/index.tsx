import { createMemo, mergeProps, VoidComponent } from "solid-js";

import styles from "./ProgressCircle.module.scss";

const DEFAULT_RADIUS = 50;
const DEFAULT_STROKE_WIDTH = 4;

interface Props {
  currentValue: number;
  startValue: number;
  endValue: number;
  size?: number;
  strokeWidth?: number;
}

export const ProgressCircle: VoidComponent<Props> = (initialProps) => {
  const props = mergeProps(
    { size: DEFAULT_RADIUS, strokeWidth: DEFAULT_STROKE_WIDTH },
    initialProps
  );

  const center = createMemo(() => props.size / 2);

  const computedRadius = createMemo(() => center() - props.strokeWidth);

  const circleAttributes = createMemo(() => ({
    cx: center(),
    cy: center(),
    r: computedRadius(),
  }));

  const progressPercentage = () =>
    Math.min(
      100,
      Math.round(
        100 * (props.currentValue / (props.endValue - props.startValue))
      )
    );

  const computedDashArray = () => 2 * Math.PI * computedRadius();

  const computedDashOffset = () =>
    computedDashArray() * ((100 - progressPercentage()) / 100);

  return (
    <div
      class={styles.container}
      style={{
        ["--radius"]: `${computedRadius()}px`,
        ["--dashArray"]: `${computedDashArray()}px`,
        ["--strokeWidth"]: `${props.strokeWidth}px`,
        ["--dashOffset"]: `${computedDashOffset()}px`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class={styles.svg}
        style={{
          width: `${props.size}px`,
          height: `${props.size}px`,
        }}
      >
        <circle {...circleAttributes()} class={styles.track} />
        <circle {...circleAttributes()} class={styles.indication} />
      </svg>
      <span class={styles.text}>55%</span>
    </div>
  );
};
