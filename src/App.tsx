import './App.css';
import AboutMe from './components/screen/AboutMeScreen';
import Layout from './components/layout/Layout';
import BlogPage from './components/screen/BlogScreen';

function App() {
  return (
    <Layout>
      <AboutMe />
      <BlogPage />
    </Layout>
  );
}

export default App;
