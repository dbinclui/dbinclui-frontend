import React, { createContext, useState } from 'react';

type AcessibilityType = {
  fontSizeScale: number;
};

const DEFAULT_VALUE = {
  state: {
    fontSizeScale: 1,
  },
  dispatch: () => {},
};

export interface AccessibilityContextInterface {
  state: AcessibilityType;
  dispatch: React.Dispatch<React.SetStateAction<AcessibilityType>>;
}

export const AccessibilityContext =
  createContext<AccessibilityContextInterface>(DEFAULT_VALUE);

export const AccessibilityContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useState<AcessibilityType>(DEFAULT_VALUE.state);

  return (
    <AccessibilityContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export default AccessibilityContext;
