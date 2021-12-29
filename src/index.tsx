import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Footer } from './components/Footer/index';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
