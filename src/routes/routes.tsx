import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AcessibilityGuide from '@pages/acessibility-guide';
import DeafCultureGuide from '@pages/deaf-culture-guide';
import Home from '@pages/home';
import RegisterGuide from '@pages/register-guide';
import Error from '@pages/error/404';
import Layout from '@pages/layout';
import Admin from '@pages/admin';
import RegisterCategory from '@pages/register-category';
import RegisterDigitalContent from '@pages/register-digital-content';
import GuideList from '@pages/guide-list';

export interface RoutersProps {}

export const Routers: React.FC<RoutersProps> = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="guia-acessibilidade" element={<AcessibilityGuide />} />
            <Route path="guia-cultura-surda" element={<DeafCultureGuide />} />
            <Route path="admin" element={<Admin />} />
            <Route path="admin/listar-guias" element={<GuideList/>} />
            <Route path="admin/cadastrar-guia" element={<RegisterGuide />} />
            <Route
              path="admin/cadastrar-categoria"
              element={<RegisterCategory />}
            />
            <Route
              path="admin/cadastrar-conteudo-digital"
              element={<RegisterDigitalContent />}
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
