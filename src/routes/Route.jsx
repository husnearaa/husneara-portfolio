import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Education from "../pages/Education/Education";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";





const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/education',
                element: <Education></Education>,
            },
            {
                path: '/skills',
                element: <Skills></Skills>,
            },
            {
                path: '/projects',
                element: <Projects></Projects>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
        ]
    }
])

export default myCreatedRoute;