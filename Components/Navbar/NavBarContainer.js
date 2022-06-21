import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";

import styles from "./navbar.module.scss";
import DesktopNav from "./DesktopNav";

// Navbar container for mobile and desktop to be passed into Layout
// This is where the conditional visibility on scroll up and down lives

const NavbarContainer = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [bgChange, setBgChange] = useState(false);

  //  Handle scroll  - navbar container is visible on scroll up and not on scroll down
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);

    setPrevScrollPos(currentScrollPos);
  };

  // Scroll event listener for handleScroll function
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  // When Navbar is visible and not at the top of the page it will be opaque
  const changeNavBarColor = () => {
    if (window.scrollY > 80) {
      setBgChange(true);
    } else {
      setBgChange(false);
    }
  };

  // Scroll event listener for changeNavBarColor
  useEffect(() => {
    window.addEventListener("scroll", changeNavBarColor);

    return () => window.removeEventListener("Scroll", changeNavBarColor);
  });

  return (
    <nav
      style={{ top: visible ? "0" : "-100px" }}
      className={`${styles["nav-bar"]} ${styles["nav-coloured-bg"]}`}
    >
      <MobileNav bgChange={bgChange} />
      <DesktopNav bgChange={bgChange} />
    </nav>
  );
};

export default NavbarContainer;
