import './App.css';
import NameCard from './components/NameCard';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/screen/AboutMe';
import Layout from './components/layout/Layout';

function App() {
  return (
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
  );
}

export default App;
