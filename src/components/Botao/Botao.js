import React from 'react';
import { StyledButton } from './Botao.styles';

const Botao = ({ ...props }) => {
  return <StyledButton {...props} />;
};

export default Botao;
