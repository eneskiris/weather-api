import "./App.css";
import { SWRConfig } from "swr";
import Layout from "./layout";
import AddAndListCities from "./components/AddAndListCities";
import {Outlet} from "react-router-dom";


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

        <Layout>
            <Outlet />
        </Layout>
      </SWRConfig>
    </>
  );
}

export default App;
