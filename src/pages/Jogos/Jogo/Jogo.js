import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {} from './Jogo.styles';

const Jogo = (props) => {
  const { idJogo } = useParams();

  return <div>{idJogo}</div>;
};

Jogo.propTypes = {};

export default Jogo;
