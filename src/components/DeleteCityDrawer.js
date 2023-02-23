import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader, DrawerOverlay, Text,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import {useRef} from "react";
import { Link } from "react-router-dom";
import {useSelectedCitiesStore} from "../stores";

export default function DeleteCityDrawer({cityName}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef();
    const toast = useToast();
    const remove_selected_city = useSelectedCitiesStore(state => state.remove_selected_city);
    function handle_remove_city() {
        remove_selected_city(cityName)
        toast({
            description: `City ${cityName} removed successfully`,
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
        onClose()
    }

    return (
        <>
            <Button color={"gray.600"} ref={btnRef} onClick={onOpen} size={"sm"} variant='solid'>
                Remove City
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
                    <DrawerHeader>Remove {cityName} city</DrawerHeader>

                    <DrawerBody display={"flex"}  alignItems={"center"} fontSize={"1.3rem"} textAlign={"center"} as={"b"} >
                        <Text>You have sure you want to remove {cityName}?</Text>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={handle_remove_city} colorScheme='blue'>
                            <Link to={"/"}>Remove</Link>
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}