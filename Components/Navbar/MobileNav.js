import { Divide as Hamburger } from "hamburger-react";
import { useAppContext } from "../../Context/Context";
import MobileNavLinks from "./MobileNavLinks";
import LogoLink from "./LogoLink";

import styles from "./navbar.module.scss";

const MobileNav = (props) => {
  return (
    <div
      className={
        props.bgChange
          ? `${styles["bgChange"]} ${styles["mobile-navigation"]}`
          : `${styles["mobile-navigation"]}`
      }
    >
      <LogoLink />

      {/* Hamburger */}
      <div className={styles["hamburger-container"]}>
        <Hamburger
          label="Show menu"
          size={25}
          toggled={useAppContext().isNavOpen}
          toggle={useAppContext().setIsNavOpen}
        />
      </div>

      {/* Open Hamburger Dropdown */}
      {useAppContext().isNavOpen && <MobileNavLinks />}
    </div>
  );
};

export default MobileNav;
