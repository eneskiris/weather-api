import React from 'react'
import {Card, CardBody, HStack, Image, Text, VStack} from "@chakra-ui/react";
import useGetCityData from "../hooks/useGetCityData";
import img from '../img/mountain.jpg'
import {useCityStore} from "../stores";

const CardComponent = () => {
    const {city_data, city_error, city_loading} = useGetCityData();
    const city = useCityStore(state => state.city);

  return (
    <Card backgroundImage={
        `url(${img})`
    } backgroundSize={"cover"}
          _before={
              {
                    content: "''",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    bg: 'rgba(0, 0, 0, 0.3)',
              }
          }
          maxW='sm'>
        <CardBody>
<VStack>
    <Text>
        {
            new Date(city_data?.daily[0]?.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })
        }
    </Text>
    <Text>
        {
            new Date(city_data?.daily[0]?.dt * 1000).toLocaleDateString('en-US', { day: 'numeric' })
        }
    </Text>
    <Image
        src={`http://openweathermap.org/img/w/${city_data?.daily[0]?.weather[0].icon}.png`}
        borderRadius='lg'
    />
    <Text>
        {city}
    </Text>
    <Text>
        {city_data?.daily[0]?.weather[0].description}
    </Text>
</VStack>
    <HStack mt={3}>
        <Text>
            Current temp {city_data?.daily[0]?.temp.day} °C
        </Text>
        <Text>
            Feels like {city_data?.daily[0]?.feels_like.day} °C
        </Text>
        <Text>
            Humidity {city_data?.daily[0]?.humidity}%
        </Text>
    </HStack>
        </CardBody>
    </Card>
  )
}

export default CardComponent