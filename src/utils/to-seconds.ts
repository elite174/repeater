import { TimeUnit } from "~/constants";

export const toSeconds = (value: number, unit: TimeUnit): number => {
  switch (unit) {
    case TimeUnit.Day:
      return value * 24 * 60 * 60;

    case TimeUnit.Hour:
      return value * 60 * 60;

    case TimeUnit.Minute:
      return value * 60;
  }
};
