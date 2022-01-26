import React from 'react';
import { CategoryContent } from '@services/categories';
import { Box } from '@mui/material';
import styles from './styles';

export interface CategorySectionProps {
  index: number;
  category: CategoryContent;
}

export const CategorySection: React.FC<
  CategorySectionProps
> = (): JSX.Element => {
  return (
    <>
      <Box component="section" width={"100%"} sx={styles.content}>
          
      </Box>
    </>
  );
};

export default CategorySection;
