import { Header } from "./Header";
import AddCityDrawer from "./AddCityDrawer";
import { Box, HStack } from "@chakra-ui/react";
import CardComponent from "./CardComponent";
import { useSelectedCitiesStore } from "../stores";

export default function AddAndListCities() {
  const selected_cities = useSelectedCitiesStore(
    (state) => state.selected_cities
  );

  return (
    <>
      <Header
        h1={"Şehir seçerek hava durumunu öğrenebilirsiniz."}
        h2={"Şehirini seç ve hava durumunu öğren."}
        drawer={<AddCityDrawer />}
      />
      <HStack>
        {selected_cities.map((city, number) => (
          <Box key={number} className="col-md-4">
            <CardComponent render_at_home={true} city={city} index={0} />
          </Box>
        ))}
      </HStack>
    </>
  );
}
