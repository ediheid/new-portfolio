import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// App Wrapper - (wrapped around App Component)
export const AppWrapper = ({ children }) => {
  // Hamburger dropdwon state
  let [isNavOpen, setIsNavOpen] = useState(false);
// Functio to close mobile nav when clicking on link
  const closeHamburgerDropdownOnClick = () => {
    setIsNavOpen(false)
  }

  return (
    <AppContext.Provider value={{ isNavOpen, setIsNavOpen, closeHamburgerDropdownOnClick }}>
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

