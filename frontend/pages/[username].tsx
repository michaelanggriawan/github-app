import { useEffect } from 'react';
import CardRepo from '@/components/general/CardRepo';
import Email from '@/components/icons/email';
import People from '@/components/icons/people';
import { Profile, RootProfile } from '@/types/profile';
import { Repos, RootRepos } from '@/types/repos';
import useBreakpoints from 'hooks/useBreakpoints';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import useIsLoggedIn from 'hooks/useIsLoggedIn';


export default function GithubProfile({ profile, repos }: { profile: Profile, repos: Repos[] }) {
  const { isSmallScreen } = useBreakpoints();
  const { isLoggedIn } = useIsLoggedIn();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        if (isLoggedIn) {
          const token = Cookies.get("access_token");

          const response = await fetch(`${process.env.API_URL}github/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const result: RootProfile = await response.json();
          await fetch(`${process.env.API_URL}github/visitor`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              login: profile.login,
              username: result.data.login,
              avatar_url: result.data.avatar_url,
              profile_url: result.data.profile_url
            })
          })
        }
      } catch (err) {}
    })();
  }, [isLoggedIn, profile?.login]);

  return (
    <div className={`container mx-auto p-4 ${isSmallScreen ? 'flex justify-center' : ''}`}>
      <div className="flex flex-wrap">
        <div className="w-72 mr-6">
          <Image
            src={profile.avatar_url}
            width={160}
            height={160}
            alt="Gambar Profil"
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h2 className="text-xl font-semibold text-center mt-4">{profile.login}</h2>
          <p className="text-gray-600 text-center font-semibold">@{profile.login}</p>
          <div className="mt-4">
              <div>
                <p className="text-sm font-semibold">About</p>
                <p className="text-gray-600">{profile.bio}</p>
              </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="mr-2">
                <Email />
            </div>
            <p className="text-gray-600">{profile.email}</p>  
          </div>
          <div className="mt-4 flex items-center">
            <div className="mr-2">
              <People />
            </div>
            <p className="text-sm font-semibold mr-2">{profile.totalVisitor}</p>
            <p className="text-gray-600">profile visitor</p>
          </div>
          <div className="mt-8">
              <div>
                <p className="text-sm font-semibold">Latest Visitor</p>
              </div>
              <div className="mt-4 flex flex-wrap">
              {profile.visitors.map((visitor) => (
                <div key={visitor._id} className="w-1/3 p-2 cursor-pointer" onClick={() => window.open(`${visitor.profile_url}`)}>
                  <div className="flex items-center">
                    <Image
                      onClick={() => router.push(`/${visitor.username}`)}
                      src={visitor.avatar_url}
                      width={80}
                      height={80}
                      alt="Visitor Avatar"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <div className='flex items-center'>
                <h2 className="text-2xl font-semibold mr-2">Repository</h2>
                <span className="inline-flex items-center px-2 py-1 text-xs font-bold leading-4 rounded-full bg-blue-50">
                {repos.length}
                </span>
            </div>
            <div className="mt-4">
              {repos.map((repo, index) => (
                <div className="mt-4 sm:w-full md:mt-0" key={index}>
                    <CardRepo url={repo.html_url} name={repo.name} isPrivate={repo.private} description={repo.description} languange={repo.language} updated_at={repo.updated_at}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  await fetch(`${process.env.API_URL}github/visitor/${context.params.username}`, { method: 'POST' });

  const responseProfile = await fetch(`${process.env.API_URL}github/${context.params.username}`);
  const resultProfile = await responseProfile.json() as RootProfile;

  const responseRepos = await fetch(`${process.env.API_URL}github/${context.params.username}/repos`);
  const resultRepos = await responseRepos.json() as RootRepos;

  return { props: { profile: resultProfile.data, repos: resultRepos.data } }
}
