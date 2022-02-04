import React from 'react';
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

export default Pesquisa;
