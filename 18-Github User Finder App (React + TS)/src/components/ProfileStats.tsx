import type { User } from "../types";
import { StatsCard } from "./StatsCard";

type ProfileStatsProps = Pick<User, "followers" | "following" | "public_repos">;

const ProfileStats = ({
  followers,
  following,
  public_repos,
}: ProfileStatsProps) => {
  return (
    <div className="my-6 flex flex-col items-start gap-4 md:flex-row md:justify-between">
      <StatsCard
        count={followers}
        label="followers"
        icon={<i className="fa-solid fa-users text-[#A08FF8]"></i>}
      />
      <StatsCard
        count={following}
        label="following"
        icon={<i className="fa-solid fa-user-group text-[#A08FF8]"></i>}
      />
      <StatsCard
        count={public_repos}
        label="repositories"
        icon={<i className="fa-solid fa-code-branch text-[#A08FF8]"></i>}
      />
    </div>
  );
};

export default ProfileStats;
