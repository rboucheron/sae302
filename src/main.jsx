import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home"
import Audio from "./pages/audio";
import Article from "./pages/Article";
import JobVideo from "./pages/JobVideo";
import Galerie from "./pages/Galerie"
import Error from "./pages/404";
import Introduction from "./pages/Introduction";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />

  },
  {
    path: "/audio",
    element: <Audio />,
   
  },
  {
    path: "/Article",
    element: <Article />,
   
  },
  {
    path: "/Interview",
    element: <JobVideo />,
   
  },
  {
    path: "/Galerie",
    element: <Galerie />,
   
  },
  {
    path: "/Introduction",
    element: <Introduction />

  }, 
  {
    path: "*",
    element: <Error />

  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>


    <RouterProvider router={router} />
  </React.StrictMode>
);