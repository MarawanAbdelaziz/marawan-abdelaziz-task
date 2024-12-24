
import iphone from "../../../assets/image/iphone.svg";
import googlePlayBlack from "../../../assets/image/googlePlayBlack.svg";
import appStoreBlack from "../../../assets/image/appStoreBlack.svg";
import iconEmail from "../../../assets/Icons/001-mail.svg";
import phoneIcon from "../../../assets/Icons/Icon material-phone.png";
import locationIcon from "../../../assets/Icons/Icon material-location-on.svg";
import facebook from "../../../assets/Icons/facebook.svg";
import x from "../../../assets/Icons/X.svg";
import whatsapp from "../../../assets/Icons/whatsappWhite.svg";
import * as links from "../../../shared/mediaLinks";
import logoBlack from "../../../assets/image/logo-black-2.svg";
import logo from "../../../assets/image/logo-white-3.svg";
import googlePlay from "../../../assets/image/googlePlay.svg";
import appStore from "../../../assets/image/appStore.svg";

const ContactUs = () => {
  return (
    <section id="contactUs" className="mt-10 w-full mx-auto">
    <div className="flex justify-center items-center">
      <div className="ml-64 basis-1/2">
        <div className="w-full">
          <img className="w-[65%]" src={iphone} alt="iphone" />
        </div>
      </div>
      <div className="basis-1/2">
        <div className="w-fit">
          <div className="w-full mb-5">
            <img
              className="mx-auto w-[45%]"
              src={logoBlack}
              alt="Quickly"
            />
          </div>

          <h3
            dir="rtl"
            className="font-cairo font-semibold text-lg text-center leading-10 mb-5"
          >
            الآن التطبيق متاح للتحميل <br /> حمل التطبيق الآن واستمتع بعدة
            مميزات اخرى
          </h3>
          <div className="flex gap-4">
            <a href={links.googlePlay} target="_blank">
              <img src={googlePlayBlack} alt="google play" />
            </a>
            <a className="mt-1" href={links.appStore} target="_blank">
              <img src={appStoreBlack} alt="app store" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-black1 mt-5 text-white">
      <div className="w-[95%] mx-auto flex">
        <div className="relative basis-1/4">
          <div className="w-full absolute -left-4 top-6">
            <img className="w-[50%]" src={logo} alt="Quickly" />
          </div>
          <div className="flex items-center gap-5 mb-4 mt-28">
            <img src={iconEmail} alt="icon email" />
            <h4>QuicklyCompany@gmail.com</h4>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <img src={phoneIcon} alt="phone icon" />
            <h4>0102547863524</h4>
          </div>
          <div className="flex items-center gap-7">
            <img src={locationIcon} alt="location icon" />
            <h4>23 New Cairo,Egypt</h4>
          </div>
        </div>

        <div className="basis-1/4">
          <h3 className="mt-10 text-sm font-cairo text-orange">
            تواصل معنا عبر
          </h3>
          <div className="w-full flex items-start gap-4 mb-10 mt-4">
            <a href={links.x} target="_blank">
              <img className="w-[30px]" src={x} alt="X logo" />
            </a>
            <a href={links.facebook} target="_blank">
              <img
                className="w-[30px]"
                src={facebook}
                alt="facebook logo"
              />
            </a>
            <a href={links.whatsApp} target="_blank">
              <img
                className="w-[30px]"
                src={whatsapp}
                alt="whatsapp logo"
              />
            </a>
          </div>

          <h4 className="text-sm font-cairo text-orange">
            حمل التطبيق الأن
          </h4>

          <div className="flex items-center gap-5 mt-2">
            <a href={links.googlePlay} target="_blank">
              <img
                className="pb-2 w-36"
                src={googlePlay}
                alt="google play"
              />
            </a>
            <a href={links.appStore} target="_blank">
              <img className="w-36" src={appStore} alt="app store" />
            </a>
          </div>
        </div>

        <div className="basis-1/4">
          <div className="flex flex-col gap-3 mt-8">
            <a
              className={` font-cairo font-semibold text-[17px] text-orange w-fit`}
            >
              الصفحات
            </a>
            <a className={`font-cairo font-semibold text-[15px] w-fit`}>
              الرئيسية
            </a>
            <a
              className={`text-nowrap font-cairo font-semibold text-[15px] w-fit`}
            >
              اعرف عن الشركة
            </a>
            <a className={`font-cairo font-semibold text-[15px] w-fit`}>
              خدماتنا
            </a>
            <a
              className={`text-nowrap font-cairo font-semibold text-[15px] w-fit`}
            >
              أراء عملائنا
            </a>
            <a
              className={`text-nowrap font-cairo font-semibold text-[15px] w-fit`}
            >
              تواصل معنا
            </a>
          </div>
        </div>
        <div dir="rtl" className="basis-1/4">
          <input
            className="mt-10 mb-4 w-full px-8 py-3  text-black placeholder:font-cairo focus:outline-orange"
            placeholder="رقم الموبيل"
            type="number"
          />
          <textarea
            className="placeholder:text-gray1 w-full text-black px-8 pt-3 placeholder:font-cairo h-32 focus:outline-orange"
            placeholder="اكتب رسالتك..."
          ></textarea>
          <button className="mt-4 mb-8 font-cairo font-semibold  border-2 border-orange bg-orange px-16 laptop:px-20 py-3 laptop:py-3.5 text-[13px] laptop:text-base">
            إرسال
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactUs