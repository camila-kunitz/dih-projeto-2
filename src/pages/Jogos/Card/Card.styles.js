import styled from 'styled-components';

export const Container = styled.article`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  background: ${(props) => props.theme.backgroundColor2};
  border: 1px solid ${(props) => props.theme.color2};
  border-radius: 0.4rem;
`;

export const Imagem = styled.img`
  border-radius: 0.4rem;
`;

export const JogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Titulo = styled.h4`
  text-transform: uppercase;
  color: ${(props) => props.theme.color1};
`;

export const Genero = styled.span`
  align-self: flex-end;
  font-size: 10px;
  font-weight: 300;
  padding: 5px;
  color: ${(props) => props.theme.color3};
  border: 1px solid ${(props) => props.theme.color3};
  border-radius: 0.4em;
`;

export const Descricao = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${(props) => props.theme.color1};
`;

export const LinkJogo = styled.div`
  margin: 20px auto 0;
`;
