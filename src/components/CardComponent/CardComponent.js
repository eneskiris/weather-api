import React from "react";
import {
  Card,
  CardBody,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
  useToast,
  VStack,
} from "@chakra-ui/react";
import useGetCityData from "../../hooks/useGetCityData";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelectedCitiesStore } from "../../stores";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const CardComponent = ({ city, render_at_home, index }) => {
  console.log(index);
  const remove_selected_city = useSelectedCitiesStore(
    (state) => state.remove_selected_city
  );
  const { city_data } = useGetCityData(city);
  const toast = useToast();
  const navigate = useNavigate();

  if (!city_data) {
    return <Spinner />;
  }

  function handleViewWeather() {
    navigate(`/weather/${city}`);
  }

  function handle_remove_city() {
    remove_selected_city(city);
    toast({
      description: `City ${city} removed successfully`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }
  return (
    <Card className={styles.card}>
      <Menu>
        {render_at_home && (
          <IconButton
            className={styles.dot_button}
            as={MenuButton}
            aria-label="Call Sage"
            icon={<BsThreeDotsVertical />}
          />
        )}
        <MenuList>
          <MenuItem onClick={handleViewWeather}>View Weather</MenuItem>
          <MenuItem onClick={handle_remove_city}>Remove City</MenuItem>
        </MenuList>
      </Menu>
      <CardBody>
        <VStack>
          <Text className={styles.white_text}>
            {new Date(city_data?.daily[index]?.dt * 1000).toLocaleDateString(
              "en-US",
              { weekday: "long" }
            )}
          </Text>
          <Text className={styles.white_text}>
            {new Date(city_data?.daily[index]?.dt * 1000).toLocaleDateString(
              "en-US",
              { day: "numeric" }
            )}
          </Text>
          <Tooltip
            className={styles.tooltip}
            placement="top"
            label={`${city_data?.daily[index]?.weather[0].main}`}
          >
            <Image
              src={`http://openweathermap.org/img/w/${city_data?.daily[index]?.weather[0].icon}.png`}
              borderRadius="lg"
            />
          </Tooltip>
          <Text className={styles.white_text}>{city}</Text>
          <Text className={styles.white_text}>
            {city_data?.daily[index]?.weather[0].description}
          </Text>
        </VStack>
        <HStack className={styles.hstack} mt={3}>
          <Text className={styles.white_text}>
            Current temp{" "}
            <Text as={"b"}>
              {city_data?.daily[index]?.temp.day.toFixed(0)} °C
            </Text>
          </Text>
          <Text className={styles.white_text}>
            Feels like{" "}
            <Text as={"b"}>
              {city_data?.daily[index]?.feels_like.day.toFixed(0)} °C
            </Text>
          </Text>
          <Text className={styles.white_text}>
            Humidity{" "}
            <Text as={"b"}>
              {city_data?.daily[index]?.humidity.toFixed(0)}%
            </Text>
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
