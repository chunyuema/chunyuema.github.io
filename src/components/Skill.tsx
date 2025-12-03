import {
  Box,
  Paper,
  Typography,
  LinearProgress,
  useTheme,
} from "@mui/material";

import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

interface SkillSetProps {
  title?: string;
  skills: Skill[];
}

const SkillSet = ({ title = "Skill Set", skills }: SkillSetProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ px: 3, py: 2 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 2,
        }}
      >
        {skills.map((skill) => (
          <Paper
            key={skill.name}
            sx={{
              p: theme.custom.timeline.cardPadding,
              maxWidth: theme.custom.timeline.cardMaxWidth || 350,
              transition: "0.25s ease",
              "&:hover": theme.custom.timeline.cardHover,
            }}
          >
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              {skill.name}
            </Typography>

            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{
                height: 8,
                borderRadius: 2,
                backgroundColor: "#2c3e50",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            />

            <Typography
              variant="subtitle2"
              sx={{ mt: 1, color: theme.palette.text.secondary }}
            >
              {skill.level}%
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default SkillSet;
