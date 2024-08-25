import React from 'react';
import { Container } from '@mui/material';
import AppBarComponent from '../AppBar';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <AppBarComponent />
      <Container sx={{ mt: 2 }}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
