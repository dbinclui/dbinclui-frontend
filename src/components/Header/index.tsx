import { Link, Grid, Container, IconButton } from '@mui/material';
import React from 'react';
import './styles.css';
import Logo from '../svgs/logo';
import PersonIcon from '@mui/icons-material/Person';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (): JSX.Element => {
  return (
    <header className="dbinclui-header">
      <Container>
        <Grid container className="grid-container-header">
          <Grid item lg={4}>
            <Link
              className="nav-logo"
              underline="hover"
              color="inherit"
              href="/"
            >
              <Logo />
            </Link>
          </Grid>
          <Grid item lg={7} xs={12}>
            <nav className="nav-links">
              <Link
                className="nav-item"
                underline="hover"
                color="#ffffff"
                href="/"
              >
                HOME
              </Link>
              <Link
                className="nav-item"
                underline="hover"
                color="#ffffff"
                href="/sobre"
              >
                SOBRE
              </Link>
              <Link
                className="nav-item"
                underline="hover"
                color="#ffffff"
                href="/ajuda"
              >
                AJUDA
              </Link>
              <Link
                className="nav-item"
                underline="hover"
                color="#ffffff"
                href="/contato"
              >
                CONTATO
              </Link>
              <Link
                className="nav-item"
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
            </nav>
          </Grid>
          <Grid item>
            <div className="account-action">
              <IconButton color="primary">
                <PersonIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
