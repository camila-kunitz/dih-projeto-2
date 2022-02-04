import React from 'react';
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

export default Card;
