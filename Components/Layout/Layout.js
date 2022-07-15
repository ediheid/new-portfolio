import Head from "next/head";
import NavbarContainer from "../Navbar/NavBarContainer";
import Footer from "../Footer";
import ProgressBar from "react-scroll-progress-bar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Edith Heidmann | Web developer</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Creative fullstack web developer based in Berlin, specialising in frontend development and UI/UX design."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavbarContainer />
      <ProgressBar height=".5rem" bgcolor="#d342c3" />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
