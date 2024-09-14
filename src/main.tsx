import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import React from "react";
import ErrorPage from "./error-page.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Todos from "./pages/todo/Todos.tsx";
import Home from "./pages/home/Home.tsx";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },

      {
        path: "/todos",
        element: <Todos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
