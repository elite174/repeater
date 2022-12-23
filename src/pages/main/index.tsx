import { createResource, For, Suspense } from "solid-js";
import { Loader } from "~/components/core/Loader";

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
    <main>
      <h1 class={styles.header}>Task List</h1>
      <Suspense fallback={<Loader />}>
        <section>
          <ul class={styles.taskContainer}>
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
