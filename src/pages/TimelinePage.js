import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import {
  Favorite,
  Celebration
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

const timelineData = [
  {
    date: "Nov 29, 2023",
    title: "First Day You Confessed",
    desc: "It all happened in an Instagram chat — your unexpected confession made that moment unforgettable.",
    icon: <FavoriteIcon />,
    color: 'primary'
  },
  {
    date: "Feb 14, 2024",
    title: "Temple Visit",
    desc: "At the Shiva temple, I placed the first ring on your finger — a moment I'll cherish forever.",
    icon: <TempleHinduIcon />,
    color: 'secondary'
  },
  {
    date: "July 6-8, 2024",
    title: "First Bike Trip",
    desc: "Three days of wind, laughter, and unforgettable memories.",
    icon: <TwoWheelerIcon />,
    color: 'error'
  },
  {
    date: "Jan 1, 2025",
    title: "New Year Promise",
    desc: "Promised to stay together through all the coming years.",
    icon: <Celebration />,
    color: 'warning'
  }
];

const TimelinePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 6,
        px: { xs: 2, sm: 3 },
        overflowX: "hidden"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Our Beautiful Journey
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 5, opacity: 0.8 }}
        >
          Every moment with you is a treasure.
        </Typography>

        <Timeline
          position={isMobile ? "right" : "alternate"}
          sx={{ p: 0, m: 0 }}
        >
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              sx={{
                "&::before": {
                  display: isMobile ? "none" : "block"
                }
              }}
            >
              {!isMobile && (
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {item.date}
                </TimelineOppositeContent>
              )}

              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color={item.color}>
                  {item.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: 2, px: 2 }}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      borderRadius: 3
                    }}
                  >
                    {isMobile && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                        sx={{ mb: 1 }}
                      >
                        {item.date}
                      </Typography>
                    )}

                    <Typography
                      variant="h6"
                      color="primary"
                    >
                      {item.title}
                    </Typography>

                    <Typography variant="body2">
                      {item.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/memories')}
            endIcon={<Favorite />}
          >
            See Our Memories
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default TimelinePage;
