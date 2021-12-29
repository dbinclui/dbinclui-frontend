import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import './styles.css';
import MenuAcessibility from '../../components/MenuAcessibility';

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <>
      <main className="mainLayout">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
