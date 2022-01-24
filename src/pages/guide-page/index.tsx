import React, { useEffect, useState } from 'react';
import CategorySection from './category-section';
import { GuideContent } from '@services/guides';
import { useLocation } from 'react-router-dom';
import { getGuideWithCategoriesAndContent } from '@services/guides';

export interface GuidePageProps {}

export const GuidePage: React.FC<GuidePageProps> = (): JSX.Element => {
  const location = useLocation();
  const id = (location.state as any).id;

  const [guide, setGuide] = useState<GuideContent>();

  useEffect(() => {
    async function getGuide() {
      try {
        const response = await getGuideWithCategoriesAndContent(id);
        setGuide(response.data.data);
      } catch {
        throw new Error('Deu BO');
      }
    }
    if (!guide) {
      getGuide();
    }
  }, [id, guide]);

  console.log(guide?.categories);

  return (
    <>
      {guide?.categories.map((category, index) => {
        return <CategorySection
          index={index}
          category={category}
          key={category._id}
        />;
      })}
    </>
  );
};

export default GuidePage;
