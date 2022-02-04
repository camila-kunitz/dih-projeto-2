import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  color: ${(props) => props.theme.color1};
  background-color: #666666;
  font-weight: 300;
  font-size: 14px;
`;

export const Destaque = styled.span`
  font-weight: 500;
`;
