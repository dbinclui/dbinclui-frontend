import api from '@services/api';
import CardGuidesResponse from '@services/guides';

export interface CardCategoryResponse {
    _id?: string;
    title: string;
    shortDescription: string;
    guide: CardGuidesResponse;
    parentCategory?: CardCategoryResponse;
  }

export const getCategoriesByGuide = async (id: string) => {
    try {
      return api.get<{ data: CardCategoryResponse[] }>(`/categories/getByGuide/${id}`);
    } catch {
      throw new Error('Serviço não disponível');
    }
  };