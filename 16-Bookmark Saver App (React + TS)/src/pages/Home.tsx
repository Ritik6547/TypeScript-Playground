import { useState } from "react";
import { BookmarkList } from "../components/BookmarkList";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import { createBookmark } from "../utils/createBookmark";

interface BookmarkInputType {
  name: string;
  url: string;
}
const initBookmarkInputState: BookmarkInputType = {
  name: "",
  url: "",
};

export interface Item extends BookmarkInputType {
  id: string;
}

const Home = () => {
  const [allBookmark, setAllBookmark] = useState<Item[]>([]);
  const [bookmarkInput, setBookmarkInput] = useState<BookmarkInputType>(
    initBookmarkInputState
  );
  const [error, setError] = useState<string | null>(null);

  const handleAddBookmark = () => {
    const res = createBookmark(
      bookmarkInput.name,
      bookmarkInput.url,
      allBookmark
    );

    if (res.kind === "error") {
      setError(res.error);
      return;
    }

    setError(null);
    setAllBookmark((prev) => [...prev, res.bookmark]);
    setBookmarkInput({
      name: "",
      url: "",
    });
  };

  return (
    <>
      <h1>Bookmark Saver</h1>

      <div className="input-container">
        <InputBox
          value={bookmarkInput.name}
          placeholder="Bookmark Name"
          onChange={(e) =>
            setBookmarkInput((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <InputBox
          value={bookmarkInput.url}
          placeholder="Bookmark URL"
          onChange={(e) =>
            setBookmarkInput((prev) => ({ ...prev, url: e.target.value }))
          }
        />
      </div>

      {error && <p className="error">{error}</p>}

      <Button
        onClick={handleAddBookmark}
        btnClass="add-btn"
        btnName="Add Bookmark"
      />

      <BookmarkList allBookmark={allBookmark} setAllBookmark={setAllBookmark} />
    </>
  );
};

export default Home;
