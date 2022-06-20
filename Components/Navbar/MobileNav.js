import { Divide as Hamburger } from "hamburger-react";
import { useAppContext } from "../../Context/Context";





const MobileNav = () => {

  return (
    <div>
      <div>Logo</div>

      {/* Hamburger */}
      <div className="hamburger-container">
        <Hamburger
          // Aria label for accessibility
          label="Show menu"
          size={25}
          toggled={useAppContext().isNavOpen}
          toggle={useAppContext().setIsNavOpen}
        />
      </div>

      {/* // ! Test context */}
      {useAppContext().isNavOpen && <div>SUUCEEEEESSSSS!!!!!!</div>}
    </div>
  );
};

export default MobileNav;
