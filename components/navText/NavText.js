import Link from "next/link";
import style from "./navText.module.css";
const NavText = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1800px]">
        <div className="p-[20px]  ">
          <div className="flex flex-col py-2.5">
            <Link href="#" className="underline text-[#09757a] font-medium">
              WordPress
            </Link>
            <Link href="#" className="underline text-[#09757a] font-medium">
              Managed WordPress
            </Link>
          </div>

          <h1 className={`text-5xl leading-[56px] ${style.title}`}>
            GoDaddy Help
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavText;
