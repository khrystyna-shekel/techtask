import { Outlet } from "react-router-dom";
import { StyledHeader, StyledNav, StyledNavLink } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to={"/"}>Home</StyledNavLink>
          <StyledNavLink to={"/catalog"}>Catalog</StyledNavLink>
          <StyledNavLink to={"/favourites"}>Favourites</StyledNavLink>
        </StyledNav>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Layout;
