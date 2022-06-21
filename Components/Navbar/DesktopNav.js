import LogoLink from "./LogoLink";
import DesktopNavLinks from "./DesktopNavLinks";

import styles from "../Navbar/navbar.module.scss";

const DesktopNav = (props) => {
  return (
    <div
      className={
        props.bgChange
          ? `${styles["bgChange"]} ${styles["desktop-navigation"]}`
          : `${styles["desktop-navigation"]}`
      }
    >
      <LogoLink />

      <DesktopNavLinks />
    </div>
  );
};

export default DesktopNav;
