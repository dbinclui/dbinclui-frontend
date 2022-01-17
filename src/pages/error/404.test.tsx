import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './404';
import Error404 from './404';
import Error404Contrast from './404';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';

it('Exibir imagem 404 default', () => {
  const { getByTitle } = render(
    <ThemeProvider theme={theme('default')}>
      <Error404 />
    </ThemeProvider>,
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTitle('Logo')).toBeInTheDocument();
});

it('Exibir imagem 404 com contrast', () => {
  const { getByTitle } = render(
    <ThemeProvider theme={theme('contrast')}>
      <Error404Contrast />
    </ThemeProvider>,
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTitle('Logo')).toBeInTheDocument();
});

test('deve mostrar mensagem de erro', () => {
  render(<Error />);
  screen.getByText(/desculpe, a página não foi encontrada!/i);
});
