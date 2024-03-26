import Link from "next/link";
import style from "./Navs.module.css";
const Navs = () => {
  return (
    <div className={style.wrapper}>
      <div className="container">
        <div className={style.divider}>
          <h3>Domain Tools and Services</h3>
          <ul className={style.list}>
            <li>
              <Link href="#">Generate Domain & Business Names</Link>
            </li>
            <li>
              <Link href="#">Find a Domain Owner (WHOIS)</Link>
            </li>
            <li>
              <Link href="#">Primium DNS</Link>
            </li>
            <li className={style.last}>
              <Link href="#" className="flex items-center gap-1 ">
                More
                <span>
                  <svg
                    className={style.svg_icon}
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
              <ul className={style.drop_down}>
                <li>
                  <Link href="#">Domain Broker Service</Link>
                </li>
                <li>
                  <Link href="#">Domain Backorder</Link>
                </li>
                <li>
                  <Link href="#">Domain Privacy</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navs;
