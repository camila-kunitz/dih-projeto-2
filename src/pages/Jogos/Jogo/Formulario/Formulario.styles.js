import styled from 'styled-components';

export const Container = styled.section`
  margin: 20px;
`;

export const Titulo = styled.h4`
  color: ${(props) => props.theme.color3};
`;

export const AcoesContainer = styled.div`
  margin: 20px 0;
`;

export const Label = styled.label`
  margin-top: 20px;
  display: block;
  line-height: 1;
`;

export const Comentarios = styled.section`
  margin-top: 60px;
`;

export const ComentarioContainer = styled.article`
  margin: 20px 0;
`;

export const Nome = styled.span`
  font-weight: bold;
`;

export const Comentario = styled.span`
  font-style: italic;
`;
