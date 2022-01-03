import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Paper, Box } from '@mui/material';
import { Grid } from '@mui/material';

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
        </section>
      </main>

      <Box sx={{
        width: 300,
        height: 300,
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'primary.dark',
      }}>
        <Grid container columnSpacing={15} xs={4}>
          <Grid item xs={4}>
            <Paper sx={{m:5}}>xs=6 md=8</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>xs=6 md=8</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>xs=6 md=8</Paper>
          </Grid>
        </Grid>
      </Box>
      {/* <div
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
          {/* <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1> *
        </div> */}
      <div className="box-welcome">
        <Typography>
          Bem-vindo ao DBINCLUI, lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam mattis fringilla dolor, id congue diam rhoncus
          sit amet. Fusce at lacus metus. Maecenas gravida finibus ligula, vitae
          lacinia est. Integer tristique libero non nunc faucibus elementum.
        </Typography>
      </div>
    </>
  );
};

export default Home;
