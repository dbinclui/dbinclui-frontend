import React from 'react';
import RegisterCategory from '@pages/register-category';
import {
  render,
  screen,
  fireEvent,
  within,
  getByRole,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { getAllByTestId, getByTestId } from '@testing-library/dom';

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

  test('Deve verificar se o id da label corresponde ao do elemento', () => {
    render(<RegisterCategory />);

    const textoLabelGuia = 'guideLabel';
    const textoLabelCategoria = 'categoryLabel';
    const textoLabelDescricao = 'descricaoLabel';

    const idGuia = screen.getByTestId('guideTestId');
    const idCategoria = screen.getByTestId('categoryTestId') as HTMLElement;
    const idDescricao = screen.getByTestId('descriptionTestId');

    //expect(idGuia).toEqual(textoLabelGuia);
    expect(idCategoria.text().equals('Categoria:')).toEqual(true);
  });
});
