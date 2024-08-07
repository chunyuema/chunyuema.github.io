import './App.css';
import NameCard from './components/NameCard';
import AppBarComponent from './components/AppBar';
import { Container, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/screen/AboutMe';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <div>
            <NameCard
              name="Chunyue Ma"
              title="Software Engineer"
            />
          </div>
        } />
        <Route path="/about" element={<AboutMe />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
