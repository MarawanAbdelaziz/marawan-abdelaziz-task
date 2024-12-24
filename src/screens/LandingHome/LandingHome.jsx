import bgImage from "../../assets/image/bgImage.webp";
import logo from "../../assets/image/logo-white-3.svg";
import * as links from "../../shared/mediaLinks";
import googlePlay from "../../assets/image/googlePlay.svg";
import appStore from "../../assets/image/appStore.svg";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import About from "./sections/About";
import Services from "./sections/Services";
import Customers from "./sections/customers/Customers";
import ContactUs from "./sections/ContactUs";

const LandingHome = () => {
  return (
    <>
      <div
        id="home"
        className="bg-cover bg-no-repeat h-screen w-full relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Header />

        <div className="absolute inset-0 top-[45px] laptop:top-[60px] bg-black/25 ">
          <section dir="rtl" className="w-[90%] mx-auto">
            <Navbar />

            <div dir="ltr" className="flex text-white ">
              <div className="mt-44 laptop:mt-56">
                <div className="relative block mb-24 laptop:mb-[7.5rem]">
                  <img
                    className="w-60 laptop:w-80 absolute -left-6"
                    src={logo}
                    alt="Quickly logo"
                  />
                </div>
                <h4 className="font-cairo mb-3 text-[13px] laptop:text-base">
                  كويكلي هي شركة متخصصة في تصليح الأجهزة الكهربائية
                </h4>
                <h4 className="font-cairo mb-3 text-[13px] laptop:text-base">
                  تساعد كويكلي علي التواصل مابين العميل والمهندس
                </h4>
                <h4 className="font-cairo mb-10 text-[13px] laptop:text-base">
                  وذلك لتسهيل صيانة الأحهزة
                </h4>
                <div>
                  <button className="font-cairo font-semibold mr-5 border-2 border-orange px-16 laptop:px-20 py-3 laptoppy-3.5 text-[13px] laptop:text-base">
                    اعرف المزيد
                  </button>
                  <button className="font-cairo font-semibold  border-2 border-orange bg-orange px-16 laptop:px-20 py-3 laptop:py-3.5 text-[13px] laptop:text-base">
                    اطلب الأن
                  </button>
                </div>
                <div className="flex items-center gap-5 mt-8">
                  <a href={links.googlePlay} target="_blank">
                    <img
                      className="pb-2 laptop:pb-[10px] w-28 laptop:w-fit"
                      src={googlePlay}
                      alt="google play"
                    />
                  </a>
                  <a href={links.appStore} target="_blank">
                    <img
                      className="w-[7.2rem] laptop:w-fit"
                      src={appStore}
                      alt="app store"
                    />
                  </a>
                  <h2 className="font-cairo font-semibold ml-2 text-[13px] laptop:text-base">
                    حمل التطبيق الأن
                  </h2>
                </div>
              </div>

              <div className="hidden md:block ml-auto mt-48 laptop:mt-64 ">
                <input
                  className="appearance-none block w-5 h-5 laptop:w-6 laptop:h-6 mb-4 rounded-full border-[4px] laptop:border-[4.8px] border-gray1 bg-white checked:border-amber-700 checked:bg-orange"
                  type="radio"
                  name="marawan"
                  defaultChecked
                />
                <input
                  className="appearance-none block  w-5 h-5 laptop:w-6 laptop:h-6 mb-4 rounded-full border-[4px] laptop:border-[4.8px] border-gray1 bg-white checked:border-amber-700 checked:bg-orange"
                  type="radio"
                  name="marawan"
                />
                <input
                  className="appearance-none  block w-5 h-5 laptop:w-6 laptop:h-6 mb-4 rounded-full border-[4px] laptop:border-[4.8px] border-gray1 bg-white checked:border-amber-700 checked:bg-orange"
                  type="radio"
                  name="marawan"
                />
                <input
                  className="appearance-none block  w-5 h-5 laptop:w-6 laptop:h-6 mb-4 rounded-full border-[4px] laptop:border-[4.8px] border-gray1 bg-white checked:border-amber-700 checked:bg-orange"
                  type="radio"
                  name="marawan"
                />
                <input
                  className="appearance-none block w-5 h-5 laptop:w-6 laptop:h-6 rounded-full border-[4px] laptop:border-[4.8px] border-gray1 bg-white checked:border-amber-700 checked:bg-orange"
                  type="radio"
                  name="marawan"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <About />
      <Services />
      <Customers />
      <ContactUs />
    </>
  );
};

export default LandingHome;
