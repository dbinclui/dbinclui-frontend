import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home';
import App from './App';
import AcessibilityGuide from './pages/acessibility-guide';
import DeafCultureGuide from './pages/deaf-culture-guide';
import Error from './pages/error/404';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="guia-acessibilidade" element={<AcessibilityGuide />} />
          <Route path="guia-cultura-surda" element={<DeafCultureGuide />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
