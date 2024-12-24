import engineers from "../../../assets/image/engineers.svg";
import logoBlack from "../../../assets/image/logo-black-2.svg";


const About = () => {
  return (
    <section id="about" className="h-screen w-[90%] mx-auto">
      <div className="pt-40">
        <h2 className="text-center font-cairo font-semibold text-[20px] text-orange">
          اعرف عن الشركة
        </h2>
        <div className="w-40 mx-auto mt-4">
          <div className="w-24 h-1 bg-orange ml-20" />
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-full pr-56">
          <img className="ml-auto w-10/12" src={engineers} alt="" />
        </div>

        <div dir="rtl" className="w-[30%] mr-40">
          <div className="w-full pl-14">
            <img className="w-[55%] mr-auto" src={logoBlack} alt="logo black" />
          </div>
          <p className="text-nowrap leading-9 font-cairo">
            كويكلي هي شركة متخصصة في تصليح الأجهزة الكهربائية <br /> تساعد
            كويكلي على التواصل مابين العميل والمهندس
          </p>
          <div className="flex items-end relative">
            <p className="text-nowrap leading-9 mt-4 font-cairo">
              كويكلي هي شركة متخصصة في تصليح الأجهزة الكهربائية <br /> تساعد
              كويكلي على التواصل مابين العميل والمهندس <br /> وذلك لتسهيل صيانة
              الأجهزة كويكلي هي شركة متخصصة في <br /> تصليح الأجهزة الكهربائية{" "}
              <br /> تساعد كويكلي على التواصل مابين العميل والمهندس
              <br /> وذلك لتسهيل صيانة الأجهزة
            </p>
            <a
              className="text-orange font-cairo text-nowrap absolute left-6 bottom-[7px]"
              href="#"
            >
              اعرف المزيد
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
