import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

const LeftNav = () => {
  return (
    <ul className="flex items-center">
      <li className="px-[8px] mb-[5px] flex h-[40px] m-0 items-center justify-center">
        <Link href="#" className="h-[30px] w-[30px] p-0 m-0">
          <IoIosHelpCircleOutline
            size={30}
            className="text-[#5E5E5E] hover:text-[#1BDBDB]  transition pb-[2px]"
          />
        </Link>
      </li>
      <li className="px-[8px] flex h-[40px] m-0 items-center justify-center">
        <Link href="#" className="h-[30px] w-[30px] ">
          <LuShoppingCart
            size={22}
            className="text-[#5E5E5E] hover:text-[#1BDBDB]  transition"
          />
        </Link>
      </li>
      <li className="px-[8px] flex h-[40px] m-0 items-center justify-center">
        <Link href="#" className="h-[30px] w-[30px] ">
          <FaRegBell
            size={22}
            className="text-[#5E5E5E] hover:text-[#1BDBDB]  transition"
          />
        </Link>
      </li>
      <li className="pl-[8px] flex h-[40px] pb-[5px] m-0 items-center justify-center hover:underline cursor-pointer">
        <div
          href="#"
          className="h-[30px] w-[30px] flex items-center text-[#5E5E5E] hover:text-[#1BDBDB]  transition"
        >
          <span className="text-md"> Ali</span>
          <span className="pt-[5px]">
            <RiArrowDropDownLine className="font-light" size={25} />
          </span>
        </div>
      </li>
    </ul>
  );
};

export default LeftNav;
