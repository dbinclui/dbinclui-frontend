import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import DialogBoxConfirmation from '@components/DialogBox/DialogBoxConfirmation';


describe('Componente de diálogo de confirmação', () => {

 test('Deve fechar a notificação quando o botão de nâo for clicado', () => {
  const message = 'Mensagem de Exclusão';
  const message2 = 'Deseja excluir este item?'
  render(<DialogBoxConfirmation id='' type=''/>);

  const button = screen.getByTestId('nao');
  userEvent.click(button);

  const dialogComponent = screen.queryByText(message);
  const dialogComponent2 = screen.queryByText(message2);
  expect(dialogComponent).not.toBeVisible();
  expect(dialogComponent2).not.toBeVisible();
});

test('Deve chamar a função passada pela propriedade onClose quando a notificação for fechada', () => {
  const message = 'Teste de notificação';
  const onCloseFunction = jest.fn();
  render(
   <DialogBoxConfirmation id='' type='' onClose={onCloseFunction}/>
  );

  const button = screen.getByTestId('nao');
  userEvent.click(button);
  expect(onCloseFunction).toBeCalled();
});
});
