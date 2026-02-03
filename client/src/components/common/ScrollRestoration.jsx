import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This resets the scroll to the top of the window
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the URL changes

  return null;
};

export default ScrollRestoration;