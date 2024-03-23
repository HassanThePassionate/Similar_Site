import style from "./slide.module.css";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { data } from "../../../constant/SliderData";

const Slides = ({ setSwiperInstance }) => {
  return (
    <div className={style.wrapper}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={14}
        // grid={{
        //   rows: 3,
        // }}
        modules={[Navigation]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        navigation={{
          nextEl: "#nexts",
          prevEl: "#prevs",
        }}
        className="mySwiper"
      >
        {/* <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide>
        <SwiperSlide className={style.slide}></SwiperSlide> */}

        <SwiperSlide style={{ maxWidth: "max-content" }}>
          <div className={style.slide_1}>
            <div className={style.slide_text}>
              <span>DOMAIN NAMES</span>
              <h4>Grab a .com for ‪₨1*‬ /1st yr.</h4>
              <p>3-year purchase required. Additional year(s) ‪₨4,999*‬</p>
              <Link href="#">Find Your Domain</Link>
            </div>
            <div className={style.img}>
              <Image
                src="/download.webp"
                height={250}
                width={250}
                alt="img"
                className={style.img_1}
              />
            </div>
          </div>
        </SwiperSlide>

        {data.map((elm) => {
          return (
            <SwiperSlide style={{ maxWidth: "max-content" }} key={elm.img}>
              <div className={style.slide}>
                <div className={style.img}>
                  <Image
                    src={elm.img}
                    height={200}
                    width={220}
                    alt="img"
                    className={style.img_2}
                  />
                </div>
                <div className={style.slide_text}>
                  <h4>{elm.title}</h4>
                  <p>{elm.desc}</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slides;
