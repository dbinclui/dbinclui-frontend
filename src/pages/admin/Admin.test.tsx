import React from 'react';
import Admin from '.';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('react-router-dom');

describe('Página do Administrador', () => {
  test('Deve mostrar os botões de criação de guias', () => {
    render(<Admin />);
    const buttonRegisterGuideText = 'Cadastrar Guia';
    const buttonRegisterCategoryText = 'Cadastro de Categorias';
    const buttonRegisterContentText = 'Cadastro de Conteúdo digital';
  
    const buttonRegisterGuide = screen.getByText(buttonRegisterGuideText);
    const buttonRegisterCategory = screen.getByText(buttonRegisterCategoryText);
    const buttonRegisterContent = screen.getByText(buttonRegisterContentText);

    expect(buttonRegisterGuide).toBeTruthy();
    expect(buttonRegisterCategory).toBeTruthy();
    expect(buttonRegisterContent).toBeTruthy();
  });
  test('O botão deve redirecionar o user para outra página', () => {
    render(<Admin />);
    const buttonRegisterGuideText = 'Cadastrar Guia';
    const buttonRegisterCategoryText = 'Cadastro de Categorias';
    const buttonRegisterContentText = 'Cadastro de Conteúdo digital';
  
    const buttonRegisterGuide = screen.getByText(buttonRegisterGuideText);
    const buttonRegisterCategory = screen.getByText(buttonRegisterCategoryText);
    const buttonRegisterContent = screen.getByText(buttonRegisterContentText);

    
  });
});
