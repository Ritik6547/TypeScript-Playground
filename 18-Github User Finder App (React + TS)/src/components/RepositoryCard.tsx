import type { Repo } from "../types";

type RepositoryCardProps = Omit<Repo, "id">;

export const RepositoryCard = ({
  name,
  description,
  created_at,
  forks_count,
  language,
  stargazers_count,
}: RepositoryCardProps) => {
  return (
    <div className="flex flex-col justify-between gap-8 rounded-md bg-[#323232] p-4 text-gray-400 shadow-md">
      <div>
        <h3 className="font-semibold text-[#A08FF8]">
          <i className="fa-solid fa-code-branch"></i> {name}
        </h3>
        <p className="mt-2 text-sm">
          {description ? description : "No description available"}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-3">
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-circle text-[#A08FF8]"></i>
          <p>{language ? language : "Unknown"}</p>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-star text-[#A08FF8]"></i>
          <p>{stargazers_count}</p>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-code-fork text-[#A08FF8]"></i>
          <p>{forks_count}</p>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-clock-rotate-left text-[#A08FF8]"></i>
          <p>{created_at}</p>
        </div>
      </div>
    </div>
  );
};
