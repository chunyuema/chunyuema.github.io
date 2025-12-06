import Layout from "./components/Layout";
import AboutMe from "./components/AboutMe";
import BlogPage from "./components/Blogs";

function App() {
  return (
    <Layout
      children={{
        aboutMe: <AboutMe />,
        blogs: <BlogPage />,
      }}
    />
  );
}

export default App;
