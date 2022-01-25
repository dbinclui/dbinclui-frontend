import React, { useState } from 'react';
import { Box, Button, MobileStepper, Paper, Typography } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import styles from './styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

interface ImageCarrousselProps {
  title: string;
  description?: string;
  imgUrls: string[];
}

// TODO fazer esse componente receber um array de digitalContent, e ai dar um .map nele pra criar um array de objetos do tipo:
/**
 * {
 *   digitalContentIndex: number; // o indice do digital content original pra ter referencia pro título dele
 *   mediaUrl: string; // a url da imagem
 * }
 */

export const ImageCarroussel: React.FC<ImageCarrousselProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((previousValue) => previousValue + 1);

  const handleBack = () =>
    setCurrentIndex((previousValue) => previousValue - 1);

  return (
    <Box sx={styles.carrousselContainer}>
      <Paper square elevation={0} sx={styles.titleContainer}>
        <Typography>{props.title}</Typography>
      </Paper>

      <SwipeableViews>
        {props.imgUrls.map((img, index) => (
          <>
            {Math.abs(currentIndex - index) <= 1 ? (
              <Box
                component="img" // TODO aqui por enquanto só aceita imagem, tem que aceitar vídeo também
                sx={styles.image}
                src={img}
                alt={props.description}
              />
            ) : null}
          </>
        ))}
      </SwipeableViews>

      <MobileStepper
        variant="text"
        steps={props.imgUrls.length}
        position="static"
        activeStep={currentIndex}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={currentIndex === props.imgUrls.length - 1}
          >
            Próximo
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={currentIndex === props.imgUrls.length - 1}
          >
            Anterior
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </Box>
  );
};

export default ImageCarroussel;
