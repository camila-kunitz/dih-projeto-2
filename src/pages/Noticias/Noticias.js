import React from 'react';
import Pesquisa from '../../components/Pesquisa'
import Card from './Card';
import styled from 'styled-components';

const Titulo = styled.h2`
  color: tomato;
  padding: 40px
`;

const PesquisaContainer = styled.div`
  margin: 0 40px;
`;

const Noticias = () => {
  return (
    <>
      <Titulo>Notícias</Titulo>
      <PesquisaContainer>
        <Pesquisa name="noticia" label="Pesquise uma notícia" type="text" placeholder="Digite o título de uma notícia.." />
      </PesquisaContainer>
      <Card />
      <Card />
      <Card />
    </>
  )
};

export default Noticias;
