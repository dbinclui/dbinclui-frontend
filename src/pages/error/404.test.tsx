import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './404';
import Error404 from './404';
import Error404Contrast from './404';
import { ThemeProvider } from '@mui/material/styles';
import '@testing-library/jest-dom';
import theme from '@styles/theme';

describe('Component 404', () => {
  test('deve existir uma imagem 404', () => {
    expect(Error404).toBeTruthy();
    expect(Error404Contrast).toBeTruthy();
  });

  test('Exibir erro 404 padrão', () => {
    const { getByTitle } = render(
      <ThemeProvider theme={theme('Error404')}>
        <Error404 />
      </ThemeProvider>,
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTitle('Error-404')).toBeInTheDocument();
  });

  test('Exibir erro 404 com contraste', () => {
    const { getByTitle } = render(
      <ThemeProvider theme={theme('Error404Contrast')}>
        <Error404Contrast />
      </ThemeProvider>,
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTitle('Error-404')).toBeInTheDocument();
  });
  test('deve mostrar mensagem de erro', () => {
    render(<Error />);

    const errorMessage = 'messageError';
    const erroMessageElement = screen.getByTestId(errorMessage);
    expect(erroMessageElement.textContent).toBe(errorMessage);
  });
});
