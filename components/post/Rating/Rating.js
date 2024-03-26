import React from "react";
import style from "./rating.module.css";
const Rating = () => {
  return (
    <div className="container">
      <div className={style.wrapper}>
        <div className={style.wrap}>
          <div className={style.left_side}>
            <div className={style.left_title}>
              <span className={style.icon}>
                <svg
                  aria-hidden="true"
                  tabindex="-1"
                  disabled=""
                  class="___SIcon_qgi9x_gg_"
                  data-ui-name="Globe"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-name="Globe"
                  data-group="m"
                  color="#ff642d"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.201 4.398A5.99 5.99 0 0 1 8 2c1.801 0 3.417.794 4.517 2.05a4.578 4.578 0 0 0-.967.429v.02a2 2 0 0 0-1.27.16 3.87 3.87 0 0 0-1.55 1.63 1.51 1.51 0 0 0-.17 1.13c.108.308.364.465.619.623.286.176.572.352.651.738.03.157.034.317.039.478.006.217.012.435.081.642a.67.67 0 0 0 .65.56c.35 0 .57-.39.69-.69a6.38 6.38 0 0 1 .82-1.63c.176-.227 1.076-.705 1.59-.979.088-.046.164-.087.224-.12a6 6 0 1 1-11.893.35c.288.09.62.178.999.259a2.88 2.88 0 0 1 2 1.16 6.75 6.75 0 0 1 .89 2c.17.52.41 1.25 1.11 1.16.7-.09 1-1 1-1.63a1.64 1.64 0 0 0-.74-1.63 11.524 11.524 0 0 0-.26-.154C6.305 8.13 5.17 7.47 5.78 6.55a3.63 3.63 0 0 1 1.17-1l.093-.065c.288-.2.6-.417.637-.805a.62.62 0 0 0-.55-.67 4.46 4.46 0 0 0-1.21 0c-.323.04-.64.107-.955.173l-.225.047a7.6 7.6 0 0 1-1.539.168Z"
                    shape-rendering="geometricPrecision"
                  ></path>
                </svg>
              </span>
              <span className="ml-[12px] text-[32px] font-bold">
                similarsite.com
              </span>
            </div>

            <p className="text-base mt-[12px]">
              Discover how your top competitor’s audience surfs the web so you
              can tailor your website experience perfectly at every stage of the
              customer journey
            </p>
          </div>
          <div className={style.right_side}>
            <div className={style.list}>
              <div className={style.iteam}>
                <div>
                  <div>Global Rank:</div>
                  <div className="text-[#0071CD] text-[14px] leading-[14px] cursor-pointer hover:text-[#0000E6]">
                    Worldwide
                  </div>
                  <div className="text-[22px] leading-[28px] font-bold">
                    175,343
                  </div>
                </div>
              </div>
              <div className={style.iteam}>
                <div>
                  <div>Country Rank:</div>
                  <div className="text-[#0071CD] text-[14px] leading-[14px] cursor-pointer hover:text-[#0000E6]">
                    United State
                  </div>
                  <div className="text-[22px] leading-[28px] font-bold">
                    60,112
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.line_1}></div>
            <span className={style.title}>Authority Score</span>
            <span className={style.des}>39</span>
          </div>
          <div className={style.card}>
            <div className={style.line}></div>
            <span className={style.title}>Visits</span>
            <span className={style.des}>309.09K</span>
            <span className={style.percentage}>-39.89%</span>
          </div>
          <div className={style.card}>
            <div className={style.line}></div>
            <span className={style.title}>Pages/Visits</span>
            <span className={style.des}>2.2</span>
          </div>
          <div className={style.card}>
            <div className={style.line}></div>
            <span className={style.title}>Bounce rate</span>
            <span className={style.des}>57.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;