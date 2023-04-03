import { createTheme } from '@mui/material';

const uiTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#F2F2F2',
    },
    background: {
      default: '#151619',
      paper: '#22242A',
    },
    grey: {
      600: '#C5C7CE',
      700: '#393C46',
    },
  },
  typography: {
    fontFamily: 'Inter',
    fontWeightRegular: 500,
    fontWeightLight: 400,
    body1: {
      '.gray': {
        color: '#818798',
      },
    },
    body2: {
      '.gray': {
        color: '#818798',
      },
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.grey[700],
          zIndex: 2,
          fontWeight: 400,
          borderRadius: 4,
          '& fieldset': {
            border: 'none',
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.grey[600],
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          ':disabled': {
            opacity: 0.4,
          },
          ':hover': {
            backgroundColor: 'inherit',
          },
          ':active': {
            backgroundColor: 'inherit',
          },
          ':hover > img': {
            transform: 'scale(1.2, 1.2)',
            transition: '0.3s',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: 'none',
          fontWeight: 400,
          fontSize: '1rem',
          zIndex: 2,
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.grey[700],
          ':hover': {
            backgroundColor: theme.palette.grey[700],
          },
        }),
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 400,
        },
      },
    },
  },
});

export default uiTheme;
