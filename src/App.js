import Header from "./components/Header/Header";
import Noticias from "./components/Noticias/Noticias";
import Jogos from "./components/Jogos/Jogos";
import { GlobalStyle } from "./themes/tema";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Noticias />} />
            <Route path="/" element={<Noticias />} />
            <Route path="/jogos" element={<Jogos />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
