import { RepositoryCard } from "./RepositoryCard";
import { formatDate } from "../utils/formatDate";
import { useGithub } from "../context/GithubContext";

const RepositoryList = () => {
  const { repos } = useGithub();

  return (
    <div className="">
      <h2 className="mt-2 border-b-2 border-[#323232] pb-4 text-xl font-bold">
        Latest Repositories
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {repos.slice(0, 6).map((repo) => {
          return (
            <RepositoryCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              stargazers_count={repo.stargazers_count}
              language={repo.language}
              forks_count={repo.forks_count}
              created_at={formatDate(repo.created_at)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RepositoryList;
