import useGetCityData from "../hooks/useGetCityData";
import {useParams} from "react-router-dom";
import {Header} from "./Header";
import DeleteCityDrawer from "./DeleteCityDrawer";
import CardComponent from "./CardComponent";
import img from "../img/mountain.jpg";
import {
    Card,
    CardBody,
    HStack,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";
import React from "react";
export default function CityDetails(){
    const { cityName } = useParams();
    const {city_data} = useGetCityData(cityName);
        return(
            <>
                <Header h1={cityName} h2={"Weather for the next 7 days"} drawer={<DeleteCityDrawer cityName={cityName}/>} />
                <div style={{
                    display:"flex",
                }}>
                <CardComponent city={cityName}/>
                <div style={{
                    display:"flex",
                    maxWidth:"850px",
                    marginLeft:"30px",
                    overflow:"scroll"
                }}>
                {
                    city_data?.daily.map((day, index) => {
                       return(
                           <Card maxW='sm'
                                 style={{
                                     minWidth:200,
                                     margin:"0 6px",
                                     flexShrink:0,
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
                                     height: 250,
                                     width: 200,
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
                               <CardBody>
                                   <VStack>
                                       <Text color={"white"}>
                                           {
                                               new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })
                                           }
                                       </Text>
                                       <Text color={"white"}>
                                           {
                                               new Date(day.dt * 1000).toLocaleDateString('en-US', { day: 'numeric' })
                                           }
                                       </Text>
                                       <Image
                                           src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                                           borderRadius='lg'
                                       />
                                   </VStack>
                                   <HStack style={{
                                       backgroundColor: 'rgba(232, 236, 241,0.5)',
                                       borderRadius: 10,
                                       padding: 10,
                                   }
                                   }  mt={3}>
                                       <Text color={"white"}>
                                           {day.temp.day.toFixed(0)} °C
                                       </Text>
                                       <Text color={"white"}>
                                           {day.feels_like.day.toFixed(0)} °C
                                       </Text>
                                   </HStack>
                               </CardBody>
                           </Card>
                       )
                    })
                }
                </div>
            </div>
            </>
        )
}