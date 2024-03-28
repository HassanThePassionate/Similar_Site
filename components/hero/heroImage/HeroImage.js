import style from "./image.module.css";
import Image from "next/image";
const HeroImage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrap}>
        <div className={style.img}>
          <Image
            src="https://d4.alternativeto.net/Mky-pJuHWtipsvrE2SGnoaRsWTNH009Tfauuu3Hmo2o/rs:fit:140:140:0/g:ce:0:0/exar:1/YWJzOi8vZGlzdC9pY29ucy9maXJlZm94XzE1NjMwOC5wbmc.png"
            alt="img"
            height={120}
            width={120}
          />
        </div>
        <div className={style.btn}>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="LikeButton_heart__yYpHw"
              height="0.85em"
              width="0.85em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
            </svg>
            <span>7208</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
