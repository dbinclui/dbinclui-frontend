import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import ListDigitalContent from '@pages/list-digital-content/index';

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
