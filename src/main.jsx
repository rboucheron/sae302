import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Audio from "./pages/audio";
import ArticleYaelle from "./pages/ArticleYaelle";
import JobVideo from "./pages/JobVideo";
import Galerie from "./pages/Galerie";
import Error from "./pages/404";
import Introduction from "./pages/Introduction";
import Credit from "./pages/Credit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/audio",
    element: <Audio />,
  },
  {
    path: "/Article",
    element: <ArticleYaelle />,
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
    element: <Introduction />,
  },
  {
    path: "/credit",
    element: <Credit />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
