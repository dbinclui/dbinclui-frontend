import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
