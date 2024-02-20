import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import WeatherBoard from "../components/Weather/WeatherBoard";
import { WeatherContext } from "../context";

import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatteredCloudsImage from "../assets/backgrounds/scattered-clouds.jpg";
import ShowerRainImage from "../assets/backgrounds/shower-rain.jpg";
import SnowImage from "../assets/backgrounds/snow.jpg";
import SunnyImage from "../assets/backgrounds/sunny.jpg";
import ThunderstormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatteredCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderstormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      case "Snow":
        return SnowImage;
      case "ShowerRain":
        return ShowerRainImage;
      case "Sunny":
        return SunnyImage;
      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
