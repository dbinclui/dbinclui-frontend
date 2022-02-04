import validateInput from './validator';
describe('Função de validação de dados', () => {
  test('Deve validar corretamente os dados sem erros', async () => {
    const data = {
      title: 'Guia de Acessibilidade',
      content: 'Essa é a guia de acessibilidade',
    };

    return expect(validateInput(data)).resolves.toEqual(data);
  });

  test('Deve apontar erro no tamanho do título', async () => {
    const data = {
      title: 'Guia de Acessibilidade muito muito grande',
      content: 'Essa é a guia de acessibilidade',
    };

    return expect(validateInput(data)).rejects.toThrow(
      'O título é muito grande',
    );
  });

  test('Deve apontar erro na ausência da descrição', async () => {
    const data = {
      title: 'Guia de Acessibilidade',
      content: '',
    };

    return expect(validateInput(data)).rejects.toThrow(
      'A descrição é obrigatória',
    );
  });

  test('Deve apontar erro na ausência de título', async () => {
    const data = {
      title: '',
      content: 'Essa é a guia de acessibilidade',
    };

    return expect(validateInput(data)).rejects.toThrow(
      'O título é obrigatório',
    );
  });
});
