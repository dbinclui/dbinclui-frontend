import React from 'react';
import VLibras from '@djpfs/react-vlibras';
import Routers from './routes/routes';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import AccessibilityTools from './components/AcessibilityTools';
import GlobalContext from './contexts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <CssBaseline />
        <VLibras />
        <AccessibilityTools />
        <React.StrictMode>
          <Routers />
        </React.StrictMode>
      </GlobalContext>
    </ThemeProvider>
  );
}

export default App;
