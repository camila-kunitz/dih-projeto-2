import React from 'react';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import Card from './Card/Card';
import { Titulo, PesquisaContainer, JogosContainer } from './Jogos.styles';

const Jogos = () => {
  return (
    <>
      <Titulo>Jogos</Titulo>
      <PesquisaContainer>
        <Pesquisa
          name="jogo"
          label="Pesquise um jogo"
          type="text"
          placeholder="Digite o título de um jogo..."
        />
      </PesquisaContainer>
      <JogosContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </JogosContainer>
    </>
  );
};

export default Jogos;
