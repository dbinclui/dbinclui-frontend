import React from 'react';
import { Container, IconButton, TextField, Paper, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import CardHome, { CardHomeProps } from '@components/CardHome';
import AccessibilityTypography from '@components/AccessibilityTypography';

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
          <Grid item md={12} pt={'45px'} px={'20px'} justifyContent={'center'}>
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
          <Grid item pt={'75px'} md={12}>
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
        </Grid>
      </Container>
    </>
  );
};

export default Home;
