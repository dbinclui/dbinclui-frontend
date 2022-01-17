import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './404';
import Error404 from './404';
import Error404Contrast from '../../components/svgs/404Contrast';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';

describe('Componente 404', () => {
  test('deve mostrar o 404 error', () => {
    expect(Error404).toBeTruthy();
  });

  it('Exibir imagem 404 default', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme('Error404')}>
        <Error404 />
      </ThemeProvider>,
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('error 404')).toBeInTheDocument();
  });

  it('Exibir imagem 404 com contrast', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme('contrast')}>
        <Error404Contrast/>
      </ThemeProvider>,
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('error 404')).toBeInTheDocument();
  });

  test('deve mostrar mensagem de erro', () => {
    render(<Error />);
    screen.getByLabelText(/desculpe, a página não foi encontrada!/i);
  });

});