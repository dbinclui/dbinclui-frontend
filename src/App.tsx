import React, { useState } from 'react';
import VLibras from '@djpfs/react-vlibras';
import Routers from './routes/routes';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme, { StyleModeInterface } from './styles/theme';
import MenuAcessibility from './components/MenuAcessibility';

export interface AppProps {}

export const App: React.FC<AppProps> = (): JSX.Element => {
  const [styleMode, setStyleMode] = useState<StyleModeInterface>({
    typography: {
      baseSize: 1,
    },
  });

  return (
    <ThemeProvider theme={theme(styleMode)}>
      <CssBaseline />
      <VLibras />
      <MenuAcessibility handleChangeCounter={setStyleMode} />
      <React.StrictMode>
        <Routers />
      </React.StrictMode>
    </ThemeProvider>
  );
};

export default App;
