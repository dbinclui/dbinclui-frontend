import React from 'react';
import { getByText, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import  Header, { MenuItems }  from './index';
import  userEvent  from '@testing-library/user-event';
import { useHref } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { TitleOutlined } from '@mui/icons-material';


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
      test.each(MenuItems)('botão:$title', ({title, href}) => {
        render(<Header/>)
        const button = screen.getAllByText(title);
        expect(button.length).toBe(2);
        const [btnDesktop, btnMobile] = button;
        //console.log(btnDesktop, btnMobile);
        expect(btnDesktop.getAttribute('href')).toBe(href)
        expect(btnDesktop).toHaveTextContent(title)
        expect(btnMobile?.closest('a')?.getAttribute('href')).toBe(href)
        
        // button.forEach((item) => {
        // })
    })

    //test('deve mostrar os botões de navegação', () => {



          
            //expect(buttonHome[0]).toHaveClass("button-teste");
 
            //userEvent.click(screen.getByTestId('button-test'))  
            //expect(screen.getByText('HOME')).toHaveClass('button-test');


    //})
        
})

