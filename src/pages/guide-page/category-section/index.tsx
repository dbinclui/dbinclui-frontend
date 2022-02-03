import React from 'react';
import { CategoryContent } from '@services/categories';
import { Box, Grid, Typography } from '@mui/material';
import styles from './styles';
import ImageCarroussel from '@components/ImageCarroussel';
import AccessibilityTypography from '@components/AccessibilityTypography';

export interface CategorySectionProps {
  index: string;
  category: CategoryContent;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  index,
  category,
}): JSX.Element => {
  return (
    <>
      <Grid item md={8} width={'100%'}>
        <Box component="header">
          <Typography
            component="h1"
            sx={styles.categoryTitle}
            id={`${category._id}`}
          >
            {category.title}
          </Typography>
          <AccessibilityTypography component="h2" sx={styles.categoryContent}>
            {category.shortDescription}
          </AccessibilityTypography>

          {category.digitalContents && !!category.digitalContents.length && (
            <Box>
              <ImageCarroussel
                contents={category.digitalContents}
                height="20rem"
                width="100%"
              />
            </Box>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default CategorySection;
