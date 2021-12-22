import React, { useEffect, useState } from 'react';
import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
import AcessibilityGuide from '../../pages/acessibility-guide/index';

// jest.mock('react', () => {
//   return {
//     useEffect: () => null,
//     useState: () => null,
//   };
// });

describe('Página do Guia de Acessibilidade', () => {
  // test('deve mostrar o título da página do Guia de Acessibilidade', () => {
  //   render(<AcessibilityGuide />);
  //   const pageTitleContent = 'Guia de Acessibilidade';
  //   const pageTitle = screen.getByText(pageTitleContent);
  //   expect(pageTitle.textContent).toBe(pageTitleContent);
  // });

  it('Deve exibir o loading quando o conteúdo for carregado na página', () => {});
  it('Deve exibir a mensagem de erro quando o serviço falhar', () => {});
  it('Deve exibir os cards com o título do conteúdo que vem do servidor', () => {});
});
