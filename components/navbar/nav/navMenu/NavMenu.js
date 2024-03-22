import Link from "next/link";
import style from "./navMenu.module.css";

const NavMenu = () => {
  return (
    <ul className={style.list}>
      <li>
        <Link href="#">Help</Link>
      </li>
      <li>
        <Link href="#">Learn</Link>
      </li>
      <li>
        <Link href="#">Community</Link>
      </li>
      <li>
        <Link href="#">System Status</Link>
      </li>
      <li>
        <Link href="#">Contatct Us</Link>
      </li>
    </ul>
  );
};

export default NavMenu;
