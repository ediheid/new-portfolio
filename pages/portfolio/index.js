import Link from "next/link";

import styles from "../portfolio/portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={styles["page-container"]}>
      <h1>This will be the Portfolio page</h1>

      <ul>
        <li>
          <Link href="/portfolio/myLola">My Lola</Link>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
