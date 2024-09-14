import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import React from "react";
import ErrorPage from "./error-page.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Todos from "./pages/todo/Todos.tsx";
import Home from "./pages/home/Home.tsx";
import Vite from "./pages/vite/Vite.tsx";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/vite",
        element: <Vite />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
