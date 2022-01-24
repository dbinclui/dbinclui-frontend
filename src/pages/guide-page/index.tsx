import React from 'react';
import CategorySection from './category-section';
import { CategoryContent } from '@services/categories';

export interface GuidePageProps {}

export const GuidePage: React.FC<GuidePageProps> = (): JSX.Element => {
return <>
    <CategorySection index={1}/>
</>;
};

export default GuidePage;