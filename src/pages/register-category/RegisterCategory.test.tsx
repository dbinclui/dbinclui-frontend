import React from 'react';
import { RegisterCategory } from '@pages/register-category';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import validateInput, { InputInterface } from './validator';
import { postCategories } from '@services/categories';
import CardGuidesResponse, { getGuides } from '@services/guides';
import { act } from 'react-dom/test-utils';
import { AxiosResponse } from 'axios';

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

describe('Página de cadastro de categorias', () => {
  beforeEach(() => {
    getGuidesServiceMock.mockClear();
    postCategoryMock.mockClear();
    validateInputMock.mockClear();
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
    } as unknown as AxiosResponse<{ data: CardGuidesResponse[] }>);

    act(() => {
      render(<RegisterCategory />);
    });

    await waitFor(() => {
      expect(getGuidesServiceMock).toBeCalled();
    });
  });

  test('Deve mostrar na tela o card de notificação de sucesso quando o botão de submit for clicado', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<RegisterCategory />);
    });

    validateInputMock.mockResolvedValue(true as unknown as InputInterface);
    postCategoryMock.mockResolvedValue(
      true as unknown as Promise<AxiosResponse>,
    );
    const textoNoBotaoSubmit = 'Salvar';
    const NotificationMessage = 'Cadastro ralizado com sucesso! ✔';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(botaoSubmit);
    });

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
    expect(validateInputMock).toBeCalled();
    expect(postCategoryMock).toBeCalled();
  });

  test('Deve mostrar na tela o card de notificação de erro quando o botão de submit for clicado', async () => {
    act(() => {
      render(<RegisterCategory />);
    });

    const errorMessage = 'Erro';
    const throwError = new Error(errorMessage);

    validateInputMock.mockImplementation(() => {
      throw throwError;
    });

    const textoNoBotaoSubmit = 'Salvar';
    const NotificationMessage = errorMessage;
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

    act(() => {
      userEvent.click(botaoSubmit);
    });

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
    expect(validateInputMock).toBeCalled();
  });
});
