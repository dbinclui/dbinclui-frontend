import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './index';

describe('Counter Component', () => {
  const counterProps = {
    counter: 1,
    add: jest.fn(),
    remove: jest.fn,
  };
  it('Counter: Deve ser dinâmico quando houver ação de adicionar/remover', () => {
    render(<Counter {...counterProps} />);

    const addIcon = screen.getByTestId('AddIcon');
    const removeIcon = screen.getByTestId('RemoveIcon');

    fireEvent.click(addIcon);

    fireEvent.click(removeIcon);
    expect(counterProps.add).toBeCalledTimes(1);

    fireEvent.click(addIcon);
    expect(counterProps.add).toBeCalledTimes(2);

    const counterScreen = screen.getByText(counterProps.counter);
    expect(counterScreen.textContent).toBe(counterProps.counter.toString());
  });
});
