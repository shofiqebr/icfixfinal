import {FiFacebook, FiInstagram, FiYoutube} from "react-icons/fi";
import logoImg from "../../assets/logo.png";
import payment from "../../assets/payment.png";
import loveImg from "../../assets/love.png";

const Footer = () => {
  return (
    <div className="h-[500px] bg-gradient-to-b from-[#FFE1D8] to-[#FFF9F6] mt-44">
      {/* white card area start */}
      <div className="relative text-center flex justify-center px-2">
        <div className="card lg:w-[1020px] h-[300px] bg-base-100 shadow-xl absolute -top-40 border-2 px-2">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5 lg:py-20 pt-4">
            <div className="relative lg:ml-5">
              <img className="absolute -top-4 right-3" src={loveImg} alt="" />
              <div className="w-40 h-14 pt-1 rounded-md bg-[#f96331] text-white text-center text-4xl ">ICFIX</div>
            </div>
            <div>
              <span className="lg:text-4xl text-xl font-bold">Apple Service Center That You Will Love</span>
              <br /> <span className="lg:text-2xl text-lg font-semibold">we never compromise with our principles</span>
            </div>
            <div>
              <button className="bg-[#f96331] text-white w-40 py-2 rounded-md text-[23px] lg:mr-5 ">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* white card area end*/}
      <div className="flex justify-center items-center gap-10 pt-44 pb-5">
        <div className="border-0 border-r-2 border-[#f96331]">
          <img className="pr-10 " src={logoImg} alt="" />
        </div>
        <div>
          <p className="text-[#975C49]">Copyright</p>
          <p>icfix.com.bd</p>
        </div>
      </div>
      <div>
        <hr className="" />
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-20 gap-2 md:text-xl font-semibold py-5">
          <a href="#">Terms & Condition</a>
          <a href="#">warranty policy</a>
          <a href="#">Refund policy</a>
          <a href="#">Tracking</a>
        </div>
        <hr />
      </div>
      <div className="flex justify-center items-center gap-5 py-5">
        <a href="">
          <FiFacebook />
        </a>
        <a href="">
          {" "}
          <FiInstagram />
        </a>
        <a href="">
          <FiYoutube />
        </a>
      </div>
      <div className="flex pb-5">
        <img src={payment} alt="" />
      </div>
    </div>
  );
};

export default Footer;
