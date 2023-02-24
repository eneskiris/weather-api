import useSWR from "swr";

export default function useGetCountryData() {
  const {
    data: country_data,
    error: country_error,
    isLoading: country_loading,
  } = useSWR(
    "https://countriesnow.space/api/v0.1/countries/info?returns=cities"
  );

  return { country_data, country_error, country_loading };
}
