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
            tabIndex={1}
            type="text"
            className="box-busca"
            placeholder="pesquise aqui"
            role="search"
          />
          <Box role="document" tabIndex={2} p={5}>
            <AccessibilityTypography
              align="center"
              variant="body1"
              className="box-welcome"
            >
              Bem-vindo ao DBINCLUI é um web app que dissemina a cultura de
              inclusão dentro da DBserver, com foco na cultura surda. O web app
              é destinado para todas as pessoas que desejam aprender LIBRAS e
              entender um pouco mais sobre Inclusão de PCDs na sociedade. O web
              app aproveita o Guia de Acessibilidade e a Apostila de Libras como
              fonte para informação de inclusão, assim como, utiliza a API
              VLIBRAS para as funcionalidades específicas.
            </AccessibilityTypography>
          </Box>
        </section>
      </main>

      <section className="container-center">
        <div
          className="box"
          role="button"
          tabIndex={3}
          aria-label="TRADUTOR DE LIBRAS"
          onClick={() => navigate('/tradutor')}
        >
          <AccessibilityTypography
            align="center"
            variant="h3"
            className="title"
            id="card1"
          >
            TRADUTOR DE LIBRAS
          </AccessibilityTypography>

          <div className="box-libras">
            <img src="" alt="" />
          </div>
        </div>

        <div
          className="box"
          role="button"
          tabIndex={4}
          aria-label="GUIA DE ACESSIBILIDADE"
          onClick={() => navigate('/guia-acessibilidade')}
        >
          <AccessibilityTypography
            align="center"
            variant="h3"
            className="title"
            id="card2"
          >
            GUIA DE ACESSIBILIDADE
          </AccessibilityTypography>
          <div className="box-libras">
            <img src="" alt="" />
          </div>
        </div>

        <div
          className="box"
          role="button"
          tabIndex={5}
          aria-label="GUIA DA CULTURA SURDA"
          onClick={() => navigate('/guia-cultura-surda')}
        >
          <AccessibilityTypography
            align="center"
            variant="h3"
            className="title"
            id="card3"
          >
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
