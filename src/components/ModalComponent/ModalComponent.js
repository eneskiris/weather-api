import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Box,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsClouds } from "react-icons/bs";
import { WiRain, WiStrongWind } from "react-icons/wi";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./styles.module.css";

const ModalComponent = ({ children, day, city_name, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const current_month_name = new Date().toLocaleDateString("en-US", {
    month: "long",
  });
  const card_day = new Date(day.dt * 1000).toLocaleDateString("en-US", {
    day: "numeric",
  });
  const { colorMode } = useColorMode();
  function handle_icon_color() {
    return colorMode === "dark" ? "#fff" : "#344265";
  }
  return (
    <>
      <Button className={styles.button} onClick={onOpen}>
        {children}
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"3xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Weather Info from {current_month_name} {card_day}th
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems={"center"} padding={5}>
              <Flex width={"22rem"}>
                <CardComponent
                  index={index}
                  render_at_home={false}
                  city={city_name}
                />
              </Flex>
              <Flex>
                <Flex
                  padding={10}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Flex alignItems={"center"}>
                    <WiStrongWind color={handle_icon_color()} size={"3.9rem"} />
                    <Box display={"flex"} flexDirection={"column"}>
                      <Text fontSize="xl">Wind</Text>
                      <Text as="b">
                        Velocity: {day.wind_speed ? day.wind_speed : 0} km/h
                      </Text>
                      <Text as="b">
                        Direction: {day.wind_deg ? day.wind_deg : 0}°
                      </Text>
                    </Box>
                  </Flex>

                  <Flex gap={2} alignItems={"center"}>
                    <WiRain color={handle_icon_color()} size={"4rem"} />
                    <Box>
                      <Text fontSize="xl">Rain</Text>
                      <Text as="b">
                        Percentage: {day.rain ? day.rain : 0} %
                      </Text>
                    </Box>
                  </Flex>

                  <Flex gap={3} alignItems={"center"}>
                    <BsClouds color={handle_icon_color()} size={"3rem"} />
                    <Box>
                      <Text fontSize="xl">Clouds</Text>
                      <Text as="b">
                        Percentage: {day.clouds ? day.clouds : 0} %
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
