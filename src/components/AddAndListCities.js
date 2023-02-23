import {Header} from "./Header";
import AddCityDrawer from "./AddCityDrawer";
import {Box, HStack} from "@chakra-ui/react";
import CardComponent from "./CardComponent";
import {useSelectedCitiesStore} from "../stores";
import ModalComponent from "./ModalComponent";

export default function AddAndListCities () {
    const selected_cities = useSelectedCitiesStore(state => state.selected_cities)

    return (
        <>
            <ModalComponent/>
            <Header h1={"Şehir seçerek hava durumunu öğrenebilirsiniz."} h2={"Şehirini seç ve hava durumunu öğren."} drawer={<AddCityDrawer/>}/>
            <HStack>

                {selected_cities.map((city,number) => (
                    <Box key={number} className="col-md-4">
                        <CardComponent  city={city}/>
                    </Box>
                ))}

            </HStack>
        </>
    )
}