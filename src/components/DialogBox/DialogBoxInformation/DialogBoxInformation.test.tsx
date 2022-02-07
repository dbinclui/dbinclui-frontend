import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DialogBoxInformation from '@components/DialogBox/DialogBoxInformation';

describe('Componente de caixa de diálogo', () => {
  test('Deve renderizar o componente com uma mensagem definida', () => {
    const message = 'Teste de notificação';
    render(<DialogBoxInformation  message={message} />);

    const dialogBoxInformationComponent = screen.getByText(message);

    expect(dialogBoxInformationComponent).toBeVisible();
  });

  
  test('Deve mostrar um título definido pelo usuário quando este está presente', () => {
    const message = 'Teste de caixa de diálogo';
    const title = 'Esse é um título de teste da caixa de diálogo';
    render(<DialogBoxInformation message={message} title={title} />);

    const dialogBoxInformationComponentTitleText = 'Esse é um título de teste da caixa de diálogo';

    const dialogBoxInformationComponentTitle = screen.getByTitle(dialogBoxInformationComponentTitleText);
    expect(dialogBoxInformationComponentTitle).toHaveTextContent(title);
  });

  test('Deve fechar a caixa de diálogo quando o botão de fechar for clicado', () => {
    const message = 'Teste da caixa de diálogo';
    render(<DialogBoxInformation message={message} />);

    const closeButtonText = 'Fechar';
    const closeButton = screen.getByTitle(closeButtonText);

    userEvent.click(closeButton);

    const dialogBoxInformationComponent = screen.queryByText(message);

    expect(dialogBoxInformationComponent).not.toBeVisible();
  });

  test('Deve chamar a função passada pela propriedade onClose quando a caixa de diálogo for fechada', () => {
    const message = 'Teste de caixa de diálogo';
    const onCloseFunction = jest.fn();
    render(
      <DialogBoxInformation
        message={message}
        onClose={onCloseFunction()}
      />,
    );

    const closeButtonText = 'Fechar';
    const closeButton = screen.getByTitle(closeButtonText);

    userEvent.click(closeButton);

    expect(onCloseFunction()).toBeCalled();
  });
});
