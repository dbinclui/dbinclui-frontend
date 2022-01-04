import { Typography, TypographyProps } from '@mui/material';
import React, { useContext, useRef } from 'react';
import { AccessibilityContext } from '../../contexts/AccessibilityContext';
import { getFontSize } from './utils';

export interface AccessibilityTypographyProps extends TypographyProps {
  className?: string;
}

export const AccessibilityTypography: React.FC<
  AccessibilityTypographyProps
> = ({ children, ...props }): JSX.Element => {
  const textRef = useRef<HTMLElement>(null);
  const context = useContext(AccessibilityContext);
  return (
    <Typography
      sx={{
        transition: '.3s ease',
      }}
      variant="body1"
      ref={textRef}
      {...props}
      fontSize={getFontSize(textRef.current, context.state.fontSizeScale)}
    >
      {children}
    </Typography>
  );
};

export default AccessibilityTypography;
