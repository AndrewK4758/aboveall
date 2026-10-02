import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { createAppTheme, type ColorMode } from './theme';

interface ThemeContextType {
  mode: ColorMode;
  toggleColorMode: () => void;
  setColorMode: (mode: ColorMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
  setColorMode: () => {},
});

export const useColorMode = () => useContext(ThemeContext);

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = 'aboveall_color_mode';

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>(() => {
    if (typeof window !== 'undefined') {
      try {
        if (window.localStorage && typeof window.localStorage.getItem === 'function') {
          const saved = window.localStorage.getItem(STORAGE_KEY) as ColorMode | null;
          if (saved === 'light' || saved === 'dark') return saved;
        }
      } catch {
        // storage disabled or unavailable
      }
      try {
        if (
          typeof window.matchMedia === 'function' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          return 'dark';
        }
      } catch {
        // matchMedia unavailable
      }
    }
    return 'light';
  });

  useEffect(() => {
    try {
      if (
        typeof window !== 'undefined' &&
        window.localStorage &&
        typeof window.localStorage.setItem === 'function'
      ) {
        window.localStorage.setItem(STORAGE_KEY, mode);
      }
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', mode);
        if (mode === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    } catch {
      // storage unavailable
    }
  }, [mode]);

  const toggleColorMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setColorMode = (newMode: ColorMode) => {
    setMode(newMode);
  };

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode, setColorMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
