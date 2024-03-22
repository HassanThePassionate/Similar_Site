"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Tab from "./Tab";
import Link from "next/link";
import Image from "next/image";
import Buttons from "./Buttons";

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const goNexts = () => swiperInstance && swiperInstance.slideNext();
  const goPrevs = () => swiperInstance && swiperInstance.slidePrev();

  return (
    <div className="container">
      <div className="my-[25px]">
        <h2 className="text-4xl mb-[24px] font-bold">
          Best Streaming Websites
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-start py-[4px] gap-[8px] mt-[10px] mb-[24px]">
            <div className="pt-[12px] px-[24px] pb[32px] border-[2px] cursor-pointer border-[#111] bg-[#111]  text-white font-semibold h-[50px] rounded-full text-center   hover:scale-[1.03] transition">
              Recommended
            </div>
            <Tab title="Create my website" />
            <Tab title="Connect with customers" />
            <Tab title="Build and protect your brand" />
          </div>
          <div data-aos="fade-up">
            <Buttons next={goNexts} prev={goPrevs} />
          </div>
        </div>

        <Swiper
          slidesPerView={"3"}
          spaceBetween={30}
          modules={[Navigation]}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          navigation={{
            nextEl: "#nexts",
            prevEl: "#prevs",
          }}
          className="mySwiper"
        >
          <div className="slider mb-[20px]">
            <SwiperSlide>
              <div
                className="bg-[#F2F0ED]  p-[27px] slide rounded-lg  cursor-pointer flex items-start justify-between slide"
                data-aos="fade-up"
              >
                <div className=" self-center">
                  <span className="bg-[#A6FFF8] text-xs pt-[4px] pb-[3px] mb-[8px] px-[8px] font-semibold tracking-widest ">
                    DOMAIN NAMES
                  </span>
                  <h4 className="text-2xl font-semibold my-[8px] ">
                    Grab a .com for ‪₨1*‬ /1st yr.
                  </h4>
                  <p>3-year purchase required. Additional year(s) ‪₨4,999*‬</p>
                  <Link href="#" className="my-[8px] underline font-semibold">
                    Find Your Domain
                  </Link>
                </div>
                <div>
                  <Image
                    src="/download.webp"
                    height={382}
                    width={500}
                    alt="img"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-[#EDEFF1]  p-[27px] slide rounded-lg flex  transition-all cursor-pointer items-start flex-col"
                data-aos="fade-up"
              >
                <div>
                  <Image
                    src="/download1.webp"
                    height={286}
                    width={358}
                    alt="img"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold my-[8px] ">
                    Use professional email to build credibility.
                  </h4>
                  <p>
                    Match your email to your domain to help establish trust.
                    (you@yourdomain.com)
                  </p>
                  <Link href="#" className="my-[8px] underline font-semibold">
                    Learn More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-[#EDEFF1]  p-[27px] slide rounded-lg flex  transition-all cursor-pointer items-start flex-col"
                data-aos="fade-up"
              >
                <div>
                  <Image
                    src="/download2.webp"
                    height={286}
                    width={358}
                    alt="img"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold my-[8px] ">
                    Use professional email to build credibility.
                  </h4>
                  <p>
                    Match your email to your domain to help establish trust.
                    (you@yourdomain.com)
                  </p>
                  <Link href="#" className="my-[8px] underline font-semibold">
                    Learn More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-[#EDEFF1]  p-[27px] slide rounded-lg flex  transition-all cursor-pointer items-start flex-col"
                data-aos="fade-up"
              >
                <div>
                  <Image
                    src="/download1.webp"
                    height={286}
                    width={358}
                    alt="img"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold my-[8px] ">
                    Use professional email to build credibility.
                  </h4>
                  <p>
                    Match your email to your domain to help establish trust.
                    (you@yourdomain.com)
                  </p>
                  <Link href="#" className="my-[8px] underline font-semibold">
                    Learn More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-[#EDEFF1]  p-[27px] slide rounded-lg flex  transition-all cursor-pointer items-start flex-col"
                data-aos="fade-up"
              >
                <div>
                  <Image
                    src="/download2.webp"
                    height={286}
                    width={358}
                    alt="img"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold my-[8px] ">
                    Use professional email to build credibility.
                  </h4>
                  <p>
                    Match your email to your domain to help establish trust.
                    (you@yourdomain.com)
                  </p>
                  <Link href="#" className="my-[8px] underline font-semibold">
                    Learn More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-[#EDEFF1]  p-[27px] slide rounded-lg flex  transition-all cursor-pointer items-start flex-col"
                data-aos="fade-up"
              >
                <div>
                  <Image
                    src="/download1.webp"
                    height={286}
                    width={358}
                    alt="img"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold my-[8px] ">
                    Use professional email to build credibility.
                  </h4>
                  <p>
                    Match your email to your domain to help establish trust.
                    (you@yourdomain.com)
                  </p>
                  <Link href="#" className="my-[8px] underline font-semibold">
                    Learn More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
