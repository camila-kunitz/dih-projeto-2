import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Propriedade,
  Tabela,
  Titulo,
  Valor,
} from './Requisitos.styles';

const Requisitos = ({ requisitos }) => {
  return (
    <Container>
      <Titulo>Requisitos de sistema:</Titulo>
      <Tabela>
        <Propriedade>Sistema Operacional:</Propriedade>
        <Valor>{requisitos.sistema}</Valor>
        <Propriedade>Processador:</Propriedade>
        <Valor>{requisitos.processador}</Valor>
        <Propriedade>Memória:</Propriedade>
        <Valor>{requisitos.memoria}</Valor>
        <Propriedade>Gráficos:</Propriedade>
        <Valor>{requisitos.graficos}</Valor>
        <Propriedade>Espaço em disco:</Propriedade>
        <Valor>{requisitos.espaco}</Valor>
      </Tabela>
    </Container>
  );
};

Requisitos.propTypes = {
  requisitos: PropTypes.object.isRequired,
};

export default Requisitos;
