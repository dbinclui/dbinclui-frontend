import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Notification from '.';

describe('Componente de notificação', () => {
  test('Deve renderizar o componente com uma mensagem definida', () => {
    const message = 'Teste de notificação';
    render(<Notification variant="error" message={message} />);

    const notificationComponent = screen.getByText(message);

    expect(notificationComponent).toBeTruthy();
  });

  test('Deve mostrar um título padrão baseado na variante quando nenhum título é especificado', () => {
    const message = 'Teste de notificação';
    const { rerender } = render(
      <Notification variant="error" message={message} />,
    );

    const defaultErrorTitle = 'Erro';
    const defaultSuccessTitle = 'Sucesso';

    const notificationTitleText = 'Título da Notificação';

    let notificationTitle = screen.getByTitle(notificationTitleText);
    expect(notificationTitle).toHaveTextContent(defaultErrorTitle);

    rerender(<Notification variant="success" message={message} />);

    notificationTitle = screen.getByTitle(notificationTitleText);
    expect(notificationTitle).toHaveTextContent(defaultSuccessTitle);
  });

  test('Deve mostrar um título definido pelo usuário quando este está presente', () => {
    const message = 'Teste de notificação';
    const title = 'Esse é um título de teste da notificação';
    render(<Notification variant="error" message={message} title={title} />);

    const notificationTitleText = 'Título da Notificação';

    let notificationTitle = screen.getByTitle(notificationTitleText);
    expect(notificationTitle).toHaveTextContent(title);
  });

  test('Deve fechar a notificação quando o botão de fechar for clicado', () => {
    const message = 'Teste de notificação';
    render(<Notification variant="error" message={message} />);

    const closeButtonText = 'Fechar';
    const closeButton = screen.getByTitle(closeButtonText);

    userEvent.click(closeButton);

    const notificationComponent = screen.queryByText(message);

    expect(notificationComponent).not.toBeVisible();
  });
});
