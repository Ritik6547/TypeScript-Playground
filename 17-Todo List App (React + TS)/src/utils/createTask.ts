import type { TodoItem } from "../types";

export const createTask = (title: string): TodoItem => ({
  id: crypto.randomUUID(),
  title: title.trim(),
  completed: false,
});
