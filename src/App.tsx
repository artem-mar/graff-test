import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import routes from './routes';
import ListPage from './pages/ListPage';
import CardPage from './pages/CardPage';

const myTheme = createTheme({
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
      700: '#393C46',
    },
  },
  typography: {
    body1: {
      '.gray': {
        color: '#818798',
      },
    },
  },
});

const App = () => {
  console.log();

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={routes.listPage()} element={<ListPage />} />
          <Route path={routes.cardPage()} element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
