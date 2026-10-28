import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // If it's a PUSH navigation (user clicked a link), scroll smoothly or instantly to top.
    // If it's a POP navigation (browser Back/Forward), allow browser to restore scroll position.
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
};
