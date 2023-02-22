import React from 'react'
import {
    Card,
    CardBody,
    HStack,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, Spinner,
    Text,
    VStack
} from "@chakra-ui/react";
import useGetCityData from "../hooks/useGetCityData";
import img from '../img/mountain.jpg'
import {BsThreeDotsVertical} from "react-icons/bs";
import {useSelectedCitiesStore} from "../stores";
import {Link} from "react-router-dom";

const CardComponent = ({city}) => {
    const remove_selected_city = useSelectedCitiesStore(state => state.remove_selected_city);
    const {city_data} = useGetCityData(city);
    if (!city_data){
        return <Spinner/>
    }

function handle_remove_city() {
    remove_selected_city(city)
}
  return (
    <Card maxW='sm'
    style={{
        backgroundImage: `linear-gradient(
            to left bottom,
        rgb(0, 0, 0, 0.5),
        rgb(0, 0, 0, 0.3)
        ),url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: 10,
        position: 'relative',
        height: 300,
        width: 370,
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
        _hover: {
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
        },
        _active: {
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
        },
        _focus: {
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
        }
    }}
    >
        <Menu>
            <IconButton
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    position: 'absolute',
                    top: 17,
                    right: 5,
                    color: 'white',
                    _hover: {
                        backgroundColor: 'transparent',
                    },
                    _active: {
                        backgroundColor: 'transparent',
                    },
                    _focus: {
                        backgroundColor: 'transparent',
                    },
                    fontSize:"1.3rem",
                }}
                as={MenuButton}
                aria-label='Call Sage'
                icon={<BsThreeDotsVertical />}
            />
            <MenuList>
                <MenuItem>
                    <Link to={`/weather/${city}`}>
                        View Weather
                    </Link>
                </MenuItem>
                <MenuItem onClick={handle_remove_city} >Remove City</MenuItem>
            </MenuList>
        </Menu>
        <CardBody>
<VStack>
    <Text color={"white"}>
        {
            new Date(city_data?.daily[0]?.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })
        }
    </Text>
    <Text color={"white"}>
        {
            new Date(city_data?.daily[0]?.dt * 1000).toLocaleDateString('en-US', { day: 'numeric' })
        }
    </Text>
        <Image
            src={`http://openweathermap.org/img/w/${city_data?.daily[0]?.weather[0].icon}.png`}
            borderRadius='lg'
        />
    <Text color={"white"}>
        {city}
    </Text>
    <Text color={"white"}>
        {city_data?.daily[0]?.weather[0].description}
    </Text>
</VStack>
    <HStack style={{
        backgroundColor: 'rgba(232, 236, 241,0.5)',
        borderRadius: 10,
        padding: 10,
    }
    } mt={3}>
        <Text color={"white"}>
            Current temp <Text as={"b"} >{city_data?.daily[0]?.temp.day.toFixed(0)} °C</Text>
        </Text>
        <Text color={"white"}>
            Feels like <Text as={"b"} >{city_data?.daily[0]?.feels_like.day.toFixed(0)} °C</Text>
        </Text>
        <Text color={"white"}>
            Humidity <Text as={"b"}>{city_data?.daily[0]?.humidity.toFixed(0)}%</Text>
        </Text>
    </HStack>
        </CardBody>
    </Card>
  )
}

export default CardComponent