import React, { useState } from 'react';
import validateInput from './validator';

export const RegisterGuide: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const valid = await validateInput({
      title,
      description,
    });

    // isso é temporário, apenas para confirmar o resultado
    console.log(valid);
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
