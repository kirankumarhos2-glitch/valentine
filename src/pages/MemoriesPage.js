import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const memories = [
  {
    title: "Our First Date",
    desc: "This first picture was taken on that beautiful day, and your smile was truly the most beautiful thing I had ever seen ❤️. You always look the happiest when you smile, and I want you to stay that way forever 💖. Please don’t worry about the things happening in my life — just stay calm, peaceful, and happy 💕. Focus on your career and achieve everything you dream of 🌸. I will always be by your side, no matter what happens 💞. Stay strong, stay focused, and most importantly… always stay happy 💗.",
    img: "/assets/memory5.jpg"
  },
  // {
  //   title: "Chidanvi Birthday",
  //   desc: "The day I cannot be forgetable",
  //   img: "/assets/memory7.jpg"
  // },
  {
    title: "First Date",
    desc: "We were exhausted, but incredibly happy.",
    img: "/assets/memory6.jpg"
  },
  {
    title: "At freshers Party",
    desc: "Just the two of us and empty spot at college we called it was free wedding shoot.",
    img: "/assets/memory3.jpg"
  },
  {
    title: "At College",
    desc: "Our First Wedding Shoot.",
    img: "/assets/memory4.jpg"
  },
  {
    title: "At Trip",
    desc: "You and Me at the Top of the Spot with View Point view.",
    img: "/assets/memory9.jpg"
  },
  {
    title: "Me and My wifes",
    desc: "Just Look at the image how it was.",
    img: "/assets/memory8.jpg"
  },
  {
    title: "Best pic one which i Always see",
    desc: "You and me with panche and saree — truly beautiful.",
    img: "/assets/memory2.jpg"
  }
];

const CardWrapper = ({ memory, isFirst }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(255, 77, 136, 0.15)",
        display: "flex",
        flexDirection: isFirst ? { xs: "column", md: "row" } : "column",
        height: "100%"
      }}
    >
      {isFirst ? (
        <>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              aspectRatio: { xs: "4 / 3", md: "auto" },
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CardMedia
              component="img"
              image={memory.img}
              alt={memory.title}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain"
              }}
            />
          </Box>

          <CardContent
            sx={{
              width: { xs: "100%", md: "50%" },
              p: { xs: 2, sm: 3, md: 4 }
            }}
          >
            <Typography variant="h4" gutterBottom>
              {memory.title}
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {memory.desc}
            </Typography>

            <Typography
              align="center"
              sx={{
                fontWeight: "bold",
                fontSize: "1.4rem",
                background: "linear-gradient(45deg, #ff4d88, #ff99cc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              ❤️ I LOVE YOU ❤️
            </Typography>
          </CardContent>
        </>
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "4 / 3",
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CardMedia
              component="img"
              image={memory.img}
              alt={memory.title}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain"
              }}
            />
          </Box>

          <CardContent>
            <Typography gutterBottom variant="h6">
              {memory.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {memory.desc}
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  </motion.div>
);

const MemoriesPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 6, px: 3 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Captured Moments
      </Typography>

      <Typography align="center" sx={{ mb: 5 }}>
        Every picture tells a beautiful story of our love.
      </Typography>

      <Grid container spacing={3}>
        {memories.map((memory, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={index === 0 ? 12 : 4}
            key={index}
          >
            <CardWrapper memory={memory} isFirst={index === 0} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/game")}
          startIcon={<EmojiEventsIcon />}
        >
          One Last Thing...
        </Button>
      </Box>
    </Container>
  );
};

export default MemoriesPage;
