import Home from "@/components/home/Home";
import Navs from "@/components/home/nav/Navs";
import Slider from "@/components/slider/Slider";
import Slide from "@/components/slider/slide/Slide";
const page = () => {
  return (
    <>
      <div className="bg-white">
        <Navs />
        <Home />
        <Slider />
        <Slider />
        <Slide />
        <Slider />
      </div>
    </>
  );
};

export default page;
