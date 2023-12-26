import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const navigateToAllRecipes = () => {
  //   navigate("/allrecipes");
  // };
  // const navigateToCreateRecipe = () => {
  //   navigate("/createnewrecipe");
  // };

  // const navigateToHome = () => {
  //   navigate("/");
  // };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`links ${isOpen ? "open" : ""}`}>
        <li className="li-item">
          <a href={"/"}>Hem</a>
        </li>
        <li className="li-item">
          <a href={"/allrecipes"}>Alla recept</a>
        </li>
        <li className="li-item">
          <a href="/createnewrecipe">Lägg till nytt recept</a>
        </li>
      </ul>
    </div>
  );
};
