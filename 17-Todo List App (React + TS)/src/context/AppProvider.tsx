import type { ReactNode } from "react";
import { TodosProvider } from "./TodosContext";
import { FilterProvider } from "./FilterContext";

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <TodosProvider>
      <FilterProvider>{children}</FilterProvider>
    </TodosProvider>
  );
};

export default AppProvider;
