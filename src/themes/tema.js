import { createGlobalStyle } from 'styled-components';

export const temaLight = {
  backgroundColor1: '#FAF3F3',
  backgroundColor2: '#E1E5EA',
  color1: '#444',
  color2: '#A7BBC7',
  color3: '#DA7F8F',
};

export const temaDark = {
  backgroundColor1: '#1A1A2E',
  backgroundColor2: '#16213E',
  color1: '#FFF',
  color2: '#0F3460',
  color3: '#E94560',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor1};
    color: ${(props) => props.theme.color1};
  }
`;
