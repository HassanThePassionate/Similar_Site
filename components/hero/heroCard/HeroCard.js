import React from "react";
import style from "./heroCard.module.css";

import HeroTags from "../heroTags/HeroTags";
import HeroImage from "../heroImage/HeroImage";
import HeroRating from "../heroRating/HeroRating";
import Links from "../officallinks/Links";
import Rank from "@/components/post/card/rank/Rank";
// import ImageSlider from "../imageSlider/ImageSlider";

const HeroCard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrap}>
        <div className={style.card}>
          <HeroImage />
          <div className={style.card_content}>
            <h2
              className={style.card_title}
              style={{
                fontFamily: "gdsage",
              }}
            >
              Mozilla Firefox
            </h2>
            <p>
              High-speed, privacy-centric browser with extensive customization
              through add-ons and themes.
            </p>
            <HeroTags />
            <HeroRating />
          </div>
        </div>
        <div>
          <Rank />
          {/* <ImageSlider /> */}
        </div>
      </div>
      <Links />
    </div>
  );
};

export default HeroCard;
