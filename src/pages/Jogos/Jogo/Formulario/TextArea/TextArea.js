import React from 'react';
import { Area } from './TextArea.styles';

const TextArea = ({ field }) => {
  return <Area {...field} rows="3"></Area>;
};

export default TextArea;
