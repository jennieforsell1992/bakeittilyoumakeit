import { useNavigate } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import "../scss/header.scss";

export const Header = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo-wrapper" onClick={navigateToHome}>
        <label className="logo">Bake it til you make it</label>
      </div>
      <div className="header-wrapper">
        <a className="icon-wrapper-search" href={"/searchrecipe"}>
          <IoIosSearch
            className="material-symbols-outlined"
            data-testid="search-icon"
          />
        </a>
        <a className="icon-wrapper-heart" href={"/likedrecipe"}>
          <IoMdHeartEmpty
            className="material-symbols-outlined"
            data-testid="heart-icon"
          />
        </a>
        <HamburgerMenu></HamburgerMenu>
      </div>
    </header>
  );
};
