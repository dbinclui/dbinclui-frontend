import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import "./styles.css"

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (): JSX.Element => {
  return (
    <>
      <header className="headerLayout">logo</header>
      <main className="mainLayout">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
