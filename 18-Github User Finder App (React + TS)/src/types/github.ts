export interface User {
  name: string;
  login: string;
  bio: string;
  location: string;
  avatar_url: string;
  blog: string;
  created_at: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  company: string | null;
  twitter_username: string;
  repos_url: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
  created_at: string;
}

export interface State {
  query: string;
  userData: User | null;
  searchTerm: string;
  error: string | null;
  loading: boolean;
  repos: Repo[];
}

export type Actions =
  | { type: "set_query"; query: string }
  | { type: "set_user_data"; data: User | null }
  | { type: "set_search_term"; searchTerm: string }
  | { type: "set_error"; message: string | null }
  | { type: "set_loading"; loading: boolean }
  | { type: "set_repos"; repos: Repo[] }
  | { type: "set_all"; payload: Partial<State> };

interface UserResponseError {
  message: string;
  documentation_url?: string;
}

export type UserResponse = User | UserResponseError;
