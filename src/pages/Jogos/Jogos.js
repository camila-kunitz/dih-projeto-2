import React from 'react';
import { JOGOS_GET } from '../../api';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import Card from './Card/Card';
import { Titulo, PesquisaContainer, JogosContainer } from './Jogos.styles';
import { mapToJogosObject } from '../../data/data-utils';

const Jogos = () => {
  const [todosJogos, setTodosJogos] = React.useState([]);
  const [jogosFiltrados, setJogosFiltrados] = React.useState([]);
  const [busca, setBusca] = React.useState('');

  React.useEffect(() => {
    const { url, options } = JOGOS_GET();

    fetch(url, options)
      .then((response) => response.json())
      .then((resultado) => {
        const resultadoMapeado = mapToJogosObject(resultado);
        setTodosJogos(resultadoMapeado);
        setJogosFiltrados(resultadoMapeado);
      });
  }, []);

  const handleBusca = (valorBusca) => {
    setBusca(valorBusca);
    const reg = new RegExp(valorBusca, 'gi');
    const jogosFiltrados = todosJogos.filter((noticia) =>
      noticia.titulo.match(reg),
    );
    setJogosFiltrados(jogosFiltrados);
  };

  return (
    <>
      <Titulo>Jogos</Titulo>
      <PesquisaContainer>
        <Pesquisa
          name="jogo"
          label="Pesquise um jogo"
          type="text"
          placeholder="Digite o título de um jogo..."
          onChange={handleBusca}
        />
      </PesquisaContainer>
      <JogosContainer>
        {jogosFiltrados.map((jogo) => (
          <Card
            key={jogo.id}
            imagem={jogo.imagem}
            titulo={jogo.titulo}
            genero={jogo.genero}
            descricao={jogo.descricao}
          />
        ))}
      </JogosContainer>
    </>
  );
};

export default Jogos;
