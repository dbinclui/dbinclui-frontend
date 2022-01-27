import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CategoriesList } from './index';
import '@testing-library/jest-dom/extend-expect';
import { DataGrid } from '@mui/x-data-grid';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
    useNavigate: () => mockedNavigate,
  };
});

describe('Teste do componente', () => {
  test('Deve exibir o título da página', () => {
    render(<CategoriesList />);

    const pageTitle = 'LISTAGEM DE CATEGORIAS';
    const textTitle = screen.getByText(pageTitle);
    expect(textTitle).toBeVisible();
  });
  test('Deve renderizar a tabela com as guias', () => {
    render(<CategoriesList />);

    const table = screen.getByRole('grid');
    expect(table).toBeInTheDocument();
  });

  test('Deve ir para a tela de edição de categoria ao clicar no botão "editar"', () => {
    render(<DataGrid columns={[]} rows={[]} />);
    const button = screen.getByTestId('edit');

    fireEvent.click(button);

    expect(mockedNavigate).toBeCalled();
    expect(mockedNavigate).toBeCalledWith('/');
  });

  test('Botão Novo deve redirecionar para cadastro de categoria', () => {
    render(<CategoriesList />);
    const button = screen.getByTestId('new');

    fireEvent.click(button);

    expect(button.getAttribute('to')).toBe('/admin/cadastrar-categoria');
  });

  test('Botão Voltar deve redirecionar para admin', () => {
    render(<CategoriesList />);
    const button = screen.getByTestId('back');

    fireEvent.click(button);

    expect(button.getAttribute('to')).toBe('/admin');
  });
});
