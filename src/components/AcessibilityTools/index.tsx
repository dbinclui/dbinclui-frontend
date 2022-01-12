import React, { useState, useContext } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Counter from '../Counter';
import { AccessibilityContext } from '../../contexts/AccessibilityContext';
import './style.css';
import UseCounter from '../../hooks/Counter';

export interface AccessibilityToolsProps {
  handleClickContrastButton: () => void;
}

export const AccessibilityTools: React.FC<AccessibilityToolsProps> = ({
  handleClickContrastButton,
}): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const contextAcessibility = useContext(AccessibilityContext);

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

  return (
    <>
      <Box className="widget-accessibility-tools">
        <Box>
          <Button
            onClick={() => setModalOpen(!modalOpen)}
            startIcon={renderArrowIcon()}
          >
            Acessibilidade
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
