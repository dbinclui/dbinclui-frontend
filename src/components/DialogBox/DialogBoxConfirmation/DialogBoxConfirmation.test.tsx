import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import DialogBoxConfirmation from '@components/DialogBox/DialogBoxConfirmation';

describe('Componente de diálogo de confirmação', () => {
  /*test('Deve fechar a notificação quando o botão de nâo for clicado', () => {
    render(
      <DialogBoxConfirmation confirmation={true} setConfirmation={() => {}} />,
    );

    const button = screen.getByTestId('nao');
    userEvent.click(button);
    const dialog = screen.getByTestId('dialog');
    expect(dialog).not.toBeVisible();
  });*/

  test('Deve chamar a função passada pela propriedade onClose quando a notificação for fechada', () => {
    const onCloseFunction = jest.fn();
    render(
      <DialogBoxConfirmation
        confirmation={true}
        setConfirmation={() => {}}
        onClose={onCloseFunction}
      />,
    );

    const button = screen.getByTestId('nao');
    userEvent.click(button);
    expect(onCloseFunction).toBeCalled();
  });

  test('Deve chamar a função passada pela propriedade onClose quando a guia for apagada', () => {
    const onCloseFunction = jest.fn();
    render(
      <DialogBoxConfirmation
        confirmation={true}
        setConfirmation={() => {}}
        onClose={onCloseFunction}
      />,
    );

    const button = screen.getByTestId('sim');
    userEvent.click(button);
    expect(onCloseFunction).toBeCalled();
  });
});
