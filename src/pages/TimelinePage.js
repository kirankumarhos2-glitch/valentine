import React from 'react';
import { 
  Box, Typography, Container, Button, Paper 
} from '@mui/material';
import { 
  Timeline, TimelineItem, TimelineSeparator, 
  TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent 
} from '@mui/lab';
import { 
  Favorite, Restaurant, Church, LocalFlorist, Celebration 
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
    desc:  "It all happened in an Instagram chat — your unexpected confession moment even more unforgettable",
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
    desc: "Our first bike trip together — three days of wind, laughter, and unforgettable memories.",
    icon: <TwoWheelerIcon />,
    color: 'error'
  },
  {
    date: "Jan 1 , 2025",
    title: "New Year Ever",
    desc: "Promised to stay together through all the coming years.",
    icon: <Celebration />,
    color: 'warning'
  }
];

const TimelinePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          Our Beautiful Journey
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, opacity: 0.8 }}>
          Every moment with you is a treasure.
        </Typography>

        <Timeline position="alternate">
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {item.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color={item.color}>
                  {item.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
                    <Typography variant="h6" component="span" color="primary">
                      {item.title}
                    </Typography>
                    <Typography>{item.desc}</Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
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
