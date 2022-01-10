// import { AxiosInstance } from 'axios';
import {
  getGuides,
  postGuides,
  CardGuidesResponse,
} from '@services/Guides/guides';
import api from '@services/api';
import { title } from 'process';
import { url } from 'inspector';

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

  it(`${postGuides.name}: Postando conteúdo "postGuides"`, async () => {
    const test: CardGuidesResponse = {
      title: 'Test title',
      content: 'Test content',
    };

    apiMock.post.mockResolvedValue({url: "/register", data: test});
    const result = await postGuides(test.title, test.content);
    expect(apiMock.post).toBeCalled();
    expect(result).toStrictEqual(
      JSON.parse(
        '{"data":{"title":"Test title","content":"Test content","_id":"61dc9c435794caf1b38dae01","created_at":"2022-01-10T20:51:15.303Z","updated_at":"2022-01-10T20:51:15.303Z","__v":0}}',
      ),
    );
  });
});
