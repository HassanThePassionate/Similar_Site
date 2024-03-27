"use client";
import style from "./slider.module.css";

import Image from "next/image";
const ImageSlider = () => {
  return (
    <div className="mt-[50px]">
      <Image
        src="https://d4.alternativeto.net/QlVYaGWcvPuLL4GJJfkDWTSvMtejkCxUr_Py4Js_VDM/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfNTA1MDczX2Z1bGwucG5n.jpg"
        alt="img"
        width={280}
        height={280}
        className={style.img}
      />
    </div>
  );
};

export default ImageSlider;
