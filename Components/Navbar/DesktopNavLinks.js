import Link from "next/link";

import styles from "../Navbar/navbar.module.scss";

const DesktopNavLinks = () => {
  return (
    <ul className={styles["desktop-ul-container"]}>
      {/* Projects link */}
      <li className={styles["nav-links"]}>
        <Link href="/portfolio" alt="Links to projects page">
          Portfolio
        </Link>
      </li>

      {/* Web-Apps Link */}
      <li className={styles["nav-links"]}>
        <Link href="/webapps" alt="Links to web apps page">
          Web-Apps
        </Link>
      </li>

      {/* Contact Link */}
      <li className={styles["nav-links"]}>
        <Link href="/contact" alt="Link to contact page">
          Contact
        </Link>
      </li>

      {/* HomeLink - ! Only visible on hamburger open - otherwise home link is the eh. logo */}
      <li className={styles["nav-links"]}>
        <Link id="nav-home-link" href="/" alt="Link to home/about page">
          Home
        </Link>
      </li>
    </ul>
  );
};

export default DesktopNavLinks;
