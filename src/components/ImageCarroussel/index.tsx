import { Button, MobileStepper } from '@mui/material';
import React from 'react';

interface ImageCarrousselProps {}

export const ImageCarroussel: React.FC<ImageCarrousselProps> = () => {
  return (
    <>
      <MobileStepper
        variant="text"
        steps={stepper.length}
        position="static"
        activeStep={0}
        nextButton={<Button></Button>}
        backButton={<Button></Button>}
      />
    </>
  );
};

export default ImageCarroussel;
