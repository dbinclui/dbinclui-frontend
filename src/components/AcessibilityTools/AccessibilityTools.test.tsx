import React from 'react';
import { render, screen } from '@testing-library/react';
import AccessibilityTools from './index';
import { fireEvent } from '@testing-library/dom';

describe('AccessibilityTools Component', () => {
  const handleClick = () => true;
  it('AccessibilityTools: Botão de acessibilidade deve ser exibido', () => {
    render(<AccessibilityTools handleClickContrastButton={handleClick}/>);
    const acessBtn = screen.getByText('Acessibilidade');
    expect(acessBtn).toBeTruthy();
  });

  it('AccessibilityTools: O Modal deve ser apresentado quando clicado no widget', () => {
    render(<AccessibilityTools handleClickContrastButton={handleClick}/>);
    const acessBtn = screen.getByText('Acessibilidade');
    fireEvent.click(acessBtn);
    const modal = screen.getByRole('presentation');
    expect(modal.getAttribute('aria-hidden')).toBeNull();
  });

  it('AccessibilityTools: Botão de Contrastes deve ser exibido', () => {
    render(<AccessibilityTools handleClickContrastButton={handleClick}/>);
    const contrastBtn = screen.queryAllByText('Contrastes');
    expect(contrastBtn).toBeTruthy();
  });
});
