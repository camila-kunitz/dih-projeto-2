import React from 'react';
import { JOGOS_GET } from '../../api';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import Card from './Card/Card';
import {
  Container,
  Titulo,
  PesquisaContainer,
  JogosContainer,
} from './Jogos.styles';
import { mapToJogosObject } from '../../data/data-utils';
import { useNavigate } from 'react-router-dom';

const Jogos = () => {
  const [todosJogos, setTodosJogos] = React.useState([]);
  const [jogosFiltrados, setJogosFiltrados] = React.useState([]);
  const [busca, setBusca] = React.useState('');
  const navigate = useNavigate();

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

  const handleJogoClick = (id) => {
    navigate(`/jogo/${id}`);
  };

  return (
    <Container>
      <Titulo>Jogos</Titulo>
      <PesquisaContainer>
        <Pesquisa
          name="jogo"
          label="Pesquise um jogo"
          type="text"
          placeholder="Digite o título de um jogo..."
          value={busca}
          onChange={handleBusca}
        />
      </PesquisaContainer>
      <JogosContainer>
        {jogosFiltrados.length === 0 ? (
          <span>Carregando...</span>
        ) : (
          jogosFiltrados.map((jogo) => (
            <Card
              key={jogo.id}
              id={jogo.id}
              imagem={jogo.imagem}
              titulo={jogo.titulo}
              genero={jogo.genero}
              descricao={jogo.descricao}
              handleJogoClick={handleJogoClick}
            />
          ))
        )}
      </JogosContainer>
    </Container>
  );
};

export default Jogos;
