import { render, screen } from '@testing-library/react';
import AcessibilityGuide from '../../pages/acessibility-guide/index';
import CardAcessibilidade from '../../components/Card/index';

describe('Página do Guia de Acessibilidade', () => {
  test('deve mostrar o título da página do Guia de Acessibilidade', () => {
    render(<AcessibilityGuide />);

    const pageTitleContent = 'Guia de Acessibilidade';
    const pageTitle = screen.getByText(pageTitleContent);
    expect(pageTitle.textContent).toBe(pageTitleContent);
  });
});
