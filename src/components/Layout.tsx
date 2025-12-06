import React, { ReactNode } from "react";
import {
  Container,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface LayoutProps {
  children?: {
    aboutMe: ReactNode;
    blogs: ReactNode;
  };
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState("aboutMe");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ borderRadius: 0, border: 0 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Chunyue's Personal Site</Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              {/* MOBILE DRAWER */}
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List sx={{ width: 200 }}>
                  <ListItem
                    button
                    onClick={() => {
                      setActiveTab("aboutMe");
                      setDrawerOpen(false);
                    }}
                  >
                    <ListItemText primary="About Me" />
                  </ListItem>

                  <ListItem
                    button
                    onClick={() => {
                      setActiveTab("experiences");
                      setDrawerOpen(false);
                    }}
                  >
                    <ListItemText primary="Experiences" />
                  </ListItem>

                  <ListItem
                    button
                    onClick={() => {
                      setActiveTab("blogs");
                      setDrawerOpen(false);
                    }}
                  >
                    <ListItemText primary="Blogs" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            /* DESKTOP TABS */
            <Tabs
              value={activeTab}
              onChange={(e, val) => setActiveTab(val)}
              textColor="inherit"
              indicatorColor="secondary"
            >
              <Tab label="About Me" value="aboutMe" />
              <Tab label="Blogs" value="blogs" />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 10 }}>
        {activeTab === "aboutMe" && children?.aboutMe}
        {activeTab === "blogs" && children?.blogs}
      </Container>
    </div>
  );
};

export default Layout;
