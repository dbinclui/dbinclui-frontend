import React from 'react';

import { AccessibilityContextProvider } from './AccessibilityContext';

export const GlobalContext: React.FC = ({ children }) => (
  <AccessibilityContextProvider>{children}</AccessibilityContextProvider>
);

export default GlobalContext;
