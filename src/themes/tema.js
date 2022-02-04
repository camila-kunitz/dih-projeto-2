import { createGlobalStyle } from 'styled-components';

export const temaLight = {
  backgroundColor1: 'black',
  backgroundColor2: '#404040',
  color1: 'white',
  color2: 'red',
};

export const temaDark = {
  backgroundColor1: 'white',
  backgroundColor2: '#C0C0C0',
  cor1: 'black',
  color2: 'blue',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor1}
  }
`;
