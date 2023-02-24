import { createBrowserRouter } from "react-router-dom";
import React from "react";
import CityDetails from "../components/CityDetails/CityDetails";
import Root from "../screens/Root";
import HomeScreen from "../screens/HomeScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/weather/:cityName",
        element: <CityDetails />,
      },
    ],
  },
]);
