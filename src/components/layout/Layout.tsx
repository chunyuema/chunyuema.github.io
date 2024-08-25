import React from 'react';
import { Container } from '@mui/material';
import AppBarComponent from '../AppBar';
import { Outlet } from 'react-router-dom'; // or any routing library you're using

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <AppBarComponent />
      <Container sx={{ mt: 2 }}>
        {children || <Outlet />}
      </Container>
    </div>
  );
};

export default Layout;
