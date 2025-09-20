import type { Item } from "../pages/Home";
import BookmarkItem from "./BookmarkItem";

export type BookmarkListProps = {
  allBookmark: Item[];
  setAllBookmark: React.Dispatch<React.SetStateAction<Item[]>>;
};

export const BookmarkList = ({
  allBookmark,
  setAllBookmark,
}: BookmarkListProps) => {
  const handleRemoveBookmark = (id: string) => {
    const filteredBookmarks = allBookmark.filter(
      (bookmark) => bookmark.id !== id
    );
    setAllBookmark(filteredBookmarks);
  };

  return (
    <ul className="display-container">
      {allBookmark.map((bookmark) => {
        return (
          <BookmarkItem
            key={bookmark.id}
            id={bookmark.id}
            url={bookmark.url}
            name={bookmark.name}
            handleRemoveBookmark={handleRemoveBookmark}
          />
        );
      })}
    </ul>
  );
};
