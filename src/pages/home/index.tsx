import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, InputBase, Typography } from '@mui/material';
import { Paper, Box } from '@mui/material';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './style.css';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <main className="conteudo" role="main">
        <section className="container-home">
          <Paper
            component="form"
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 1018,
              borderRadius: '20px',
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, p: 2 }}
              placeholder="Pesquise aqui"
              inputProps={{ 'aria-label': 'pesquise aqui' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          {/*<input
            type="text"
            className="box-busca"
            placeholder="pesquise aqui"
            role="search"
          />*/}
        </section>
      </main>

      <Box
        sx={{
          /*width: '100vh',*/
          mt: 13,
          mr: 24,
          mb: 13,
          ml: 24,
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Grid
          container
          sx={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <Grid item>
            <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
              TRADUTOR DE LIBRAS
            </Typography>
            <Button
              variant="outlined"
              sx={{
                width: '340px',
                height: '295px',
                borderRadius: '20px',
                mb: 2,
              }}
            ></Button>
            {/*<Paper
              sx={{ width: '340px', height: '295px', borderRadius: '20px' }}
            >
              Uma Imagem
            </Paper>*/}
          </Grid>

          <Grid item>
            <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
              GUIA DE ACESSIBILIDADE
            </Typography>
            <Button
              variant="outlined"
              sx={{
                width: '340px',
                height: '295px',
                borderRadius: '20px',
                mb: 2,
              }}
            ></Button>
            {/*<Paper
              sx={{ width: '340px', height: '295px', borderRadius: '20px' }}
            >
              Uma Imagem
            </Paper>*/}
          </Grid>
          <Grid>
            <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
              GUIA DE ACESSIBILIDADE
            </Typography>
            <Button
              variant="outlined"
              sx={{
                width: '340px',
                height: '295px',
                borderRadius: '20px',
                mb: 2,
              }}
            ></Button>
            {/*} <Paper
              sx={{ width: '340px', height: '295px', borderRadius: '20px' }}
            >
              Uma Imagem
          </Paper>*/}
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
      {/*<div className="box-welcome">*/}
      <Typography sx={{ mr: 18, ml: 18 }}>
        Bem-vindo ao DB INCLUI, o DB INCLUI é um web app que dissemina a cultura
        de inclusão dentro da DBserver, com foco na cultura surda. O web app é
        destinado para todas as pessoas que desejam aprender LIBRAS e entender
        um pouco mais sobre Inclusão de PCD&apos;s na sociedade. O web app
        aproveita o Guia de Acessibilidade e a Apostila de Libras como fonte
        para informação de inclusão, assim como, utiliza a API VLIBRAS para as
        funcionalidades específicas.
      </Typography>
      {/* </div> */}
    </>
  );
};

export default Home;
