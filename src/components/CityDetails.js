import useGetCityData from "../hooks/useGetCityData";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import DeleteCityDrawer from "./DeleteCityDrawer";
import CardComponent from "./CardComponent";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { GrNext } from "react-icons/gr";
import { Text } from "@chakra-ui/react";
import React from "react";
import { useSelectedCitiesStore } from "../stores";
import MiniCard from "./MiniCard";

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
          <div
            style={{
              display: "flex",
              width: "1200px",
            }}
          >
            <CardComponent render_at_home={false} city={cityName} index={0} />
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
                        <MiniCard
                          city_name={cityName}
                          day={day}
                          index={index}
                        />
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
      ) : (
        <Text
          style={{
            fontSize: "50px",
            margin: "400px ",
          }}
        >
          ARADIĞINIZ ŞEHİRE ŞUANDA ULAŞILAMAMAKTA
        </Text>
      )}
    </>
  );
}
