import { useState } from "react";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
