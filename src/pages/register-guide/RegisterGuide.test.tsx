import React from 'react';
import RegisterGuide from './index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Página de cadastro de nova guia', () => {
  test('Deve mostrar um formulário', () => {
    render(<RegisterGuide />);

    const textoLabelTitulo = 'Título';
    const textoLabelDescricao = 'Descrição';

    const labelTitulo = screen.getByText(textoLabelTitulo);
    const labelDescricao = screen.getByText(textoLabelDescricao);

    const input = screen.getByLabelText(textoLabelTitulo);
    const textArea = screen.getByLabelText(textoLabelDescricao);

    expect(labelTitulo).toBeTruthy();
    expect(labelDescricao).toBeTruthy();
    expect(input).toBeTruthy();
    expect(textArea).toBeTruthy();
  });

  test('Deve executar a função handleSubmit quando o botão de submit for clicado', () => {
    render(<RegisterGuide />);
  });
});
