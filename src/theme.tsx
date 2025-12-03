// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00ff7f" }, // neon green
    background: {
      default: "#0a0a0a",
      paper: "#111",
    },
    text: {
      primary: "#00ff7f",
      secondary: "#80B3E6",
    },
  },
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
    h4: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    body1: { fontSize: "1.05rem", lineHeight: 1.7 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #00ff7f",
          backgroundColor: "#111",
          boxShadow: "0 5px 20px rgba(0, 255, 127, 0.2)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none" },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: "#111" },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: "#00ff7f" },
      },
    },
  },
});

export default theme;
