import React from 'react';
import VLibras from '@djpfs/react-vlibras';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home';
import AcessibilityGuide from './pages/acessibility-guide';
import DeafCultureGuide from './pages/deaf-culture-guide';
import Error from './pages/error/404';

function App() {
  return (
    <>
      <VLibras />
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="guia-acessibilidade" element={<AcessibilityGuide />} />
            <Route path="guia-cultura-surda" element={<DeafCultureGuide />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
