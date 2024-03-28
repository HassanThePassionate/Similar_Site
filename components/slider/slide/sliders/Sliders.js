import React from "react";
import style from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Title from "../title/Title";
import Tags from "../tags/Tags";
import Rank from "../rank/Rank";
import Image from "next/image";

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
        className="mySwiper"
        style={{ padding: "20px" }}
      >
        <SwiperSlide>
          <div className={style.slide}>
            <div className={style.img}>
              <Image
                src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fserif-affinity-photo%2FSerif-Affinity-Photo-1.7-Free-Download.jpg&w=1080&q=75"
                alt="img"
                height={500}
                width={700}
              />
            </div>
            <div className={style.side}>
              <Title />
              <Tags />
              <Rank />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <div className={style.img}>
              <Image
                src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fserif-affinity-photo%2FSerif-Affinity-Photo-1.7-Free-Download.jpg&w=1080&q=75"
                alt="img"
                height={500}
                width={700}
              />
            </div>
            <div className={style.side}>
              <Title />
              <Tags />
              <Rank />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <div className={style.img}>
              <Image
                src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fserif-affinity-photo%2FSerif-Affinity-Photo-1.7-Free-Download.jpg&w=1080&q=75"
                alt="img"
                height={500}
                width={700}
              />
            </div>
            <div className={style.side}>
              <Title />
              <Tags />
              <Rank />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <div className={style.img}>
              <Image
                src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fserif-affinity-photo%2FSerif-Affinity-Photo-1.7-Free-Download.jpg&w=1080&q=75"
                alt="img"
                height={500}
                width={700}
              />
            </div>
            <div className={style.side}>
              <Title />
              <Tags />
              <Rank />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <div className={style.img}>
              <Image
                src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fserif-affinity-photo%2FSerif-Affinity-Photo-1.7-Free-Download.jpg&w=1080&q=75"
                alt="img"
                height={500}
                width={700}
              />
            </div>
            <div className={style.side}>
              <Title />
              <Tags />
              <Rank />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <div className={style.img}>
              <Image
                src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fserif-affinity-photo%2FSerif-Affinity-Photo-1.7-Free-Download.jpg&w=1080&q=75"
                alt="img"
                height={500}
                width={700}
              />
            </div>
            <div className={style.side}>
              <Title />
              <Tags />
              <Rank />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliders;
