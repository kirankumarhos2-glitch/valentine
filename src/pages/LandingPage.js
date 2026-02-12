import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LandingPage = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [isBlasting, setIsBlasting] = useState(false);
  const [hideNo, setHideNo] = useState(false);
  const navigate = useNavigate();

  const noTexts = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!"
  ];

  const handleNo = () => {
    if (noCount >= 3) {
      setHideNo(true);
    } else {
      setNoCount(prev => prev + 1);
      setYesScale(prev => prev + 0.4);
    }
  };

  const handleYes = () => {
    setIsBlasting(true);
    setTimeout(() => {
      navigate('/timeline');
    }, 2500);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        px: { xs: 2, sm: 3 }
      }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: { xs: 4, sm: 6 }
        }}
      >
        {/* Headline */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 10 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Will you be my Valentine? ❤️
          </Typography>
        </motion.div>

        {/* Celebration Text */}
        <AnimatePresence>
          {isBlasting && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: '#ff4d88',
                  fontSize: { xs: '1.4rem', sm: '2rem' }
                }}
              >
                I knew you would say YES! ❤️
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 3, sm: 6 },
            width: "100%"
          }}
        >
          <motion.div
            animate={{ scale: yesScale }}
            transition={{ type: 'spring' }}
            style={{ width: "100%" }}
          >
            <Button
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              onClick={handleYes}
              sx={{
                minWidth: { sm: 160 },
                px: 5,
                py: 1.5
              }}
            >
              YES ❤️
            </Button>
          </motion.div>

          {!hideNo && (
            <Button
              fullWidth
              variant="outlined"
              size="large"
              color="secondary"
              onClick={handleNo}
              sx={{
                minWidth: { sm: 160 },
                px: 5,
                py: 1.5
              }}
            >
              {noTexts[noCount]}
            </Button>
          )}
        </Box>

        {/* Heart Explosion */}
        <AnimatePresence>
          {isBlasting && (
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 9999,
                overflow: 'hidden'
              }}
            >
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: '50vw',
                    y: '50vh',
                    scale: 0,
                    opacity: 1
                  }}
                  animate={{
                    x: `${Math.random() * 100}vw`,
                    y: `${Math.random() * 100}vh`,
                    scale: [0, 1.5, 0],
                    opacity: [1, 1, 0],
                    rotate: Math.random() * 360
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.02
                  }}
                  style={{ position: 'absolute' }}
                >
                  <FavoriteIcon
                    sx={{
                      color: i % 2 === 0 ? '#ff4d88' : '#d32f2f',
                      fontSize: Math.random() * 40 + 20
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          )}
        </AnimatePresence>

      </Box>
    </Container>
  );
};

export default LandingPage;
