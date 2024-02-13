import React from "react";
import heartImg from "../../assets/heart.svg";
export default function Favorite() {
  return (
    <>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={heartImg} alt="" />
        <span> Favorite Locations</span>
      </div>
    </>
  );
}
