import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBarComponent from '../AppBar';

const Layout: React.FC = () => {
  return (
    <div>
      <AppBarComponent />
      <Container sx={{ mt: 2 }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
