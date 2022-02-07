import styled from 'styled-components';

export const Container = styled.section`
  margin: 40px 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.color2};
  border: 1px solid ${(props) => props.theme.color1};
  border-radius: 0.4em;
`;

export const Titulo = styled.h3`
  font-weight: 300;
  text-decoration: underline;
`;

export const Tabela = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  row-gap: 10px;
`;

export const Propriedade = styled.span`
  grid-column: 1;
  font-weight: bold;
`;

export const Valor = styled.span`
  grid-column: 2;
`;
