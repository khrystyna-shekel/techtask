import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  background: var(--blue);
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--white);
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;
