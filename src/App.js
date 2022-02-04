import React from 'react';
import Header from './components/Header/Header';
import Noticias from './pages/Noticias/Noticias';
import Jogos from './pages/Jogos/Jogos';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, temaLight, temaDark } from './themes/tema';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [tema, setTema] = React.useState('dark');

  const handleTema = () => {
    tema === 'dark' ? setTema('light') : setTema('dark');
  };

  return (
    <>
      <ThemeProvider theme={tema === 'dark' ? temaDark : temaLight}>
        <GlobalStyle />
        <Header tema={tema} handleTema={handleTema} />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Noticias />} />
            <Route path="/" element={<Noticias />} />
            <Route path="/jogos" element={<Jogos />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
