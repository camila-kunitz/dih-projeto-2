import React from 'react';
import PropTypes from 'prop-types';
import { Titulo, Lancamento } from './Header.styles';

const Header = ({ titulo, data }) => {
  return (
    <Titulo>
      {titulo}
      <Lancamento>{data}</Lancamento>
    </Titulo>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default Header;
