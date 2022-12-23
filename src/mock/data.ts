import { TimeUnit } from "~/constants";
import { TaskWithId } from "~/model";
import { toSeconds } from "~/utils/to-seconds";

export const mockTasks: TaskWithId[] = [
  {
    id: 1,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Day),
    startDate: "123",
  },
  {
    id: 2,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Minute),
    startDate: "123",
  },
  {
    id: 3,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Hour),
    startDate: "123",
  },
  {
    id: 1,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Day),
    startDate: "123",
  },
  {
    id: 2,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Minute),
    startDate: "123",
  },
  {
    id: 3,
    title: "something to repea aslkd asld asldk asldk asldk asdlka sdlask dt",
    repeatIn: toSeconds(1, TimeUnit.Hour),
    startDate: "123",
  },
  {
    id: 1,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Day),
    startDate: "123",
  },
  {
    id: 2,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Minute),
    startDate: "123",
  },
  {
    id: 3,
    title: "something to repeat",
    repeatIn: toSeconds(1, TimeUnit.Hour),
    startDate: "123",
  },
];
