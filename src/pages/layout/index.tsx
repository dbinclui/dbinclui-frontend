import React from 'react';
import { Outlet } from 'react-router-dom';
export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (): JSX.Element => {
  return <>
  <Outlet />
  </>;
};

export default Layout;