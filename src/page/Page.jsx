import React from "react";
import Header from "../components/Header/Header";
import WeatherBoard from "../components/Weather/WeatherBoard";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </>
  );
}
