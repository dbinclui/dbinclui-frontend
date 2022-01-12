import React from 'react';
import RegisterGuide from './index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import validateInput, { InputInterface } from './validator';
import { postGuides } from '@services/guides'; 
import { act } from 'react-dom/test-utils';
import { AspectRatio } from '@mui/icons-material';
import { AxiosResponse } from 'axios';

jest.mock('./validator');
jest.mock('@services/guides');
const validateInputMock = validateInput as jest.MockedFunction<typeof validateInput>
const postGuidesMock = postGuides as jest.MockedFunction<typeof postGuides>

describe('Página de cadastro de nova guia', () => {
  test('Deve mostrar um formulário', () => {
    render(<RegisterGuide />);

    const textoLabelTitulo = 'Título:';
    const textoLabelDescricao = 'Descrição:';

    const labelTitulo = screen.getByText(textoLabelTitulo);
    const labelDescricao = screen.getByText(textoLabelDescricao);

    const input = screen.getByLabelText(textoLabelTitulo, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    expect(labelTitulo).toBeVisible();
    expect(labelDescricao).toBeVisible();
    expect(input).toBeVisible();
    expect(textArea).toBeVisible();
  });

  test('Deve atualizar o valor dos campos de input quando o valor destes mudar', () => {
    render(<RegisterGuide />);

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

  test('Deve validar o input quando o botão de submit for clicado', () => {
    render(<RegisterGuide />);

    const textoBotaoSubmit = 'Salvar';
    const botaoSubmit = screen.getByText(textoBotaoSubmit);

    userEvent.click(botaoSubmit);

    expect(validateInput).toBeCalled();
  });

  test('Deve chamar a função postGuides quando o botão do submit for clicado', () => {
    render(<RegisterGuide />);

    const textoNoBotaoSubmit = 'Salvar';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);

    userEvent.click(botaoSubmit);

    expect(postGuides).toBeCalled();
  });

  test('Deve mostrar na tela o card de notificação de sucesso quando o botão de submit for clicado', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      render(<RegisterGuide />);
    });
      
    validateInputMock.mockResolvedValue(true as unknown as InputInterface);
    postGuidesMock.mockResolvedValue(true as unknown as Promise<AxiosResponse>)
    const textoNoBotaoSubmit = 'Salvar';
    const NotificationMessage = 'alert';
    const botaoSubmit = screen.getByText(textoNoBotaoSubmit);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      userEvent.click(botaoSubmit);
    }); 
    const NotificationCard = screen.getByRole(NotificationMessage);
    
    screen.debug()
    expect(NotificationCard).toBeVisible();
  })
});
// await new Promise((r) => setTimeout(r, 2000));
