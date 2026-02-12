import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';

const GamePage = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  const moveHeart = () => {
    const randomX = Math.random() * 80; // percentage
    const randomY = Math.random() * 70;
    setPosition({ x: randomX, y: randomY });
  };

  const handleClick = () => {
    const newScore = score + 1;
    setScore(newScore);

    if (newScore >= 5) {
      setGameEnded(true);
    } else {
      moveHeart();
    }
  };

  useEffect(() => {
    moveHeart();
  }, []);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        {!gameEnded && (
          <>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Catch My Heart 💖
            </Typography>

            <Typography variant="h6" sx={{ mb: 4 }}>
              Catch it 5 times to win my love!
            </Typography>

            <Typography variant="h5" color="primary" sx={{ mb: 6 }}>
              Score: {score} / 5
            </Typography>

            <motion.div
              key={score}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{
                position: 'absolute',
                left: `${position.x}%`,
                top: `${position.y}%`,
                cursor: 'pointer'
              }}
              onClick={handleClick}
            >
              <FavoriteIcon sx={{ fontSize: 60, color: '#ff4d88' }} />
            </motion.div>
          </>
        )}

        <AnimatePresence>
          {gameEnded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#ff4d88',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                padding: 20
              }}
            >
              <Typography variant="h2" sx={{ mb: 3 }}>
                You Caught My Heart! ❤️
              </Typography>

              <Typography variant="h4" sx={{ mb: 5 }}>
                Forever Yours 💞
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => window.location.href = '/'}
              >
                Play Again
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Container>
  );
};

export default GamePage;
