// import {useContext} from "react";
// import {GroupsContext, ItemContext, WebContext} from "../App";
import {TfiMenuAlt} from "react-icons/tfi";
import category1 from "../../assets/category1.png";
import {FaChevronDown} from "react-icons/fa";
import Title from "../../components/title/Title";

const AllCategory = () => {
  // const grpData = useContext(GroupsContext);
  // const webItmData = useContext(WebContext);
  // const itemData = useContext(ItemContext);
  return (
    <>
      <Title title="All Category" />
      <div className="bg-[#F2F2F2] p-10">
        <div className="bg-white max-w-[1100px] mx-auto p-3 pb-8">
          <div className="flex justify-start items-center gap-2 text-xl text-[#F15B2D] py-5">
            <div>
              <TfiMenuAlt />
            </div>
            <div>সকল ক্যাটাগরি</div>
          </div>

          <hr className="pt-5" />

          {/* category div start */}
          <div className="grid grid-cols-4 gap-5                ">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <img className="w-7" src={category1} alt="" />
                  </span>
                  <span className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</span>
                </div>
                <span>
                  <FaChevronDown className="text-blue-500 text-sm" />
                </span>
              </div>
              <hr />
              ooo
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <img className="w-7" src={category1} alt="" />
                  </span>
                  <span className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</span>
                </div>
                <span>
                  <FaChevronDown className="text-blue-500 text-sm" />
                </span>
              </div>
              <hr />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <img className="w-7" src={category1} alt="" />
                  </span>
                  <span className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</span>
                </div>
                <span>
                  <FaChevronDown className="text-blue-500 text-sm" />
                </span>
              </div>
              <hr />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <img className="w-7" src={category1} alt="" />
                  </span>
                  <span className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</span>
                </div>
                <span>
                  <FaChevronDown className="text-blue-500 text-sm" />
                </span>
              </div>
              <hr />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <img className="w-7" src={category1} alt="" />
                  </span>
                  <span className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</span>
                </div>
                <span>
                  <FaChevronDown className="text-blue-500 text-sm" />
                </span>
              </div>
              <hr />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <img className="w-7" src={category1} alt="" />
                  </span>
                  <span className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</span>
                </div>
                <span>
                  <FaChevronDown className="text-blue-500 text-sm" />
                </span>
              </div>
              <hr />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <img className="w-7" src={category1} alt="" />
                  </span>
                  <span className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</span>
                </div>
                <span>
                  <FaChevronDown className="text-blue-500 text-sm" />
                </span>
              </div>
              <hr />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <img className="w-7" src={category1} alt="" />
                  </span>
                  <span className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</span>
                </div>
                <span>
                  <FaChevronDown className="text-blue-500 text-sm" />
                </span>
              </div>
              <hr />
            </div>
          </div>
          {/* category div end */}
        </div>
      </div>
    </>
  );
};

export default AllCategory;
