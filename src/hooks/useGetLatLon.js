import useSWR from "swr";

export default function useGetLatLon(city) {
  const { data: get_lat_lon } = useSWR(
    city
      ? `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=2c006b98e2ee5b157418ce7c4325967d`
      : undefined
  );
  const lat = get_lat_lon?.[0]?.lat;
  const lon = get_lat_lon?.[0]?.lon;

  return { lat, lon };
}
