import './App.css';
import NameCard from './components/NameCard';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/screen/AboutMe';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout />
      <AboutMe />
    </div>
  );
}

export default App;
