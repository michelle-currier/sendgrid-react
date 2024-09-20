import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroBanner from "./components/HeroBanner";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { deepOrange, teal } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Footer from "./components/footer";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: teal,
    background: {
      default: "#263238", // Slate gray
    },
    primary: {
      light: "#e6ee9c",
      main: "#bf360c",
      dark: "#004d40",
      contrastText: "#fbe9e7",
    },
  },
  typography: {
    fontFamily: "Raleway, Arial, sans-serif",
    color: "#fbe9e7",
    h1: {
      fontFamily: "Teko, Arial, sans-serif",
      color: "#2196F3",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.65)",
    },
    h2: {
      fontFamily: "Teko, Arial, sans-serif",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.85)",
    },
    h3: {
      fontFamily: "Teko, Arial, sans-serif",
    },
    h4: {
      fontFamily: "Teko, Arial, sans-serif",
      color: "#b2dfdb",
    },
    h5: {
      fontFamily: "Teko, Arial, sans-serif",
    },
    h6: {
      fontFamily: "Teko, Arial, sans-serif",
    },
    body1: {
      color: "#E3F2FD",
    },
    body3: {
      color: "#546e7a",
    },
    body3R: {
      textAlign: "right",
      color: "#546e7a",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: "#37474f", // Background color for the filled variant
            "&:hover": {
              backgroundColor: "#37474f", // Background color on hover
            },
            "&.Mui-focused": {
              backgroundColor: "#263238", // Background color when focused
            },
          },
          "& .MuiFormLabel-root": {
            color: "#ffffff", // Label color
            "&.Mui-focused": {
              color: "#4db6ac", // Label color when focused
            },
          },
          "& .MuiFilledInput-input": {
            color: "#b2dfdb", // Text color inside the input
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#37474f", // Background color for the filled variant
            "&:hover": {
              backgroundColor: "#37474f", // Background color on hover
            },
          },
          "& .MuiOutlinedInput-input": {
            color: "#b2dfdb", // Text color inside the input
          },
          "& input:-internal-autofill-selected": {
            backgroundColor: "#37474f !important",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <HeroBanner />
        <Testimonials />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
