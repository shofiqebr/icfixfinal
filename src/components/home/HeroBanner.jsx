import {Carousel} from "react-responsive-carousel";
import bannerImage from "../../assets/hero-banner-background.jpg";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HeroBanner = () => {
  return (
    <div
      className="h-[600px] banner-bg my-2 bg-cover md:bg-center bg-fixed flex justify-center items-center md:flex-row flex-col-reverse md:gap-0 gap-3"
      style={{backgroundImage: `url(${bannerImage})`}} >
      <div className="w-1/2 flex flex-col md:ml-12">
        <p className="text-2xl font-medium">PROFESSIONAL</p>
        <p className="my-2">
          <span className="lg:text-4xl md:text-2xl text-base font-bold  text-white">Apple Service Center</span> <br />
          <span className="lg:text-4xl md:text-2xl text-base font-bold  text-white">Accessories Shop</span>
        </p>
        <div className="flex gap-2">
          <button className="md:text-base  bg-white lg:text-2xl p-1  text-xs md:mr-3 md:px-8 lg:py-[10px] md:py-[5px]">REPAIR NOW</button>
          <button className="md:text-base   lg:text-2xl  text-xs p-2 md:px-10 py-2 bg-transparent text-white border-white border-2">BUY NOW</button>
        </div>
      </div>
      <div className="w-1/2">
        <Carousel
          showThumbs={false}
          autoPlay
          showArrows={false}
          showStatus={false}
          infiniteLoop
          stopOnHover={false}
          interval={5000}>
          <div>
            <img className="md:h-[600px] h-[300px] md:pt-0 pt-2 md:pb-0 pb-4 md:w-full" src={slider1} />
          </div>
          <div>
            <img className="md:h-[600px] h-[300px] md:pt-0 pt-2 md:pb-0 pb-4 md:w-full" src={slider2} />
          </div>
          <div>
            <img className="md:h-[600px] h-[300px] md:pt-0 pt-2 md:pb-0 pb-4 md:w-full" src={slider3} />
          </div>
          <div>
            <img className="md:h-[600px] h-[300px] md:pt-0 pt-2 md:pb-0 pb-4 md:w-full" src={slider4} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroBanner;
