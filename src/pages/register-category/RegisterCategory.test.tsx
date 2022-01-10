import React from 'react';
import RegisterCategory from '@pages/register-category';
import { render, screen, fireEvent, within, getByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

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

    expect(labelDescricao).toBeTruthy();
    expect(labelCategoria).toBeTruthy();
    expect(labelGuia).toBeTruthy();
    expect(input).toBeTruthy();
    expect(textArea).toBeTruthy();
  });

  test('Deve atualizar o valor dos campos de input quando o valor destes mudar', () => {
   const {getByRole} = render(<RegisterCategory />);

    const textoLabelGuia = 'Guia:';
    const textoLabelCategoria = 'Categoria:';
    const textoLabelDescricao = 'Descrição:';

    const select = screen.getByLabelText(textoLabelGuia, {
      selector: 'select',
    });
    const input = screen.getByLabelText(textoLabelCategoria, {
      selector: 'input',
    });
    const textArea = screen.getByLabelText(textoLabelDescricao, {
      selector: 'textarea',
    });

    const inputText = 'Esse é o texto presente no elemento input';
    const textAreaText =
      'Esse é o texto presente no elemento textarea\n Ele aceita novas linhas';
    const selectText = 'Guia de acessibilidade';

    userEvent.type(input, inputText);
    userEvent.type(textArea, textAreaText);
    userEvent.type(select, selectText);

    fireEvent.mouseDown(getByRole('select'));
    const listbox = within(getByRole('option'));
    fireEvent.click(listbox.getByText(/Guia de acessibilidade/i) as HTMLElement);

    expect(getByRole('heading').toHaveTextContent(/Guia de acessibilidade/i));

    expect(input).toHaveValue(inputText);
    expect(textArea).toHaveValue(textAreaText);
    // expect(select).toHaveTextContent(selectText);
  });
});
