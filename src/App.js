import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
      <Box sx={{ minHeight: '100vh', width: '100vw' }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
