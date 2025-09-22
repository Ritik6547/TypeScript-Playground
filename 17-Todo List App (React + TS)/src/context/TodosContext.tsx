import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { TodosActions, TodosStateType } from "../types";
import { reducer } from "../reducers/todosReducer";

const initialState: TodosStateType = {
  allTasks: [],
};

interface TodosContextType extends TodosStateType {
  dispatch: React.Dispatch<TodosActions>;
}

const TodosContext = createContext<TodosContextType | undefined>(undefined);

type TodosProviderProps = {
  children: ReactNode;
};

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={{ allTasks: state.allTasks, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }

  return context;
};
