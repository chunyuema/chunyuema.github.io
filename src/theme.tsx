// theme.ts — Deep Sky Blue Geeky Liquid Glass
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      timeline: {
        lineWidth: number;
        dotSize: number;
        cardPadding: number;
        cardMaxWidth: number;
        dotShadow: string;
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
        cardMaxWidth?: number;
        dotShadow?: string;
        cardHover?: { transform: string; boxShadow: string };
      };
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6EC1FF" }, // Deep Sky Blue
    secondary: { main: "#09406aff" }, // Soft cyan accent
    background: {
      default: "#0A0A12", // deep dark background
      paper: "rgba(255,255,255,0.06)", // frosted glass panel
    },
    text: {
      primary: "#F2F0FF",
      secondary: "rgba(110,193,255,0.7)", // subtle neon glow
    },
  },

  typography: {
    fontFamily: `'JetBrains Mono', monospace, -apple-system, BlinkMacSystemFont`,
    h4: {
      fontWeight: 600,
      color: "#F2F0FF",
      textShadow: "0 0 8px rgba(110,193,255,0.45)",
    },
    h6: {
      fontWeight: 500,
      color: "#F2F0FF",
      opacity: 0.95,
      textShadow: "0 0 4px rgba(110,193,255,0.3)",
    },
    subtitle1: {
      color: "rgba(110,193,255,0.85)",
    },
    subtitle2: {
      color: "rgba(168,218,255,0.55)",
    },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.95rem", lineHeight: 1.6 },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px) saturate(180%)",
          WebkitBackdropFilter: "blur(18px) saturate(180%)",
          border: "1px solid rgba(110,193,255,0.2)",
          boxShadow: `
            inset 0 0 0.5px rgba(255,255,255,0.15),
            0 8px 22px rgba(0,0,0,0.35)
          `,
          transition: "all 0.25s ease",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "8px 16px",
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(110,193,255,0.3)",
          color: "#F2F0FF",
          fontFamily: "'JetBrains Mono', monospace",
          "&:hover": {
            background: "rgba(110,193,255,0.1)",
            boxShadow: "0 0 12px rgba(110,193,255,0.5)",
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(110,193,255,0.1)",
        },
      },
    },
  },

  custom: {
    timeline: {
      lineWidth: 3,
      dotSize: 28,
      cardPadding: 3,
      cardMaxWidth: 1000,
      dotShadow: "0 0 14px rgba(110,193,255,0.45)",
      cardHover: {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 30px rgba(110,193,255,0.35)",
      },
    },
  },
});

export default theme;
