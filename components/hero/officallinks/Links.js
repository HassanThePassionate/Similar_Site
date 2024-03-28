import React from "react";
import style from "./links.module.css";
import Link from "next/link";
import Image from "next/image";
const Links = () => {
  return (
    <div className="mt-[10px] w-[1100px]">
      <h3 className={style.title}>Official Links</h3>
      <div className={style.btns}>
        <Link href="#">
          <button className="bg-[#027ac0] text-white">
            Official website
            <span>www.mozilla.org/firefox</span>
          </button>
        </Link>
        <Link href="#">
          <div className={style.dark_btn}>
            <Image
              src="https://alternativeto.net/static/app-stores/ms-store.svg"
              alt="img"
              height={28}
              width={140}
              className={style.img}
            />
          </div>
        </Link>
        <Link href="#">
          <div className={style.dark_btn}>
            <Image
              src="https://alternativeto.net/static/app-stores/android-store.svg"
              alt="img"
              height={28}
              width={140}
              className={style.img}
            />
          </div>
        </Link>
        <Link href="#">
          <div className={style.dark_btn}>
            <Image
              src="https://alternativeto.net/static/app-stores/ios-store.svg"
              alt="img"
              height={28}
              width={140}
              className={style.img}
            />
          </div>
        </Link>
        <Link href="#">
          <button className="bg-[#f5f9fd] hover:border-[#ccd6e7] hover:bg-[#fafafa] text-[#003a5b] border-[1px] border-[#f1f1f1]">
            Official website
            <span>www.mozilla.org/firefox</span>
          </button>
        </Link>
        <Link href="#">
          <button className="bg-[#f5f9fd] hover:border-[#ccd6e7] hover:bg-[#fafafa] text-[#003a5b] border-[1px] border-[#f1f1f1]">
            Official website
            <span>www.mozilla.org/firefox</span>
          </button>
        </Link>
        <Link href="#">
          <button className="bg-[#f5f9fd] hover:border-[#ccd6e7] hover:bg-[#fafafa] text-[#003a5b] border-[1px] border-[#f1f1f1]">
            Official website
            <span>www.mozilla.org/firefox</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Links;
