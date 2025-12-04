// App.tsx
import React from "react";
import Layout from "./components/Layout";
import AboutMe from "./components/screen/AboutMeScreen";
import BlogPage from "./components/screen/BlogScreen";
import EmploymentHistory from "./components/screen/EmploymentHistory";

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
