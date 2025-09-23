import { useGithub } from "../context/GithubContext";
import Button from "./Button";

const SearchUser = () => {
  const { query, dispatch } = useGithub();

  const handleSearch = () => {
    if (!query.trim()) return;
    dispatch({ type: "set_search_term", searchTerm: query });
  };

  return (
    <>
      <div className="my-8 flex flex-col gap-4 sm:flex-row md:justify-between">
        <input
          className="flex-1 rounded-md bg-[#252525] px-4 py-2 text-lg shadow-md outline-0 focus:outline-1"
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) =>
            dispatch({ type: "set_query", query: e.target.value })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button onClick={handleSearch} label="Search" />
      </div>
    </>
  );
};

export default SearchUser;
