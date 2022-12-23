import { createResource, For, Suspense } from "solid-js";

import { Task } from "~/components/Task";

import { delay } from "~/dev/utils/delay";
import { mockTasks } from "~/mock/data";
import { TaskWithId } from "~/model";

import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const [data] = createResource(async () => {
    return await delay(() => mockTasks);
  });

  return (
    <main class={styles.container}>
      <h1>Task List</h1>
      <Suspense fallback={<div>loading</div>}>
        <section class={styles.taskContainer}>
          <ul>
            {
              <For each={data()}>
                {(item) => (
                  <li>
                    <Task task={item} currentTime={new Date()} />
                  </li>
                )}
              </For>
            }
          </ul>
        </section>
      </Suspense>
    </main>
  );
};
