import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import routes from './routes';
import ListPage from './pages/ListPage';
import CardPage from './pages/CardPage';
import uiTheme from './theme';

const App = () => (
  <ThemeProvider theme={uiTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path={routes.listPage()} element={<ListPage />} />
        <Route path={routes.cardPage()} element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
