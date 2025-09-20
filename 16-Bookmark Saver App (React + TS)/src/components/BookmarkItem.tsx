import type { Item } from "../pages/Home";
import Button from "./Button";

type BookmarkItemProps = Item & { handleRemoveBookmark: (id: string) => void };

const BookmarkItem = ({
  id,
  url,
  name,
  handleRemoveBookmark,
}: BookmarkItemProps) => {
  return (
    <li className="bookmark-item">
      <a
        href={url}
        className="url-link"
        target="_blank"
        rel="noopener noreferrer">
        {name}
      </a>
      <Button
        onClick={() => handleRemoveBookmark(id)}
        btnClass="remove-btn"
        btnName="Remove"
      />
    </li>
  );
};

export default BookmarkItem;
