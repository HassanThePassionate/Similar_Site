import React from "react";
import Nav from "./nav/Nav";
import NavText from "../navText/NavText";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="container max-w-[1800px]">
        <Nav />
        <NavText />
      </div>
    </header>
  );
};

export default Navbar;
