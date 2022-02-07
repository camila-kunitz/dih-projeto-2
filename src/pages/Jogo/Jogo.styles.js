import styled from 'styled-components';

export const Container = styled.main`
  margin: 120px 40px 80px 40px;
  padding: 40px;
  border: 1px solid ${(props) => props.theme.color2};
  background: ${(props) => props.theme.backgroundColor2};
  border-radius: 0.4em;
`;

export const SlideContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
