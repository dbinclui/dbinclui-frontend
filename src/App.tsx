import React from 'react';
import VLibras from '@djpfs/react-vlibras';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home';
import AcessibilityGuide from './pages/acessibility-guide';
import DeafCultureGuide from './pages/deaf-culture-guide';
import Error from './pages/error/404';
import Header from '../src/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterGuide from './pages/register-guide';

export interface AppProps {}

export const App: React.FC<AppProps> = (): JSX.Element => {
  return (
    <>
      <VLibras />
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="guia-acessibilidade" element={<AcessibilityGuide />} />
            <Route path="guia-cultura-surda" element={<DeafCultureGuide />} />
            <Route path="cadastrar-guia" element={<RegisterGuide />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
};

export default App;
