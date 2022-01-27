import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GuideList from './index';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => {
  const useNavigate = jest.fn();
  return {
    useNavigate,
  };
});

describe('Teste da página de listagens de guias', () => {
  test('Deve renderizar a tabela com as guias', () => {
    render(<GuideList />);

    const table = screen.getByRole('grid');
    expect(table).toBeInTheDocument();
  });

  test('Deve ler o título da página', () => {
    render(<GuideList />);

    const title = screen.getByText('LISTAGEM DE GUIAS');
    expect(title).toBeInTheDocument();
  });

  test('Botão Novo deve redirecionar para cadastro de guias', () => {
    render(<GuideList />);
    const button = screen.getByTestId('submit');

    fireEvent.click(button);

    expect(button.getAttribute('to')).toBe('/admin/cadastrar-guia');
  });

  test('Botão Voltar deve redirecionar para admin', () => {
    render(<GuideList />);
    const button = screen.getByTestId('back');

    fireEvent.click(button);

    expect(button.getAttribute('to')).toBe('/admin');
  });

  // test('O botão excluir deve ir para a página de exclusão', () => {
  //   render(<GuideList />);
  //   const buttonDelete = screen.getByTestId('delete');

  //   fireEvent.click(buttonDelete);

  // });
});
