import React from 'react';
import { RegisterCategory } from '@pages/register-category';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import validateInput, { InputInterface } from './validator';
import { postCategories } from '@services/categories';
import { act } from 'react-dom/test-utils';
import { AxiosResponse } from 'axios';

jest.mock('./validator');
jest.mock('@services/categories');

const validateInputMock = validateInput as jest.MockedFunction<
  typeof validateInput
>;
const postCategoryMock = postCategories as jest.MockedFunction<
  typeof postCategories
>;

describe('Página de cadastro de categorias', () => {
  /* 
  test('Deve mostrar um formulário', () => {
    render(<RegisterCategory />);

    const textLabelGuide = 'Guia:';
    const textLabelCategory = 'Categoria:';
    const textLabelDescription = 'Descrição:';

    const labelGuide = screen.getByText(textLabelGuide);
    const labelCategory = screen.getByText(textLabelCategory);
    const labelDescription = screen.getByText(textLabelDescription);

    const input = screen.getByLabelText(textLabelCategory, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textLabelDescription, {
      selector: 'textarea',
    });

    expect(labelDescription).toBeVisible();
    expect(labelCategory).toBeVisible();
    expect(labelGuide).toBeVisible();
    expect(input).toBeVisible();
    expect(textArea).toBeVisible();
  });
 */
  test('Deve verificar se o ID da label corresponde ao aria-labelledby', () => {
    render(<RegisterCategory />);

    const textLabelGuide = 'guideLabel';
    const textoLabelCategory = 'categoryLabel';
    const textoLabelDescription = 'descriptionLabel';

    const idGuide = screen.getByTestId('guideTestId');
    const idCategory = screen.getByTestId('categoryTestId');
    const idDescription = screen.getByTestId('descriptionTestId');

    expect(idGuide).toHaveAttribute('aria-labelledby', textLabelGuide);
    expect(idCategory).toHaveAttribute('aria-labelledby', textoLabelCategory);
    expect(idDescription).toHaveAttribute(
      'aria-labelledby',
      textoLabelDescription,
    );
  });

  test('Deve atualizar o valor dos campos de input quando o valor destes mudar', () => {
    render(<RegisterCategory />);

    const textLabelGuide = 'Guia:';
    const textLabelCategory = 'Categoria:';
    const textLabelDescription = 'Descrição:';

    const inputGuide = screen.getByLabelText(textLabelGuide, {
      selector: 'input',
    });

    const inputCategory = screen.getByLabelText(textLabelCategory, {
      selector: 'input',
    });

    const textArea = screen.getByLabelText(textLabelDescription, {
      selector: 'textarea',
    });

    /*  const inputSelection = mount(
       <RegisterCategory value="es" onChange={jest.fn()} />,
     ); */
    const inputSelection = 'teste';
    const inputText = 'Texto presente no elemento categoria';
    const textAreaText =
      'Esse é o texto presente no elemento textarea\n Ele aceita novas linhas';

    //expect(wrapper.find('select').props().value).toBe('10:00');
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
