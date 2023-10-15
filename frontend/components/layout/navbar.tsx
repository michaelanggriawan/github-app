import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../icons/logo";
import Hamburger from "../icons/hamburger";
import Close from "../icons/close";
import useIsLoggedIn from "hooks/useIsLoggedIn";
import { Profile, RootProfile } from "@/types/profile";
import { useRouter } from 'next/router';
import useBreakpoints from "hooks/useBreakpoints";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profile, setUserProfile] = useState<Profile | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { isSmallScreen } = useBreakpoints();

  useEffect(() => {
    (async () => {
      const tokenQuery = router.query.accessToken;
      if (tokenQuery) {
        localStorage.setItem('access_token', tokenQuery.toString());
        // Redirect without the accessToken query parameter
        router.replace(router.asPath.split('?')[0]);
      }
      const token = localStorage.getItem('access_token');
      try {
        const response = await fetch(`${process.env.API_URL}github/profile`, {
          headers: {
            Authorization: `Bearer ${token || tokenQuery}`,
          },
        });
        const result: RootProfile = await response.json();
        setUserProfile(result.data);
      } catch (err) {
        // when token expired
        localStorage.removeItem("access_token");
        router.push('/');
        setIsLoggedIn(false);
      }
    })();
  }, []);

  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push('/');
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-black dark:text-gray-300">
            <Logo />
          </Link>
          {isSidebarOpen && (
            <button
              onClick={closeSidebar}
              className="text-gray-600 ml-2 text-3xl focus:outline-none"
            >
              <Hamburger />
            </button>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className="block md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <Hamburger />
        </button>
        <div
          className={`fixed top-0 right-0 bottom-0 left-0 bg-white dark:bg-gray-800 text-white transform transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="p-4">
            <div className="flex items-center">
              <Logo />
              <button
                onClick={closeSidebar}
                className="text-gray-600 ml-auto text-3xl focus:outline-none"
              >
                <Close />
              </button>
            </div>
            {!isLoggedIn ? (
              <button
                className="block mt-4 bg-pink-600 text-white py-2 px-4 rounded-lg"
                onClick={() =>
                  window.open(`${process.env.API_URL}auth`, "_self")
                }
              >
                Log in with Github
              </button>
            ) : (
              <p
                className="font-semibold block mt-4 text-black py-2 px-4"
                onClick={handleLogout}
              >
                Log Out
              </p>
            )}
          </div>
        </div>
        {!isLoggedIn ? (
          <button
            onClick={() => window.open(`${process.env.API_URL}auth`, "_self")}
            className="hidden md:block bg-pink-600 text-white py-2 px-4 rounded-lg ml-4"
          >
            Log in with Github
          </button>
        ) : (
          <div className={`${isSmallScreen ? 'hidden' : ''} relative flex items-center cursor-pointer bg-gray-300 px-6 py-2 rounded-full`}      
          onMouseEnter={toggleMenu}
          onMouseLeave={closeMenu}>
            {profile && (
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                  <img
                    src={profile.avatar_url}
                    alt="User Profile"
                    className="w-10 h-10 object-cover"
                  />
                </div>
              </div>
            )}
            <button
              className="mr-2 text-2xl focus:outline-none"
            >
              <Hamburger />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-8 py-2 bg-white text-black rounded-lg shadow-md">
                <button
                  onClick={handleLogout}
                  className="block w-full py-2 px-4 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
