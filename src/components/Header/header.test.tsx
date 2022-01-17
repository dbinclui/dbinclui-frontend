import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Header, { MenuItems } from './index';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@styles/theme';
import Logo from '../svgs/logo';
import LogoBranca from '@components/svgs/logoBranca';
import { Box } from '@mui/system';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
    useNavigate: () => mockedNavigate,
  };
});

describe('Componente Header', () => {
  test('deve mostrar o header', () => {
    expect(Header).toBeTruthy();
  });

  test('Abrir/Fechar menu mobile', () => {
    render(<Header />);
    const menuMobile = screen.getByTestId('MenuIcon');
    fireEvent.click(menuMobile);
    const layer = screen.getByRole('presentation');
    expect(layer.getAttribute('aria-hidden')).toBe(null);
    fireEvent.click(menuMobile);
    expect(menuMobile.getAttribute('aria-hidden')).toBe('true');
  });

  test.each(MenuItems)('Desktop menu itens: $title', ({ title, href }) => {
    render(<Header />);
    const button = screen.getByText(title, {
      exact: true,
      selector: 'a.menu-item-desktop',
    });
    expect(button).toHaveTextContent(title);
    expect(button.getAttribute('to')).toBe(href);
    fireEvent.click(button);
  });

  test.each(MenuItems)('Mobile item menu: $title', ({ title, href }) => {
    render(<Header />);

    const button = screen.getByText(title, {
      selector: 'p.menu-item-mobile',
    });
    expect(button).toHaveTextContent(title);
    expect(button.getAttribute('to')).toBe(href);
    fireEvent.click(button);
  });

  test('Quando o avatar for clicado, o usuário deve ser levado para a página de administração', () => {
    render(<Header />);

    // O label text nesse caso é o texto do tooltip
    // O MUI define uma tag aria-label com o texto do tooltip no elemento
    // que ele envolve
    const button = screen.getByLabelText('Administrador');

    fireEvent.click(button);

    expect(mockedNavigate).toBeCalled();
    expect(mockedNavigate).toBeCalledWith('admin');
  });

    it('Exibir a logo default', () => {
      const { getByTitle } = render(    
      <ThemeProvider theme={theme('default')}>
        <Header />
      </ThemeProvider>
      );

      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(getByTitle('Logo')).toBeInTheDocument()
    })

    it('Exibir a logo com contrast', () => {
      const { getByTitle } = render(    
        <ThemeProvider theme={theme('contrast')}>
          <Header />
        </ThemeProvider>
        );

        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTitle('Logo')).toBeInTheDocument()
    })



});


