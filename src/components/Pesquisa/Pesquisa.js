import React from 'react';
import { Container, Input, Label } from './Pesquisa.styles'

const Pesquisa = ({ name, label, type, placeholder }) => {
  return (
    <Container>
      <Label htmlFor={name}>
        {label}
      </Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} />
    </Container>
  );
};

export default Pesquisa;
