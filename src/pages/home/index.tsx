import React from 'react';
import {
  Container,
  IconButton,
  TextField,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import CardHome, { CardHomeProps } from '@components/CardHome';
import AccessibilityTypography from '../../components/AccessibilityTypography';

export interface HomeProps {}

export const CardItems: CardHomeProps[] = [
  {
    title: 'Tradutor de libras',
    path: '/tradutor',
  },
  {
    title: 'Guia de acessibilidade',
    path: '/guia-acessibilidade',
  },
  {
    title: 'Guia da cultura surda',
    path: '/guia-cultura-surda',
  },
];

export const Home: React.FC<HomeProps> = (): JSX.Element => {
  return (
    <>
      <Container>
        <Grid container justifyContent={'center'}>
          <Grid item py={'75px'} md={9}>
            <Paper
              p={'5px'}
              borderRadius={'1.25rem'}
              component={Grid}
              container
              flexDirection={'row'}
              alignItems={'center'}
            >
              <Grid item md={11}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Pesquise aqui"
                  sx={{
                    '&::placeholder': {
                      color: '#222',
                    },
                  }}
                  inputProps={{ 'aria-label': 'pesquise aqui' }}
                />
              </Grid>
              <Grid item md={1}>
                <IconButton
                  type="submit"
                  sx={{
                    width: '100%',
                    borderRadius: '4px',
                  }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={12}>
            <Grid container justifyContent={'center'}>
              {CardItems.map((item, key) => (
                <CardHome
                  title={item.title}
                  path={item.path}
                  key={key}
                  tabIndex={key}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item md={12} py={'45px'} px={'20px'} justifyContent={'center'}>
            <Grid maxWidth={'800px'} m="auto">
              <AccessibilityTypography textAlign={'center'}>
                Bem-vindo ao DB INCLUI, o DB INCLUI é um web app que dissemina a
                cultura de inclusão dentro da DBserver, com foco na cultura
                surda. O web app é destinado para todas as pessoas que desejam
                aprender LIBRAS e entender um pouco mais sobre Inclusão de
                PCD&apos;s na sociedade. O web app aproveita o Guia de
                Acessibilidade e a Apostila de Libras como fonte para informação
                de inclusão, assim como, utiliza a API VLIBRAS para as
                funcionalidades específicas.
              </AccessibilityTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
