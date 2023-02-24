import { Select, Text } from "@chakra-ui/react";
import React from "react";
import { useCitiesStore, useCityStore, useCountryStore } from "../../stores";

export default function GetCitiesData() {
  const cities = useCitiesStore((state) => state.cities);
  const country = useCountryStore((state) => state.country);
  const set_city = useCityStore((state) => state.add_city);

  return (
    <>
      <Text>Şehir</Text>
      <Select
        placeholder={"Şehir Seçin"}
        disabled={!country}
        onChange={(e) => set_city(e.target.value)}
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Select>
    </>
  );
}
