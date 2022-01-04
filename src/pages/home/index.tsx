import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  IconButton,
  InputBase,
  Typography,
} from '@mui/material';
import { Paper, Box } from '@mui/material';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './style.css';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 13,
          }}
        >
          <div className="container-home">
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
                sx={{ ml: 1, flex: 1, p: 1 }}
                placeholder="Pesquise aqui"
                inputProps={{ 'aria-label': 'pesquise aqui' }}
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>

          <Box
            sx={{
              margin: '6.5rem 12rem',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Grid
              container
              sx={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <Grid item>
                <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                  TRADUTOR DE LIBRAS
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    width: '14.25rem',
                    height: '12rem',
                    borderRadius: '1.25rem',
                    mb: 2,
                  }}
                  tabIndex={2}
                  aria-label="TRADUTOR DE LIBRAS"
                  onClick={() => navigate('/tradutor')}
                ></Button>
              </Grid>

              <Grid item>
                <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                  GUIA DE ACESSIBILIDADE
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    width: '14.25rem',
                    height: '12rem',
                    borderRadius: '1.25rem',
                    mb: 2,
                  }}
                  tabIndex={3}
                  aria-label="GUIA DE ACESSIBILIDADE"
                  onClick={() => navigate('/guia-acessibilidade')}
                ></Button>
              </Grid>
              <Grid>
                <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                  GUIA DE ACESSIBILIDADE
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    width: '14.25rem',
                    height: '12rem',
                    borderRadius: '1.25rem',
                    mb: 2,
                  }}
                  tabIndex={4}
                  aria-label="GUIA DA CULTURA SURDA"
                  onClick={() => navigate('/guia-cultura-surda')}
                ></Button>
              </Grid>
            </Grid>
          </Box>
          <Typography sx={{ mr: 18, ml: 18, textAlign: 'center' }}>
            Bem-vindo ao DB INCLUI, o DB INCLUI é um web app que dissemina a
            cultura de inclusão dentro da DBserver, com foco na cultura surda. O
            web app é destinado para todas as pessoas que desejam aprender
            LIBRAS e entender um pouco mais sobre Inclusão de PCD&apos;s na
            sociedade. O web app aproveita o Guia de Acessibilidade e a Apostila
            de Libras como fonte para informação de inclusão, assim como,
            utiliza a API VLIBRAS para as funcionalidades específicas.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
