import mailIcon from "../assets/Icons/001-mail.svg";
import phoneIcon from "../assets/Icons/Icon material-phone.png";
import facebook2 from "../assets/Icons/facebook2.svg";
import subtraction2 from "../assets/Icons/Subtraction 2.svg";
import whatsapp from "../assets/Icons/Icon ionic-logo-whatsapp.svg";
import * as links from "../shared/mediaLinks";

const Header = () => {
  return (
    <header className="h-[45px] laptop:h-[60px] bg-white">
      <div className="flex items-center w-[90%] pt-3 laptop:pt-4 mx-auto">
        <div className="flex justify-center items-center mr-10 md:mr-24">
          <img className="w-4 laptop:w-6 mr-3" src={mailIcon} alt="mail icon" />
          <h4 className="font-cairo text-xs laptop:text-base  text-orange">
            QuicklyCompany@gmail.com
          </h4>
        </div>

        <div className="flex justify-center items-center">
          <img
            className="w-3.5 laptop:w-5 mr-2"
            src={phoneIcon}
            alt="phone icon"
          />
          <h4 className="font-cairo text-xs laptop:text-base text-orange tracking-[0.07em]">
            0102547863524
          </h4>
        </div>

        <div className="flex justify-center items-center ml-auto gap-4">
          <a href={links.x} target="_blank">
            <img className="w-5 laptop:w-7" src={subtraction2} alt="X icon" />
          </a>
          <a href={links.facebook} target="_blank">
            <img
              className="w-5 laptop:w-7"
              src={facebook2}
              alt="facebook icon"
            />
          </a>
          <a href={links.whatsApp} target="_blank">
            <img
              className="w-5 laptop:w-7"
              src={whatsapp}
              alt="whatsapp icon"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
