import React from 'react';
import { act, render, screen } from '@testing-library/react';
import GuidePage from './index';
import { AxiosResponse } from 'axios';
import { getGuideWithCategoriesAndContent } from '@services/guides';

jest.mock('@services/guides');

const getGuideWithCategoriesAndContentMock =
  getGuideWithCategoriesAndContent as jest.MockedFunction<
    typeof getGuideWithCategoriesAndContent
  >;

describe('Componente do Home', () => {
  const mockGuideWithCategoriesAndContent = {
    _id: 'MockIdGuide',
    title: 'MockTitleGuide',
    content: 'MockContentGuide',
    categories: [
      {
        _id: 'MockIdCategorie',
        title: 'MockTitleCategorie',
        shortDescription: 'MockDescriptionCategorie',
        guide: 'MockIdGuide',
        digitalContent: [{}],
      },
    ],
  };
});
