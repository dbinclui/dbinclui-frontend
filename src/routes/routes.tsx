import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/home';
import RegisterGuide from '@pages/register-guide';
import Error from '@pages/error/404';
import Layout from '@pages/layout';
import Admin from '@pages/admin';
import RegisterCategory from '@pages/register-category';
import RegisterDigitalContent from '@pages/register-digital-content';
<<<<<<< HEAD
import UpdateCategory from '@pages/update-category';
=======
import UpdateGuide from '@pages/update-guide';
>>>>>>> 0297cec6d7f79c6bd8a844248de869219acb3b94
import Guide from '@pages/guides';

export interface RoutersProps {}

export const Routers: React.FC<RoutersProps> = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="guia/:id" element={<Guide />} />
            <Route path="admin" element={<Admin />} />
            <Route path="admin/cadastrar-guia" element={<RegisterGuide />} />
            <Route path="admin/atualizar-guia" element={<UpdateGuide />} />
            <Route
              path="admin/cadastrar-categoria"
              element={<RegisterCategory />}
            />
            <Route
              path="admin/atualizar-categoria"
              element={<UpdateCategory />}
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
