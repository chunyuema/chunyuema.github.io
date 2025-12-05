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
    primary: { main: "#7FDBFF" }, // soft cyan
    secondary: { main: "#A0AEC0" }, // muted gray-blue
    background: { default: "#121212", paper: "#1E1E1E" },
    text: { primary: "#E0E0E0", secondary: "#A0AEC0" },
  },
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
    h4: { fontWeight: 700, letterSpacing: "0.5px" },
    h6: { fontWeight: 700, letterSpacing: "0.5px" },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.95rem", lineHeight: 1.6 },
    subtitle1: { color: "#A0AEC0" },
    subtitle2: { color: "#A0AEC0" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid #2C3E50", // subtle border
          backgroundColor: "#1E1E1E",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
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
          border: "1px solid #7FDBFF",
          color: "#7FDBFF",
          "&:hover": {
            backgroundColor: "rgba(127,219,255,0.1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1E1E",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#7FDBFF",
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
          color: "#A0AEC0",
        },
      },
    },
  },

  custom: {
    timeline: {
      lineWidth: 4,
      dotSize: 16,
      cardPadding: 3,
      timelineLeft: 80,
      timelineLeftMobile: 40,
      dotShadow: "0 0 10px rgba(127,219,255,0.3)",
      cardHover: {
        transform: "translateY(-4px)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      },
    },
  },
});

export default theme;
