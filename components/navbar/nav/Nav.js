import style from "./nav.module.css";
import Logo from "../logo/Logo";
import NavMenu from "./navMenu/NavMenu";
import Drop from "./dropDown/Drop";
import NavIcon from "./navIcon/NavIcon";
import Search from "./search/Search";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={style.wrapper}>
        <Logo />
        <div className={style.line}></div>
        <Drop />
      </div>
      <Search />
      <NavMenu />
      <NavIcon />
    </nav>
  );
};

export default Nav;
