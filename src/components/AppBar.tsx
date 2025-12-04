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
  activeTab: "aboutMe" | "blogs" | "experiences";
  setActiveTab: (tab: "aboutMe" | "blogs" | "experiences") => void;
}

const AppBarComponent: React.FC<AppBarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Tab definitions
  const tabs: { label: string; value: "aboutMe" | "experiences" | "blogs" }[] =
    [
      { label: "About Me", value: "aboutMe" },
      { label: "Experiences", value: "experiences" },
      { label: "Blogs", value: "blogs" },
    ];

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (tab: "aboutMe" | "experiences" | "blogs") => {
    setActiveTab(tab);
    handleMenuClose();
  };

  return (
    <AppBar position="static" color="primary">
      <Typography variant="h6">Chunyue's Personal Site</Typography>

      {isMobile ? (
        <>
          <IconButton color="inherit" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            {tabs.map((tab) => (
              <MenuItem
                key={tab.value}
                selected={activeTab === tab.value}
                onClick={() => handleMenuItemClick(tab.value)}
              >
                {tab.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <Tabs
          value={activeTab}
          onChange={(e, v) => setActiveTab(v)}
          textColor="inherit"
          indicatorColor="secondary"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      )}
    </AppBar>
  );
};

export default AppBarComponent;
