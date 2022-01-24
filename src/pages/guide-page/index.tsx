import React from 'react';
import CategorySection from './category-section';
import { CategoryContent } from '@services/categories';
import { useLocation } from 'react-router-dom';

export interface GuidePageProps {}

export const GuidePage: React.FC<GuidePageProps> = (): JSX.Element => {
    const location = useLocation();
    console.log((location.state as any).id)
return <>
    {/*<CategorySection index={1}/>*/}
</>;
};

export default GuidePage;