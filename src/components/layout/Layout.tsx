import React, { useState } from "react";
import { Container, AppBar, Tabs, Tab, Typography, Toolbar, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AboutMe from "../screen/AboutMe";
import EmploymentHistory from "../EmploymentHistory";
import { styled } from '@mui/system';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("aboutMe");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is small

  // Define styles using styled
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  }));

  const CenteredContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centers horizontally
    justifyContent: 'center', // Centers vertically
    minHeight: '90vh', // Ensures the container takes up the full viewport height
    padding: theme.spacing(2), // Optional: Add some padding
  }));

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h6">Chunyue's Personal Site</Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
                <List>
                  <ListItem onClick={() => { setActiveTab("aboutMe"); handleDrawerClose(); }}>
                    <ListItemText primary="About Me" />
                  </ListItem>
                  <ListItem onClick={() => { setActiveTab("resume"); handleDrawerClose(); }}>
                    <ListItemText primary="Resume" />
                  </ListItem>
                  <ListItem onClick={() => { setActiveTab("blogs"); handleDrawerClose(); }}>
                    <ListItemText primary="Blogs" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="tabs"
            >
              <Tab label="About Me" value="aboutMe" />
              <Tab label="Resume" value="resume" />
              <Tab label="Blogs" value="blogs" />
            </Tabs>
          )}
        </StyledToolbar>
      </AppBar>

      <CenteredContainer>
        {activeTab === "aboutMe" && <AboutMe />}
        {/* {activeTab === "resume" && <EmploymentHistory />} */}
      </CenteredContainer>
    </div>
  );
};

export default Layout;
