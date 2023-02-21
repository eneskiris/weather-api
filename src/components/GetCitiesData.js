import {Select} from "@chakra-ui/react";
import {useCitiesStore, useCityStore, useCountryStore} from "../stores";

export default function GetCitiesData () {
    const cities = useCitiesStore(state => state.cities)
    const country = useCountryStore(state => state.country)
    const set_city = useCityStore(state => state.set_city)

    return(
        <>
            <Select placeholder={"Select City"} disabled={!country} onChange={(e)=>set_city(e.target.value)}>
                {cities.map((city) => (
                    <option key={city}  value={city}>{city}</option>
                ))}
            </Select>
        </>
    )
}