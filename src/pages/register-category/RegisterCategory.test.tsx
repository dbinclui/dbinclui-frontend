import React from 'react';
import { RegisterCategory } from '@pages/register-category';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';

describe('Página de cadastro de categorias', () => {
  test('Deve mostrar um formulário', () => {
    render(<RegisterCategory />);

    const textoLabelGuia = 'Guia:';
    const textoLabelCategoria = 'Categoria:';
    const textoLabelDescricao = 'Descrição:';

    const labelGuia = screen.getByText(textoLabelGuia);
    const labelCategoria = screen.getByText(textoLabelCategoria);
    const labelDescricao = screen.getByText(textoLabelDescricao);

    const input = screen.getByLabelText(textoLabelCategoria, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    expect(labelDescricao).toBeVisible();
    expect(labelCategoria).toBeVisible();
    expect(labelGuia).toBeVisible();
    expect(input).toBeVisible();
    expect(textArea).toBeVisible();
  });

  test('Deve verificar se o ID da label corresponde ao aria-labelledby', () => {
    render(<RegisterCategory />);

    const textoLabelGuia = 'guideLabel';
    const textoLabelCategoria = 'categoryLabel';
    const textoLabelDescricao = 'descriptionLabel';

    const idGuia = screen.getByTestId('guideTestId');
    const idCategoria = screen.getByTestId('categoryTestId');
    const idDescricao = screen.getByTestId('descriptionTestId');

    expect(idGuia).toHaveAttribute('aria-labelledby', textoLabelGuia);
    expect(idCategoria).toHaveAttribute('aria-labelledby', textoLabelCategoria);
    expect(idDescricao).toHaveAttribute('aria-labelledby', textoLabelDescricao);
  });

  test("Deve verificar se o formulário foi enviado", () => {
    render(<RegisterCategory />);

    const botao = screen.getByTestId('submit');
    fireEvent.click(botao);
  })
});
