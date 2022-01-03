import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import './style.css';

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

          <Typography variant="body2" className="box-welcome">
            Bem-vindo ao DBINCLUI, lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam mattis fringilla dolor, id congue diam
            rhoncus sit amet. Fusce at lacus metus. Maecenas gravida finibus
            ligula, vitae lacinia est. Integer tristique libero non nunc
            faucibus elementum.
          </Typography>
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
          <Typography variant="h3" className="title" id="card1">
            TRADUTOR DE LIBRAS
          </Typography>

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
          <Typography variant="h3" className="title" id="card2">
            GUIA DE ACESSIBILIDADE
          </Typography>
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
          <Typography variant="h3" className="title" id="card3">
            GUIA DA CULTURA SURDA
          </Typography>
          <div className="box-libras">
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
