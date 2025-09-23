import type { Actions, State } from "../types";

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "set_query":
      return { ...state, query: action.query };
    case "set_search_term":
      return { ...state, searchTerm: action.searchTerm };
    case "set_user_data":
      return { ...state, userData: action.data };
    case "set_error":
      return { ...state, error: action.message };
    case "set_loading":
      return { ...state, loading: action.loading };
    case "set_repos":
      return { ...state, repos: action.repos };
    case "set_all":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
