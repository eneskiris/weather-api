import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();

  function handle_home_button_click() {
    navigate("/");
    onClose();
  }

  const { colorMode, toggleColorMode } = useColorMode();
  function handle_icon_bg_color(color_type) {
    switch (color_type) {
      case "bg":
        return colorMode === "dark" ? "#F5DCBA" : "#344265";
      case "color":
        return colorMode === "dark" ? "#69552D" : "#fff";
      default:
        break;
    }
  }
  return (
    <Stack
      direction={"row"}
      justify={"space-between"}
      align={"center"}
      width={"50%"}
    >
      <Text as={"b"}>Hava Durumu Sorgulama</Text>
      <IconButton
        size={"sm"}
        ref={btnRef}
        color={handle_icon_bg_color("color")}
        bgColor={handle_icon_bg_color("bg")}
        onClick={onOpen}
        icon={<HamburgerIcon />}
        aria-label="Search database"
      />
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
            <VStack alignItems={"start"}>
              <Button onClick={handle_home_button_click}>
                <Link to={"/"}>Home</Link>
              </Button>
              <IconButton
                color={handle_icon_bg_color("color")}
                bgColor={handle_icon_bg_color("bg")}
                onClick={toggleColorMode}
                aria-label="Search database"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              />
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default Nav;
