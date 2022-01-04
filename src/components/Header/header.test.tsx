import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import  Header, { MenuItems }  from './index';
import { useHref } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
  };
});


describe('Componente Header', () => {
    test('deve mostrar o header', () => {
        expect(Header).toBeTruthy();
      })

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

        
})

