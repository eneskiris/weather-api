import useGetCityData from "../../hooks/useGetCityData";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import DeleteCityDrawer from "../DeleteCityDrawer/DeleteCityDrawer";
import CardComponent from "../CardComponent/CardComponent";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { GrNext } from "react-icons/gr";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelectedCitiesStore } from "../../stores";
import MiniCard from "../MiniCard/MiniCard";
import styles from "./styles.module.css";

export default function CityDetails() {
  const { cityName } = useParams();
  const { city_data } = useGetCityData(cityName);
  const cities = useSelectedCitiesStore((state) => state.selected_cities);

  return (
    <>
      {cities.includes(cityName) ? (
        <>
          <Header
            h1={cityName}
            h2={"Weather for the next 7 days"}
            drawer={<DeleteCityDrawer cityName={cityName} />}
          />
          <Flex className={styles.flex}>
            <CardComponent render_at_home={false} city={cityName} index={0} />
            <Box className={styles.box}>
              <Splide
                className={styles.splide}
                hasTrack={false}
                aria-label="splide__arrows"
              >
                <SplideTrack>
                  {city_data?.daily.map((day, index) => {
                    return (
                      <SplideSlide className={styles.splide_slide} key={index}>
                        <MiniCard
                          city_name={cityName}
                          day={day}
                          index={index}
                        />
                      </SplideSlide>
                    );
                  })}
                </SplideTrack>
                <Box className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev">
                    <GrNext />
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <GrNext />
                  </button>
                </Box>
              </Splide>
            </Box>
          </Flex>
        </>
      ) : (
        <Text className={styles.text}>
          ARADIĞINIZ ŞEHİRE ŞUANDA ULAŞILAMAMAKTA
        </Text>
      )}
    </>
  );
}
