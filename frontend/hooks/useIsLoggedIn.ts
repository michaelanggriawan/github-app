import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('access_token');
    setIsLoggedIn(!!token);
  }, []);

  return { isLoggedIn, setIsLoggedIn };
};

export default useIsLoggedIn;
