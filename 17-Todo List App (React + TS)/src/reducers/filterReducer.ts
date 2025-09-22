import type { FilterActions, FilterStateType } from "../types";

export function reducer(
  state: FilterStateType,
  action: FilterActions
): FilterStateType {
  switch (action.type) {
    case "updateFilter":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
