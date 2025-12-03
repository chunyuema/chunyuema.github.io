import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { EmploymentEntry, employmentHistoryData } from "../EmploymentEntry";

const EmploymentHistory: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleCardClick = (job: EmploymentEntry) => {
    // Optional: open link
    // if (job.link) window.open(job.link, "_blank");
  };

  const cardStyles = {
    p: theme.spacing(theme.custom.timeline.cardPadding),
    maxWidth: theme.custom.timeline.cardMaxWidth,
    width: "100%",
    bgcolor: "background.paper",
    borderRadius: 2,
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: theme.custom.timeline.cardHover.transform,
      boxShadow: theme.custom.timeline.cardHover.boxShadow,
    },
    cursor: "pointer",
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" mb={6} color="primary">
        Employment History
      </Typography>

      <Box>
        {employmentHistoryData.map((job, index) => (
          <Box key={index} sx={{ mb: 6 }}>
            <Paper
              elevation={3}
              onClick={() => handleCardClick(job)}
              sx={cardStyles}
            >
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                {job.company} | {job.position}
              </Typography>

              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {job.location} — {job.dateRange}
              </Typography>

              <List dense>
                {job.descriptionPoints.map((point, i) => (
                  <ListItem key={i} sx={{ display: "list-item", pl: 2 }}>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default EmploymentHistory;
