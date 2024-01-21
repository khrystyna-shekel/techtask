import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/categories"}>Categories</NavLink>
          <NavLink to={"/favourites"}>Favourites</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
