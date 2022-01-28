import React, { useEffect, useState } from 'react';
import CategorySection from './category-section';
import ImageCarroussel from '@components/ImageCarroussel';
import {
  GuideContent,
  getGuideWithCategoriesAndContent,
} from '@services/guides';
import { useLocation } from 'react-router-dom';
import { Box, Grid, Typography, Link } from '@mui/material';
import styles from './styles';
import AccessibilityTypography from '@components/AccessibilityTypography';

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
        // console.log(response.data.data);
      } catch (error) {
        setGuide(undefined);
      }
    }

    !guide && getGuide();

    //console.log(guide);
  }, [id, guide]);

  return !guide ? (
    <Box sx={styles.errorMessage}>Erro na busca do guia!</Box>
  ) : (
    <Grid container component="main">
      {/* Indíce */}
      
      <AccessibilityTypography sx={styles.indexFirst}>
        Categorias:
      </AccessibilityTypography>
      <Grid item md={4} sx={styles.indexWrapper} >
        {guide?.categories.map((category, index) => {
          return (
            <Grid item md={4} sx={styles.buttonWrapper} key={category._id}>
              <Link
                component="aside"
                sx={styles.index}
                onClick={() => {
                  const scrollTo = document.getElementById(`${category._id}`);
                  scrollTo?.scrollIntoView();
                  console.log(window.scrollY);
                }}
              >
                <AccessibilityTypography data-testid="IndexTitleTest">
                  {`•  ${category.title}`}
                </AccessibilityTypography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      
      {/* Conteúdo */}
      <Grid item md={8} width={'100%'}>
        <Grid item md={8}>
        <Box component="header">
          <Typography component="h1" sx={styles.guideTitle}>
            {guide?.title}
          </Typography>
          <AccessibilityTypography
            component="h2"
            sx={styles.guideContent}
            id={guide?._id}
          >
            {guide?.content}
          </AccessibilityTypography>

          {guide?.digitalContents && !!guide?.digitalContents.length && (
            <Box sx={styles.digitalContent}>
              <ImageCarroussel
                contents={guide?.digitalContents}
                height="20rem"
                width="100%"
              />
            </Box>
          )}
        </Box>
        </Grid>

        {guide?.categories.map((category, index) => {
          return (
            <CategorySection
              category={category}
              key={category._id}
              index={`#${index}`}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default GuidePage;
