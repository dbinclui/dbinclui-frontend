import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './styles.css';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (): JSX.Element => {
  return (
    <header className="dbinclui-header">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline = "hover" 
        color="inherit" 
        href="/">
          MUI
        </Link>
        <Link
          underline ="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>

      {/* <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs> */}

      {/* <Navbar>
        <Container>
          <Navbar.Brand className="nav-logo">DBinclui</Navbar.Brand>
          <Nav className="justify-content-end" color="primary">
            <Nav.Link bsPrefix="dbinclui" as={NavLink} to="/">
              HOME
            </Nav.Link>

            <Nav.Link as={NavLink} to="/sobre">
              SOBRE
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ajuda">
              AJUDA
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contato">
              CONTATO
            </Nav.Link>
            <Nav.Link as={NavLink} to="/avaliar">
              AVALIAR O APP
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              LOGIN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </header>
  );
};

export default Header;

/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DBinclui
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sobre">
                  SOBRE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ajuda">
                  AJUDA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contato">
                  CONTATO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/avaliar">
                  AVALIAR O APP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */
