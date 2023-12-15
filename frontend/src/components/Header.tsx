import { useNavigate } from "react-router-dom";
import "../scss/header.scss";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
  const navigate = useNavigate();
  const handleClickSearch = () => {
    navigate("/searchrecipe");
  };
  return (
    <header className="header">
      <p className="logo">Logo</p>
      <div className="header-wrapper">
        <div className="icon-wrapper-search" onClick={handleClickSearch}>
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className="icon-wrapper-heart">
          <span className="material-symbols-outlined">favorite</span>
        </div>
        <HamburgerMenu></HamburgerMenu>
      </div>
    </header>
  );
};
