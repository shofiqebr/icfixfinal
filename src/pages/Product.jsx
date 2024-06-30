import {useContext, useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {CartContext, ItemContext, UserContext, WebContext} from "../App";
import {BsCashCoin} from "react-icons/bs";
import {CiHeart, CiShare2} from "react-icons/ci";
import {FaBangladeshiTakaSign} from "react-icons/fa6";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {IoLocationOutline} from "react-icons/io5";
import {MdOutlineDeliveryDining} from "react-icons/md";
import {TbCurrencyTaka} from "react-icons/tb";
import {TiStarFullOutline} from "react-icons/ti";
import ReactImageMagnify from "react-image-magnify";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "../components/title/Title";
import {addToCart, getStrdCart, putCartDB} from "../utilities/functions";
import {toast} from "react-toastify";

const Product = () => {
  const {name} = useParams();
  const {user} = useContext(UserContext);
  const {cartItems, setCartItems} = useContext(CartContext);
  const webItmData = useContext(WebContext);
  const itemData = useContext(ItemContext);
  const [loader, setLoader] = useState(true);
  const [landing, setLanding] = useState();
  const [disable, setDisable] = useState();
  const [count, setCount] = useState(1);

  useEffect(() => {
    let itmFind = itemData.find((item) => item.name === name);
    let disable = itmFind?.custom_is_landing == 0 ? true : false;
    setLanding(itmFind);
    setDisable(disable);
    setLoader(false);
  }, [name, itemData]);

  const handleAddCart = () => {
    const newItem = {
      image: landing?.image,
      item_name: landing?.item_name,
      item_code: landing?.item_code,
      standard_rate: 2 + landing?.standard_rate,
      qty: count,
      uom: landing?.stock_uom,
    };

    if (addToCart(newItem)) {
      setCartItems(cartItems + 1);
    }

    let cart = getStrdCart("cart");
    putCartDB(user, cart).then((result) => {
      if (result) {
        toast("Cart Added");
      }
    });
  };

  return (
    <>
      <Title title="Product" />
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <div className="max-w-screen-xl mx-auto px-4 mt-5  p-2">
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5 place-items-center place-content-center	">
            <Carousel className="z-10">
              <div>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Images",
                      isFluidWidth: true,
                      src: `https://erp.icfix.com.bd${landing?.image}`,
                      height: 562,
                      width: 140,
                    },
                    largeImage: {
                      src: `https://erp.icfix.com.bd${landing?.image}`,
                      width: 1200,
                      height: 1200,
                    },
                    isHintEnabled: false,
                  }}
                />
              </div>
            </Carousel>
            <div className="p-4">
              <h1 className="text-xl font-semibold">{landing?.item_name}</h1>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center ">
                  <TiStarFullOutline className="text-[14px] text-[#faca51]" />
                  <TiStarFullOutline className="text-[14px] text-[#faca51]" />
                  <TiStarFullOutline className="text-[14px] text-[#faca51]" />
                  <TiStarFullOutline className="text-[14px] text-[#faca51]" />
                  <div className="ml-4 text-[#1a9cb7] text-[14px]">
                    <p>
                      155 Ratings67 <span>|</span> Answered Questions
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <CiShare2 className="text-2xl" />
                  <CiHeart className="text-2xl" />
                </div>
              </div>
              <p className="text-[#2918ee] text-[12px] mt-3">
                <span className="font-bold text-[12px] text-[#9e9e9e] ">Brand:</span>
                <span className="ml-2">{landing?.brand}</span>
              </p>
              <hr className="mt-4" />
              <div className="mt-2 ">
                <div className="flex items-center gap-2 text-[#f57224]">
                  <FaBangladeshiTakaSign className="text-3xl " />
                  <span className="text-4xl font-semibold">{landing?.standard_rate}</span>
                </div>
                <div className=" flex items-center gap-2 text-[#9e9e9e]">
                  <FaBangladeshiTakaSign className="text-1xl line-through" />
                  <span className="line-through">1,500</span>
                  <p className="text-black">-79%</p>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="flex gap-2 mt-3">
                <h1 className="text-[#757575]">Color Family</h1>
                <div className="">
                  <h1 className="">Not Specified</h1>
                  <button className="py-1 px-3 text-[14px] border mt-1 border-[#f36f21]">Not Specified</button>
                </div>
              </div>
              <div className="flex gap-20 mt-5">
                <h1 className="text-[#757575]">Size</h1>
                <div className="">
                  <h1 className="">Int </h1>
                  <div className="flex gap-2 items-center">
                    <button className="py-1 text-[#f36f21] px-1 md:px-4  md:text-[14px] text-xs border mt-1 border-[#f36f21]">M</button>
                    <button className="py-1 px-1 md:px-4 text-xs md:text-[14px] border mt-1 ">XXL</button>
                    <button className="py-1 px-1 md:px-4 text-xs md:text-[14px] border mt-1 ">L</button>
                    <button className="py-1 px-1  md:px-4 text-xs md:text-[14px] border mt-1">XL</button>
                  </div>
                </div>
              </div>
              <div className="flex gap-12 mt-8">
                <h1 className="text-[#757575]">Quantity</h1>
                <div className="flex items-center cursor-pointer">
                  <button
                    onClick={() => setCount(count - 1)}
                    disabled={count > 0 ? false : true}
                    className={`border text-center w-8 font-bold ${count > 0 ? "bg-[#fafafa]" : "text-red-600 border-red-600 cursor-not-allowed"}`}>
                    -
                  </button>
                  <input className="w-12 text-center px-2 border border-black bg-black text-white" type="text" value={count} readOnly />
                  <button onClick={() => setCount(count + 1)} className="border text-center w-8 font-bold bg-[#fafafa]">
                    +
                  </button>
                </div>
              </div>
              <div className="mt-4 flex gap-3 items-center ">
                <div className="flex-1">
                  {disable ? (
                    <button disabled className="w-full py-2 font-semibold text-white rounded bg-gray-400 cursor-not-allowed">
                      Buy Now
                    </button>
                  ) : (
                    <Link to={`/landing/${landing?.item_code}`}>
                      <button className="w-full py-2 font-semibold text-white rounded bg-[#2abbe8] hover:bg-[#0881a6]">Buy Now</button>
                    </Link>
                  )}
                </div>
                <div className="flex-1">
                  {user ? (
                    <button
                      onClick={() => handleAddCart()}
                      disabled={count > 0 ? false : true}
                      className={`w-full py-2 lg:px-10 md:px-5 px-3 font-semibold text-white rounded ${count > 0 ? "bg-[#f57224] hover:bg-[#7e3003]" : "bg-gray-400 cursor-not-allowed"}`}>
                      Add To Cart
                    </button>
                  ) : (
                    <Link
                      to={`/login`}
                      className={`w-full py-2 lg:px-10 md:px-5 px-3 font-semibold text-white rounded ${count > 0 ? "bg-[#f57224] hover:bg-[#7e3003]" : "bg-gray-400 cursor-not-allowed"}`}>
                      Add To Cart
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-[#fafafa] rounded p-4">
              <div className="flex justify-end cursor-pointer">
                <IoIosInformationCircleOutline className="text-end" />
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex gap-2 items-center">
                  <IoLocationOutline className="text-2xl" />
                  <p className="text-[14px]">
                    Dhaka, Dhaka North, Banani <br /> Road No. 12 - 19
                  </p>
                </div>
                <p className="text-[#1a9cb7]">CHANGE</p>
              </div>
              <hr className="mt-1" />
              <div className="flex justify-between items-center mt-5">
                <div className="flex gap-2 items-center">
                  <MdOutlineDeliveryDining className="text-2xl" />
                  <p className="text-[14px]">
                    <span className="font-bold">Standard Delivery</span> <br />
                    <span>4 Jun - 11 Jun 6 - 13 day(s)</span>
                  </p>
                </div>
                <p className="text-[#1a9cb7] font-bold">৳ 55</p>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex gap-2 items-center">
                  <BsCashCoin className="text-xl" />
                  <p className="text-[14px]">Cash on Delivery Available</p>
                </div>
              </div>
              <hr className="mt-2" />
              <div className="flex justify-end cursor-pointer mt-6">
                <IoIosInformationCircleOutline className="text-end" />
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex gap-2 items-center">
                  <MdOutlineDeliveryDining className="text-2xl" />
                  <p className="text-[14px]">
                    <span>7 Days Returns</span> <br /> <span>Change of mind is not applicable</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex gap-2 items-center">
                  <MdOutlineDeliveryDining className="text-2xl" />
                  <p className="text-[14px]">Warranty not available</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex gap-2 items-center">
                  <p className="text-[14px]">
                    <span>Sold by</span> <br /> <span>S M Accessories</span>
                  </p>
                </div>
                <p className="text-[#1a9cb7] font-bold">CHAT</p>
              </div>
              <div className="flex mt-4 justify-between">
                <div className="p-4 border">
                  <p className="text-[14px]">Warranty not available</p>
                  <h1 className="text-xl font-semibold mt-4">70%</h1>
                </div>
                <div className="p-4 border">
                  <p className="text-[14px]">Ship on Time</p>
                  <h1 className="text-xl font-semibold mt-4">96%</h1>
                </div>
                <div className="p-4 border">
                  <p className="text-[14px]">Chat Response Rate</p>
                  <h1 className="text-[14px] text-[#ccc] mt-4">Not enough data</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Ratings & Reviews */}
          {/* <h1 className="mt-3 max-w-screen-xl mx-auto  font-bold">Ratings & Reviews</h1> */}
          <div className="max-w-screen-xl mx-auto mt-5 ">
            {/* <div className="flex flex-col md:flex-row  gap-4 "> */}
         
            <div>
              {/* make uper div undo if not needed */}
              <h1 className="text-[12px] font-bold">People Who Viewed This Item Also Viewed</h1>
              <div className="flex gap-4 bg-white p-2">
                {webItmData
                  .filter((web) => web.item_code !== name)
                  .slice(0, 4)
                  .map((itm, idx) => {
                    const foundItem = itemData.find((item) => item.name === itm.item_code);
                    const cost = foundItem ? foundItem.standard_rate : 0;

                    return (
                      <Link to={`../item/${itm.item_code}`} key={idx}>
                        <div className="mt-4 hover:border hover:shadow p-2 w-72 flex flex-col justify-center items-center">
                          <img className="w-44 h-56" src={`https://erp.icfix.com.bd${itm.website_image}`} alt="" />
                          <p>{itm.web_item_name} </p>
                          <p className="flex items-center text-[#ff6801] text-[17px]">
                            <TbCurrencyTaka />
                            <h1>{cost}</h1>
                          </p>
                          <div className="flex items-center gap-2 text-[12px]">
                            <div className="flex text-[#faca51]">
                              <TiStarFullOutline className="text-[12px]" />
                              <TiStarFullOutline className="text-[12px]" />
                              <TiStarFullOutline className="text-[12px]" />
                              <TiStarFullOutline className="text-[12px]" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
