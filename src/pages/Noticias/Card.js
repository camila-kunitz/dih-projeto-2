import React from 'react';
import styled from "styled-components";

const Container = styled.article`
  display: grid;
  grid-template-columns: 218px 1fr;
  grid-template-rows: 60px 1fr 20px;
  grid-template-areas:
		"imagem titulo"
		"imagem descricao "
		"imagem link-noticia"
	;
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
  color: #fb1
`;

const Descricao = styled.h4`
  grid-area: descricao;
`;

const LinkNoticia = styled.a`
  grid-area: link-noticia;
  justify-self: end;
  margin: 0 20px;
`;

const Card = () => {
  return (
    <Container>
      <Imagem src='https://www.mmobomb.com//file//2022//1//lost-ark-endgame-218x150.jpg' />
      <Titulo>Activision Reorganizes Raven Software QA To Embed Them In Teams, Union Organizers Claim Attempt To \"Thwart\" Organizing</Titulo>
      <Descricao>Union organizers also want the Department of Justice and FTC TO Investigate sale to Microsoft.</Descricao>
      <LinkNoticia>Link</LinkNoticia>
    </Container>
  );
};

export default Card;
