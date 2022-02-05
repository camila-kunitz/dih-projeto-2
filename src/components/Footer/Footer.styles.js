import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundColor2};
  font-weight: 300;
  font-size: 14px;
  border-top: 1px solid ${(props) => props.theme.color2};
`;

export const Destaque = styled.span`
  font-weight: 500;
`;
