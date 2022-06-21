import Link from "next/link";
import { Fragment } from "react";
import { useAppContext } from "../../Context/Context";
import { motion } from "framer-motion";

import styles from "./navbar.module.scss";

const MobileNavLinks = () => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <Fragment>
      <motion.ul
        className={styles["mobile-nav-links-container"]}
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
      >
        <motion.li
          className={styles["nav-links"]}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={useAppContext().closeHamburgerDropdownOnClick}
        >
          <Link href="/portfolio" alt="Link to projects page">
            Portfolio
          </Link>
        </motion.li>

        <motion.li
          className={styles["nav-links"]}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={useAppContext().closeHamburgerDropdownOnClick}
        >
          <Link href="/webapps" alt="Link to Web Apps page">
            Web-Apps
          </Link>
        </motion.li>

        <motion.li
          className={styles["nav-links"]}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.4 }}
          onClick={useAppContext().closeHamburgerDropdownOnClick}
        >
          <Link href="/contact" alt="Link to contact page">
            Contact
          </Link>
        </motion.li>

        {/* // Todo: Check that id is Hashlinked to top of landing page? */}
        <motion.li
          className={styles["nav-links"]}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.5 }}
          onClick={useAppContext().closeHamburgerDropdownOnClick}
        >
          <Link id="nav-home-link" href="/" alt="Link to home/about page">
            Home/About
          </Link>
        </motion.li>
      </motion.ul>
    </Fragment>
  );
};

export default MobileNavLinks;
