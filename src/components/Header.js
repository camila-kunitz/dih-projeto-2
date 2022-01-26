import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #666666;
`;

const Logo = styled.h1`
  color: tomato;
`;

const Navbar = styled.nav``

const NavLink = styled.a`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 20px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`

const Header = () => {
  return (
    <Container>
      <Logo>DevInMMO</Logo>
      <Navbar>
         <NavLink href='/'>Notícias</NavLink>
         <NavLink href='/jogos'>Jogos</NavLink>
      </Navbar>
    </Container>
  )
};

export default Header;
