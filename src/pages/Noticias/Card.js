import React from 'react';
import styled from 'styled-components';
import Botao from '../../components/Botao';

const Container = styled.article`
  display: grid;
  grid-template-columns: 218px 1fr;
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas:
    'imagem titulo'
    'imagem descricao'
    'imagem link';
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

const LinkNoticia = styled.div`
  grid-area: link;
  width: 150px;
  justify-self: end;
  align-self: center;
`;

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
