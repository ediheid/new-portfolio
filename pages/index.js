import Head from "next/head";
// import Image from 'next/image'

import styles from "../pages/landing-page.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles["page-container"]}>
        <h1 className={styles["test"]}>This will be the Home page</h1>
      </div>
    </>
  );
};

export default Home;
