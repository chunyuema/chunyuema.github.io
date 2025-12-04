import React, { ReactNode, useEffect, useState } from "react";
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
    employmentHistory: ReactNode;
  };
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("aboutMe");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Scroll to a section smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["aboutMe", "experiences", "blogs"];
      const scrollPosition = window.scrollY + 100; // offset for AppBar
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <AppBar position="fixed">
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
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List>
                  <ListItem
                    button
                    onClick={() => {
                      scrollToSection("aboutMe");
                      setDrawerOpen(false);
                    }}
                  >
                    <ListItemText primary="About Me" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => {
                      scrollToSection("experiences");
                      setDrawerOpen(false);
                    }}
                  >
                    <ListItemText primary="Experiences" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => {
                      scrollToSection("blogs");
                      setDrawerOpen(false);
                    }}
                  >
                    <ListItemText primary="Blogs" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Tabs
              value={activeSection}
              textColor="inherit"
              indicatorColor="secondary"
            >
              <Tab
                label="About Me"
                value="aboutMe"
                onClick={() => scrollToSection("aboutMe")}
              />
              <Tab
                label="Experiences"
                value="experiences"
                onClick={() => scrollToSection("experiences")}
              />
              <Tab
                label="Blogs"
                value="blogs"
                onClick={() => scrollToSection("blogs")}
              />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>

      <Container sx={{ pt: 10, pb: 8 }}>
        <section id="aboutMe" style={{ paddingBottom: "80px" }}>
          {children?.aboutMe}
        </section>
        <section id="experiences" style={{ paddingBottom: "80px" }}>
          {children?.employmentHistory}
        </section>
        <section id="blogs" style={{ paddingBottom: "80px" }}>
          {children?.blogs}
        </section>
      </Container>
    </div>
  );
};

export default Layout;
