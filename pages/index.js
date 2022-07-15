// import Image from 'next/image'

import LandingPage from "../Components/LandingPage/LandingPage";

import styles from "../pages/landing-page.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles["page-container"]}>
        <LandingPage />
      </div>
    </>
  );
};

export default Home;
