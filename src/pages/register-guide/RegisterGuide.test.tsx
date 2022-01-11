import React from 'react';
import RegisterGuide from './index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import validateInput from './validator';
import { postGuides } from '@services/guides';

jest.mock('./validator');
jest.mock('@services/guides');
describe('Página de cadastro de nova guia', () => {
  test('Deve mostrar um formulário', () => {
    render(<RegisterGuide />);

    const textoLabelTitulo = 'Título:';
    const textoLabelDescricao = 'Descrição:';

    const labelTitulo = screen.getByText(textoLabelTitulo);
    const labelDescricao = screen.getByText(textoLabelDescricao);

    const input = screen.getByLabelText(textoLabelTitulo, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    expect(labelTitulo).toBeVisible();
    expect(labelDescricao).toBeVisible();
    expect(input).toBeVisible();
    expect(textArea).toBeVisible();
  });

  test('Deve atualizar o valor dos campos de input quando o valor destes mudar', () => {
    render(<RegisterGuide />);

    const textoLabelTitulo = 'Título:';
    const textoLabelDescricao = 'Descrição:';

    const input = screen.getByLabelText(textoLabelTitulo, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    const inputText = 'Esse é o texto presente no elemento input';
    const textAreaText =
      'Esse é o texto presente no elemento textarea\n Ele aceita novas linhas';

    userEvent.type(input, inputText);
    userEvent.type(textArea, textAreaText);

    expect(input).toHaveValue(inputText);
    expect(textArea).toHaveValue(textAreaText);
  });

  test('Deve validar o input quando o botão de submit for clicado', () => {
    render(<RegisterGuide />);

    const textoBotaoSubmit = 'Salvar';
    const botaoSubmit = screen.getByText(textoBotaoSubmit);

    userEvent.click(botaoSubmit);

    expect(validateInput).toBeCalled();
  });

  test('Deve chamar a função postGuides quando o botão do submit for clicado', () => {
    render(<RegisterGuide />);

    const textoNoBotaoSubmit = 'Salvar';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

    userEvent.click(botaoSubmit);

    expect(postGuides).toBeCalled();
  });

  test('Deve mostrar na tela o card de notificação quando o botão de submit for clicado', async () => {
    render(<RegisterGuide />);
      
    validateInput.mockResolvedValue(true);
    const textoNoBotaoSubmit = 'Salvar';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

    userEvent.click(botaoSubmit);
  })
});
