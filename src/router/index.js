import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import React from "react";
import CityDetails from "../components/CityDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/weather/:cityName",
                element: <CityDetails />,
            },
        ],
    },

]);
