import React from 'react';
import PropTypes from 'prop-types';
import { Container, Conteudo, Item, Navegacao } from './Slide.styles';
import Botao from '../../../components/Botao/Botao';

const Slide = ({ slides }) => {
  const [ativo, setAtivo] = React.useState(0);
  const [posicao, setPosicao] = React.useState(0);
  const conteudoRef = React.useRef();

  React.useEffect(() => {
    const { width } = conteudoRef.current.getBoundingClientRect();
    setPosicao(-(width * ativo));
  }, [ativo]);

  const slideAnterior = () => {
    if (ativo > 0) setAtivo(ativo - 1);
  };

  const slideProximo = () => {
    if (ativo < slides.length - 1) setAtivo(ativo + 1);
  };

  return (
    <Container>
      <Conteudo
        ref={conteudoRef}
        style={{ transform: `translateX(${posicao}px)` }}
      >
        {slides.map((slide) => (
          <Item key={slide.id} src={slide.imagem} />
        ))}
      </Conteudo>
      <Navegacao>
        <Botao onClick={slideAnterior}>Anterior</Botao>
        <Botao onClick={slideProximo}>Próximo</Botao>
      </Navegacao>
    </Container>
  );
};

Slide.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imagem: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Slide;
