import { useNavigate } from "react-router-dom";
import "../scss/header.scss";
import { HamburgerMenu } from "./HamburgerMenu";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

export const Header = () => {
  const navigate = useNavigate();
  const handleClickSearch = () => {
    navigate("/searchrecipe");
  };

  const handleClickHeart = () => {
    navigate("/likedrecipe");
  };

  return (
    <header className="header">
      <div className="logo-wrapper">
        <p className="logo">Bake it til you make it</p>
      </div>
      <div className="header-wrapper">
        <div className="icon-wrapper-search" onClick={handleClickSearch}>
          <IoIosSearch className="material-symbols-outlined" />
        </div>
        <div className="icon-wrapper-heart" onClick={handleClickHeart}>
          <IoMdHeartEmpty className="material-symbols-outlined" />
        </div>
        <HamburgerMenu></HamburgerMenu>
      </div>
    </header>
  );
};
