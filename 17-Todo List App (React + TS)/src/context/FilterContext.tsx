import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { FilterActions, FilterStateType } from "../types";
import { reducer } from "../reducers/filterReducer";

const initialState: FilterStateType = {
  filter: "all",
};

interface FilterContextType extends FilterStateType {
  dispatch: React.Dispatch<FilterActions>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ filter: state.filter, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
};
