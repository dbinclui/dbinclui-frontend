import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import validateInput, { InputInterface } from './validator';
import { postCategories } from '@services/categories';
import { GuideInterface, getGuides } from '@services/guides';
import { act } from 'react-dom/test-utils';
import { AxiosResponse } from 'axios';
import { UpdateCategory } from '@pages/update-category';

jest.mock('./validator');
jest.mock('@services/categories');
jest.mock('@services/guides');

const validateInputMock = validateInput as jest.MockedFunction<
  typeof validateInput
>;
const postCategoryMock = postCategories as jest.MockedFunction<
  typeof postCategories
>;
const getGuidesServiceMock = getGuides as jest.MockedFunction<typeof getGuides>;

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
    useNavigate: () => mockedNavigate,
  };
});

describe('Página de cadastro de categorias', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Deve chamar os guias quando o componente for renderizado', async () => {
    const dataMockMenuItem = [
      {
        _id: 1,
        title: 'teste 1',
        content: 'content 2',
      },
    ];

    getGuidesServiceMock.mockResolvedValue({
      data: {
        data: dataMockMenuItem,
      },
    } as unknown as AxiosResponse<{ data: GuideInterface[] }>);

    act(() => {
      render(<UpdateCategory />);
    });

    await waitFor(() => {
      expect(getGuidesServiceMock).toBeCalled();
    });
  });

  test('Deve mostrar na tela o card de notificação de sucesso quando o botão de submit for clicado', async () => {
    render(<UpdateCategory />);

    validateInputMock.mockResolvedValue(true as unknown as InputInterface);
    postCategoryMock.mockResolvedValue(
      true as unknown as Promise<AxiosResponse>,
    );
    const textoNoBotaoSubmit = 'Atualizar';
    const NotificationMessage = 'Cadastro realizado com sucesso! ✔';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

    userEvent.click(botaoSubmit);

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
    expect(validateInputMock).toBeCalled();
    expect(postCategoryMock).toBeCalled();
  });

  test('Deve mostrar na tela o card de notificação de erro quando o botão de submit for clicado', async () => {
    act(() => {
      render(<UpdateCategory />);
    });

    const errorMessage = 'Erro';
    const throwError = new Error(errorMessage);

    validateInputMock.mockImplementation(() => {
      throw throwError;
    });

    const textoNoBotaoSubmit = 'Atualizar';
    const NotificationMessage = errorMessage;
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

    act(() => {
      userEvent.click(botaoSubmit);
    });

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
    expect(validateInputMock).toBeCalled();
  });

  test('Deve exibir mensagem de erro ao não encontrar guias', async () => {
    getGuidesServiceMock.mockImplementation(() => {
      throw throwError;
    });

    act(() => {
      render(<UpdateCategory />);
    });

    const errorMessage = 'Não foram encontradas as guias';
    const throwError = new Error(errorMessage);

    const ErrorMessage = await screen.findByText(errorMessage);
    expect(ErrorMessage).toBeVisible();
  });

  test('Botão Voltar deve redirecionar para listar categorias', () => {
    render(<UpdateCategory />);
    const button = screen.getByTestId('back');

    expect(button).toHaveAttribute('to', '/admin/listar-categorias');
  });

  test('Deve chamar as funções passadas para a notificação de erro quando esta fechar', async () => {
    const errorMessage = 'Erro';
    const throwError = new Error(errorMessage);
    validateInputMock.mockImplementation(() => {
      throw throwError;
    });

    render(<UpdateCategory />);

    const submitButtonText = 'Atualizar';
    const submitButton = screen.getByText(submitButtonText);

    userEvent.click(submitButton);

    const errorNotification = await screen.findByText(`${errorMessage} 🤔`);

    const closeButtonTitle = 'Fechar';
    const closeButton = screen.getByTitle(closeButtonTitle);
    userEvent.click(closeButton);

    expect(errorNotification).not.toBeVisible();
  });

  test('Deve chamar as funções passadas para a notificação de sucesso quando esta fechar', async () => {
    const dataMockMenuItem = [
      {
        _id: 1,
        title: 'teste 1',
        content: 'content 2',
      },
    ];

    getGuidesServiceMock.mockResolvedValue({
      data: {
        data: dataMockMenuItem,
      },
    } as unknown as AxiosResponse<{ data: GuideInterface[] }>);

    render(<UpdateCategory />);

    validateInputMock.mockResolvedValue(true as unknown as InputInterface);
    postCategoryMock.mockResolvedValue(
      true as unknown as Promise<AxiosResponse>,
    );

    const submitButtonText = 'Atualizar';
    const submitButton = screen.getByText(submitButtonText);

    userEvent.click(submitButton);

    const notificationMessage = 'Cadastro realizado com sucesso! ✔';
    const successNotification = await screen.findByText(notificationMessage);

    const closeButtonTitle = 'Fechar';
    const closeButton = await screen.findByTitle(closeButtonTitle);
    userEvent.click(closeButton);

    expect(successNotification).not.toBeVisible();
  });
});
