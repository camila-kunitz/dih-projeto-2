import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #666666;
`;

export const Logo = styled.h1`
  color: tomato;
`;

export const Navbar = styled.nav``;

export const NavLink = styled.a`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
