import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <ul className="flex items-center ml-[50px] font-light">
      <li className="mr-6 hover:underline">
        <Link href="#">Help</Link>
      </li>
      <li className="mr-6 hover:underline">
        <Link href="#">Learn</Link>
      </li>
      <li className="mr-6 hover:underline">
        <Link href="#">Community</Link>
      </li>
      <li className="mr-6 hover:underline">
        <Link href="#">System Status</Link>
      </li>
      <li className="mr-6 hover:underline">
        <Link href="#">Contatct Us</Link>
      </li>
    </ul>
  );
};

export default NavMenu;
