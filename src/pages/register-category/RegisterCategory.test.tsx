import { RegisterCategory } from '@pages/register-category';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import validateInput, { InputInterface } from './validator';
import { postCategories } from '@services/categories';
import { getGuides } from '@services/guides';
import { act } from 'react-dom/test-utils';
import { AxiosResponse } from 'axios';
import React from 'react';

jest.mock('./validator');
jest.mock('@services/categories');
jest.mock('@services/guides');
jest.mock('@components/SelectMongo');

const validateInputMock = validateInput as jest.MockedFunction<
  typeof validateInput
>;
const postCategoryMock = postCategories as jest.MockedFunction<
  typeof postCategories
>;
const getGuidesServiceMock = getGuides as jest.MockedFunction<typeof getGuides>;

describe('Página de cadastro de categorias', () => {
  test('Deve chamar os guias quando o componente for renderizado', () => {
    getGuidesServiceMock.mockResolvedValue({ data: [] } as AxiosResponse);

    act(() => {
      render(<RegisterCategory />);
    });
  });

  test('Deve atualizar o valor dos campos de input quando o valor destes mudar', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<RegisterCategory />);

    const textLabelGuide = 'guideTestId';
    const textLabelCategory = 'Categoria:';
    const textLabelDescription = 'Descrição:';

    const inputGuide = screen.getByTestId(textLabelGuide);
    const inputCategory = screen.getByLabelText(textLabelCategory, {
      selector: 'input',
    });

    const textArea = screen.getByLabelText(textLabelDescription, {
      selector: 'textarea',
    });

    const inputSelection = 'es';
    const inputText = 'Texto presente no elemento categoria';
    const textAreaText =
      'Esse é o texto presente no elemento textarea\n Ele aceita novas linhas';

    userEvent.type(inputGuide, inputSelection);
    userEvent.type(inputCategory, inputText);
    userEvent.type(textArea, textAreaText);

    expect(inputGuide).toHaveValue(inputSelection);
    expect(inputCategory).toHaveValue(inputText);
    expect(textArea).toHaveValue(textAreaText);
  });

  test('Deve validar o input quando o botão de submit for clicado', () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // eslint-disable-next-line react/react-in-jsx-scope
      render(<RegisterCategory />);
    });

    const textoBotaoSubmit = 'Salvar';
    const botaoSubmit = screen.getByText(textoBotaoSubmit);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(botaoSubmit);
    });

    expect(validateInput).toBeCalled();
  });

  test('Deve chamar a função postCategory quando o botão do submit for clicado', () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // eslint-disable-next-line react/react-in-jsx-scope
      render(<RegisterCategory />);
    });
    const textoNoBotaoSubmit = 'Salvar';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(botaoSubmit);
    });
    expect(postCategories).toBeCalled();
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
    postCategoryMock.mockResolvedValue(
      true as unknown as Promise<AxiosResponse>,
    );
    const textoNoBotaoSubmit = 'Salvar';
    const NotificationMessage = errorMessage;
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

    act(() => {
      userEvent.click(botaoSubmit);
    });

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
  });
  test('Deve verificar se o formulário foi enviado', () => {
    render(<RegisterCategory />);

    const button = screen.getByTestId('submit');
    fireEvent.click(button);
  });
});
