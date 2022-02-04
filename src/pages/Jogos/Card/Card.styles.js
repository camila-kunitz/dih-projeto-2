import styled from 'styled-components';

export const Container = styled.article`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 0.4rem;
`;

export const Imagem = styled.img`
  border-radius: 0.4rem;
`;

export const JogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Titulo = styled.h3`
  text-transform: uppercase;
`;

export const Genero = styled.span`
  align-self: flex-end;
  font-size: 10px;
  font-weight: 200;
  padding: 5px;
  border: 1px solid black;
  border-radius: 0.4em;
`;

export const Descricao = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

export const LinkJogo = styled.div`
  margin: 10px auto 0;
`;
