import React from 'react';
import Pesquisa from '../../components/Pesquisa';
import Card from './Card';
import styled from 'styled-components';

const Titulo = styled.h2`
  color: tomato;
  padding: 40px;
`;

const PesquisaContainer = styled.div`
  margin: 0 40px;
`;

const Noticias = () => {
  const [noticias, setNoticias] = React.useState([]);

  const fetchNoticias = () => {
    fetch('https://mmo-games.p.rapidapi.com/latestnews', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
        'x-rapidapi-key': '4e45cbadfemsh5d63995c383d3e6p155566jsn1cfc45c2b053',
      },
    })
      .then((response) => response.json())
      .then((resultado) => {
        setNoticias(resultado);
      });
  };

  React.useEffect(() => {
    fetchNoticias();
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
          titulo={noticia.title}
          descricao={noticia.short_description}
          imagem={noticia.thumbnail}
          url={noticia.url}
        />
      ))}
    </>
  );
};

export default Noticias;
