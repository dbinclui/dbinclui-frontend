import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import ListDigitalContent from './index';

jest.mock('react-router-dom', () => {
  const useNavigate = jest.fn();
  return {
    useNavigate,
  };
});
describe('Página de listagem de conteúdo digital', () => {
  beforeEach(() => {});

  test('Deve ter o título da página', () => {
    render(<ListDigitalContent />);

    const textLabelTitle = 'LISTAGEM DE CONTEÚDO DIGITAL';
    const LabelTitle = screen.getByText(textLabelTitle);
    expect(LabelTitle).toBeVisible();
  });
  test('Botão Novo deve redirecionar para cadastro de conteúdo digital', () => {
    render(<ListDigitalContent />);
    const button = screen.getByTestId('new');

    fireEvent.click(button);

    expect(button.getAttribute('to')).toBe('/admin/cadastrar-conteudo-digital');
  });

  test('Botão Voltar deve redirecionar para admin', () => {
    render(<ListDigitalContent />);
    const button = screen.getByTestId('back');

    fireEvent.click(button);

    expect(button.getAttribute('to')).toBe('/admin');
  });
});
