import React from "react";
import Favorite from "./Favorite";
import FavoriteListModal from "./FavoriteListModal";
import Logo from "./Logo";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favorite />
          <FavoriteListModal />
        </div>
      </nav>
    </>
  );
}
