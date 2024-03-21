import Link from "next/link";
import React from "react";

const Navs = () => {
  return (
    <div className=" bg-white border-b-[1px] border-[#D6D6D6] sticky top-0 z-50">
      <div className="container max-w-[1800px]  ">
        <div className="h-[72px] flex items-center">
          <div>
            <h3 className=" font-semibold">Domain Tools and Services</h3>
          </div>
          <ul className="flex items-center pl-[150px]">
            <li className=" mx-[20px] py-[23px] border-b-[2px] border-transparent   hover:border-b-[2px] hover:border-black font-medium transition-all">
              <Link href="#">Generate Domain & Business Names</Link>
            </li>
            <li className="px-[20px] py-[23px] border-b-[2px] border-black font-medium transition-all">
              <Link href="#">Find a Domain Owner (WHOIS)</Link>
            </li>
            <li className="mx-[20px] py-[23px] border-b-[2px] border-transparent   hover:border-b-[2px] hover:border-black font-medium transition-all">
              <Link href="#">Primium DNS</Link>
            </li>
            <li className="px-[20px] py-[23px] border-b-[2px] border-transparent   hover:border-b-[2px] hover:border-black font-medium transition-all">
              <Link href="#" className="flex items-center gap-1">
                More
                <span>
                  <svg
                    className="svg-icon mt-1"
                    height={20}
                    width={20}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M548.08576 722.24768c-10.19904 10.19904-24.00256 19.70176-37.15072 16.75264-13.14816 2.17088-25.47712-8.192-35.67616-16.75264L159.744 405.17632a41.24672 41.24672 0 0 1 58.20416-58.32704l293.64224 301.6704 294.42048-301.6704A41.24672 41.24672 0 1 1 864.256 405.17632l-316.29312 317.07136z" />
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navs;
