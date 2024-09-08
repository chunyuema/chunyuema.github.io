import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import CloudIcon from "@mui/icons-material/Cloud";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import BlogPage from "./screen/BlogScreen";

// export default function EmploymentHistory() {
//   return (
//     <section
//       id="employmentHistory"
//       style={{ height: "100vh", border: "1px solid black" }}
//     >
//       <Timeline
//         sx={{
//           maxHeight: 200, // Set the maximum height for the timeline
//           overflowY: "auto", // Enable vertical scrolling
//           [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
//         }}
//       >
//         <TimelineItem>
//           <TimelineSeparator>
//             <TimelineDot>
//               <CloudIcon />
//             </TimelineDot>
//             <TimelineConnector />
//           </TimelineSeparator>
//           <TimelineContent sx={{ py: "12px", px: 2 }}>
//             <Typography variant="subtitle1" component="span">
//               AWS - Software Engineer
//             </Typography>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineSeparator>
//             <TimelineDot>
//               <MicrosoftIcon />
//             </TimelineDot>
//             <TimelineConnector />
//           </TimelineSeparator>
//           <TimelineContent sx={{ py: "12px", px: 2 }}>
//             <Typography variant="subtitle1" component="span">
//               Azure - Software Engineer Intern
//             </Typography>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineSeparator>
//             <TimelineDot>
//               <PsychologyIcon />
//             </TimelineDot>
//             <TimelineConnector />
//           </TimelineSeparator>
//           <TimelineContent sx={{ py: "12px", px: 2 }}>
//             <Typography variant="subtitle1" component="span">
//               Jina AI - Software Engineer Intern
//             </Typography>
//           </TimelineContent>
//         </TimelineItem>
//       </Timeline>
//     </section>
//   );
// }

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function BlogPageOld() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#4CAF50' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            All Posts
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <BlogPage />
    </Box>
  );
}

