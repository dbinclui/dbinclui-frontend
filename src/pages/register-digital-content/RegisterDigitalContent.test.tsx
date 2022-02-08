import React from 'react';
import { RegisterDigitalContent } from '@pages/register-digital-content';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import validateInput, { InputInterfaceProps } from './validator';
import { postDigitalContent } from '@services/digitalContent';
import { getCategories } from '@services/categories';
import { GuideInterface, getGuides } from '@services/guides';
import { AxiosResponse } from 'axios';
import userEvent from '@testing-library/user-event';

jest.mock('./validator');
jest.mock('@services/digitalContent');
jest.mock('@services/categories');
jest.mock('@services/guides');

const validateInputMock = validateInput as jest.MockedFunction<
  typeof validateInput
>;
const getCategoryServiceMock = getCategories as jest.MockedFunction<
  typeof getCategories
>;
const getGuidesServiceMock = getGuides as jest.MockedFunction<typeof getGuides>;
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

describe('Página de cadastro de categorias', () => {
  beforeEach(() => {
    getCategoryServiceMock.mockClear();
    getGuidesServiceMock.mockClear();
    postDigitalContentMock.mockClear();
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
    } as unknown as AxiosResponse<{ data: GuideInterface[] }>);

    render(<RegisterDigitalContent />);

    await waitFor(() => {
      expect(getGuidesServiceMock).toBeCalled();
    });
  });

  test('Deve mostrar na tela o card de notificação de sucesso quando o botão de submit for clicado', async () => {
    render(<RegisterDigitalContent />);

    validateInputMock.mockResolvedValue(true as unknown as InputInterfaceProps);
    postDigitalContentMock.mockResolvedValue(
      true as unknown as Promise<AxiosResponse>,
    );
    const textoNoBotaoSubmit = 'Salvar';
    const NotificationMessage = 'Cadastro realizado com sucesso! ✔';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

    userEvent.click(botaoSubmit);

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
    expect(validateInputMock).toBeCalled();
    expect(postDigitalContentMock).toBeCalled();
  });

  test('Deve mostrar na tela o card de notificação de erro quando o botão de submit for clicado', async () => {
    render(<RegisterDigitalContent />);

    const errorMessage = 'Erro';
    const throwError = new Error(errorMessage);

    validateInputMock.mockImplementation(() => {
      throw throwError;
    });

    const textoNoBotaoSubmit = 'Salvar';
    const NotificationMessage = errorMessage;
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

    userEvent.click(botaoSubmit);

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
    expect(validateInputMock).toBeCalled();
  });

  test('Deve exibir mensagem de erro ao não encontrar guias', async () => {
    getGuidesServiceMock.mockImplementation(() => {
      throw throwError;
    });

    render(<RegisterDigitalContent />);

    const errorMessage = 'Não foram encontradas as guias';
    const throwError = new Error(errorMessage);

    const ErrorMessage = await screen.findByText(errorMessage);
    expect(ErrorMessage).toBeVisible();
  });

  test('Deve exibir mensagem de erro ao não encontrar categorias', async () => {
    getCategoryServiceMock.mockImplementation(() => {
      throw throwError;
    });

    render(<RegisterDigitalContent />);

    const errorMessage = 'Não foram encontradas as categorias';
    const throwError = new Error(errorMessage);

    const ErrorMessage = await screen.findByText(errorMessage);
    expect(ErrorMessage).toBeVisible();
  });

  test('Deve mostrar um formulário', () => {
    render(<RegisterDigitalContent />);

    const textLabelGuide = 'Guia:';
    const textLabelCategory = 'Categoria:';
    const textLabelTitle = 'Título:';
    const textLabelDescription = 'Descrição:';

    const labelGuide = screen.getByText(textLabelGuide);
    const labelCategory = screen.getByText(textLabelCategory);
    const labelTitle = screen.getByText(textLabelTitle);
    const labelDescription = screen.getByText(textLabelDescription);

    const title = screen.getByLabelText(textLabelTitle, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textLabelDescription, {
      selector: 'textarea',
    });

    expect(labelDescription).toBeVisible();
    expect(labelCategory).toBeVisible();
    expect(labelGuide).toBeVisible();
    expect(labelTitle).toBeVisible();
    expect(title).toBeVisible();
    expect(textArea).toBeVisible();
  });

  test('Deve verificar se o formulário foi enviado', () => {
    render(<RegisterDigitalContent />);

    const button = screen.getByTestId('submit');
    fireEvent.click(button);
  });

  test('Deve verificar se o arquivo está sendo enviado', async () => {
    const fileName = 'teste.pdf';

    render(<RegisterDigitalContent />);

    const noFile = screen.getByText('Nenhum arquivo selecionado');
    expect(noFile).toBeVisible();

    const input = screen.getByTestId('inputFile');
    fireEvent.change(input, { target: { files: [{ name: fileName }] } });

    const elementFileName = await screen.findByText(fileName);
    expect(elementFileName).toBeVisible();
    expect(noFile).not.toBeVisible();
  });
});

test('Botão Voltar deve redirecionar para admin', () => {
  render(<RegisterDigitalContent />);
  const button = screen.getByTestId('back');

  expect(button).toHaveAttribute('to', '/admin/listar-conteudo-digital');
});
