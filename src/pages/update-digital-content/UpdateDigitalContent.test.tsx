import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import validateInput from './validator';
import { getGuides, GuideInterface } from '@services/guides';
import { postDigitalContent } from '@services/digitalContent';
import { getCategories } from '@services/categories';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/dom';
import { AxiosResponse } from 'axios';
import UpdateDigitalContent from './index';

jest.mock('./validator');
jest.mock('@services/digitalContent');
jest.mock('@services/categories');
jest.mock('@services/guides');

const getGuidesServiceMock = getGuides as jest.MockedFunction<typeof getGuides>;

const getCategoryServiceMock = getCategories as jest.MockedFunction<
  typeof getCategories
>;
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
  beforeEach(() => {
    getCategoryServiceMock.mockClear();
    getGuidesServiceMock.mockClear();
    postDigitalContentMock.mockClear();
    validateInputMock.mockClear();
  });

  test('Deve validar o input quando o botão de submit for clicado', async () => {
    act(() => {
      render(<UpdateDigitalContent />);
    });

    const textoBotaoSubmit = 'Atualizar';
    const botaoSubmit = screen.getByText(textoBotaoSubmit);

    act(() => {
      userEvent.click(botaoSubmit);
    });

    await waitFor(() => {
      expect(validateInputMock).toBeCalled();
    });
  });

  test('Deve mostrar na tela o card de notificação de erro quando o botão de submit for clicado', async () => {
    act(() => {
      render(<UpdateDigitalContent />);
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

  test('Deve verificar se o arquivo está sendo enviado', async () => {
    const fileName = 'teste.pdf';

    render(<UpdateDigitalContent />);

    const noFile = screen.getByText('Nenhum arquivo selecionado');
    expect(noFile).toBeVisible();

    const input = screen.getByTestId('inputFile');
    fireEvent.change(input, { target: { files: [{ name: fileName }] } });

    const elementFileName = await screen.findByText(fileName);
    expect(elementFileName).toBeVisible();
    expect(noFile).not.toBeVisible();
  });

  test('Deve chamar os guias quando o componente for renderizado', async () => {
    const dataMockMenuItem = [
      {
        _id: 1,
        title: 'teste 1',
        content: 'content 2',
        file: [] as any,
      },
    ];

    getGuidesServiceMock.mockResolvedValue({
      data: {
        data: dataMockMenuItem,
      },
    } as unknown as AxiosResponse<{ data: GuideInterface[] }>);

    act(() => {
      render(<UpdateDigitalContent />);
    });

    await waitFor(() => {
      expect(getGuidesServiceMock).toBeCalled();
    });
  });
});
