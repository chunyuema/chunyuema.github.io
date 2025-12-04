import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // (Your existing module augmentation remains here)
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
    // 💡 PRIMARY: A vibrant teal/cyan for action/focus (VS Code look)
    primary: {
      main: "#00BCD4", // Brighter Cyan/Teal (A classic vibrant code editor color)
      light: "#4FF1FF",
      dark: "#0093A7",
    },
    // 💡 SECONDARY: A softer purple/magenta for less critical elements
    secondary: {
      main: "#BB86FC", // Soft Purple/Magenta (Common dark mode accent)
      light: "#D0A0FF",
      dark: "#9E6ED8",
    },
    // BACKGROUND: Deeper, more distinct separation
    background: {
      default: "#0A0A0A", // Nearly black for a deep void look
      paper: "#1E2733", // Dark Slate/Blue-Gray for elevated surfaces
    },
    // TEXT: High contrast for readability
    text: {
      primary: "#F8F8F8", // Pure white for main text
      secondary: "#A8B4C2", // Soft gray/blue for supplementary text
    },
    error: { main: "#CF6679" }, // Standard dark mode error color
  },
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
    // 💡 WEIGHTS: Increasing heading weight for more presence
    h4: { fontWeight: 800, letterSpacing: "0.5px" },
    h6: { fontWeight: 700, letterSpacing: "0.8px", color: "#00BCD4" }, // Primary color hint on smaller headings
    body1: { fontSize: "1rem", lineHeight: 1.65 },
    body2: { fontSize: "0.9rem", lineHeight: 1.6 },
    subtitle1: { color: "#A8B4C2" },
    subtitle2: { color: "#A8B4C2" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E2733",
          boxShadow:
            "0 6px 18px rgba(0,0,0,0.4), 0 0 10px rgba(0, 188, 212, 0.1)",
          transition:
            "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase", // Slight change for more emphasis
          fontFamily: "'JetBrains Mono', monospace",
          borderRadius: 4, // Sharper button corners
          // Border is now Primary color for higher visibility
          border: "2px solid #00BCD4",
          color: "#00BCD4",
          padding: "8px 20px",
          "&:hover": {
            backgroundColor: "rgba(0, 188, 212, 0.15)", // Brighter hover effect
            boxShadow: "0 0 10px rgba(0, 188, 212, 0.5)",
          },
        },
        containedPrimary: {
          color: "#0A0A0A", // Text is very dark on bright button
          backgroundColor: "#00BCD4",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#121820", // A darker shade for the header
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#00BCD4",
          height: 3, // Thicker indicator
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "'JetBrains Mono', monospace",
          color: "#F8F8F8",
        },
        secondary: {
          fontFamily: "'JetBrains Mono', monospace",
          color: "#A8B4C2",
        },
      },
    },
    // 💡 NEW: Style for MuiTooltip for code editor feel
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#2C3E50", // Darker background
          color: "#F8F8F8",
          fontSize: "0.85rem",
          borderRadius: 4,
          border: "1px solid #00BCD4",
          fontFamily: "'JetBrains Mono', monospace",
        },
      },
    },
  },

  custom: {
    timeline: {
      lineWidth: 4,
      dotSize: 18, // Slightly larger dot
      cardPadding: 3,
      timelineLeft: 80,
      timelineLeftMobile: 40,
      // 💡 Dot Shadow is now the new primary color
      dotShadow: "0 0 12px rgba(0, 188, 212, 0.6)",
      cardHover: {
        transform: "translateY(-6px)", // More noticeable lift
        boxShadow:
          "0 12px 25px rgba(0,0,0,0.5), 0 0 15px rgba(0, 188, 212, 0.2)",
      },
    },
  },
});

export default theme;
