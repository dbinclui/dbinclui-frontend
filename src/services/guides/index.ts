import api from '../api';

export default interface CardGuidesResponse {
  id?: number;
  title: string;
  content: string;
}

export interface CardBodyInterface {
  title: string;
  content: string;
}

export const getGuides = async () => {
  try {
    return api.get<{
      data: CardGuidesResponse[];
    }>(`accessibility-guide`);
  } catch {
    throw new Error('Serviço não disponível');
  }
};

export const postGuides = async (cardBody: CardBodyInterface) => {
  try {
    return api.post('/register', cardBody);
  } catch {
    throw new Error('Serviço não disponível');
  }
};
