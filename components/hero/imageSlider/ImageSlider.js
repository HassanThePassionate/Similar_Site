"use client";
import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
// import style from "./slider.module.css";

// import Image from "next/image";
const ImageSlider = () => {
  const slides = [
    {
      url: "https://d4.alternativeto.net/QlVYaGWcvPuLL4GJJfkDWTSvMtejkCxUr_Py4Js_VDM/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfNTA1MDczX2Z1bGwucG5n.jpg",
    },
    {
      url: "https://d4.alternativeto.net/QlVYaGWcvPuLL4GJJfkDWTSvMtejkCxUr_Py4Js_VDM/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfNTA1MDczX2Z1bGwucG5n.jpg",
    },
    {
      url: "https://d4.alternativeto.net/QlVYaGWcvPuLL4GJJfkDWTSvMtejkCxUr_Py4Js_VDM/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfNTA1MDczX2Z1bGwucG5n.jpg",
    },
    {
      url: "https://d4.alternativeto.net/QlVYaGWcvPuLL4GJJfkDWTSvMtejkCxUr_Py4Js_VDM/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfNTA1MDczX2Z1bGwucG5n.jpg",
    },
    {
      url: "https://d4.alternativeto.net/QlVYaGWcvPuLL4GJJfkDWTSvMtejkCxUr_Py4Js_VDM/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfNTA1MDczX2Z1bGwucG5n.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[280px] h-[160px] w-full  relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-[280px] h-[280px] rounded-[5px] bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      {/* <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div> */}
      {/* Right Arrow */}
      {/* <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div> */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
