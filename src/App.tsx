import React from 'react';
import VLibras from '@djpfs/react-vlibras';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home';
import AcessibilityGuide from './pages/acessibility-guide';
import DeafCultureGuide from './pages/deaf-culture-guide';
import Error from './pages/error/404';
import RegisterGuide from './pages/register-guide';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { Colors } from './styles/colors';

function App() {
  return (
    <>
      <VLibras />
      <React.StrictMode>
        <Box sx={{
          background: Colors.DARK_BLUE,
          height: '100vh',
          color: Colors.WHITE
        }}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="guia-acessibilidade" element={<AcessibilityGuide />} />
            <Route path="guia-cultura-surda" element={<DeafCultureGuide />} />
            <Route path="cadastrar-guia" element={<RegisterGuide />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
        </ThemeProvider>
        </Box>
      </React.StrictMode>
    </>
  );
}

export default App;
