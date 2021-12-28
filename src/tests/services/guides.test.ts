// import { AxiosInstance } from 'axios';
import { getGuides } from '../../services/guides';
import api from '../../services/api';

jest.mock('../../services/api');

const apiMock = api as jest.Mocked<typeof api>;

describe('Testando o serviço "guides"', () => {
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
