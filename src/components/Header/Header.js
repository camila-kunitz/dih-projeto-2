import React from 'react';
import { Container, Logo, Navbar, NavLink, BotaoTema } from './Header.styles';

const Header = ({ tema, handleTema }) => {
  return (
    <Container>
      <Logo>DevInMMO</Logo>
      <Navbar>
        <NavLink href="/">Notícias</NavLink>
        <NavLink href="/jogos">Jogos</NavLink>
        <BotaoTema onClick={() => handleTema()}>{tema}</BotaoTema>
      </Navbar>
    </Container>
  );
};

export default Header;
