import api from '../api';
import { CardDigitalContentResponse } from '@services/digitalContent';
import { CategoryContent } from '@services/categories';

export default interface CardGuidesResponse {
  _id?: string;
  title: string;
  content: string;
}

export interface CardBodyInterface {
  title: string;
  content: string;
}

export interface GuideContent {
  _id?: string;
  title: string;
  content: string;
  categories: CategoryContent[],
  digitalContents: CardDigitalContentResponse[],
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

export const getGuideWithCategoriesAndContent = async (id: string) => {
  try {
    return api.get<{ data: GuideContent }>(`guides/getGuideWithCategoriesAndContent/${id}`);
  } catch {
    throw new Error('Serviço não disponível');
  }
};

