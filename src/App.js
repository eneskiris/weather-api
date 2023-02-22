import "./App.css";
import GetCitiesData from "./components/GetCitiesData";
import GetCountryData from "./components/GetCountryData";
import CardComponent from "./components/CardComponent";
import { SWRConfig } from "swr";
import Nav from "./components/Nav";
import Layout from "./layout";
import {Header} from "./components/Header";
import {useCityStore, useSelectedCitiesStore} from "./stores";
function App() {
    const selected_cities = useSelectedCitiesStore(state => state.selected_cities)
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
            <Nav />
            <Header/>
             {/*<CardComponent/>*/}
        </Layout>
      </SWRConfig>
    </>
  );
}

export default App;
