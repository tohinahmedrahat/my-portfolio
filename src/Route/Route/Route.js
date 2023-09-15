import { createBrowserRouter, useLoaderData } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Main/Main";
import About from "../../Pages/About/About";
import Project from "../../Pages/Project/Project";
import Contact from "../../Pages/Contact/Contact";
import Service from "../../Pages/Service/Service";
import SingleProject from "../../Pages/Project/SingleProject";


const route = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[{
            path:"/",
            element:<Home></Home>
        },
        {
            path:"about",
            element:<About></About>
        },
        {
            path:"work",
            element:<Project></Project>
        },
        {
            path:"/work/:id",
            element:<SingleProject></SingleProject>
        },
        {
            path:"contact",
            element:<Contact></Contact>
        },
        {
            path:"service",
            element:<Service></Service>
        },
    ]
    }
])

export default route;