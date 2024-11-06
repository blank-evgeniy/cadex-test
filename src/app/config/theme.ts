"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#F2F2F2",
    },
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: "500",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: "#002642",
    },
    secondary: {
      main: "#CCFF00",
    },
    background: {
      default: "#111",
      paper: "#141414",
    },
    text: {
      primary: "#F2F2F2",
      secondary: "#B1B1B1",
    },
  },
});

export default theme;