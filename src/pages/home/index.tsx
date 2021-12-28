import React from 'react';
import './styles.css';

export default function Home() {
  return (
    <>
      <div className="inputPesquisa">
        <input
          type="search"
          aria-label="Pesquisar conteúdo no site"
          placeholder="Pesquisar..."
          autoComplete="off"
        ></input>
      </div>
      <p>Bem-vindo ao DBInclui, </p>
    </>
  );
}
