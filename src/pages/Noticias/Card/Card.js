import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Imagem,
  Titulo,
  Descricao,
  LinkNoticia,
} from './Card.styles';
import Botao from '../../../components/Botao/Botao';

const Card = ({ titulo, descricao, imagem, url }) => {
  return (
    <Container>
      <Imagem src={imagem} />
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
      <LinkNoticia>
        <Botao onClick={() => window.open(url)}>Link</Botao>
      </LinkNoticia>
    </Container>
  );
};

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
