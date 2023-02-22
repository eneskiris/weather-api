import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay, useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";
import {AddIcon} from "@chakra-ui/icons";
import GetCountryData from "./GetCountryData";
import GetCitiesData from "./GetCitiesData";
import {useCityStore, useSelectedCitiesStore} from "../stores";

export default function AddCityDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const add_selected_city = useSelectedCitiesStore(state => state.add_selected_city)
    const city = useCityStore(state => state.city)
    function handle_add_city() {
        add_selected_city(city)
        onClose()
    }
    return (
        <>
            <Button ref={btnRef} onClick={onOpen} size={"sm"} leftIcon={<AddIcon />}  variant='solid'>
                Şehir ekle
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"sm"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Şehir ekle</DrawerHeader>

                    <DrawerBody display={"flex"} flexDirection={"column"} gap={"10px"}>
                        <GetCountryData/>
                        <GetCitiesData/>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={handle_add_city} colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}