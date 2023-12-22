import { useNavigate } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import "../scss/header.scss";

export const Header = () => {
  const navigate = useNavigate();
  const handleClickSearch = () => {
    navigate("/searchrecipe");
  };

  const handleClickHeart = () => {
    navigate("/likedrecipe");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo-wrapper" onClick={navigateToHome}>
        <p className="logo">Bake it til you make it</p>
      </div>
      <div className="header-wrapper">
        <button className="icon-wrapper-search" onClick={handleClickSearch}>
          <IoIosSearch className="material-symbols-outlined" />
        </button>
        <button className="icon-wrapper-heart" onClick={handleClickHeart}>
          <IoMdHeartEmpty className="material-symbols-outlined" />
        </button>
        <HamburgerMenu></HamburgerMenu>
      </div>
    </header>
  );
};
