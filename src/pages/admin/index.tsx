import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box, { BoxProps } from '@mui/material/Box';



export interface AdminProps {}

export const Admin: React.FC<AdminProps> = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>

    <Box >


   <Grid
  container
  direction="column"
 justifyContent="center"
  alignItems="center"
   columnSpacing = {10}>

   <Grid item >

      <Button variant="outlined" size='large'
        onClick={() => {
          navigate('cadastrar-guia');
        } }
      >
        Cadastrar Guia
      </Button></Grid>
    
    
      <Grid item>

        <Button
        variant="outlined" size='large'
          onClick={() => {
            navigate('');
          } }
        >
          Cadastro de Categorias
        </Button>
    
       </Grid>
    
      <Grid item>
      <Button
      variant="outlined"
        onClick={() => {
          navigate('');
        }}
      >
        Cadastro de Conteúdo digital
      </Button>
  </Grid>

    </Grid>

         </Box>


      
      </>

          
      
    
  );
};

export default Admin;
