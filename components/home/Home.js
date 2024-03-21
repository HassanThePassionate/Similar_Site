import React from "react";
import Search from "./nav/Search";
import localFont from "@next/font/local";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const gdsage = localFont({
  src: [
    {
      path: "../../public/GDSageBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-gdsage",
});
const Home = () => {
  return (
    <div className="container">
      <div className="bg-[#D7EFEF] m-[16px] rounded-md ">
        <div className="container px-[76px]">
          <div className="flex justify-between">
            <div className="flex  min-h-[550px] py-[40px] px-[56px] justify-center flex-col">
              <h4 className="mb-[16px] text-medium font-semibold">
                WHOIS Domain Lookup
              </h4>
              <h2
                className={`text-5xl leading-[56px] font-extrabold ${gdsage.variable} font-serif`}
              >
                Find out who owns a <br /> website.
              </h2>
              <Search />
            </div>
            <div className="h-[229px] rounded-md w-[380px] mt-[20px] bg-white p-[32px]">
              <h4 className="text-3xl mb-[16px] font-semibold">
                Register your <br /> domain name today.
              </h4>
              <button className="py-[12px] px-[48px] bg-black rounded-md text-white font-semibold flex items-center gap-2  btn ">
                Search For Domain
                <span>
                  <MdOutlineArrowRightAlt
                    size={34}
                    className="mt-[2px] arrow  "
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;