import type { Item } from "../pages/Home";

type createBookmarkType =
  | { kind: "error"; error: string }
  | { kind: "success"; bookmark: Item };

export const createBookmark = (
  name: string,
  url: string,
  existingBookmarks: Item[]
): createBookmarkType => {
  if (!name.trim() || !url.trim())
    return { kind: "error", error: "Input field cannot be empty" };

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return { kind: "error", error: "Invalid URL format" };
  }

  const isDuplicate = existingBookmarks.some((b) => b.url === url);
  if (isDuplicate) return { kind: "error", error: "Duplicate bookmark" };

  return {
    kind: "success",
    bookmark: {
      id: crypto.randomUUID(),
      name: name.trim(),
      url: url.trim(),
    },
  };
};
