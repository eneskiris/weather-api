import React from "react";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay,  IconButton, Stack, Text, useDisclosure, VStack
} from "@chakra-ui/react";
import {HamburgerIcon, MoonIcon, SunIcon} from "@chakra-ui/icons";
import {useThemeStore} from "../stores";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const theme_store = useThemeStore();

  function handle_theme_icon_click() {
      theme_store.set_dark_mode(!theme_store.dark_mode);
  }

  return (
    <Stack direction={"row"} justify={"space-between"} align={"center"} width={"50%"} >
        <Text as={"b"}>
            Hava Durumu Sorgulama
        </Text>
      <IconButton size={"sm"}  ref={btnRef} colorScheme={"blue"}  onClick={onOpen} icon={<HamburgerIcon />}/>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Weather App</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"start"} >
                <Button>
                    Home
                </Button>
                <IconButton onClick={handle_theme_icon_click} aria-label='Search database' icon={ theme_store.dark_mode ? <MoonIcon/> : <SunIcon/>  } />
                <Text>
                    {theme_store.dark_mode ? 'Dark Mode' : 'Light Mode'}
                </Text>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default Nav;
