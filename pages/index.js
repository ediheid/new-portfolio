// import Image from 'next/image'
import Title from "../Components/LandingPageComponenets/title";
import styles from "../pages/landing-page.module.scss";

const Home = () => {
  return (
    <>
      <main className={styles["page-container"]}>
        <Title />
      </main>
    </>
  );
};

export default Home;
