import React from 'react';
import { render, screen } from '@testing-library/react';
import AccessibilityTools from './index';
import { fireEvent } from '@testing-library/dom';

describe('AccessibilityTools Component', () => {
  it('AccessibilityTools: Botão de acessibilidade deve ser exibido', () => {
    render(<AccessibilityTools />);
    const acessBtn = screen.getByText('Acessibilidade');
    expect(acessBtn).toBeTruthy();
  });

  it('AccessibilityTools: O Modal deve ser apresentado quando clicado no widget', () => {
    render(<AccessibilityTools />);
    const acessBtn = screen.getByText('Acessibilidade');
    fireEvent.click(acessBtn);
    const modal = screen.getByRole('presentation');
    expect(modal.getAttribute('aria-hidden')).toBeNull();
  });
});
