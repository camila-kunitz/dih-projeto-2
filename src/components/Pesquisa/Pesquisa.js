import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input } from './Pesquisa.styles';

const Pesquisa = ({ name, label, type, placeholder, value, onChange }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Container>
  );
};

Pesquisa.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pesquisa;
