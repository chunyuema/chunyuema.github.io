import './App.css';
import AboutMe from './components/screen/AboutMe';
import Layout from './components/layout/Layout';
import EmploymentHistory from './components/EmploymentHistory';

function App() {
  return (
    <Layout>
      <AboutMe />
      <EmploymentHistory />
    </Layout>
  );
}

export default App;
