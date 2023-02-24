import {
  Card,
  CardBody,
  VStack,
  Text,
  Image,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import img from "../img/mountain.jpg";
import ModalComponent from "./ModalComponent";

export default function MiniCard({ day, city_name, index }) {
  const [is_clicked, set_is_clicked] = useState(false);

  function handleOnClick() {
    set_is_clicked(is_clicked);
  }
  return (
    <ModalComponent day={day} city_name={city_name} index={index}>
      <Card
        onClick={handleOnClick}
        maxW="sm"
        bgImage={`linear-gradient(
            to left bottom,
        rgb(0, 0, 0, 0.5),
        rgb(0, 0, 0, 0.3)
        ),url(${img})`}
        style={{
          margin: "0 11px",
          maxWidth: "180px",
          flexShrink: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 10,
          position: "relative",
          height: 250,
          width: 180,
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
          cursor: "pointer",
        }}
        _hover={{
          backgroundImage: `linear-gradient(
                                        to left bottom,
                                    rgb(0, 0, 0, 0.6),
                                    rgb(0, 0, 0, 0.6)
                                    ),url(${img})`,
        }}
      >
        <CardBody>
          <VStack>
            <Text color={"white"}>
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </Text>
            <Text color={"white"}>
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                day: "numeric",
              })}
            </Text>
            <Tooltip
              placement="top"
              bgColor={"rgba(0, 0, 0,0.7)"}
              label={`${day?.weather[0].main}`}
            >
              <Image
                style={{ marginTop: "20px" }}
                src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                borderRadius="lg"
              />
            </Tooltip>
          </VStack>
          <HStack
            style={{
              backgroundColor: "rgba(232, 236, 241,0.3)",
              borderRadius: 10,
              padding: 10,
              marginTop: 30,
              justifyContent: "center",
            }}
            mt={3}
          >
            <Text color={"white"}>{day.temp.day.toFixed(0)} °C</Text>
            <Text color={"white"}>{day.feels_like.day.toFixed(0)} °C</Text>
          </HStack>
        </CardBody>
      </Card>
    </ModalComponent>
  );
}
