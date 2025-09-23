import { useEffect } from "react";
import SearchUser from "./components/SearchUser";
import UserDetails from "./components/UserDetails";
import { useGithub } from "./context/GithubContext";
import { fetchRepo, fetchUser } from "./services/github";

const token = import.meta.env.VITE_GITHUB_TOKEN;

const App = () => {
  const { searchTerm, userData, loading, error, dispatch } = useGithub();

  useEffect(() => {
    if (!searchTerm.trim()) return;

    if (!token) {
      dispatch({
        type: "set_all",
        payload: { error: "GitHub token missing", query: "" },
      });
      return;
    }

    dispatch({
      type: "set_all",
      payload: { loading: true, error: null, repos: [] },
    });

    (async () => {
      try {
        const user = await fetchUser(searchTerm, token);
        if ("message" in user) {
          dispatch({
            type: "set_all",
            payload: {
              error: "No User Found",
              query: "",
              loading: false,
            },
          });
          return;
        }

        dispatch({
          type: "set_all",
          payload: {
            userData: user,
            query: "",
            error: null,
            loading: false,
          },
        });
      } catch (err) {
        dispatch({
          type: "set_all",
          payload: {
            error: "Network Error",
            query: "",
            loading: false,
          },
        });
      }
    })();
  }, [searchTerm]);

  useEffect(() => {
    if (!userData) return;
    (async () => {
      try {
        const data = await fetchRepo(userData.repos_url);
        if (!Array.isArray(data)) {
          dispatch({
            type: "set_all",
            payload: { error: "Repos not available", repos: [] },
          });
          return;
        }

        dispatch({
          type: "set_all",
          payload: { repos: data, error: null },
        });
      } catch (err) {
        dispatch({ type: "set_error", message: "Repos Not Found" });
      }
    })();
  }, [userData]);

  return (
    <div className="min-h-screen bg-[#1A1A1A] px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-[820px]">
        <h1 className="text-center text-3xl font-bold text-[#A08FF8] md:text-4xl">
          <i className="fa-brands fa-github"></i> Github User Finder
        </h1>
        <p className="mt-3 text-center text-sm">
          Search for any Github user to see their profile and repositories
        </p>

        <SearchUser />

        {loading ? (
          <div className="rounded-md bg-[#252525] p-6 text-center">
            <p className="text-2xl text-gray-400">Fetching user data…</p>
          </div>
        ) : error ? (
          <div className="rounded-md bg-[#252525] p-6 text-center">
            <p className="text-2xl text-gray-400">{error}</p>
          </div>
        ) : userData ? (
          <UserDetails />
        ) : (
          <div className="rounded-md bg-[#252525] p-6 text-center">
            <i className="fa-brands fa-github text-4xl text-gray-500"></i>
            <p className="mt-4 text-2xl text-gray-400">No user searched yet</p>
            <p className="mt-2 text-sm text-gray-500">
              Type a GitHub username above to see their profile and repositories
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
