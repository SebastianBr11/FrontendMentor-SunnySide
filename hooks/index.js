import { useState } from "react";

export const useNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavOpen = () => {
    setNavOpen((open) => !open);
  };

  return { navOpen, toggleNavOpen };
};
