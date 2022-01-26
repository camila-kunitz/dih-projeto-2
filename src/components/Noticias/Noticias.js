import React from 'react';
import Pesquisa from '../Pesquisa/Pesquisa';
import { Titulo, PesquisaContainer } from './Noticias.styles'

const Noticias = () => {
  return (
    <>
      <Titulo>Notícias</Titulo>
      <PesquisaContainer>
        <Pesquisa name="noticia" label="Pesquise uma notícia" type="text" placeholder="Digite o título de uma notícia.." />
      </PesquisaContainer>
    </>
  )
};

export default Noticias;
