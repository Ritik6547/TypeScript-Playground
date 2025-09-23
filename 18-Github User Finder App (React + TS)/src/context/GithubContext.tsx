import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Actions, State } from "../types";
import { reducer } from "../reducers/githubReducer";

const initialState: State = {
  query: "",
  userData: null,
  searchTerm: "",
  error: null,
  loading: false,
  repos: [],
};

interface GithubContextType extends State {
  dispatch: React.Dispatch<Actions>;
}

const GithubContext = createContext<GithubContextType | undefined>(undefined);

type GithubProviderProps = {
  children: ReactNode;
};

const GithubProvider = ({ children }: GithubProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    query: state.query,
    userData: state.userData,
    searchTerm: state.searchTerm,
    error: state.error,
    loading: state.loading,
    repos: state.repos,
    dispatch,
  };

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};

export const useGithub = () => {
  const context = useContext(GithubContext);
  if (!context) {
    throw new Error("useGithub must be used within a GithubProvider");
  }

  return context;
};

export default GithubProvider;
