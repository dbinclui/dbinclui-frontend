import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

export interface AdminProps {}

export const Admin: React.FC<AdminProps> = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          p: 1,
          m: 25,
        }}
      >
        <Grid item sx={{ m: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              navigate('cadastrar-guia');
            }}
            sx={{
              color: 'text.disabled',
              backgroundColor: 'secondary.dark',
              border: '2px solid',
              borderColor: 'text.disabled',
            }}
          >
            Cadastrar Guia
          </Button>
        </Grid>

        <Grid item sx={{ m: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              navigate('cadastrar-categoria');
            }}
            sx={{
              color: 'text.disabled',
              backgroundColor: 'secondary.dark',
              border: '2px solid',
              borderColor: 'text.disabled',
            }}
          >
            Cadastro de Categorias
          </Button>
        </Grid>

        <Grid item sx={{ m: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              navigate('cadastrar-conteudo-digital');
            }}
            sx={{
              color: 'text.disabled',
              backgroundColor: 'secondary.dark',
              border: '2px solid',
              borderColor: 'text.disabled',
            }}
          >
            Cadastro de Conteúdo digital
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default Admin;
