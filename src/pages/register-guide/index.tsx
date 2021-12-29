import React, { useState } from 'react';
import * as yup from 'yup';

export const RegisterGuide: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    validateInput({
      title,
      description,
    });
  }

  async function validateInput(data: { title: string; description: string }) {
    const schema = yup.object().shape({
      title: yup.string().required().min(1).max(32).trim(),
      description: yup.string().required().trim(),
    });

    let valid = await schema.isValid(data);
    return valid;
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
