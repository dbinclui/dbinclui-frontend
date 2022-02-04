import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import validateInput, { InputInterfaceProps } from './validator';
import { postDigitalContent } from '@services/digitalContent';
import { act } from 'react-dom/test-utils';
import { AxiosResponse } from 'axios';
import { fireEvent } from '@testing-library/dom';
import UpdateDigitalContent from './index';

jest.mock('./validator');
jest.mock('@services/guides');
const validateInputMock = validateInput as jest.MockedFunction<
  typeof validateInput
>;
const postDigitalContentMock = postDigitalContent as jest.MockedFunction<
  typeof postDigitalContent
>;

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
    useNavigate: () => mockedNavigate,
  };
});

describe('Página de atualização de conteúdo digital', () => {
  test('Deve mostrar um formulário', () => {
    render(<UpdateDigitalContent />);

    const textoLabelGuia = 'Guia:';
    const textoLabelCategoria = 'Categoria:';
    const textoLabelTitulo = 'Título:';
    const textoLabelDescricao = 'Descrição:';

    const labelGuia = screen.getByText(textoLabelGuia);
    const labelCategoria = screen.getByText(textoLabelCategoria);
    const labelTitulo = screen.getByText(textoLabelTitulo);
    const labelDescricao = screen.getByText(textoLabelDescricao);

    const input = screen.getByLabelText(textoLabelTitulo, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    expect(labelGuia).toBeInTheDocument();
    expect(labelCategoria).toBeInTheDocument();
    expect(labelTitulo).toBeVisible();
    expect(labelDescricao).toBeVisible();
    expect(input).toBeVisible();
    expect(textArea).toBeVisible();
  });

  test('Deve atualizar o valor dos campos de input quando o valor destes mudar', () => {
    render(<UpdateDigitalContent />);

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
      render(<UpdateDigitalContent />);
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

  // test('Deve chamar a função postDigitalContent quando o botão do submit for clicado', async () => {
  //   // eslint-disable-next-line testing-library/no-unnecessary-act
  //   act(() => {
  //     render(<UpdateDigitalContent />);
  //   });
  //   const textoNoBotaoSubmit = 'Atualizar';
  //   const botaoSubmit = screen.getByText(textoNoBotaoSubmit);
  //   // eslint-disable-next-line testing-library/no-unnecessary-act
  //   act(() => {
  //     userEvent.click(botaoSubmit);
  //   });
  //   await waitFor(() => {
  //     expect(postDigitalContentMock).toBeCalled();
  //   });
  // });

  //   test('Deve mostrar na tela o card de notificação de sucesso quando o botão de submit for clicado', async () => {
  //     // eslint-disable-next-line testing-library/no-unnecessary-act
  //     act(() => {
  //       render(<UpdateDigitalContent />);
  //     });

  //     validateInputMock.mockResolvedValue(true as unknown as InputInterfaceProps);
  //     postGuidesMock.mockResolvedValue(true as unknown as Promise<AxiosResponse>);
  //     const textoNoBotaoSubmit = 'Atualizar';
  //     const NotificationMessage = 'Atualizado realizado com sucesso! ✔';
  //     const botaoSubmit = screen.getByText(textoNoBotaoSubmit);
  //     // eslint-disable-next-line testing-library/no-unnecessary-act
  //     act(() => {
  //       userEvent.click(botaoSubmit);
  //     });

  //     const NotificationCard = await screen.findByText(NotificationMessage);

  //     expect(NotificationCard).toBeVisible();
  //   });

  //   test('Deve mostrar na tela o card de notificação de erro quando o botão de submit for clicado', async () => {
  //     act(() => {
  //       render(<UpdateDigitalContent />);
  //     });

  //     const errorMessage = 'Erro';
  //     const throwError = new Error(errorMessage);

  //     validateInputMock.mockImplementation(() => {
  //       throw throwError;
  //     });
  //     postGuidesMock.mockResolvedValue(true as unknown as Promise<AxiosResponse>);
  //     const textoNoBotaoSubmit = 'Atualizar';
  //     const NotificationMessage = errorMessage;
  //     const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

  //     act(() => {
  //       userEvent.click(botaoSubmit);
  //     });

  //     const NotificationCard = await screen.findByText(NotificationMessage);

  //     expect(NotificationCard).toBeVisible();
  //   });
  // });

  test('Botão Voltar deve redirecionar para admin', () => {
    render(<UpdateDigitalContent />);
    const button = screen.getByTestId('back');

    fireEvent.click(button);

    expect(button).toHaveAttribute('to', '/admin');
  });
});
