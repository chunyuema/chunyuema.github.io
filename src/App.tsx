import './App.css';
import NameCard from './components/NameCard';
import { Container, Box } from '@mui/material';

function App() {
  return (
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
  );
}

export default App;
