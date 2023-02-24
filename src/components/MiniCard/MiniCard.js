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
import ModalComponent from "../ModalComponent/ModalComponent";
import styles from "./styles.module.css";

export default function MiniCard({ day, city_name, index }) {
  const [is_clicked, set_is_clicked] = useState(false);

  function handleOnClick() {
    set_is_clicked(is_clicked);
  }
  return (
    <ModalComponent day={day} city_name={city_name} index={index}>
      <Card className={styles.card} onClick={handleOnClick} maxW="sm">
        <CardBody>
          <VStack>
            <Text className={styles.text}>
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </Text>
            <Text className={styles.text}>
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                day: "numeric",
              })}
            </Text>
            <Tooltip
              className={styles.tooltip}
              placement="top"
              label={`${day?.weather[0].main}`}
            >
              <Image
                className={styles.image}
                src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                borderRadius="lg"
              />
            </Tooltip>
          </VStack>
          <HStack className={styles.hstack} mt={3}>
            <Text className={styles.text}>{day.temp.day.toFixed(0)} °C</Text>
            <Text className={styles.text}>
              {day.feels_like.day.toFixed(0)} °C
            </Text>
          </HStack>
        </CardBody>
      </Card>
    </ModalComponent>
  );
}
