import logo from "../assets/image/logo-white-3.svg";

import menu from "../assets/Icons/icons8-menu-button-50.png";
import { useState } from "react";

const Navbar = () => {
  const [currentHash, setCurrentHash] = useState("#home");

  return (
    <nav className=" text-orange mt-5 laptop:mt-10">
      <div className="flex justify-center items-center">
        <div className="md:hidden">
          <img className="w-9" src={menu} alt="" />
        </div>
        <div className="ml-auto hidden md:block">
          <img className="md:w-40 laptop:w-52" src={logo} alt="Quickly logo" />
        </div>

        <div className="hidden md:flex  md:gap-8 lg:gap-12 xl:gap-20 laptop:gap-24">
          <a
            className={` ${
              currentHash === "#home" ? "text-white" : "hover:text-white"
            } font-cairo font-semibold text-xs lg:text-[13px] laptop:text-base duration-500`}
            href="#home"
            onClick={() => setCurrentHash("#home")}
          >
            الرئيسية
          </a>
          <a
            className={` ${
              currentHash == "#about" ? "text-white" : "hover:text-white"
            } text-nowrap font-cairo font-semibold text-xs lg:text-[13px] laptop:text-base duration-500`}
            href="#about"
            onClick={() => setCurrentHash("#about")}
          >
            اعرف عن الشركة
          </a>
          <a
            className={`${
              currentHash == "#services" ? "text-white" : "hover:text-white"
            }  font-cairo font-semibold text-xs lg:text-[13px] laptop:text-base duration-500`}
            href="#services"
            onClick={() => setCurrentHash("#services")}
          >
            خدماتنا
          </a>
          <a
            className={`${
              currentHash == "#customers" ? "text-white" : "hover:text-white"
            } text-nowrap font-cairo font-semibold text-xs lg:text-[13px] laptop:text-base duration-500`}
            href="#customers"
            onClick={() => setCurrentHash("#customers")}
          >
            أراء عملائنا
          </a>
          <a
            className={`${
              currentHash === "#contactUs" ? "text-white" : "hover:text-white"
            } text-nowrap font-cairo font-semibold text-xs lg:text-[13px] laptop:text-base duration-500`}
            href="#contactUs"
            onClick={() => setCurrentHash("#contactUs")}
          >
            تواصل معنا
          </a>
        </div>

        <button className="text-nowrap font-cairo font-semibold mr-auto border-2 border-orange  px-7 lg:px-10 xl:px-14 laptop:px-20 py-2 lg:py-3 laptop:py-5">
          تسجيل الدخول
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
