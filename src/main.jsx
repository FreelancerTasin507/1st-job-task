import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./HomePage/Home/Home";
import ViewDetails from "./components/ViewDetails/ViewDetails";
import BookmarkForm from "./components/BookmarkForm/BookmarkForm";
import Bookmarked from "./Bookmarked/Bookmarked";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`),
      },
      {
        path: "/bookmark/:id",
        element: <BookmarkForm></BookmarkForm>,
        loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`),
      },
      {
        path: "/Bookmarked",
        element: <Bookmarked></Bookmarked>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
