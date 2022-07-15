import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

// App Wrapper - (wrapped around App Component)
export const AppWrapper = ({ children }) => {
  // Hamburger dropdown state
  let [isNavOpen, setIsNavOpen] = useState(false);
  //  Function to close mobile nav when clicking on link
  const closeHamburgerDropdownOnClick = () => {
    setIsNavOpen(false);
  };

  //  Global Window events
  useEffect(() => {
    // Closes mobile nav dropdown if it is open and the user scrolls down the page past 100px
    window.onscroll = function () {
      if (window.scrollY > 100) {
        setIsNavOpen(false);
      }
    };

    // Scroll to top on browser refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    // (Page needs to be rendered before accessing window)
  }, []);

  return (
    <AppContext.Provider
      value={{ isNavOpen, setIsNavOpen, closeHamburgerDropdownOnClick }}
    >
      {children}
    </AppContext.Provider>
  );
};

// UseContext Function
// To be imported into any Component and called where needed for state to be passed in
// eg. useAppContext().isOpen
export const useAppContext = () => {
  return useContext(AppContext);
};
