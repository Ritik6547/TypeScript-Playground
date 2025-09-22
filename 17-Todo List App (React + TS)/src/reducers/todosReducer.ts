import type { TodosActions, TodosStateType } from "../types";

export function reducer(
  state: TodosStateType,
  action: TodosActions
): TodosStateType {
  switch (action.type) {
    case "addTodo":
      return { ...state, allTasks: [...state.allTasks, action.payload] };
    case "removeTodo":
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => task.id !== action.payload),
      };
    case "toggleTodo":
      return {
        ...state,
        allTasks: state.allTasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "editTodo":
      return {
        ...state,
        allTasks: state.allTasks.map((task) =>
          task.id === action.payload.editingId
            ? { ...task, title: action.payload.taskInput }
            : task
        ),
      };

    case "clearCompletedTodo":
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => !task.completed),
      };

    default:
      return state;
  }
}
