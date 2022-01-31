 import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import validateInput, { InputInterface } from './validator';
import { putGuides } from '@services/guides';
import { act } from 'react-dom/test-utils';
import { AxiosResponse } from 'axios';
import { fireEvent } from '@testing-library/dom';
import UpdateGuide from './index';

jest.mock('./validator');
jest.mock('@services/guides');
const validateInputMock = validateInput as jest.MockedFunction<
  typeof validateInput
>;
const putGuidesMock = putGuides as jest.MockedFunction<typeof putGuides>;

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
    useNavigate: () => mockedNavigate,
  };
});

describe('Página de atualização de guias', () => {
  test('Deve mostrar um formulário com as informações dos guias', () => {
    render(<UpdateGuide />);

    const textoLabelTitulo = 'Título:';
    const textoLabelDescricao = 'Descrição:';

    const labelTitulo = screen.getByText(textoLabelTitulo);
    const labelDescricao = screen.getByText(textoLabelDescricao);
    //adicionar campos guides

    const input = screen.getByLabelText(textoLabelTitulo, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });
    //adicionar mais um const para o guides como select

    expect(labelTitulo).toBeVisible();
    expect(labelDescricao).toBeVisible();
    expect(input).toBeVisible();
    expect(textArea).toBeVisible();

    //label
    //input
  });

  test('Deve atualizar o valor dos campos de input quando o valor destes mudar', () => {
    render(<UpdateGuide />);

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

  test('Deve validar o input quando o botão de submit for clicado', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<UpdateGuide />);
    });

    const textoBotaoSubmit = 'Atualizar';
    const botaoSubmit = screen.getByText(textoBotaoSubmit);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(botaoSubmit);
    });

    await waitFor(() => {
      expect(validateInputMock).toBeCalled();
    });
  });

  test('Deve chamar a função postGuides quando o botão do submit for clicado', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<UpdateGuide />);
    });
    const textoNoBotaoSubmit = 'Atualizar';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(botaoSubmit);
    });
    await waitFor(() => {
      expect(postGuidesMock).toBeCalled();
    });
  });

  test('Deve mostrar na tela o card de notificação de sucesso quando o botão de submit for clicado', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<UpdateGuide />);
    });

    validateInputMock.mockResolvedValue(true as unknown as InputInterface);
    postGuidesMock.mockResolvedValue(true as unknown as Promise<AxiosResponse>);
    const textoNoBotaoSubmit = 'Atualizar';
    const NotificationMessage = 'Cadastro realizado com sucesso! ✔';
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
      render(<UpdateGuide />);
    });

    const errorMessage = 'Erro';
    const throwError = new Error(errorMessage);

    validateInputMock.mockImplementation(() => {
      throw throwError;
    });
    postGuidesMock.mockResolvedValue(true as unknown as Promise<AxiosResponse>);
    const textoNoBotaoSubmit = 'Atualizar';
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
  render(<UpdateGuide />);
  const button = screen.getByTestId('back');

  fireEvent.click(button);

  expect(button.getAttribute('href')).toBe('/admin');
});
