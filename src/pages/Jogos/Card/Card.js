import React from 'react';
import PropTypes from 'prop-types';
import Botao from '../../../components/Botao/Botao';
import {
  Container,
  Imagem,
  JogoContainer,
  Genero,
  Descricao,
  LinkJogo,
  Titulo,
} from './Card.styles';

const Card = ({ imagem, titulo, genero, descricao }) => {
  return (
    <>
      <Container>
        <Imagem src={imagem} />
        <JogoContainer>
          <Titulo>{titulo}</Titulo>
          <Genero>{genero}</Genero>
        </JogoContainer>
        <Descricao>{`${descricao.substring(0, 100)}...`}</Descricao>
        <LinkJogo>
          <Botao>Ver Mais</Botao>
        </LinkJogo>
      </Container>
    </>
  );
};

Card.propTypes = {};

export default Card;
