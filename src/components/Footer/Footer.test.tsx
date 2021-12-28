import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './index';

describe('Componente do Footer', () => {
  test('deve existir um footer na página', () => {
    expect(Footer).toBeTruthy();
  });

  test('deve existir um heading para o título', () => {
    render(<Footer />);

    const FooterTitle = screen.getByRole('heading', { name: 'O DBInclui' });
    expect(FooterTitle).toBeInTheDocument();
  });

  test('deve existir uma classe para o título', () => {
    render(<Footer />);

    const FooterTitleClass = screen.getByRole('heading', {
      name: 'O DBInclui',
    });
    expect(FooterTitleClass).toHaveClass('titulo');
  });

  test('deve existir um parágrafo no footer', () => {
    render(<Footer />);

    const FooterDescription = screen.getByText(
      'Dissemina a cultura de inclusão dentro da DBServer, com foco na cultura surda. É destinado para todas as pessoas que desejam aprender LIBRAS e entender um pouco mais sobre inclusão de PCD`s na sociedade. Também aproveita o guia de acessibilidade e a apostila de Libras como fonte de informação de inclusão, assim como utiliza a API Libras para as funcionalidades específicas.',
    );
    expect(FooterDescription).toBeInTheDocument();
  });

  test('deve existir um texto de direitos autorais', () => {
    render(<Footer />);

    let anoAtual = new Date().getFullYear();
    const FooterCopyright = screen.getByText(
      `© ${anoAtual} DBInclui - Todos os direitos reservados`,
    );
    expect(FooterCopyright).toBeInTheDocument();
  });
});
