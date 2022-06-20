import NavbarContainer from "../Navbar/NavBarContainer";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarContainer />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
