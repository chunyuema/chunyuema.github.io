// App.tsx
import React from "react";
import Layout from "./components/Layout";
import AboutMe from "./components/AboutMe";
import BlogPage from "./components/Blogs";
import EmploymentHistory from "./components/EmploymentHistory";

function App() {
  return (
    <Layout
      children={{
        aboutMe: <AboutMe />,
        blogs: <BlogPage />,
        employmentHistory: <EmploymentHistory />,
      }}
    />
  );
}

export default App;
