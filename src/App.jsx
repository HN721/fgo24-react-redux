import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Table from "./pages/Table";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/Table",
      element: <Table />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
