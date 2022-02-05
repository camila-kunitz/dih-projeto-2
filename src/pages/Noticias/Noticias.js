import React from 'react';
import {
  Container,
  Titulo,
  PesquisaContainer,
  NoticiasContainer,
} from './Noticias.styles';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import Card from './Card/Card';
import { mapToNoticiasObject } from '../../data/data-utils';
import { NOTICIAS_GET } from '../../api';

const Noticias = () => {
  const [todasNoticias, setTodasNoticias] = React.useState([]);
  const [noticiasFiltradas, setNoticiasFiltradas] = React.useState([]);
  const [busca, setBusca] = React.useState('');

  React.useEffect(() => {
    const { url, options } = NOTICIAS_GET();

    fetch(url, options)
      .then((response) => response.json())
      .then((resultado) => {
        const resultadoMapeado = mapToNoticiasObject(resultado);
        setTodasNoticias(resultadoMapeado);
        setNoticiasFiltradas(resultadoMapeado);
      });
  }, []);

  const handleBusca = (valorBusca) => {
    setBusca(valorBusca);
    const reg = new RegExp(valorBusca, 'gi');
    const noticiasFiltradas = todasNoticias.filter((noticia) =>
      noticia.titulo.match(reg),
    );
    setNoticiasFiltradas(noticiasFiltradas);
  };

  return (
    <Container>
      <Titulo>Notícias</Titulo>
      <PesquisaContainer>
        <Pesquisa
          name="noticia"
          label="Pesquise uma notícia"
          type="text"
          placeholder="Digite o título de uma notícia..."
          value={busca}
          onChange={handleBusca}
        />
      </PesquisaContainer>
      <NoticiasContainer>
        {todasNoticias.length === 0 ? (
          <span style={{ margin: '20px' }}>Carregando...</span>
        ) : (
          noticiasFiltradas.map((noticia) => (
            <Card
              key={noticia.id}
              titulo={noticia.titulo}
              descricao={noticia.descricao}
              imagem={noticia.imagem}
              url={noticia.url}
            />
          ))
        )}
      </NoticiasContainer>
    </Container>
  );
};

export default Noticias;
