import type { TodoItem } from "../types";

export const countIncompletedTasks = (arr: TodoItem[]) => {
  return arr.reduce((count, task) => count + (!task.completed ? 1 : 0), 0);
};
