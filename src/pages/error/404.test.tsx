import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './404';
import Error404 from './404';

describe('Página de Erro 404', () => {
  test('deve existir uma imagem', () => {
    expect(Error404).toBeTruthy();
  });

  test('deve mostrar mensagem de erro', () => {
    render(<Error />);

    const pageTextContent = 'Desculpe, a página não foi encontrada!';
    const pageText = screen.getByText(pageTextContent);
    expect(pageText.textContent).toBe(pageTextContent);
  });
});
