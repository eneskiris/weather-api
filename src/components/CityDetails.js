import useGetCityData from "../hooks/useGetCityData";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import DeleteCityDrawer from "./DeleteCityDrawer";
import CardComponent from "./CardComponent";
import img from "../img/mountain.jpg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { GrNext } from "react-icons/gr";
import { Card, CardBody, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelectedCitiesStore } from "../stores";
export default function CityDetails() {
  const { cityName } = useParams();
  const { city_data } = useGetCityData(cityName);
  const cities = useSelectedCitiesStore((state) => state.selected_cities);
  return (
    <>
      {cities.includes(cityName) && (
        <>
          <Header
            h1={cityName}
            h2={"Weather for the next 7 days"}
            drawer={<DeleteCityDrawer cityName={cityName} />}
          />
          <div
            style={{
              display: "flex",
              width: "1200px",
            }}
          >
            <CardComponent city={cityName} />
            <div
              style={{
                maxWidth: "810px",
                marginLeft: "20px",
              }}
            >
              <Splide
                style={{
                  display: "flex",
                }}
                hasTrack={false}
                aria-label="splide__arrows"
                className="deneme"
              >
                <SplideTrack>
                  {city_data?.daily.map((day, index) => {
                    return (
                      <SplideSlide
                        key={index}
                        style={{
                          flexBasis: "180px",
                        }}
                      >
                        <Card
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
                                {new Date(day.dt * 1000).toLocaleDateString(
                                  "en-US",
                                  { weekday: "long" }
                                )}
                              </Text>
                              <Text color={"white"}>
                                {new Date(day.dt * 1000).toLocaleDateString(
                                  "en-US",
                                  { day: "numeric" }
                                )}
                              </Text>
                              <Image
                                style={{ marginTop: "20px" }}
                                src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                                borderRadius="lg"
                              />
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
                              <Text color={"white"}>
                                {day.temp.day.toFixed(0)} °C
                              </Text>
                              <Text color={"white"}>
                                {day.feels_like.day.toFixed(0)} °C
                              </Text>
                            </HStack>
                          </CardBody>
                        </Card>
                      </SplideSlide>
                    );
                  })}
                </SplideTrack>
                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev">
                    <GrNext />
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <GrNext />
                  </button>
                </div>
              </Splide>
            </div>
          </div>
        </>
      )}
      <Text
        style={{
          fontSize: "50px",
          margin: "400px ",
        }}
      >
        ARADIĞINIZ ŞEHİRE ŞUANDA ULAŞILAMAMAKTA
      </Text>
    </>
  );
}
