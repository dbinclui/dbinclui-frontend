import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box, BoxProps } from '@mui/material';



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

    <Grid item sx={{m: 2}} >

      <Button variant="outlined" size='large'
        onClick={() => {
          navigate('cadastrar-guia');
        } }
      >
        Cadastrar Guia
      </Button>
    </Grid>
    
    
    <Grid item sx={{m: 2}} >

      <Button variant="outlined" size='large'
          onClick={() => {
            navigate('');
          } }
        >
          Cadastro de Categorias
      </Button>
    
    </Grid>
    
    <Grid item sx={{m: 2}} >
    <Button variant="outlined" size='large'
        onClick={() => {
          navigate('');
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
