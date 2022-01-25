import React from 'react';
import { Container, Logo, Navbar, NavLink } from './Header.styles';

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
