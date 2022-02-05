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

const Card = ({ id, imagem, titulo, genero, descricao, handleJogoClick }) => {
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
          <Botao onClick={() => handleJogoClick(id)}>Ver Mais</Botao>
        </LinkJogo>
      </Container>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  genero: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  handleJogoClick: PropTypes.func.isRequired,
};

export default Card;
