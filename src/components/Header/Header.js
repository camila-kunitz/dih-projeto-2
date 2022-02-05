import React from 'react';
import PropTypes from 'prop-types';
import { Container, Logo, Navbar, NavLink, BotaoTema } from './Header.styles';
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Header = ({ tema, handleTema }) => {
  return (
    <Container>
      <Logo>DevInMMO</Logo>
      <Navbar>
        <NavLink href="/">Notícias</NavLink>
        <NavLink href="/jogos">Jogos</NavLink>
        <BotaoTema onClick={() => handleTema()}>
          {tema === 'dark' ? <BsMoonStarsFill /> : <BsFillSunFill />}
        </BotaoTema>
      </Navbar>
    </Container>
  );
};

Header.propTypes = {
  tema: PropTypes.string.isRequired,
  handleTema: PropTypes.func.isRequired,
};

export default Header;
