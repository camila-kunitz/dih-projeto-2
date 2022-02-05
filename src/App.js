import React from 'react';
import Header from './components/Header/Header';
import Noticias from './pages/Noticias/Noticias';
import Jogos from './pages/Jogos/Jogos';
import Jogo from './pages/Jogos/Jogo/Jogo';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, temaLight, temaDark } from './themes/tema';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [tema, setTema] = React.useState('light');

  const handleTema = () => {
    tema === 'dark' ? setTema('light') : setTema('dark');
  };

  return (
    <>
      <ThemeProvider theme={tema === 'light' ? temaLight : temaDark}>
        <GlobalStyle />
        <Header tema={tema} handleTema={handleTema} />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Noticias />} />
            <Route path="/" element={<Noticias />} />
            <Route path="/jogos" element={<Jogos />} />
            <Route path="/jogo/:idJogo" element={<Jogo />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
