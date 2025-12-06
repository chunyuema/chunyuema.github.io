import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import StarIcon from "@mui/icons-material/Star"; // ⭐ Current job icon
import WorkIcon from "@mui/icons-material/Work"; // 🏢 Past job icon

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
} from "@mui/lab";

import {
  EmploymentEntry,
  employmentHistoryData,
} from "../data/EmploymentEntry";

const EmploymentHistory: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedJob, setSelectedJob] = useState<EmploymentEntry | null>(null);

  const handleCardClick = (job: EmploymentEntry) => setSelectedJob(job);
  const handleClose = () => setSelectedJob(null);

  return (
    <Container
      sx={{
        py: 8,
        px: isMobile ? 2 : 0,
        maxWidth: isMobile ? "100px" : "1100px",
      }}
    >
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2 },
        }}
      >
        {employmentHistoryData.map((job, index) => {
          const isCurrent = index === 0;

          return (
            <TimelineItem key={index}>
              {!isMobile && (
                <TimelineOppositeContent color="text.secondary">
                  {isCurrent ? (
                    <strong style={{ color: theme.palette.primary.main }}>
                      {job.dateRange} (Current)
                    </strong>
                  ) : (
                    job.dateRange
                  )}
                </TimelineOppositeContent>
              )}

              <TimelineSeparator>
                <TimelineDot
                  color={isCurrent ? "secondary" : "primary"}
                  variant={isCurrent ? "filled" : "outlined"}
                >
                  {isCurrent ? (
                    <StarIcon fontSize="small" /> // ⭐ Current job
                  ) : (
                    <WorkIcon fontSize="small" /> // 🏢 Past jobs
                  )}
                </TimelineDot>

                {index < employmentHistoryData.length - 1 && (
                  <TimelineConnector />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ py: 2 }}>
                <Paper
                  elevation={isCurrent ? 6 : 3}
                  onClick={() => handleCardClick(job)}
                  sx={{
                    p: theme.spacing(theme.custom.timeline.cardPadding),
                    maxWidth: theme.custom.timeline.cardMaxWidth,
                    width: "100%",
                    bgcolor: isCurrent
                      ? theme.palette.secondary.light
                      : "background.paper",
                    borderLeft: isCurrent
                      ? `6px solid ${theme.palette.secondary.main}`
                      : "none",
                    borderRadius: 2,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "pointer",
                    "&:hover": {
                      transform: theme.custom.timeline.cardHover.transform,
                      boxShadow: theme.custom.timeline.cardHover.boxShadow,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    color={isCurrent ? "secondary" : "primary"}
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
                    {isMobile
                      ? `${job.dateRange} — ${job.location}`
                      : job.location}
                  </Typography>

                  <Typography variant="body2">Click to see details</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>

      {/* Popup Dialog */}
      <Dialog
        open={!!selectedJob}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {selectedJob?.company} | {selectedJob?.position}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {selectedJob?.location} — {selectedJob?.dateRange}
          </Typography>

          <Box component="ul" sx={{ pl: 4, m: 0 }}>
            {selectedJob?.descriptionPoints.map((point, i) => (
              <Typography
                component="li"
                key={i}
                sx={{ mb: 1, listStyleType: "disc" }}
              >
                {point}
              </Typography>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default EmploymentHistory;
