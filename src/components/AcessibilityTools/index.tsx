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

export interface AccessibilityToolsProps {
  handleClickContrastButton: () => void
}

export const AccessibilityTools: React.FC<
  AccessibilityToolsProps
> = ({handleClickContrastButton}): JSX.Element => {
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

  const themeAcess = useThemeAcess()

  const handleChangeContrast = () => {
    if (AccessibilityTheme) {
      localStorage.removeItem('AccessibilityColors');
      document.body.classList.remove('AccessibilityColors');
    } else {
      localStorage.setItem('AccessibilityColors', 'true');
      document.body.classList.add('AccessibilityColors');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('AccessibilityColors')) {
      document.body.classList.add('AccessibilityColors');
    } else {
      document.body.classList.remove('AccessibilityColors');
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
                onClick={() => handleClickContrastButton()}
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
function useThemeAcess() {
  throw new Error('Function not implemented.');
}

