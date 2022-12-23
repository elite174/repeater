import { TimeUnit } from "~/constants";
import { TaskWithId } from "~/model";
import { toSeconds } from "~/utils/to-seconds";

export const mockTasks: TaskWithId[] = [
  {
    id: 1,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Day),
  },
  {
    id: 2,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Minute),
  },
  {
    id: 3,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Hour),
  },
];
