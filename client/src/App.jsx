import "./App.css";
import React from "react";

// Tools
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";
import DriverDetails from "./pages/DriverDetails";
import AddNewDriver from "./pages/AddNewDriver";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/drivers", element: <Homepage /> },
      { path: "/details/:driverId", element: <DriverDetails /> },
      { path: "/addNewDriver", element: <AddNewDriver /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
