import styled from 'styled-components';

export const Titulo = styled.h2`
  color: ${(props) => props.theme.color3};
  text-transform: uppercase;
`;

export const Lancamento = styled.span`
  color: ${(props) => props.theme.color1};
  font-weight: 300;
  margin-left: 20px;
`;
