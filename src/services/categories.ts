import api from './api';

export interface Guides {
  _id?: number;
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
