import Layout from "./components/Layout";
import AboutMe from "./components/AboutMe";
import BlogPage from "./components/Blogs";
import Resume from "./components/Resume";

function App() {
    return (
        <Layout
            children={{
                aboutMe: <AboutMe />,
                resume: <Resume />,
                blogs: <BlogPage />,
            }}
        />
    );
}

export default App;
