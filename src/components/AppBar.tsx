import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

interface AppBarProps {
  activeTab: "aboutMe" | "blogs";
  setActiveTab: (tab: "aboutMe" | "blogs") => void;
}

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const AppBarComponent: React.FC<AppBarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (tab: "aboutMe" | "blogs") => {
    setActiveTab(tab);
    handleMenuClose();
  };

  return (
    <AppBar position="static" color="primary">
      <StyledToolbar>
        <Typography variant="h6">Chunyue's Personal Site</Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem onClick={() => handleMenuItemClick("aboutMe")}>
                About Me
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("blogs")}>
                Blogs
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Tabs
            value={activeTab}
            onChange={(e, v) => setActiveTab(v)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="About Me" value="aboutMe" />
            <Tab label="Blogs" value="blogs" />
          </Tabs>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default AppBarComponent;
