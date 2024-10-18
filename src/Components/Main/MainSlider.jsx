import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Typography, CardMedia } from "@mui/material";

const CenteredText = ({ text }) => (
  <Box
    sx={{
      position: "absolute",
      top: "10%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "5px",
      padding: "10px",
    }}
  >
    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
      {text}
    </Typography>
  </Box>
);

const SlideshowWithCenteredText = () => {
  const slides = [
    {
      image: "/book1.jpg",
      text: "Books are the ships of thought.",
    },
    {
      image: "/book2.webp",
      text: "The book is a dream, that you hold in your hand.",
    },
    {
      image: "/book3.jpg",
      text: "Books are a pass to personal freedom.",
    },
  ];

  return (
    <Box sx={{ width: "96%", margin: "auto", padding: "20px 0px 60px 0" }}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        sx={{ height: "215px" }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: { xs: '45vw', sm2: '175px' },
              minHeight: '100px',
              position: "relative",
              borderRadius: "15px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={slide.image}
              alt={`Slide ${index + 1}`}
              sx={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            <CenteredText text={slide.text} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default SlideshowWithCenteredText;
