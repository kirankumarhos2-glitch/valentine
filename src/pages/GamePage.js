import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';

const GamePage = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  const moveHeart = () => {
    const randomX = Math.random() * 80;
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
    <Container
      maxWidth="md"
      sx={{
        px: { xs: 2, sm: 3 }
      }}
    >
      <Box
        sx={{
          minHeight: '100vh',
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
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' }
              }}
            >
              Catch My Heart 💖
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontSize: { xs: '1rem', sm: '1.2rem' }
              }}
            >
              Catch it 5 times to win my love!
            </Typography>

            <Typography
              variant="h5"
              color="primary"
              sx={{
                mb: 4,
                fontSize: { xs: '1.2rem', sm: '1.5rem' }
              }}
            >
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
              <FavoriteIcon
                sx={{
                  fontSize: { xs: 45, sm: 60 },
                  color: '#ff4d88'
                }}
              />
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
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontSize: { xs: '1.8rem', sm: '2.5rem' }
                }}
              >
                You Caught My Heart! ❤️
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  fontSize: { xs: '1.3rem', sm: '1.8rem' }
                }}
              >
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
