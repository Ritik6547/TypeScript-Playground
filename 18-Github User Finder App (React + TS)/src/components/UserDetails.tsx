import ProfileStats from "./ProfileStats";
import RepositoryList from "./RepositoryList";
import { formatDate } from "../utils/formatDate";
import { useGithub } from "../context/GithubContext";

const UserDetails = () => {
  const { userData } = useGithub();
  if (!userData) return null;

  const createdDate = formatDate(userData.created_at);
  let domain = "";
  const blogDomain = userData.blog && userData.blog.trim();

  if (blogDomain) {
    try {
      const url = blogDomain.startsWith("http")
        ? blogDomain
        : `https://${blogDomain}`;
      domain = new URL(url).hostname;
    } catch {
      domain = "";
    }
  }

  return (
    <div className="rounded-md bg-[#252525] p-6">
      <div className="flex gap-10">
        <div className="max-w-[100px]">
          <img
            className="w-full rounded-full border-6 border-[#A08FF8]"
            src={userData.avatar_url}
            alt="github dp"
          />
        </div>
        <div>
          <p className="text-2xl font-semibold">{userData.name}</p>
          <p className="my-2 text-sm text-[#A08FF8]">@{userData.login}</p>
          <p className="font-medium">
            {userData.bio ? userData.bio : "No Bio Available"}
          </p>
          <div className="mt-2 mb-5 flex gap-6 text-sm text-gray-400">
            <p>
              <i className="fa-solid fa-location-dot text-[#A08FF8]"></i>{" "}
              {userData.location}
            </p>
            <p>
              <i className="fa-solid fa-calendar-days text-[#A08FF8]"></i>{" "}
              Joined {createdDate}
            </p>
          </div>
          <a
            href={userData.html_url}
            className="cursor-pointer rounded-full bg-[#A08FF8] px-6 py-2 font-semibold text-black"
            target="_blank"
            rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      </div>

      <ProfileStats
        followers={userData.followers}
        following={userData.following}
        public_repos={userData.public_repos}
      />

      <div className="flex flex-col gap-4 border-t-2 border-[#323232] py-6 text-lg text-gray-400 md:flex-row md:justify-between md:gap-0 md:text-base">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-building text-[#A08FF8]"></i>
          <p>{userData.company ? userData.company : "Not specified"}</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-link text-[#A08FF8]"></i>
          <a
            href={blogDomain ? blogDomain : "#"}
            className="transition delay-150 ease-in-out hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer">
            {domain ? domain : "Not Specified"}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-brands fa-twitter text-[#A08FF8]"></i>
          <a
            href={
              userData.twitter_username
                ? `https://x.com/${userData.twitter_username}`
                : "#"
            }
            className="transition delay-150 ease-in-out hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer">
            {userData.twitter_username
              ? `@${userData.twitter_username}`
              : "Not Specified"}
          </a>
        </div>
      </div>

      <RepositoryList />
    </div>
  );
};

export default UserDetails;
