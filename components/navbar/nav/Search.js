import React from "react";

const Search = () => {
  return (
    <div className="mx-[50px] flex">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="What can we Help with?"
        className="h-11 w-[500px] py-1.5 px-3 border-[1px] border-[#767676] text-md font-[300] outline-none "
      />
      <span className="py-[8px] px-[16px] bg-black text-white flex items-center justify-center hover:bg-slate-800 transition cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
    </div>
  );
};

export default Search;
