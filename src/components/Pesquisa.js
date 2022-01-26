import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

const Input = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.1s;
  &:focus, &:hover {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

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
