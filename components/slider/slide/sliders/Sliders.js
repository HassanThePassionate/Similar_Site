import React from "react";
import style from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Title from "../title/Title";
import Tags from "../tags/Tags";
import Rank from "@/components/post/card/rank/Rank";

const Sliders = ({ setSwiperInstance }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        navigation={{
          nextEl: "#nexts",
          prevEl: "#prevs",
        }}
        className="mySwiper p-[20px]"
      >
        <SwiperSlide>
          <div className={style.slide}>
            <Title />
            <Tags />
            <Rank />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <Title />
            <Tags />
            <Rank />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <Title />
            <Tags />
            <Rank />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <Title />
            <Tags />
            <Rank />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <Title />
            <Tags />
            <Rank />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <Title />
            <Tags />
            <Rank />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliders;
