import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import style from "./navicon.module.css";
const NavIcon = () => {
  return (
    <ul className={style.list}>
      <li>
        <Link href="#">
          <IoIosHelpCircleOutline size={35} className={style.help_icon} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <LuShoppingCart size={30} className={style.icon} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FaRegBell size={30} className={style.icon} />
        </Link>
      </li>
      <li>
        <Link href="#" className={style.wrap}>
          <span className="text-md"> Ali</span>
          <span>
            <RiArrowDropDownLine size={25} />
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default NavIcon;
