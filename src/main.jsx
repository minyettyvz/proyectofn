import React from "react";
import ReactDOM from "react-dom/client";
import PostList from "./PostList";
import AddPost from "./AddPost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostList />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/AddPost",
    element: <AddPost />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
