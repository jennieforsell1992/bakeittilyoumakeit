import { useState } from "react";
import "../scss/header.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { text: "Alla recept", url: "/allrecipes" },
    { text: "Lägg till nytt recept", url: "/createnewrecipe" },
  ];

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Länkar som visas/döljs beroende på isOpen */}
      <ul className={`links ${isOpen ? "open" : ""}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
