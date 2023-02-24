import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AddIcon } from "@chakra-ui/icons";
import GetCountryData from "../GetCountryData/GetCountryData";
import GetCitiesData from "../GetCitiesData/GetCitiesData";
import {
  useCityStore,
  useCountryStore,
  useSelectedCitiesStore,
} from "../../stores";
import React from "react";

export default function AddCityDrawer() {
  const add_selected_city = useSelectedCitiesStore(
    (state) => state.add_selected_city
  );
  const clear_country_store = useCountryStore((state) => state.clear_country);
  const city = useCityStore((state) => state.city);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  async function handle_add_city() {
    await add_selected_city(city);
    await clear_country_store();
    toast({
      description: `City ${city} added successfully`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
  }
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        size={"sm"}
        leftIcon={<AddIcon />}
        variant="solid"
      >
        Şehir ekle
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Şehir ekle</DrawerHeader>

          <DrawerBody display={"flex"} flexDirection={"column"} gap={"10px"}>
            <GetCountryData />
            <GetCitiesData />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handle_add_city} colorScheme="blue">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
