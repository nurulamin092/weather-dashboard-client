import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <Navbar />
      </header>
    </>
  );
}
