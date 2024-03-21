import React from "react";
import Nav from "./nav/Nav";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="container max-w-[1800px]">
        <Nav />
      </div>
    </header>
  );
};

export default Navbar;
