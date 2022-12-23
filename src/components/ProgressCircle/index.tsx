import { createMemo, mergeProps, VoidComponent } from "solid-js";

import styles from "./ProgressCircle.module.scss";

const DEFAULT_RADIUS = 100;
const DEFAULT_STROKE_WIDTH = 4;

interface Props {
  currentValue: number;
  startValue: number;
  endValue: number;
  size?: number;
  strokeWidth?: number;
}

const computeArcOffset = (radius: number, progressPercentage: number) => {
  const arcLength = 2 * Math.PI * radius;

  return arcLength * ((100 - progressPercentage) / 100);
};

export const ProgressCircle: VoidComponent<Props> = (initialProps) => {
  const props = mergeProps(
    { size: DEFAULT_RADIUS, strokeWidth: DEFAULT_STROKE_WIDTH },
    initialProps
  );

  const center = () => props.size / 2;

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
    <svg
      style={{
        ["--radius"]: `${computedRadius()}px`,
        ["--dashArray"]: `${computedDashArray()}px`,
        ["--dashOffset"]: `${computedDashOffset()}px`,
        ["--strokeWidth"]: `${props.strokeWidth}px`,
        width: `${props.size}px`,
        height: `${props.size}px`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      class={styles.container}
    >
      <circle {...circleAttributes()} class={styles.track} />
      <circle {...circleAttributes()} class={styles.indication} />
    </svg>
  );
};
