import React from "react";
import Logo from "../logo/Logo";
import Dots from "./Dots";
import LeftNav from "./LeftNav";
import Search from "./Search";
import NavMenu from "./NavMenu";

const Nav = () => {
  return (
    <nav className="min-h-[64px] flex items-center justify-between">
      <div className="flex items-center">
        <Logo />
        <div className="h-[14px] w-[1px] bg-[#A0A0A0] mx-[16px]"></div>
        <Dots />
        <Search />
        <NavMenu />
      </div>
      <LeftNav />
    </nav>
  );
};

export default Nav;
