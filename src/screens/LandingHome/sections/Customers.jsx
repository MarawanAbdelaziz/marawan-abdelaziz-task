import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import p1 from "../../../../assets/image/p1.png";
import p2 from "../../../../assets/image/p2.png";
import p3 from "../../../../assets/image/p3.png";
import arrowL from "../../../../assets/Icons/arrowL.svg";
import arrowR from "../../../../assets/Icons/arrowR.svg";
import star from "../../../../assets/Icons/Icon awesome-star.svg";
import star1 from "../../../../assets/Icons/Icon awesome-star-1.svg";

const Customers = () => {
  const [coverflowSettings, setCoverflowSettings] = useState({
    rotate: 0,
    stretch: 14,
    depth: 5,
    modifier: 100,
  });

  useEffect(() => {
    const updateCoverflowSettings = () => {
      const width = window.innerWidth;

      if (width >= 1537) {
        // min-width: 1537px (Laptop and larger)
        setCoverflowSettings({
          rotate: 0,
          stretch: 14,
          depth: 5,
          modifier: 101,
        });
      } else if (width >= 1436) {
        // min-width: 1536px (2xl)
        setCoverflowSettings({
          rotate: 0,
          stretch: 10.6,
          depth: 5,
          modifier: 100,
        });
      } else if (width >= 1122) {
        // min-width: 1122px (xl)
        setCoverflowSettings({
          rotate: 0,
          stretch: 8,
          depth: 5,
          modifier: 100,
        });
      } else if (width >= 1024) {
        // min-width: 1024px (lg)
        setCoverflowSettings({
          rotate: 0,
          stretch: 10,
          depth: 5,
          modifier: 90,
        });
      } else if (width >= 768) {
        // min-width: 768px (md)
        setCoverflowSettings({ rotate: 0, stretch: 5, depth: 5, modifier: 80 });
      } else {
        // For widths less than 768px
        setCoverflowSettings({ rotate: 0, stretch: 5, depth: 5, modifier: 80 });
      }
    };

    updateCoverflowSettings();
    window.addEventListener("resize", updateCoverflowSettings);
    return () => {
      window.removeEventListener("resize", updateCoverflowSettings);
    };
  }, []);

  console.log("coverflowSettings: ", coverflowSettings);

  return (
    <section id="customers" className="h-screen w-[90%] mx-auto">
      <div className="pt-20">
        <h2 className="text-center font-cairo font-semibold text-3xl text-orange">
          أراء عملائنا
        </h2>
        <div className="w-40 mx-auto mt-6">
          <div className="w-24 h-1.5 bg-orange ml-20" />
        </div>
      </div>

      <Swiper
        key={JSON.stringify(coverflowSettings)}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={coverflowSettings}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className=""
      >
        <SwiperSlide>
          <div className="mx-auto border border-gray1 w-96 mt-20 text-center bg-white">
            <div className="w-full">
              <img className="w-[30%] mx-auto mt-14" src={p1} alt="" />
            </div>
            <h3 className="font-cairo text-orange text-sm mt-2">
              ياسمين عادل احمد
            </h3>
            <div className="flex justify-center mt-2 items-center">
              <h4 className="ml-36 font-cairo text-orange">+4</h4>
              <div className="flex justify-center items-center w-full mr-36">
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star1} alt="star" />
              </div>
            </div>
            <p className="font-cairo text-gray1 text-sm pb-32 w-72 mx-auto mt-5">
              مهندسين رائعين ومنتظمين في شغلهم وهيتم التعامل معهم بأستمرار
              واتوقع المزيد من النجاح والتقدم
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-auto border border-gray1 w-96 mt-20 text-center bg-white">
            <div className="w-full">
              <img className="w-[30%] mx-auto mt-14" src={p2} alt="" />
            </div>
            <h3 className="font-cairo text-orange text-sm mt-2">
              محمد على محمد
            </h3>
            <div className="flex justify-center mt-2 items-center">
              <h4 className="ml-36 font-cairo text-orange">+4</h4>
              <div className="flex justify-center items-center w-full mr-36">
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star1} alt="star" />
              </div>
            </div>
            <p className="font-cairo text-gray1 text-sm pb-32 w-72 mx-auto mt-5">
              مهندسين رائعين ومنتظمين في شغلهم وهيتم التعامل معهم بأستمرار
              واتوقع المزيد من النجاح والتقدم
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-auto border border-gray1 w-96 mt-20 text-center bg-white">
            <div className="w-full">
              <img className="w-[30%] mx-auto mt-14" src={p3} alt="" />
            </div>
            <h3 className="font-cairo text-orange text-sm mt-2">
              هشام السيد احمد
            </h3>
            <div className="flex justify-center mt-2 items-center">
              <h4 className="ml-36 font-cairo text-orange">+4</h4>
              <div className="flex justify-center items-center w-full mr-36">
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star} alt="star" />
                <img className="w-3.5" src={star1} alt="star" />
              </div>
            </div>
            <p className="font-cairo text-gray1 text-sm pb-32 w-72 mx-auto mt-5">
              مهندسين رائعين ومنتظمين في شغلهم وهيتم التعامل معهم بأستمرار
              واتوقع المزيد من النجاح والتقدم
            </p>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <img src={arrowL} />
          </div>
          <div className="swiper-button-next slider-arrow ">
            <img src={arrowR} />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Customers;
