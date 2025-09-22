export type Filter = "all" | "pending" | "completed";

export interface FilterStateType {
  filter: Filter;
}

export type FilterActions = { type: "updateFilter"; payload: Filter };
