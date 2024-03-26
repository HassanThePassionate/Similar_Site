import Link from "next/link";
import style from "./cards.module.css";
import Image from "next/image";
import { data } from "../../../constant/CardsData";

const Cards = () => {
  return (
    <>
      <h2 className={style.title}>Competitors and Alternatives</h2>
      <div className={style.cards}>
        {data.map((elm, id) => (
          <div key={id} className={style.card}>
            <div className={style.id}>#{id + 1}</div>
            <div className="flex mb-[12px]">
              <div className={style.img}>
                <Image src={elm.img} alt="img" height={20} width={20} />
              </div>
              <Link href="#" className={style.link}>
                {elm.link}
              </Link>
            </div>
            <span className={style.visit}>
              Visits:
              <span className="text-[22px] font-bold">{elm.visits}</span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
