import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Lancamento, Titulo } from './Jogo.styles';
import { JOGO_GET } from '../../../api';
import { mapToJogoObject } from '../../../data/data-utils';

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

  if (jogo === null) return <span>Carregando...</span>;
  return (
    <Container>
      <Titulo>
        {jogo.titulo}
        <Lancamento>{jogo.dataLancamento}</Lancamento>
      </Titulo>
    </Container>
  );
};

export default Jogo;
