"use client";
import Link from "next/link";
import { useState } from "react";
import style from "./Drop.module.css";

const Drop = () => {
  const [showMenu, setshowMenu] = useState(false);
  const handleMenu = () => {
    setshowMenu(!showMenu);
  };
  return (
    <>
      <button className={style.btn} onClick={handleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          id="menu-candy-box"
          fill="currentColor"
        >
          <path d="M6 12C6 13.1046 5.10457 14 4 14 2.89543 14 2 13.1046 2 12 2 10.8954 2.89543 10 4 10 5.10457 10 6 10.8954 6 12zM14 12C14 13.1046 13.1046 14 12 14 10.8954 14 10 13.1046 10 12 10 10.8954 10.8954 10 12 10 13.1046 10 14 10.8954 14 12zM22 12C22 13.1046 21.1046 14 20 14 18.8954 14 18 13.1046 18 12 18 10.8954 18.8954 10 20 10 21.1046 10 22 10.8954 22 12zM6 4C6 5.10457 5.10457 6 4 6 2.89543 6 2 5.10457 2 4 2 2.89543 2.89543 2 4 2 5.10457 2 6 2.89543 6 4zM14 4C14 5.10457 13.1046 6 12 6 10.8954 6 10 5.10457 10 4 10 2.89543 10.8954 2 12 2 13.1046 2 14 2.89543 14 4zM22 4C22 5.10457 21.1046 6 20 6 18.8954 6 18 5.10457 18 4 18 2.89543 18.8954 2 20 2 21.1046 2 22 2.89543 22 4zM6 20C6 21.1046 5.10457 22 4 22 2.89543 22 2 21.1046 2 20 2 18.8954 2.89543 18 4 18 5.10457 18 6 18.8954 6 20zM14 20C14 21.1046 13.1046 22 12 22 10.8954 22 10 21.1046 10 20 10 18.8954 10.8954 18 12 18 13.1046 18 14 18.8954 14 20zM22 20C22 21.1046 21.1046 22 20 22 18.8954 22 18 21.1046 18 20 18 18.8954 18.8954 18 20 18 21.1046 18 22 18.8954 22 20z"></path>
        </svg>
      </button>
      {showMenu === true ? (
        <div className={style.drop_down}>
          <ul>
            <li>
              <Link href="#">Manage My Product</Link>
            </li>
            <li className={style.top}>
              <Link href="#">Shop GoDaddy.com</Link>
            </li>
          </ul>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="#">Domains</Link>
            </li>
            <li>
              <Link href="#">Websites</Link>
            </li>
            <li>
              <Link href="#">Hosting & WordPress</Link>
            </li>
            <li>
              <Link href="#">Email & Office</Link>
            </li>
            <li>
              <Link href="#">SSL Certificaties</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Drop;
