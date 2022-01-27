import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.article`
  display: grid;
  grid-template-columns: 218px 1fr;
  grid-template-rows: 60px 1fr 20px;
  grid-template-areas:
    'imagem titulo'
    'imagem descricao '
    'imagem link-noticia';
  column-gap: 20px;
  margin: 40px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 0.4rem;
`;

const Imagem = styled.img`
  grid-area: imagem;
  border-radius: 0.4rem;
`;

const Titulo = styled.h3`
  grid-area: titulo;
  color: #fb1;
`;

const Descricao = styled.h4`
  grid-area: descricao;
`;

const LinkNoticia = styled.a`
  grid-area: link-noticia;
  justify-self: end;
  margin: 0 20px;
`;

const Card = ({ titulo, descricao, imagem, url }) => {
  return (
    <Container>
      <Imagem src={imagem} />
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
      <LinkNoticia>Link</LinkNoticia>
    </Container>
  );
};

export default Card;
