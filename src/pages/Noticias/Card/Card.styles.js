import styled from 'styled-components';

export const Container = styled.article`
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

export const Imagem = styled.img`
  grid-area: imagem;
  border-radius: 0.4rem;
`;

export const Titulo = styled.h3`
  grid-area: titulo;
  color: #fb1;
`;

export const Descricao = styled.h4`
  grid-area: descricao;
`;

export const LinkNoticia = styled.div`
  grid-area: link;
  width: 150px;
  justify-self: end;
  align-self: center;
`;
