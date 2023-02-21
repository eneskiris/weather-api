import useSWR from "swr";
import {useEffect} from "react";
import {fetcher} from "../App";
import {Select} from "@chakra-ui/react";
import {useCitiesStore, useCountryStore} from "../stores";
import useGetCountryData from "../hooks/useGetCountryData";

export default function GetCountryData() {
    const country = useCountryStore(state=>state.country);
    const set_country = useCountryStore(state=>state.set_country);
    const set_cities = useCitiesStore(state=>state.set_cities);
    const {country_data, country_error, country_loading} = useGetCountryData();


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
        <Select placeholder={"Select Country"} onChange={(e)=>set_country(e.target.value)}>
            {country_data?.data?.map((country) => (
                <option key={country.name}  value={country.name}>{country.name}</option>
            ))}
        </Select>
        </>
    )
}
