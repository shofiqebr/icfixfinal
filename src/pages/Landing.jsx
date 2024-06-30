import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ItemContext} from "../App";
import {FaShoppingCart} from "react-icons/fa";
import {FaCheckCircle} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import From from "../components/landing/From";
import Title from "../components/title/Title";

const Item = () => {
  const {name} = useParams();
  const itemData = useContext(ItemContext);
  const [loader, setLoader] = useState(true);
  const [landing, setLanding] = useState([]);

  useEffect(() => {
    let itmFind = itemData.find((item) => item.name === name);
    setLanding([itmFind]);
    setLoader(false);
  }, [name, itemData]);

  const formatStyle = (params) => {
    if (landing[0] && landing[0][params]) {
      return landing[0][params].split("<br>").map((part, index, parts) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </span>
      ));
    }
  };

  return (
    <>
      <Title title="Item" />

      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <section className="bg-[#F4F3EA] mt-3 py-5">
          {/* Top Bar Section */}
          <div className="mt-8 mx-auto max-w-screen-xl px-3">
            <h2 className="font-extrabold text-center text-2xl leading-8	">
              {formatStyle("custom_heading_1")}
              <span className="text-customOrange ml-2">{formatStyle("custom_heading_2")} </span> <br />
              {formatStyle("custom_headings_3")}
            </h2>
            <div className="mt-8 text-center"></div>

            <div className="text-center mt-6 border-4 rounded-full md:w-[340px] w-[240px] mx-auto border-customOrange hover:border-gray-800 p-2 hover:scale-110 duration-300	flex justify-center items-center">
              <button className="font-extrabold py-4 md:px-[85px] px-[40px] bg-customOrange rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                <FaShoppingCart />
                Order Now
              </button>
            </div>
            <h1 className="text-customOrange font-extrabold text-2xl text-center mt-8 ">{formatStyle("custom_heading_4")}</h1>
          </div>

          {/* আবায়া-ই সাবিহা Section */}
          <section className="my-8 bg-[#F4F3EA]  px-3 py-12">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4  gap-4 pt-12">
              <div className="grid text-center justify-center border-2 border-customOrange">
                <img src={`https://erp.icfix.com.bd${landing[0]?.custom_upload_image_1}`} />
                <p className="font-extrabold p-2">{formatStyle("custom_name_1")}</p>
              </div>
              <div className="grid text-center justify-center border-2 border-customOrange">
                <img src={`https://erp.icfix.com.bd${landing[0]?.custom_upload_image_2}`} />
                <p className="font-extrabold p-2">{formatStyle("custom_name_2")}</p>
              </div>
              <div className="grid text-center justify-center border-2 border-customOrange">
                <img src={`https://erp.icfix.com.bd${landing[0]?.custom_upload_image_3}`} />
                <p className="font-extrabold p-2">{formatStyle("custom_name_3")}</p>
              </div>
              <div className="grid text-center justify-center border-2 border-customOrange">
                <img src={`https://erp.icfix.com.bd${landing[0]?.custom_upload_image_4}`} />
                <p className="font-extrabold p-2">{formatStyle("custom_name_4")}</p>
              </div>
            </div>
            <div></div>
          </section>
          {/* Order now section  */}
          <div className="max-w-screen-xl mx-auto p-3 text-center">
            <h1 className="font-extrabold text-3xl">
              {formatStyle("custom_heading_5")}
              <span className="relative">
                {formatStyle("custom_heading_6")}
                <svg className="w-28 absolute -left-6 top-1 text-customOrange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <path fill="red" d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4"></path>
                  <path fill="red" d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"></path>
                </svg>
              </span>
              {formatStyle("custom_heading_7")}
            </h1>
            <h1 className="font-extrabold text-4xl mt-4 text-customOrange">
              {formatStyle("custom_heading_8")}
              <span className="relative ml-2 mr-2 text-[#38b000]">
                {formatStyle("custom_heading_9")}
                <svg className="w-44 absolute -left-8 -top-[68px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" preserveAspectRatio="none"></svg>
              </span>
              {formatStyle("custom_heading_7")}
            </h1>
            <h2 className="mt-5 text-customOrange text-2xl font-extrabold">{formatStyle("custom_heading_10")}</h2>
        
          </div>
          {/* card Section */}

          <section className="max-w-screen-xl mt-8 mx-auto p-5">
            <div>
              <div className="md:ml-44">
                <h1 className="font-extrabold text-3xl text-customOrange">{formatStyle("custom_heading_11")}</h1>
                <div className="flex items-center gap-2 mt-6">
                  <p className="h-3 w-6 bg-[#38B000]"></p>
                  <p className="h-3 w-6 bg-[#38B000]"></p>
                  <p className="h-3 w-6 bg-[#38B000]"></p>
                  <p className="h-3 w-6 bg-[#38B000]"></p>
                </div>
                <div className="mt-6 flex items-center gap-3 font-bold">
                  <FaCheckCircle className="text-2xl text-[#38B000]" />
                  <p>{formatStyle("custom_heading_12")}</p>
                </div>
                <div className="mt-6 flex items-center gap-3 font-bold">
                  <FaCheckCircle className="text-2xl text-[#38B000]" />
                  <p>{formatStyle("custom_heading_13")}</p>
                </div>
                <div className="mt-6 flex items-center gap-3 font-bold">
                  <FaCheckCircle className="text-2xl text-[#38B000]" />
                  <p>{formatStyle("custom_heading_14")}</p>
                </div>
                <div className="mt-6 flex items-center gap-3 font-bold">
                  <FaCheckCircle className="text-2xl text-[#38B000]" />
                  <p>{formatStyle("custom_heading_15")}</p>
                </div>
              </div>
              <div className="text-center mt-8 border-4 rounded-full md:w-[340px] w-[230px] mx-auto border-customOrange hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
                <button className="font-extrabold  md:px-[85px] px-[32px] bg-customOrange rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                  <FaShoppingCart />
                  Order Now
                </button>
              </div>
            </div>
          </section>
          {/* --------------------- */}
          <section className="bg-[#F4F3EA] text-center mt-8 p-8">
            <div className="md:max-w-screen-xl md:mx-auto">
              <h1 className="text-3xl font-extrabold text-customOrange">{formatStyle("custom_heading_16")}</h1>
              <div className="text-center mt-8 border-4 rounded-full md:w-[340px] w-[210px] mx-auto border-customOrange hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
                <button className="font-extrabold  md:px-[85px] px-[22px] bg-customOrange rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                  <FaShoppingCart />
                  Order Now
                </button>
              </div>
            </div>
          </section>

          {/* React Feom used */}
          <From formatStyle={formatStyle} landing={landing} />
        </section>
      )}
    </>
  );
};

export default Item;
