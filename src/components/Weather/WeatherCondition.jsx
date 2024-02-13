import React from "react";
import tempMaxImg from "../../assets/icons/temp-max.svg";
import tempMinImg from "../../assets/icons/temp-min.svg";
import humidityImg from "../../assets/icons/humidity.svg";
import cloudImg from "../../assets/icons/cloud.svg";
import windImg from "../../assets/icons/wind.svg";

export default function WeatherCondition() {
  return (
    <>
      <div>
        <p className="text-sm lg:text-lg font-bold uppercase mb-8">
          thunderstorm with light drizzle
        </p>
        <ul className="space-y-6 lg:space-y-6">
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp max</span>
            <div className="inline-flex space-x-4">
              <p>19°</p>
              <img src={tempMaxImg} alt="temp-max" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp min</span>
            <div className="inline-flex space-x-4">
              <p>19°</p>
              <img src={tempMinImg} alt="temp-min" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Humidity</span>
            <div className="inline-flex space-x-4">
              <p>58%</p>
              <img src={humidityImg} alt="humidity" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Cloudy</span>
            <div className="inline-flex space-x-4">
              <p>86%</p>
              <img src={cloudImg} alt="cloudy" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Wind</span>
            <div className="inline-flex space-x-4">
              <p>5km/h</p>
              <img src={windImg} alt="wind" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}