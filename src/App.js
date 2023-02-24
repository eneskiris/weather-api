import "./App.css";
import { SWRConfig } from "swr";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import React from "react";

function App() {
  return (
    <>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          errorRetryCount: 3,
          fetcher: (resource) =>
            fetch(`${resource}`)
              .then((res) => {
                return res.json();
              })
              .then((res) => {
                return res;
              })
              .catch((e) => console.log("api error", e)),
        }}
      >
        <RouterProvider router={router} />
      </SWRConfig>
    </>
  );
}

export default App;
