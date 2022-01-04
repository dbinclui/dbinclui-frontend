import React, { useState } from 'react';
import validateInput from './validator';

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
