import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
`;

export const Conteudo = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

export const Item = styled.img`
  flex-shrink: 0;
  width: 80%;
  margin: 40px 10% 0 10%;
  background: #eee;
  border-radius: 0.4em;
  text-align: center;
`;

export const Navegacao = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem 10%;
`;
