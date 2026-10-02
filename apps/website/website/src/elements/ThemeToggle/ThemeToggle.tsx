import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

import { useColorMode } from '../../theme/ThemeContext';

import styles from './ThemeToggle.module.css';

export const ThemeToggle: React.FC = () => {
  const { mode, toggleColorMode } = useColorMode();
  const isDark = mode === 'dark';

  return (
    <Tooltip title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}>
      <IconButton
        onClick={toggleColorMode}
        color='inherit'
        aria-label='toggle light or dark theme'
        className={styles.toggleButton}
      >
        {isDark ? (
          <LightModeIcon sx={{ color: '#FDBA74', fontSize: '1.25rem' }} />
        ) : (
          <DarkModeIcon sx={{ color: '#0E2D54', fontSize: '1.25rem' }} />
        )}
      </IconButton>
    </Tooltip>
  );
};
