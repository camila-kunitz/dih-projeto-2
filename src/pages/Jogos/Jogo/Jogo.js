import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, SlideContainer } from './Jogo.styles';
import { JOGO_GET } from '../../../api';
import { mapToJogoObject } from '../../../data/data-utils';
import Header from './Header/Header';
import Detalhes from './Detalhes/Detalhes';
import Requisitos from './Requisitos/Requisitos';
import Slide from './Slide/Slide';

const Jogo = () => {
  const { idJogo } = useParams();
  const [jogo, setJogo] = React.useState(null);

  React.useEffect(() => {
    const { url, options } = JOGO_GET(idJogo);

    fetch(url, options)
      .then((response) => response.json())
      .then((resultado) => {
        const resultadoMapeado = mapToJogoObject(resultado);
        setJogo(resultadoMapeado);
      });
  }, []);

  if (jogo === null) return <Container>Carregando...</Container>;
  return (
    <Container>
      <Header titulo={jogo.titulo} data={jogo.dataLancamento} />
      <SlideContainer>
        <Slide slides={jogo.imagens} />
      </SlideContainer>
      <Detalhes
        genero={jogo.genero}
        plataforma={jogo.plataforma}
        descricao={jogo.descricao}
      />
      <Requisitos requisitos={jogo.requisitos} />
    </Container>
  );
};

export default Jogo;
