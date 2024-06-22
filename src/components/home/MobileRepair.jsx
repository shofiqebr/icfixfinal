import {FaChevronRight} from "react-icons/fa";
import mobileRepairImg1 from "../../assets/mobileRepair1.png";

const MobileRepair = () => {
  return (
    <div className="max-w-[1200px] mx-auto md:px-2">
      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-10 max-w-[1200px] mx-auto my-14">
        <div className="flex md:flex-row flex-col justify-center items-center gap-10 w-1/2">
          <div className="">
            <img src={mobileRepairImg1} alt="" />
            <h2 className="font-bold text-xl">Liquid Damage</h2>
            <p>
              Wrost thing that can happen to your  device is get damaged by liquid.  Sooner you bring it to
              us is better 
              for your device.
            </p>
          </div>
          <div>
            <img src={mobileRepairImg1} alt="" />
            <h2 className="font-bold text-xl">Liquid Damage</h2>
            <p>
              Wrost thing that can happen to  your device is get damaged by  liquid. Sooner you bring it to
              us is 
              better for your device.
            </p>
          </div>
        </div>
        <div className="text-right flex flex-col gap-4 md:pr-0 pr-5 md:w-1/2">
          <p className="md:text-4xl text-2xl font-semibold">
            We Make <br />
            <span className="text-[#F96331]"> Mobile Repair</span> Stress free
          </p>
          <div className="flex justify-end md:mt-8 my-4">
            <div className="w-32 h-2 bg-[#F96331]"></div>
          </div>
          <p className="text-right pl-2 md:pl-0">
            Once you have found and reached IC FIX to repair your important devices,
             you do not need to be worried. We will be careful as much as you are...
          </p>
          <div className="flex justify-end items-center">
            <button className="bg-[#F96331] rounded-3xl w-40 h-12 text-white p-3 flex justify-center items-center text-lg ">
              View more
              <FaChevronRight className="text-base ml-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex gap-10 justify-center items-center  hidden">
        <div>
          <img className="" src={mobileRepairImg1} alt="" />
          <h2 className="font-bold text-xl">Liquid Damage</h2>
          <p>
            Wrost thing that can happen to your device is get damaged by liquid. Sooner you bring it to us
            is better
            for your device.
          </p>
        </div>
        <div>
          <img src={mobileRepairImg1} alt="" />
          <h2 className="font-bold text-xl">Liquid Damage</h2>
          <p>
            Wrost thing that can happen to your device is get damaged by liquid. Sooner you bring it to us
            is better 
            for your device.
          </p>
        </div>
        <div>
          <img src={mobileRepairImg1} alt="" />
          <h2 className="font-bold text-xl">Liquid Damage</h2>
          <p>
            Wrost thing that can happen to your  device is get damaged by liquid.  Sooner you bring it to us
            is better 
            for your device.
          </p>
        </div>
        <div>
          <img src={mobileRepairImg1} alt="" />
          <h2 className="font-bold text-xl">Liquid Damage</h2>
          <p>
            Wrost thing that can happen to your device is get damaged by liquid. Sooner you bring it to us
            is better 
            for your device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileRepair;
