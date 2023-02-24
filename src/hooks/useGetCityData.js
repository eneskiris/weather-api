import useSWR from "swr";
import useGetLatLon from "./useGetLatLon";

export default function useGetCityData(city) {
  const { lat, lon } = useGetLatLon(city);

  const {
    data: city_data,
    error: city_error,
    isLoading: city_loading,
  } = useSWR(
    lat && lon
      ? `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=2c006b98e2ee5b157418ce7c4325967d&units=metric`
      : undefined
  );

  return { city_data, city_error, city_loading };
}
