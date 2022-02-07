import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DialogBoxConfirmation from '@components/DialogBox/DialogBoxConfirmation';


describe('Componente de diálogo de confirmação', () => {

 test('Deve fechar a notificação quando o botão de nâo for clicado', () => {
  const message = 'Mensagem de Exclusão';
  render(<DialogBoxConfirmation id='' type=''/>);

  const closeButtonText = 'Não';
  const closeButton = screen.getByTitle(closeButtonText);

  userEvent.click(closeButton);

  const dialogComponent = screen.queryByText(message);

  expect(dialogComponent).not.toBeVisible();
});

test('Deve chamar a função passada pela propriedade onClose quando a notificação for fechada', () => {
  const message = 'Teste de notificação';
  const onCloseFunction = jest.fn();
  render(
   <DialogBoxConfirmation id='' type='' onClose={onCloseFunction}/>
  );

  const closeButtonText = 'Não';
  const closeButton = screen.getByTitle(closeButtonText);
  userEvent.click(closeButton);
  expect(onCloseFunction).toBeCalled();
});
});
