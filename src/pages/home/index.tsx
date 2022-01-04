import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import './style.css';
import AccessibilityTypography from '../../components/AccessibilityTypography';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <main className="conteudo" role="main">
        <section className="container-home">
          <input
            type="text"
            className="box-busca"
            placeholder="pesquise aqui"
            role="search"
          />
          <Box p={5}>
            <AccessibilityTypography variant="body1" className="box-welcome">
              Bem-vindo ao DBINCLUI, lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam mattis fringilla dolor, id congue diam
              rhoncus sit amet. Fusce at lacus metus. Maecenas gravida finibus
              ligula, vitae lacinia est. Integer tristique libero non nunc
              faucibus elementum.
            </AccessibilityTypography>
          </Box>
        </section>
      </main>

      <section className="container-center">
        <div
          className="box"
          role="button"
          tabIndex={1}
          aria-label="TRADUTOR DE LIBRAS"
          onClick={() => navigate('/tradutor')}
        >
          <AccessibilityTypography variant="h3" className="title" id="card1">
            TRADUTOR DE LIBRAS
          </AccessibilityTypography>

          <div className="box-libras">
            <img src="" alt="" />
          </div>
        </div>

        <div
          className="box"
          role="button"
          tabIndex={2}
          aria-label="GUIA DE ACESSIBILIDADE"
          onClick={() => navigate('/guia-acessibilidade')}
        >
          <AccessibilityTypography variant="h3" className="title" id="card2">
            GUIA DE ACESSIBILIDADE
          </AccessibilityTypography>
          <div className="box-libras">
            <img src="" alt="" />
          </div>
        </div>

        <div
          className="box"
          role="button"
          tabIndex={3}
          aria-label="GUIA DA CULTURA SURDA"
          onClick={() => navigate('/guia-cultura-surda')}
        >
          <AccessibilityTypography variant="h3" className="title" id="card3">
            GUIA DA CULTURA SURDA
          </AccessibilityTypography>
          <div className="box-libras">
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
