import React from "react";
import Home from "./component/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./component/Fruits/Fruits.jsx";
import Dairy from "./component/Dairy/Dairy.jsx";
import SeaFood from "./component/SeaFood/SeaFood.jsx";
import AllProducts from "./component/AllProducts/AllProducts.jsx";
import Layout from "./component/Layout/Layout.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <SeaFood />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;