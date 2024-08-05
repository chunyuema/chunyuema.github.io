// AppBarComponent.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { useMediaQuery, useTheme } from '@mui/material';

// Define styles using styled
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const AppBarComponent: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index: number) => {
    setValue(index);
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">
            Chunyue's Personal Site
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleMenuItemClick(0)}>About</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(1)}>Projects</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(2)}>Blogs</MenuItem>
            </Menu>
          </>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="About" />
            <Tab label="Projects" />
            <Tab label="Blogs" />
          </Tabs>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default AppBarComponent;
