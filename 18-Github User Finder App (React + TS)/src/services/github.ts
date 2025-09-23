import type { Repo, UserResponse } from "../types";

export const fetchUser = async (
  username: string,
  token: string
): Promise<UserResponse> => {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("User Fetch Failed");
  }

  return res.json() as Promise<UserResponse>;
};

export const fetchRepo = async (reposUrl: string): Promise<Repo[]> => {
  const res = await fetch(reposUrl);
  if (!res.ok) {
    throw new Error("Repos fetch failed");
  }

  return res.json() as Promise<Repo[]>;
};
