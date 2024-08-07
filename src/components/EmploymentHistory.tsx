import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';

export default function EmploymentHistory() {
  return (
    <Timeline
      sx={{
        maxHeight: 200, // Set the maximum height for the timeline
        overflowY: 'auto', // Enable vertical scrolling
        [`& .${timelineItemClasses.root}:before`]: {flex: 0, padding: 0},
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <CloudIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="subtitle1" component="span">
            AWS - Software Engineer
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <MicrosoftIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="subtitle1" component="span">
            Azure - Software Engineer Intern
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <PsychologyIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="subtitle1" component="span">
            Jina AI - Software Engineer Intern
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}