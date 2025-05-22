import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Table from "./pages/Table";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
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
      <Provider store={store}>
        {" "}
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
