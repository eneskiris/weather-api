import './App.css';
import useSWR from 'swr'
import { create } from 'zustand'
import axios from "axios";
import GetCitiesData from "./components/GetCitiesData";
import GetCountryData from "./components/GetCountryData";
export const fetcher = url => axios.get(url).then(res => res.data)
export const useCityStore = create((set) => ({
    city: '',
    set_city: (city) => set(() => ({city: city})),
}
))

function App() {
  const city = useCityStore(state => state.city)

    const { data:weather_api, error:weather_error, isLoading:weather_loading } = useSWR(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=2c006b98e2ee5b157418ce7c4325967d`,fetcher)
    const lat = weather_api?.[0]?.lat
    const lon = weather_api?.[0]?.lon

    const { data:city_data, error:city_error, isLoading:city_loading } = useSWR(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=2c006b98e2ee5b157418ce7c4325967d&units=metric`,fetcher)

  return (
    <>
<h1>Weather App</h1>
    <h1>deneme</h1>
       <GetCountryData/>
        <GetCitiesData/>
        {
            // city_data?.daily[0]?.map((daily) => (
            <div key={city_data?.daily[0]?.dt}>
                <span>{
                    new Date(city_data?.daily[0]?.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })
                }</span>
                <span>{
                    new Date(city_data?.daily[0]?.dt * 1000).toLocaleDateString('en-US', { day: 'numeric' })
                }</span>
                <span>{city_data?.daily[0]?.weather[0].icon && <img src={`http://openweathermap.org/img/w/${city_data?.daily[0]?.weather[0].icon}.png`} alt=""/>}</span>
                <span>{city}</span> {" "}
                <span>{city_data?.daily[0]?.weather[0].description}</span>
                <div>
                    <span>Current temp {city_data?.daily[0]?.temp.day}*C</span>
                    <span>Feels like {city_data?.daily[0]?.feels_like.day}*C</span>
                    <span>Humidity {city_data?.daily[0]?.humidity}%</span>
                </div>
            </div>
        // ))
        }
    </>
  );
}

export default App;
