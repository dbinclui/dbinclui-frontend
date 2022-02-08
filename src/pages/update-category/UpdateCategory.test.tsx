import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import validateInput, { InputInterface } from './validator';
import { getCategoriesById, putCategories } from '@services/categories';
import { GuideInterface, getGuides } from '@services/guides';
import { act } from 'react-dom/test-utils';
import { AxiosResponse } from 'axios';
import { UpdateCategory } from '@pages/update-category';
import { useParams } from 'react-router';

jest.mock('./validator');
jest.mock('@services/categories');
jest.mock('@services/guides');

const getCategoriesByIdMock = getCategoriesById as jest.MockedFunction<
  typeof getCategoriesById
>;

const validateInputMock = validateInput as jest.MockedFunction<
  typeof validateInput
>;
const putCategoryMock = putCategories as jest.MockedFunction<
  typeof putCategories
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

describe('Página para atualizar categorias', () => {
  const mockCategory = {
    id: '1',
    title: 'teste',
    content: 'test',
  };
  beforeEach(() => {
    getCategoriesByIdMock.mockResolvedValue({
      data: { data: mockCategory },
    } as any);
  });

  test('Deve mostrar um formulário', async () => {
    render(<UpdateCategory />);

    const textoLabelGuia = 'Guia:';
    const textoLabelCategoria = 'Categoria:';
    const textoLabelDescricao = 'Descrição:';

    const labelGuia = await screen.findByText(textoLabelGuia);
    const labelCategoria = await screen.findByText(textoLabelCategoria);
    const labelDescricao = await screen.findByText(textoLabelDescricao);

    const input = screen.getByLabelText(textoLabelCategoria, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    expect(labelGuia).toBeVisible();
    expect(labelCategoria).toBeVisible();
    expect(labelDescricao).toBeVisible();
    expect(input).toBeVisible();
    expect(textArea).toBeVisible();
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
  test('Os inputs devem receber o valor dos campos da categoria selecionada', async () => {
    render(<UpdateCategory />);

    const textoLabelCategoria = 'Categoria:';
    const textoLabelDescricao = 'Descrição:';

    const selectGuide = await screen.findByTestId('guideTestId');
    fireEvent.change(selectGuide);

    const input = await screen.findByLabelText(textoLabelCategoria, {
      selector: 'input',
    });
    const textArea = await screen.findByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    expect(input).toHaveValue();
    expect(textArea).toHaveValue();
  });
  test('Deve atualizar o valor dos campos de input quando o valor destes mudar', async () => {
    render(<UpdateCategory />);

    const textoLabelCategoria = 'Categoria:';
    const textoLabelDescricao = 'Descrição:';
    const selectGuide = await screen.findByTestId('guideTestId');
    fireEvent.change(selectGuide);

    const input = await screen.findByLabelText(textoLabelCategoria, {
      selector: 'input',
    });
    const textArea = await screen.findByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    const inputText = ' teste';
    const areaText = '';

    userEvent.type(input, inputText);
    userEvent.type(textArea, areaText);

    expect(input).toHaveValue(`teste${inputText}`);
    expect(textArea).toHaveValue(`teste${areaText}`);
  });

  test('Deve mostrar na tela o card de notificação de sucesso quando o botão de submit for clicado', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<UpdateCategory />);
    });

    validateInputMock.mockResolvedValue(true as unknown as InputInterface);
    putCategoryMock.mockResolvedValue(
      true as unknown as Promise<AxiosResponse>,
    );
    const textoNoBotaoSubmit = 'Atualizar';
    const NotificationMessage = 'Cadastro atualizado com sucesso! ✔';
    const botaoSubmit = await screen.findByText(textoNoBotaoSubmit);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(botaoSubmit);
    });

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
    expect(validateInputMock).toBeCalled();
    expect(putCategoryMock).toBeCalled();
  });
  test('Deve validar o input quando o botão de submit for clicado', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<UpdateCategory />);
    });

    const textoBotaoSubmit = 'Atualizar';
    const botaoSubmit = await screen.findByText(textoBotaoSubmit);

    act(() => {
      userEvent.click(botaoSubmit);
    });

    await waitFor(() => {
      expect(validateInputMock).toBeCalled();
    });
  });
  test('Deve chamar a função putCategory quando o botão do submit for clicado', async () => {
    act(() => {
      render(<UpdateCategory />);
    });
    const textoNoBotaoSubmit = 'Atualizar';
    const botaoSubmit = await screen.findByText(textoNoBotaoSubmit);

    act(() => {
      userEvent.click(botaoSubmit);
    });
    await waitFor(() => {
      expect(putCategoryMock).toBeCalled();
    });
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
    const botaoSubmit = await screen.findByText(textoNoBotaoSubmit);

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
});
