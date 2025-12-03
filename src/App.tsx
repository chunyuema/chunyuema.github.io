// App.tsx
import React from "react";
import Layout from "./components/layout/Layout";
import AboutMe from "./components/screen/AboutMeScreen";
import BlogPage from "./components/screen/BlogScreen";

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
