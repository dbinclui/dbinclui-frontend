import { AxiosResponse } from 'axios';
import api from './api';

export interface CardGuidesResponse {
  id: number;
  title: string;
  contents: string;
}

export const getGuides = async (): Promise<
  AxiosResponse<CardGuidesResponse[], any> | undefined
> => {
  try {
    return api.get<CardGuidesResponse[]>(`topics`);
  } catch (err) {
    alert('erro');
  }
};
