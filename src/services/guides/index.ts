import api from '../api';

export default interface CardGuidesResponse {
  _id?: string;
  title: string;
  content: string;
}

export interface CardBodyInterface {
  title: string;
  content: string;
  id: string;
}

export const getGuides = async () => {
  try {
    return api.get<{ data: CardGuidesResponse[] }>(`/guides/list`);
  } catch {
    throw new Error('Serviço não disponível');
  }
};

export const postGuides = async (cardBody: CardBodyInterface) => {
  try {
    return api.post('/guides/register', cardBody);
  } catch {
    throw new Error('Serviço não disponível');
  }
};
export const putGuides = async (cardBody: CardBodyInterface) => {
  try {
    return api.put('/:id', cardBody);
  } catch {
    throw new Error('Serviço não disponível');
  }
};
