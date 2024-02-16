import React from "react";
import { useContext } from "react";
import heartImg from "../../assets/heart.svg";
import HeartRedImg from "../../assets/heart-red.svg";
import { FavoriteContext } from "../../context";
import { useState } from "react";
export default function AddToFavorite() {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(FavoriteContext);

  const [isFavorites, toggleFavorites] = useState(false);

  function handleFavorite() {
    toggleFavorites(!isFavorites);
  }
  return (
    <>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
            <span onClick={() => handleFavorite()}>Add to Favorite</span>
            <img src={isFavorites ? HeartRedImg : heartImg} alt="heart" />
          </button>
        </div>
      </div>
    </>
  );
}
