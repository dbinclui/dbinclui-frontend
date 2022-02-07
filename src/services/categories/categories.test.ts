import { deleteCategory } from '@services/categories';
import api from '@services/api';

jest.mock('@services/api');

const apiMock = api as jest.Mocked<typeof api>;

describe('Testando o serviço "deleteCategory"', () => {
  beforeEach(() => {
    apiMock.delete.mockClear();
  });

  it(`${deleteCategory.name}: Devolvendo conteúdo "deleteCategory"`, async () => {
    const id = '1';
    apiMock.delete.mockResolvedValue([]);
    const result = await deleteCategory(id);
    expect(apiMock.delete).toBeCalledTimes(1);
    expect(result).toStrictEqual([]);
  });

  it(`${deleteCategory.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const id = '1';
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.delete.mockImplementation(() => {
      throw throwError;
    });
    try {
      await deleteCategory(id);
    } catch {}
    expect(apiMock.delete).toBeCalledTimes(1);
    expect(apiMock.delete).toThrow(Error);
    expect(apiMock.delete).toThrow(errorMessage);
  });
});
