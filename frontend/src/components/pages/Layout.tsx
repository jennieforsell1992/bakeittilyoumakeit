import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>LOGO</header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
