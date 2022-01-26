import React from 'react';
import { Container, Imagem, Titulo, Descricao, LinkNoticia } from './Card.styles';

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
