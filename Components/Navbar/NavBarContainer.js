
// Navbar container for mobile and desktop to be passed into Layout
// This is where the conditional visibility on scroll up and down lives

import MobileNav from "./MobileNav";

const NavbarContainer = () => {
  return (
    <nav>
      <div> This will be the Navbar container for mobile and desktop to be passed into Layout</div>
   
   <MobileNav/>
    </nav>
  );
};

export default NavbarContainer;
