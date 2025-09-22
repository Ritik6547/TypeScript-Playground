export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodosStateType {
  allTasks: TodoItem[];
}

export type TodosActions =
  | { type: "addTodo"; payload: TodoItem }
  | { type: "removeTodo"; payload: string }
  | { type: "toggleTodo"; payload: string }
  | {
      type: "editTodo";
      payload: {
        editingId: string;
        taskInput: string;
      };
    }
  | { type: "clearCompletedTodo" };
