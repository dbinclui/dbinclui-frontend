import React, { useState, useContext, useEffect } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Counter from '../Counter';
import { AccessibilityContext } from '../../contexts/AccessibilityContext';
import './style.css';
import UseCounter from '../../hooks/Counter';
import DefaultTheme from '../../styles/theme';
import AccessibilityTheme from '../../styles/AccessibilityTheme';

export interface AccessibilityToolsProps {}

export const AccessibilityTools: React.FC<
  AccessibilityToolsProps
> = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const contextAcessibility = useContext(AccessibilityContext);
  const [theme, setTheme] = useState('DefaultTheme');

  const ChangeContrast = () => {
    if (theme === 'DefaultTheme') {
      window.localStorage.setItem('theme', 'AccessibilityTheme');
      setTheme('AccessibilityTheme');
    } else {
      window.localStorage.setItem('theme', 'DefaultTheme');
      setTheme('DefaultTheme');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  const renderArrowIcon = () =>
    modalOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;

  const handleCounter = (counter: number) => {
    contextAcessibility.dispatch({
      ...contextAcessibility.state,
      fontSizeScale: counter,
    });
  };

  const useCounter = UseCounter({
    handleCounter,
    limiters: [1, 2],
  });

  const handleChangeContrast = () => {
    if (theme) {
      localStorage.removeItem('contrast');
      document.body.classList.remove('contrast');
    } else {
      localStorage.setItem('contrast', 'true');
      document.body.classList.add('contrast');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('contrast')) {
      document.body.classList.add('contrast');
    } else {
      document.body.classList.remove('contrast');
    }
  }, []);

  return (
    <>
      <Box className="widget-accessibility-tools">
        <Box className="widget-button">
          <Button
            onClick={() => setModalOpen(!modalOpen)}
            startIcon={renderArrowIcon()}
          >
            <Typography variant="body1" aria-label="Acessibilidade">
              Acessibilidade
            </Typography>
          </Button>
        </Box>
      </Box>
      {modalOpen && (
        <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
          <Fade in={modalOpen}>
            <Box className="modal modal-accessibility-tools">
              <div>
                <Counter {...useCounter} />
              </div>
              <Button
                onClick={ChangeContrast}
                variant="contained"
                aria-label="Mudar contraste da tela"
                sx={{
                  left: '10px',
                  top: '10px',
                  width: '90%',
                  borderRadius: '20px',
                  fontSize: '14px',
                }}
              >
                Contrastes
              </Button>
            </Box>
          </Fade>
        </Modal>
      )}
    </>
  );
};

export default AccessibilityTools;
