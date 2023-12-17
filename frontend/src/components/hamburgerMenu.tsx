import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToAllRecipes = () => {
    navigate("/allrecipes");
  };
  const navigateToCreateRecipe = () => {
    navigate("/createnewrecipe");
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`links ${isOpen ? "open" : ""}`}>
        {/* {links.map((link, index) => ( */}
        <li className="li-item" onClick={navigateToAllRecipes}>
          Alla recept
        </li>
        <li className="li-item" onClick={navigateToCreateRecipe}>
          Lägg till nytt recept
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};
