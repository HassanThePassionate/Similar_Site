import Link from "next/link";
import style from "./navText.module.css";
const NavText = () => {
  return (
    <div className={style.wrapper}>
      <div className="container">
        <div className={style.iteam}>
          <div className={style.links}>
            <Link href="#">WordPress</Link>
            <Link href="#">Managed WordPress</Link>
          </div>

          <h1 className={`text-5xl leading-[56px] ${style.title}`}>
            GoDaddy Help
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavText;
