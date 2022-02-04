import React from 'react';
import { Titulo, PesquisaContainer } from './Noticias.styles';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import Card from './Card/Card';
import { mapToNoticiasObject } from '../../data/data-utils';
import { NOTICIAS_GET } from '../../api';

const Noticias = () => {
  const [noticias, setNoticias] = React.useState([]);

  React.useEffect(() => {
    const { url, options } = NOTICIAS_GET();

    fetch(url, options)
      .then((response) => response.json())
      .then((resultado) => {
        const resultadoMapeado = mapToNoticiasObject(resultado);
        setNoticias(resultadoMapeado);
      });
  }, []);

  return (
    <>
      <Titulo>Notícias</Titulo>
      <PesquisaContainer>
        <Pesquisa
          name="noticia"
          label="Pesquise uma notícia"
          type="text"
          placeholder="Digite o título de uma notícia.."
        />
      </PesquisaContainer>
      {noticias.map((noticia) => (
        <Card
          key={noticia.id}
          titulo={noticia.titulo}
          descricao={noticia.descricao}
          imagem={noticia.imagem}
          url={noticia.url}
        />
      ))}
    </>
  );
};

export default Noticias;
