import {FaChevronDown} from "react-icons/fa";
import logoImage from "../../assets/logo.png";
import {FaCartShopping} from "react-icons/fa6";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {CartContext, UserContext} from "../../App";

const Navbar = () => {
  const navigate = useNavigate();
  const {cartItems} = useContext(CartContext);
  const {user, setUser} = useContext(UserContext);

  const logOut = () => {
    setUser("");
    localStorage.removeItem(`${window.location.hostname}-token`);
    navigate("/");
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">
          <span className="navbar-btn-style">HOME</span>
        </Link>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
      </li>
      <li className="group relative">
        <span className="cursor-pointer navbar-btn-style">
          SERVICES
          <FaChevronDown />
        </span>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
        <ul className="bg-white z-10 p-2 w-56 rounded-none group-hover:block absolute top-8 hidden">
          <li>
            <span className="navbar-btn-style">iPhone Repair</span>
          </li>
          <li>
            <span className="navbar-btn-style">iPad Repair</span>
          </li>
          <li>
            <span className="navbar-btn-style">Mac Repair</span>
          </li>
          <li>
            <span className="navbar-btn-style">Apple Watch Repair</span>
          </li>
        </ul>
      </li>
      <li className="group/outer relative">
        <span className="cursor-pointer navbar-btn-style">
          SHOP
          <FaChevronDown />
        </span>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
        <ul className="bg-white z-10 p-2 group-hover/outer:block hidden absolute top-8 w-56">
          <li className="group/inner relative">
            <span className="cursor-pointer flex justify-between navbar-btn-style">
              By Device
              <FaChevronDown />
            </span>
            <ul className="bg-white z-10 p-2 group-hover/inner:block hidden absolute left-full -mx-1 top-0 w-56">
              <li>
                <span className="navbar-btn-style">iPhone</span>
              </li>
              <li>
                <span className="navbar-btn-style">iPad</span>
              </li>
              <li>
                <span className="navbar-btn-style">Macbook</span>
              </li>
              <li>
                <span className="navbar-btn-style">Apple Watch</span>
              </li>
            </ul>
          </li>
          <li className="group/inner relative">
            <span className="cursor-pointer flex justify-between navbar-btn-style">
              By Category <FaChevronDown />
            </span>
            <ul className="bg-white z-10 p-2 group-hover/inner:block hidden absolute left-full top-0 w-56 -mx-1">
              <li>
                <span className="navbar-btn-style">case & protection</span>
              </li>
              <li>
                <span className="navbar-btn-style">Display</span>
              </li>
              <li>
                <span className="navbar-btn-style">Battery</span>
              </li>
              <li>
                <span className="navbar-btn-style">Headphones & Speaker</span>
              </li>
              <li>
                <span className="navbar-btn-style">Power and Cables</span>
              </li>
              <li>
                <span className="navbar-btn-style">Mouse & keypad</span>
              </li>
              <li>
                <span className="navbar-btn-style">Wearables</span>
              </li>
            </ul>
          </li>
          <li className="group/inner relative">
            <span className="cursor-pointer flex justify-between navbar-btn-style">
              By Brands
              <FaChevronDown />
            </span>
            <ul className="bg-white z-10 p-2 group-hover/inner:block hidden absolute left-full top-0 w-56 -mx-1">
              <li>
                <span className="navbar-btn-style">Apple</span>
              </li>
              <li>
                <span className="navbar-btn-style">Anker</span>
              </li>
              <li>
                <span className="navbar-btn-style"> Baykron</span>
              </li>
              <li>
                <span className="navbar-btn-style">IC FIX</span>
              </li>
              <li>
                <span className="navbar-btn-style">Mcdodo</span>
              </li>
              <li>
                <span className="navbar-btn-style">Aspor</span>
              </li>
              <li>
                <span className="navbar-btn-style">JBL</span>
              </li>
              <li>
                <span className="navbar-btn-style">UGREEN</span>
              </li>
              <li>
                <span className="navbar-btn-style">ACEFAST</span>
              </li>
              <li>
                <span className="navbar-btn-style">Zeblaze</span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link to="allCategory">
          <span className="navbar-btn-style">ALL CATEGORY</span>
        </Link>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
      </li>
      <li>
        <span className="navbar-btn-style">ABOUT</span>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
      </li>
      <li>
        <span className="navbar-btn-style">CONTACT US</span>
        <div className="hover-effect transition duration-300 ease-in-out w-[0%] bg-transparent py-[2px] "></div>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden md:pl-4 pt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <span className="">
            <img className="h-12 lg:ml-0 md:ml-12 ml-12" src={logoImage} />
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* cart items */}

      <div className="navbar-end flex justify-end items-center gap-5">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            {user ? (
              <Link to={`/cart`} className="relative">
                <FaCartShopping className="text-2xl" />
                <span className="bg-[#f96331] text-white badge badge-md absolute top-[-12px] left-3">{cartItems}</span>
              </Link>
            ) : (
              <>
                <Link to={`/cart`} className="relative">
                  <FaCartShopping className="text-2xl" />
                  <span className="bg-[#f96331] text-white badge badge-md absolute top-[-12px] left-3">0</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {user ? (
          <>
            <Link to="/profile">
              <span className="md:hover:bg-[#f96331] hover:text-white hidden  btn md:flex justify-center  rounded-none bg-transparent border-[#f96331]">{user}</span>
            </Link>
            <button onClick={() => logOut()} className="md:hover:bg-[#f96331] hover:text-white hidden  btn md:flex justify-center  rounded-none bg-transparent border-[#f96331]">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <span className="md:hover:bg-[#f96331] hover:text-white hidden  btn md:flex justify-center  rounded-none bg-transparent border-[#f96331]">Login</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
