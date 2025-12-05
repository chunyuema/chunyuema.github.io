import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      timeline: {
        lineWidth: number;
        dotSize: number;
        cardPadding: number;
        cardShadow?: string;
        dotShadow: string;
        timelineLeft: number;
        timelineLeftMobile: number;
        cardMaxWidth: number;
        cardHover: { transform: string; boxShadow: string };
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      timeline?: {
        lineWidth?: number;
        dotSize?: number;
        cardPadding?: number;
        cardShadow?: string;
        dotShadow?: string;
        timelineLeft?: number;
        timelineLeftMobile?: number;
        cardMaxWidth?: number;
        cardHover?: { transform: string; boxShadow: string };
      };
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00FFEE" }, // neon cyan
    secondary: { main: "#50FA7B" }, // neon green
    background: { default: "#0D0D0D", paper: "#1A1A1A" }, // darker, terminal feel
    text: { primary: "#E0E0E0", secondary: "#8BE9FD" },
  },
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
    h4: {
      fontWeight: 700,
      letterSpacing: "1px",
      textShadow: "0 0 3px #00FFEE",
    },
    h6: {
      fontWeight: 700,
      letterSpacing: "0.5px",
      textShadow: "0 0 2px #00FFEE",
    },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.95rem", lineHeight: 1.6 },
    subtitle1: { color: "#50FA7B" },
    subtitle2: { color: "#8BE9FD" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid #00FFEE",
          backgroundColor: "#1A1A1A",
          boxShadow: "0 5px 20px rgba(0,255,238,0.2)",
          transition: "transform 0.2s, box-shadow 0.2s",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "'JetBrains Mono', monospace",
          borderRadius: 8,
          border: "1px solid #00FFEE",
          color: "#00FFEE",
          "&:hover": {
            backgroundColor: "rgba(0,255,238,0.1)",
            boxShadow: "0 0 8px #00FFEE",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A1A1A",
          boxShadow: "0 2px 10px rgba(0,255,238,0.2)",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#00FFEE",
          height: 3,
          borderRadius: 2,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "'JetBrains Mono', monospace",
          color: "#E0E0E0",
        },
        secondary: {
          fontFamily: "'JetBrains Mono', monospace",
          color: "#8BE9FD",
        },
      },
    },
  },
  custom: {
    timeline: {
      lineWidth: 4,
      dotSize: 18,
      cardPadding: 3,
      timelineLeft: 10,
      timelineLeftMobile: 0,
      dotShadow: "0 0 12px #00FFEE",
      cardHover: {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 25px rgba(0,255,238,0.3)",
      },
      cardMaxWidth: 500,
    },
  },
});

export default theme;
