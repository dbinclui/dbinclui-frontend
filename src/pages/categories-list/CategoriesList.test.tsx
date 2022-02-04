import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CategoriesList } from './index';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => {
  const useNavigate = jest.fn();
  return {
    useNavigate,
  };
});

describe('Teste do componente', () => {
  test('Deve exibir o título da página', () => {
    render(<CategoriesList />);

    const pageTitle = 'LISTAGEM DE CATEGORIAS';
    const textTitle = screen.getByText(pageTitle);
    expect(textTitle).toBeVisible();
  });
});
