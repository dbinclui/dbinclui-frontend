import React from 'react';
import {
  getByLabelText,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import ListDigitalContent from '@pages/list-digital-content/index';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
    useNavigate: () => mockedNavigate,
  };
});

describe('Página de listagem de conteúdo digital', () => {
  beforeEach(() => {
    
  });

  

test('Deve o título da página', () => {
  render(<ListDigitalContent />);
 
  const textLabelTitle = 'LISTAGEM DE CONTEÚDO DIGITAL';
  const LabelTitle = screen.getByText(textLabelTitle);
  expect(LabelTitle).toBeVisible();
 });
  
 /*
 test('Deve ser possível visualizar a tabela', () => {
  render(<ListDigitalContent />);
  const tabela = screen.getByTestId('dataGrid');
  
  expect(tabela.getAttribute('pageSize')).toBe('10');
 }); 
 */
 test('Botão Novo deve redirecionar para cadastro de conteúdo digital', () => {
  render(<ListDigitalContent />);
  const button = screen.getByTestId('new');
 
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