import './App.css';
import NameCard from './components/NameCard';
import AppBarComponent from './components/AppBar';
import { Container, Box } from '@mui/material';

function App() {
  return (
    <div>
      <AppBarComponent />
      <Container maxWidth="sm">
        
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <NameCard
            name="Chunyue Ma"
            title="Software Engineer"
            email="chunyuema01@gmail.com"
          />
        </Box>
      </Container>
    </div>
  );
}

export default App;
