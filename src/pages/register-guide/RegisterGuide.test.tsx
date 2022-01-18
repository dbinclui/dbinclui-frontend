import React from 'react';
import RegisterGuide from './index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import validateInput, { InputInterface } from './validator';
import { postGuides } from '@services/guides';
import { act } from 'react-dom/test-utils';
import { AxiosResponse } from 'axios';
import { fireEvent } from '@testing-library/dom';

jest.mock('./validator');
jest.mock('@services/guides');
const validateInputMock = validateInput as jest.MockedFunction<
  typeof validateInput
>;
const postGuidesMock = postGuides as jest.MockedFunction<typeof postGuides>;

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
    useNavigate: () => mockedNavigate,
  };
});

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
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<RegisterGuide />);
    });

    const textoBotaoSubmit = 'Salvar';
    const botaoSubmit = screen.getByText(textoBotaoSubmit);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(botaoSubmit);
    });

    expect(validateInput).toBeCalled();
  });

  test('Deve chamar a função postGuides quando o botão do submit for clicado', () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<RegisterGuide />);
    });
    const textoNoBotaoSubmit = 'Salvar';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(botaoSubmit);
    });
    expect(postGuides).toBeCalled();
  });

  test('Deve mostrar na tela o card de notificação de sucesso quando o botão de submit for clicado', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<RegisterGuide />);
    });

    validateInputMock.mockResolvedValue(true as unknown as InputInterface);
    postGuidesMock.mockResolvedValue(true as unknown as Promise<AxiosResponse>);
    const textoNoBotaoSubmit = 'Salvar';
    const NotificationMessage = 'Cadastro ralizado com sucesso! ✔';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(botaoSubmit);
    });

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
  });

  test('Deve mostrar na tela o card de notificação de erro quando o botão de submit for clicado', async () => {
    act(() => {
      render(<RegisterGuide />);
    });

    const errorMessage = 'Erro';
    const throwError = new Error(errorMessage);

    validateInputMock.mockImplementation(() => {
      throw throwError;
    });
    postGuidesMock.mockResolvedValue(true as unknown as Promise<AxiosResponse>);
    const textoNoBotaoSubmit = 'Salvar';
    const NotificationMessage = errorMessage;
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

    act(() => {
      userEvent.click(botaoSubmit);
    });

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
  });
});

test('Botão Voltar deve redirecionar para admin', () => {
  render(<RegisterGuide />);
  const button = screen.getByTestId('back');

  fireEvent.click(button);

  expect(mockedNavigate).toBeCalled();
  expect(mockedNavigate).toBeCalledWith('admin');
});
