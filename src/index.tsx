import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
<<<<<<< HEAD
import './styles/global.css';
=======
import { Footer } from './components/Footer/index';
>>>>>>> 8bc5a815bde04050403ac46043ecdc5a23069136

ReactDOM.render(
  <>
    <App />
    <Footer />
  </>,
  document.getElementById('root'),
);
=======
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <App />
    </ThemeProvider>,

 document.getElementById('root'));
>>>>>>> 88b5786287465bf057fabb6640f8d6578a62b548
