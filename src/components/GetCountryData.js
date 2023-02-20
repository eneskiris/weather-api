import {useCitiesStore} from "./GetCitiesData";
import useSWR from "swr";
import {create} from "zustand";
import {useEffect} from "react";
import {fetcher} from "../App";

export const useCountryStore = create((set) => ({
    country: '',
    set_country: (country) => set({country}),
}
))

export default function GetCountryData() {
    const country = useCountryStore(state=>state.country);
     const set_country = useCountryStore(state=>state.set_country);
     const set_cities = useCitiesStore(state=>state.set_cities);

    const { data:country_data, error:country_error, isLoading:country_loading } = useSWR('https://countriesnow.space/api/v0.1/countries/info?returns=cities',fetcher);


    useEffect(()=>{
        country_data?.data?.find((ulke) => {
                if(ulke.name === country){
                    set_cities(ulke.cities)
                }
            }
        )
    },[country])

    if (country_loading) {
        return <div>Loading...</div>
    }

    if (country_error) {
        return <div>Error...</div>
    }

    return (
        <>
        <select onChange={(e)=>set_country(e.target.value)}>
            <option value="">Select Country</option>
            {country_data?.data?.map((country) => (
                <option key={country.name}  value={country.name}>{country.name}</option>
            ))}
        </select>
        </>
    )
}