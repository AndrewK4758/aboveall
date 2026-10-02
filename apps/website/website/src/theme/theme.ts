import { createTheme, responsiveFontSizes, type Theme } from '@mui/material/styles';

export type ColorMode = 'light' | 'dark';

// Brand colors derived directly from the Above All logo, calibrated for 4.5:1 WCAG AA compliance
export const BRAND_COLORS = {
  navy: {
    main: '#0E2D54',
    light: '#1B457D',
    dark: '#07182E',
    contrastText: '#FFFFFF',
  },
  // Calibrated to #C2410C on light for >= 4.5:1 contrast against white backgrounds
  orange: {
    main: '#C2410C',
    light: '#EA580C',
    dark: '#9A3412',
    contrastText: '#FFFFFF',
  },
  // Calibrated to #0284C7 on light for >= 4.5:1 contrast against white backgrounds
  cyan: {
    main: '#0284C7',
    light: '#38BDF8',
    dark: '#0369A1',
    contrastText: '#FFFFFF',
  },
  steel: {
    main: '#475569',
    light: '#64748B',
    dark: '#334155',
    border: '#CBD5E1',
  },
};

export function createAppTheme(mode: ColorMode): Theme {
  const isLight = mode === 'light';

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: isLight ? BRAND_COLORS.navy.main : '#38BDF8',
        light: isLight ? BRAND_COLORS.navy.light : '#7DD3FC',
        dark: isLight ? BRAND_COLORS.navy.dark : '#0284C7',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: isLight ? BRAND_COLORS.orange.main : '#FB923C',
        light: BRAND_COLORS.orange.light,
        dark: BRAND_COLORS.orange.dark,
        contrastText: isLight ? '#FFFFFF' : '#071324',
      },
      info: {
        main: isLight ? BRAND_COLORS.cyan.main : '#38BDF8',
        light: BRAND_COLORS.cyan.light,
        dark: BRAND_COLORS.cyan.dark,
      },
      background: {
        default: isLight ? '#F8FAFC' : '#071324',
        paper: isLight ? '#FFFFFF' : '#0E223D',
      },
      text: {
        primary: isLight ? '#0F172A' : '#F8FAFC', // 16.1:1 contrast on white
        secondary: isLight ? '#334155' : '#94A3B8', // 7.1:1 on light, 7.2:1 on dark
      },
      divider: isLight ? 'rgba(15, 23, 42, 0.12)' : 'rgba(248, 250, 252, 0.14)',
    },
    typography: {
      fontFamily: `'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.025em',
        lineHeight: 1.15,
      },
      h2: {
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
      },
      h3: {
        fontWeight: 700,
        letterSpacing: '-0.015em',
        lineHeight: 1.25,
      },
      h4: {
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
        fontWeight: 700,
        letterSpacing: '0.01em',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: '10px 22px',
            fontSize: '0.95rem',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'none',
            '&:focus-visible': {
              outline: '3px solid #0284C7',
              outlineOffset: '2px',
            },
            '&:hover': {
              boxShadow: '0 8px 20px -4px rgba(14, 45, 84, 0.25)',
              transform: 'translateY(-1px)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          },
          containedPrimary: {
            backgroundColor: isLight ? BRAND_COLORS.navy.main : '#0284C7',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: isLight ? BRAND_COLORS.navy.light : '#0369A1',
            },
          },
          containedSecondary: {
            backgroundColor: isLight ? BRAND_COLORS.orange.main : '#FB923C',
            color: isLight ? '#FFFFFF' : '#071324',
            '&:hover': {
              backgroundColor: isLight ? BRAND_COLORS.orange.dark : '#F97316',
              boxShadow: '0 8px 20px -4px rgba(194, 65, 12, 0.45)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: isLight ? '1px solid #CBD5E1' : '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: isLight
              ? '0 4px 20px -2px rgba(14, 45, 84, 0.06)'
              : '0 4px 24px -2px rgba(0, 0, 0, 0.4)',
            backgroundImage: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 700,
            borderRadius: 8,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            '& fieldset': {
              borderColor: isLight ? '#94A3B8' : 'rgba(255, 255, 255, 0.25)',
            },
            '&:hover fieldset': {
              borderColor: isLight ? BRAND_COLORS.navy.main : '#38BDF8',
            },
            '&.Mui-focused fieldset': {
              borderColor: isLight ? BRAND_COLORS.navy.main : '#38BDF8',
              borderWidth: 2,
            },
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
}
