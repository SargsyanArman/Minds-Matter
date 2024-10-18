import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Typography, CardMedia } from "@mui/material";
import { SLIDER_BOX_STYLES, SLIDER_BOX_SECOND_STYLES, SLIDER_CARD_MEDIA_STYLES, SLIDER_CENTRED_TEXT_STYLES, SLIDES } from "../../Constants/MenuConstants";

const CenteredText = ({ text }) => (
  <Box
    sx={SLIDER_CENTRED_TEXT_STYLES}
  >
    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
      {text}
    </Typography>
  </Box>
);

const SlideshowWithCenteredText = () => {


  return (
    <Box sx={SLIDER_BOX_STYLES}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        sx={{ height: "215px" }}
      >
        {SLIDES.map((slide, index) => (
          <Box
            key={index}
            sx={SLIDER_BOX_SECOND_STYLES}
          >
            <CardMedia
              component="img"
              image={slide.image}
              alt={`Slide ${index + 1}`}
              sx={SLIDER_CARD_MEDIA_STYLES}
            />
            <CenteredText text={slide.text} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default SlideshowWithCenteredText;
