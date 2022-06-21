import Link from "next/link";

import styles from "../Navbar/logo-link.module.scss";

const LogoLink = () => {
  return (
    <div className={styles["logo-home-container"]}>
      <Link href="/" alt="Link to home/about page">
        <h2 className={styles["logo-text"]}>EH:</h2>
      </Link>
    </div>
  );
};

export default LogoLink;
