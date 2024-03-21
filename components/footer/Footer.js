import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 mt-[20px] py-[30px] gap-y-5 border-t-[1px] border-b-[1px]">
        <ul className="p-[10px] mb-3">
          <h4 className="text-2xl font-bold  mb-4">Online Marketing</h4>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              Digital Marketing Suite
            </Link>
          </li>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              Search Engine Visibility
            </Link>
          </li>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              GoDaddy Email Marketing
            </Link>
          </li>
        </ul>
        <ul className="p-[10px] mb-3">
          <h4 className="text-2xl font-bold mb-4">Productivity</h4>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              Professional Email
            </Link>
          </li>
          <li className="mb-3 cursor-pointer text-[#09757A]  hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              Workspace Email
            </Link>
          </li>
        </ul>
        <ul className="p-[10px] mb-3">
          <h4 className="text-2xl font-bold mb-4">Websites & Security</h4>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              Website Design Services
            </Link>
          </li>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              Website Security and Backups
            </Link>
          </li>
        </ul>
        <ul className="p-[10px] mb-3">
          <h4 className="text-2xl font-bold mb-4">Hosting & Servers</h4>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              Gen 4 VPS & Dedicated Servers
            </Link>
          </li>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              Windows Hosting (Plesk)
            </Link>
          </li>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              WordPress
            </Link>
          </li>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              Managed WordPress Ecommerce
            </Link>
          </li>
        </ul>
        <ul className="p-[10px] mb-3">
          <h4 className="text-2xl font-bold mb-4">Partner Programs</h4>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              API Reseller
            </Link>
          </li>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb]">
            <Link href="#" className="underline">
              Basic & Pro Reseller
            </Link>
          </li>
        </ul>
        <ul className="p-[10px] mb-3">
          <h4 className="text-2xl font-bold mb-4">Domain Aftermarket</h4>
          <li className="mb-3 cursor-pointer   text-[#09757A] hover:text-[#1bdbdb] ">
            <Link href="#" className="underline">
              GoDaddy Auctions®
            </Link>
          </li>
          <li className="mb-3 cursor-pointer   text-[#09757A] hover:text-[#1bdbdb] ">
            <Link href="#" className="underline">
              List for Sale
            </Link>
          </li>
          <li className="mb-3 cursor-pointer   text-[#09757A] hover:text-[#1bdbdb] ">
            <Link href="#" className="underline">
              Domain Broker Service
            </Link>
          </li>
          <li className="mb-3 cursor-pointer   text-[#09757A] hover:text-[#1bdbdb] ">
            <Link href="#" className="underline">
              CashParking®
            </Link>
          </li>
          <li className="mb-3 cursor-pointer  text-[#09757A]  hover:text-[#1bdbdb] ">
            <Link href="#" className="underline">
              Backorders & Monitoring
            </Link>
          </li>
        </ul>
        <ul className="p-[10px] mb-3">
          <h4 className="text-2xl font-bold mb-4">Legacy</h4>
          <li className="mb-3 cursor-pointer  text-[#09757A] hover:text-[#1bdbdb] ">
            <Link href="#" className="underline ">
              Calendar
            </Link>
          </li>
          <li className="mb-3 cursor-pointer   text-[#09757A] hover:text-[#1bdbdb] ">
            <Link href="#" className="underline">
              Web & Classic Hosting
            </Link>
          </li>
          <li className="mb-3 cursor-pointer  text-[#09757A]  hover:text-[#1bdbdb] ">
            <Link href="#" className="underline">
              Website Builder 7
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-[#5e5e5e] text-center py-[10px] my-[20px]">
          Copyright © 1999 - 2024 GoDaddy Operating Company, LLC. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
