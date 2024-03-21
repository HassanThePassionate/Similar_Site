import React from "react";

const Tab = ({ title }) => {
  return (
    <div className="pt-[12px] cursor-pointer px-[24px] pb[32px] border-[2px] border-[#d6d6d6] font-semibold h-[50px] rounded-full text-center  hover:border-[#111] hover:scale-[1.03] transition">
      {title}
    </div>
  );
};

export default Tab;
