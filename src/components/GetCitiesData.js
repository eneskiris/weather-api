import {create} from "zustand";
import {useCountryStore} from "./GetCountryData";
import {useCityStore} from "../App";

export const useCitiesStore = create((set) => ({
    cities: [],
    set_cities: (city) => set(() => ({cities: [...city]})),
}))
export default function GetCitiesData () {
    const cities = useCitiesStore(state => state.cities)
    const country = useCountryStore(state => state.country)
    const set_city = useCityStore(state => state.set_city)

    return(
        <>
            <select disabled={!country} onChange={(e)=>set_city(e.target.value)}>
                <option value="">Select City</option>
                {cities.map((city) => (
                    <option key={city}  value={city}>{city}</option>
                ))}
            </select>
        </>
    )
}