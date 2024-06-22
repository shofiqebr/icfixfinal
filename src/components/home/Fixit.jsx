import {FaChevronRight} from "react-icons/fa";
import fixit_image from "../../assets/fixit_img.webp";

const Fixit = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row justify-center items-center py-4">
      <div>
        <img className="w-[550px]" src={fixit_image} alt="" />
      </div>
      <div className="text-right flex flex-col gap-4">
        <h1 className="md:text-4xl text-2xl px-10 md:px-0 font-semibold text-center">
          We Can <span className="text-[#F96331]"> Fix it</span> Almost <br className="hidden"/> As Fast As You Can Break It
        </h1>
        <div className="flex md:justify-end justify-center">
          <div className="w-32 h-2 bg-[#F96331]"></div>
        </div>
        <p className="text-end px-2">
          To solve any kind of problem-related to your Apple devices, we have all <br /> kinds of modern technologies, a
          highly developed lab, and skilled <br /> technicians.
        </p>
        <div className="flex md:justify-end justify-center">
          <button className="bg-[#F96331] rounded-3xl w-40 h-12 text-white p-3 flex justify-center items-center text-lg ">
            About Us
            <FaChevronRight className="text-base ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fixit;
