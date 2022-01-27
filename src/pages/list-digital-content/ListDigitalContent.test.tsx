import React from 'react';
import { ListDigitalContent } from '@pages/list-digital-content';
import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';

describe('Página de listagem de conteúdo digital', () => {
  beforeEach(() => {
   
  });


test('Deve o título da página', () => {
 render(<ListDigitalContent />);

 const textLabelTitle = 'LISTAGEM DE CONTEÚDO DIGITAL';
 const LabelTitle = screen.getByText(textLabelTitle);
 expect(LabelTitle).toBeVisible();
});
 
test('Deve ser possível visualizar a tabela', () => {
 render(<ListDigitalContent />);
 const tabela = screen.getByTestId('dataGrid');
 
 expect(tabela.getAttribute('field')).toBe('Guia');
}); 

test('Botão Novo deve redirecionar para cadastro de conteúdo digital', () => {
 render(<ListDigitalContent />);
 const button = screen.getByTestId('submit');

 fireEvent.click(button);
 
 expect(button.getAttribute('to')).toBe('/admin/cadastrar-conteudo-digital');
});


test('Botão Voltar deve redirecionar para admin', () => {
  render(<ListDigitalContent />);
  const button = screen.getByTestId('back');

  fireEvent.click(button);
  
  expect(button.getAttribute('to')).toBe('/admin');
});
});