import React, { useState } from 'react';
import validateInput from './validator';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './styles.css';

export interface RegisterGuideProps {}

export const RegisterGuide: React.FC<RegisterGuideProps> = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      await validateInput({
        title,
        description,
      });
    } catch {}
  }

  return (
    <main className="register-guide-wrapper" role="main">
      <Box className="register-guide-content" component="section">
        <header>
          <Typography variant="h1">CADASTRO DE GUIA</Typography>
        </header>
        <section>
          <Button variant="outlined">Buscar conteúdo digital</Button>
          <form className="register-guide-form" onSubmit={handleSubmit}>
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <Button sx={{ fontWeight: 700 }} variant="outlined" type="submit">
              Salvar
            </Button>
            <Button variant="outlined" type="reset">
              Fechar
            </Button>
          </form>
        </section>
      </Box>
    </main>
  );
};

export default RegisterGuide;
