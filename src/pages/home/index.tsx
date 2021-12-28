import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


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
          <p className="box-welcome">
            Bem-vindo ao DBINCLUI, lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam mattis fringilla dolor, id congue diam
            rhoncus sit amet. Fusce at lacus metus. Maecenas gravida finibus
            ligula, vitae lacinia est. Integer tristique libero non nunc
            faucibus elementum.
          </p>
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
          <h3 className="title" id="card1">
            TRADUTOR DE LIBRAS
          </h3>

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
          <h3 className="title" id="card2">
            GUIA DE ACESSIBILIDADE
          </h3>
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
          <h3 className="title" id="card3">
            GUIA DA CULTURA SURDA
          </h3>
          <div className="box-libras">
            <img src="" alt="" />
          </div>
        </div>
        <Button variant="contained"> Olá Mundo</Button>;
        <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Radio />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel value="end" control={<Radio />} label="End" />
      </RadioGroup>
    </FormControl>
        

      </section>
    </>

  );
};

export default Home;
