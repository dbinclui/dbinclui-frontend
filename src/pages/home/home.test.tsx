import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => {
  const useNavigate = jest.fn();
  return {
    useNavigate,
  };
});

describe('Componente do Home', () => {
  test('deve existir um parágrafo na Home', () => {
    render(<Home />);

    const HomeDescription = screen.getByText(
      "Bem-vindo ao DB INCLUI, o DB INCLUI é um web app que dissemina a cultura de inclusão dentro da DBserver, com foco na cultura surda. O web app é destinado para todas as pessoas que desejam aprender LIBRAS e entender um pouco mais sobre Inclusão de PCD's na sociedade. O web app aproveita o Guia de Acessibilidade e a Apostila de Libras como fonte para informação de inclusão, assim como, utiliza a API VLIBRAS para as funcionalidades específicas.",
    );
    console.log(HomeDescription.textContent);
    expect(HomeDescription).toBeInTheDocument();
  });
});
