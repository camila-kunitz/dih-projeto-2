import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundColor2};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid ${(props) => props.theme.color2};
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.color3};
`;

export const Navbar = styled.nav``;

export const NavLink = styled.a`
  color: ${(props) => props.theme.color1};
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${(props) => props.theme.color3};
  }
`;

export const BotaoTema = styled.button`
  height: 40px;
  width: 40px;
  margin-left: 20px;
  color: ${(props) => props.theme.color1};
  background-color: ${(props) => props.theme.color2};
  font-weight: bold;
  border: 0px;
  border-radius: 50%;
  &:hover {
    color: ${(props) => props.theme.color1};
    background-color: ${(props) => props.theme.color3};
  }
  &:active {
    color: ${(props) => props.theme.color2};
    background-color: ${(props) => props.theme.color3};
  }
`;
