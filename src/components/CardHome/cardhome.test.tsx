import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { useHref } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CardHome from '.';
import Home, { CardItems } from '@pages/home';

jest.mock('react-router-dom', () => {
  const useHref = jest.fn();
  return {
    useHref,
  };
});

describe('Componente CardHome', () => {
  const title = 'Título Card';
  const path = '/titulo-card';
  const key = 2;
  test('Deve renderizar o título', () => {
    render(<CardHome title={title} path={path} key={key} />);

    screen.getByText(title, { selector: 'h5' });
  });

  test('Deve ser renderizado o aria-label', () => {
    render(<CardHome title={title} path={path} tabIndex={key} />);

    const ariaLabel = screen.getByRole('button');
    expect(ariaLabel.getAttribute('aria-label')).toBe(title);
    expect(ariaLabel.tabIndex).toBe(key);
  });

  test('Deve conter o link de redirecionamento', () => {
    render(<CardHome title={title} path={path} tabIndex={key} />);

    const link = screen.getByTestId('cardHome');
    expect(link.getAttribute('to')).toBe(path);
  });
});
