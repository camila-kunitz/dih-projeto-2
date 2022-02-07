import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  DadoContainer,
  Informacoes,
  Titulo,
  Valor,
} from './Detalhes.styles';

const Detalhes = ({ genero, plataforma, descricao }) => {
  return (
    <Container>
      <Informacoes>
        <DadoContainer>
          <Titulo>Genero:</Titulo>
          <Valor>{genero}</Valor>
        </DadoContainer>
        <DadoContainer>
          <Titulo>Plataforma:</Titulo>
          <Valor>{plataforma}</Valor>
        </DadoContainer>
      </Informacoes>
      <DadoContainer>
        <Titulo>Descricao:</Titulo>
        <Valor>{descricao}</Valor>
      </DadoContainer>
    </Container>
  );
};

Detalhes.propTypes = {
  genero: PropTypes.string.isRequired,
  plataforma: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default Detalhes;
