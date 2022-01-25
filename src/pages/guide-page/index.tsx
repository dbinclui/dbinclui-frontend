import React, { useEffect, useState } from 'react';
import CategorySection from './category-section';
import ImageCarroussel from '@components/ImageCarroussel';
import {
  GuideContent,
  getGuideWithCategoriesAndContent,
} from '@services/guides';
import { useLocation } from 'react-router-dom';
import AccessibilityTypography from '@components/AccessibilityTypography';
import { Box, Grid, Typography } from '@mui/material';
import styles from './styles';

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
    !guide && getGuide();
  }, [id, guide]);

  return (
    <Grid container component="main">
      {/* Indíce */}
      <Grid item md={4} sx={styles.indexWrapper}>
        <Box component="aside" sx={styles.index}>
          Indice
        </Box>
      </Grid>

      {/* Conteúdo */}
      <Grid item md={8} width={'100%'}>
        <Box component="header" sx={styles.header}>
          <Typography component="h1" sx={styles.guideTitle}>
            {guide?.title}
          </Typography>
          <Typography component="h2" sx={styles.guideContent}>
            {guide?.content}
          </Typography>
        </Box>

        {guide?.categories.map((category, index) => {
          return (
            <CategorySection
              index={index}
              category={category}
              key={category._id}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default GuidePage;
