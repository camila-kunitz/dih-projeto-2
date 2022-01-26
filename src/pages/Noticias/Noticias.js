import React from 'react';
import Pesquisa from '../../components/Pesquisa/Pesquisa'
import Card from './Card/Card';
import { Titulo, PesquisaContainer } from './Noticias.styles'

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
