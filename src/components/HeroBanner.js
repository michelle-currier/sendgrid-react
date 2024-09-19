import React from "react";
import { Box, Typography, Container } from "@mui/material";
import image1 from "./../images/hero-image.jpg";

const HeroBanner = () => (
  <Box
    sx={{
      backgroundImage: `url(${image1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
    }}
  >
    <Container>
      <Typography variant="h2">Welcome to Our Website</Typography>
      <Typography variant="h5">Your success is our priority</Typography>
    </Container>
  </Box>
);

export default HeroBanner;
