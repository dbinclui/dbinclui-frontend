import api from '../api';

export interface Guides {
  _id?: string;
  title: string;
  content: string;
  categories?: CardCategoriesResponse[];
}

export interface CardCategoriesResponse {
  _id?: number;
  title: string;
  shortDescription: string;
  guide: Guides;
  parentCategory?: CardCategoriesResponse;
}
export interface CardBodyInterface {
  
  title: string;
  shortDescription: string;
  guide: Guides["_id"];
}

export const getCategories = async () => {
  try {
    return api.get<{ data: CardCategoriesResponse[] }>(`/categoies/list`);
  } catch {
    throw new Error('Serviço não disponível');
  }
};

export const postCategories= async (cardBody: CardBodyInterface) => {
  try {
    return api.post('/categories/register', cardBody);
  } catch {
    throw new Error('Serviço não disponível');
  }
};
