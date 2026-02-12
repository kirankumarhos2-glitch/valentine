import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';

import LandingPage from './pages/LandingPage';
import TimelinePage from './pages/TimelinePage';
import MemoriesPage from './pages/MemoriesPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            minHeight: '100vh',
            overflowX: 'hidden'   // prevents mobile horizontal scroll
          }}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
