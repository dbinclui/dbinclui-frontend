// import { AxiosInstance } from 'axios';
import { getGuides, postGuides } from '@services/Guides';
import api from '@services/api';

jest.mock('@services/api');

const apiMock = api as jest.Mocked<typeof api>;

describe('Testando o serviço "getGuides"', () => {
  beforeEach(() => {
    apiMock.get.mockClear();
  });

  it(`${getGuides.name}: Devolvendo conteúdo "getGuides"`, async () => {
    apiMock.get.mockResolvedValue([]);
    const result = await getGuides();
    expect(apiMock.get).toBeCalledTimes(1);
    expect(result).toStrictEqual([]);
  });

  it(`${getGuides.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.get.mockImplementation(() => {
      throw throwError;
    });
    try {
      await getGuides();
    } catch {}
    expect(apiMock.get).toBeCalledTimes(1);
    expect(apiMock.get).toThrow(Error);
    expect(apiMock.get).toThrow(errorMessage);
  });
});

describe('Testando o serviço "postGuides"', () => {
  beforeEach(() => {
    apiMock.post.mockClear();
  });

  it(`Quando ${postGuides.name} é chamado, o resultado deve retornar true
  `, async () => {
    const title = 'Test title';
    const content = 'Teste content';
    const pathExpect = '/register';
    const resultExpect = true;
    apiMock.post.mockResolvedValue(resultExpect);
    const result = await postGuides({title, content});
    expect(result).toBe(resultExpect);
    expect(apiMock.post).toBeCalledWith(pathExpect, { title, content });
  });

  it(`${postGuides.name}: Tratamento de erro quando o serviço não estiver disponível`, async () => {
    const title = 'Test title';
    const content = 'Teste content';
    const errorMessage = 'Serviço não disponível';
    const throwError = new Error(errorMessage);
    apiMock.post.mockImplementation(() => {
      throw throwError;
    });
    try {
      await postGuides({title, content});
    } catch {}
    expect(apiMock.post).toBeCalledTimes(1);
    expect(apiMock.post).toThrow(Error);
    expect(apiMock.post).toThrow(errorMessage);
  });
});
