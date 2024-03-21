import Home from "@/components/home/Home";
import Navs from "@/components/home/nav/Navs";
import Slider from "@/components/slider/Slider";
const page = () => {
  return (
    <>
      <div className="bg-white">
        <Navs />
        <Home />
        <Slider />
      </div>
    </>
  );
};

export default page;
