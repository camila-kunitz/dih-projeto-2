import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #666666;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
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

export const BotaoTema = styled.button`
  height: 40px;
  width: 80px;
  margin-left: 20px;
  color: ${(props) => props.theme.corPrimaria};
  background-color: ${(props) => props.theme.corSecundaria};
  font-weight: bold;
  border: 0px;
  border-radius: 50px;
  &:hover {
    color: ${(props) => props.theme.corPrimaria};
    background-color: ${(props) => props.theme.backgroundColor1};
  }
  &:active {
    color: ${(props) => props.theme.corSecundaria};
    background-color: ${(props) => props.theme.backgroundColor2};
  }
`;
