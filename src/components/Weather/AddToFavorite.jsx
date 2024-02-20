import React from "react";
import { useContext, useEffect, useState } from "react";
import heartImg from "../../assets/heart.svg";
import HeartRedImg from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../context";

export default function AddToFavorite() {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavorites, toggleFavorites] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleFavorites(found);
  });

  function handleFavorites() {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    toggleFavorites(!isFavorites);
  }
  return (
    <>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
            onClick={handleFavorites}
          >
            <span>Add to Favorite</span>
            <img src={isFavorites ? HeartRedImg : heartImg} alt="heart" />
          </button>
        </div>
      </div>
    </>
  );
}
