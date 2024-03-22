import style from "./home.module.css";
import Search from "./searchbar/Search";

const Home = () => {
  return (
    <div className="container ">
      <div className={style.wrapper}>
        <div className={style.wrap}>
          <div className={style.left_side}>
            <h4>WHOIS Domain Lookup</h4>
            <h2>
              Find out who owns a <br /> website.
            </h2>
            <Search />
          </div>
          <div className={style.right_side}>
            <h4>
              Register your <br /> domain name today.
            </h4>
            <button className={style.btn}>Search For Domain</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
