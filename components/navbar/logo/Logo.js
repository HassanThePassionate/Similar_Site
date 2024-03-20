import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../assets/Logo.svg";
const Logo = () => {
  return (
    <div>
      <Link href="#">
        <Image src={logo} alt="Logo" height={27} width={129} />
      </Link>
    </div>
  );
};

export default Logo;
