import './App.css';
import GetCitiesData from "./components/GetCitiesData";
import GetCountryData from "./components/GetCountryData";
import CardComponent from "./components/CardComponent";
import {SWRConfig} from "swr";
function App() {
  return (
    <>
        <SWRConfig value={{
            revalidateOnFocus: false,
            errorRetryCount: 3,
            fetcher: (resource) => fetch(`${resource}`).then(res => {
                return res.json();
            }).then(res => {
                return res;
            }).catch(e => console.log("api error", e))
        }}>
        <GetCountryData/>
        <GetCitiesData/>
        <CardComponent/>
        </SWRConfig>
    </>
  );
}

export default App;
