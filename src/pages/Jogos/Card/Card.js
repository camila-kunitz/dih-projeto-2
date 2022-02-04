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

const Card = (props) => {
  const descricao =
    'Gather your friends, forge your weapons, and hunt ferocious behemoths in Dauntless, the co-op multiplayer RPG from Phoenix Labs, a studio consisting of developers from some of the biggest MMORPG ever made. Set adrift in a lush fantasy world known as the Shattered Isles, "Slayers" must band together to contend with a harsh environment and even harsher enemies Each Slayer can choose his or her weapon and attack style, from lightning-fast sword attacks to powerful axe strikes.';

  return (
    <>
      <Container>
        <Imagem src="https:\/\/www.mmobomb.com\/g\/1\/thumbnail.jpg" />
        <JogoContainer>
          <Titulo>Teste</Titulo>
          <Genero>MMORPG</Genero>
        </JogoContainer>
        <Descricao>{`${descricao.substring(0, 150)}...`}</Descricao>
        <LinkJogo>
          <Botao>Ver Mais</Botao>
        </LinkJogo>
      </Container>
    </>
  );
};

Card.propTypes = {};

export default Card;
