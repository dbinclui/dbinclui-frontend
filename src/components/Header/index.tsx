import { Link, Grid } from '@mui/material';
import React from 'react';
import './styles.css';
import Logo from '../svgs/logo';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (): JSX.Element => {
  return (
    <header className="dbinclui-header">
      <div>
        <Link className="nav-logo" underline="hover" color="inherit" href="/">
          <Logo />
        </Link>
      </div>
      <div className="nav-links">
        <Link
          className="nav-item nav-border"
          underline="hover"
          color="#ffffff"
          href="/"
        >
          HOME
        </Link>
        <Link
          className="nav-item nav-border"
          underline="hover"
          color="#ffffff"
          href="/sobre"
        >
          SOBRE
        </Link>
        <Link
          className="nav-item nav-border"
          underline="hover"
          color="#ffffff"
          href="/ajuda"
        >
          AJUDA
        </Link>
        <Link
          className="nav-item nav-border"
          underline="hover"
          color="#ffffff"
          href="/contato"
        >
          CONTATO
        </Link>
        <Link
          className="nav-item nav-border"
          underline="hover"
          color="#ffffff"
          href="/avaliar"
        >
          AVALIAR O APP
        </Link>
        <Link
          className="nav-item"
          underline="hover"
          color="#ffffff"
          href="/login"
        >
          LOGIN
        </Link>
      </div>
      <div className="circulo"></div>
    </header>
  );
};

export default Header;
