import Head from "next/head";
// import Image from 'next/image'

import styles from "../pages/landing-page.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>Edith Heidmann | Web developer</title>
        <meta
          name="description"
          content="Creative fullstack web developer based in Berlin, specialising in frontend development and UI/UX design."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles["page-container"]}>
        <h1 className={styles["test"]}>This will be the Home page</h1>
      </div>
    </>
  );
};

export default Home;
