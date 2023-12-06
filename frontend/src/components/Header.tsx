import "../scss/header.scss";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
  return (
    <header className="header">
      <p className="logo">Logo</p>
      <div className="header-wrapper">
        <div className="icon-wrapper-search">
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className="icon-wrapper-heart">
          <span className="material-symbols-outlined">favorite</span>
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
};
