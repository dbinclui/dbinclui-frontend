import React from 'react';
import RegisterGuide, { UpdateGuide } from './index';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import validateInput, { InputInterface } from './validator';
import {
  getGuideById,
  getGuides,
  putGuides,
  postGuides,
} from '@services/guides';
import { act } from 'react-dom/test-utils';
import { AxiosResponse } from 'axios';
import { fireEvent } from '@testing-library/dom';
import { Update } from '@mui/icons-material';

jest.mock('./validator');
jest.mock('@services/guides');

const validateInputMock = validateInput as jest.MockedFunction<
  typeof validateInput
>;

const getGuideByIdMock = getGuideById as jest.MockedFunction<
  typeof getGuideById
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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Página de atualização de guia', () => {
  const mockGuide = {
    id: '1',
    title: 'teste',
    content: 'teste',
  };

  beforeEach(() => {
    getGuideByIdMock.mockResolvedValue({ data: { data: mockGuide } } as any);
  });
  test('Deve mostrar um formulário', async () => {
    render(<UpdateGuide />);

    const textoLabelTitulo = 'Título:';
    const textoLabelDescricao = 'Descrição:';

    const labelTitulo = await screen.findByText(textoLabelTitulo);
    const labelDescricao = await screen.findByText(textoLabelDescricao);

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

  test('Os inputs devem receber o valor dos campos do guia selecionado', async () => {
    render(<UpdateGuide />);

    const textoLabelTitulo = 'Título:';
    const textoLabelDescricao = 'Descrição:';

    const input = await screen.findByLabelText(textoLabelTitulo, {
      selector: 'input',
    });
    const textArea = await screen.findByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    const inputText = 'teste';
    const textAreaText = 'teste';

    expect(input).toHaveValue(inputText);
    expect(textArea).toHaveValue(textAreaText);
  });

  test('Deve atualizar o valor dos campos de input quando o valor destes mudar', async () => {
    render(<UpdateGuide />);

    const textoLabelTitulo = 'Título:';
    const textoLabelDescricao = 'Descrição:';

    const input = await screen.findByLabelText(textoLabelTitulo, {
      selector: 'input',
    });
    const textArea = await screen.findByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    const inputText = ' Esse é o texto presente no elemento input';
    const textAreaText =
      ' Esse é o texto presente no elemento textarea\n Ele aceita novas linhas';

    userEvent.type(input, inputText);
    userEvent.type(textArea, textAreaText);

    expect(input).toHaveValue(`teste${inputText}`);
    expect(textArea).toHaveValue(`teste${textAreaText}`);
  });

  test('Deve validar o input quando o botão de submit for clicado', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<UpdateGuide />);
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

  test('Deve chamar a função putGuides quando o botão do submit for clicado', async () => {

    act(() => {
      render(<UpdateGuide />);
    });
    const textoNoBotaoSubmit = 'Atualizar';
    const botaoSubmit = await screen.findByText(textoNoBotaoSubmit);
    
    act(() => {
      userEvent.click(botaoSubmit);
    });
    await waitFor(() => {
      expect(putGuidesMock).toBeCalled();
    });
  });

  test('Deve mostrar na tela o card de notificação de sucesso quando o botão de submit for clicado', async () => {
    
    act(() => {
      render(<UpdateGuide />);
    });

    validateInputMock.mockResolvedValue(true as unknown as InputInterface);
    putGuidesMock.mockResolvedValue(true as unknown as Promise<AxiosResponse>);
    const textoNoBotaoSubmit = 'Atualizar';
    const NotificationMessage = 'Atualização realizada com sucesso! ✔';
    const botaoSubmit = await screen.findByText(textoNoBotaoSubmit);
    
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
    putGuidesMock.mockResolvedValue(true as unknown as Promise<AxiosResponse>);
    const textoNoBotaoSubmit = 'Atualizar';
    const NotificationMessage = errorMessage;
    const botaoSubmit = await screen.findByText(textoNoBotaoSubmit);

    act(() => {
      userEvent.click(botaoSubmit);
    });

    const NotificationCard = await screen.findByText(NotificationMessage);

    expect(NotificationCard).toBeVisible();
  });

  test('Botão Voltar deve redirecionar para admin', async () => {
    render(<UpdateGuide />);
    const button = await screen.findByTestId('back');
  
    fireEvent.click(button);
  
    expect(button.getAttribute('href')).toBe('/admin');
  });
});

