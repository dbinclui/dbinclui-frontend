import React, { useState } from 'react';
import VLibras from '@djpfs/react-vlibras';
import Routers from './routes/routes';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme, { StyleModeInterface } from './styles/theme';
import BtnAcessibility from './components/Menu-acessibility/btnAcessibility';

function App() {
  const [styleMode, setStyleMode] = useState<StyleModeInterface>({
    typography: {
      baseSize: 1,
    },
  });

  return (
    <ThemeProvider theme={theme(styleMode)}>
      <CssBaseline />
      <VLibras />
      <BtnAcessibility handleChangeCounter={setStyleMode} />
      <React.StrictMode>
        <Routers />
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
