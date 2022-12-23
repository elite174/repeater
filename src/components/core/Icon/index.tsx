import { VoidComponent } from "solid-js";

import iconsSvg from "./icons.svg";

interface Props {
  name: "github";
  class?: string;
}

export const Icon: VoidComponent<Props> = (props) => (
  <svg class={props.class} width="1rem" height="1rem">
    <use href={`${iconsSvg}#${props.name}`}></use>
  </svg>
);
