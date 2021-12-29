import React, { useState } from 'react';
import * as yup from 'yup';
import { object } from 'yup/lib/locale';

export const RegisterGuide: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Salvar</button>
        <button type="reset">Fechar</button>
      </form>
    </>
  );
};

export default RegisterGuide;
