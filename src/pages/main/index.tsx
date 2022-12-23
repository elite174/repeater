import { createResource, For, Suspense } from "solid-js";
import { Loader } from "~/components/core/Loader";

import { Task } from "~/components/Task";

import { delay } from "~/dev/utils/delay";
import { PageLayout } from "~/layouts/PageLayout";
import { mockTasks } from "~/mock/data";
import { TaskWithId } from "~/model";

import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const [data] = createResource(async () => {
    return await delay(() => mockTasks);
  });

  return (
    <PageLayout class={styles.container}>
      <h1 class={styles.header}>Task List</h1>
      <Suspense fallback={<Loader center />}>
        <section class={styles.section}>
          <ul class={styles.taskContainer}>
            {
              <For each={data()}>
                {(item) => (
                  <li class={styles.listItem}>
                    <Task task={item} currentTime={new Date()} />
                  </li>
                )}
              </For>
            }
          </ul>
        </section>
      </Suspense>
    </PageLayout>
  );
};
