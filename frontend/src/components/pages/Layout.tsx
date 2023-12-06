import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "../../scss/layout.scss";

export const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-wrapper">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};
