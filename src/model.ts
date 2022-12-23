export type BaseTask = {
  title: string;
  /**
   * Time interval in seconds
   */
  repeatIn: number;
  /**
   * ISO string date
   */
  startDate: string;
};

export type TaskWithId = BaseTask & {
  id: number;
};