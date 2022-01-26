import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
  test('Deve renderizar a tabela com as guias', () => {
    render(<CategoriesList />);

    const table = screen.getByRole('grid');
    expect(table).toBeInTheDocument();
  });

  test('Deve ir para a tela de edição de categoria ao clicar no botão "editar"', () => {
    render(<CategoriesList />);

    const button = screen.getByTestId('button-edit');

    expect(button).toHaveTextContent('editar');
    expect(button.getAttribute('to')).toBe('/admin/atualizar-categoria');
    fireEvent.click(button);
  });
});
