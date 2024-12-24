import engineers from "../../../assets/image/engineers.svg";
import logoBlack from "../../../assets/image/logo-black-2.svg";

const About = () => {
  return (
    <section id="about" className="mb-40 w-[90%] mx-auto">
      <div className="pt-40">
        <h2 className="text-center font-cairo font-semibold text-[20px] text-orange">
          اعرف عن الشركة
        </h2>
        <div className="w-40 mx-auto mt-4">
          <div className="w-24 h-1 bg-orange ml-20" />
        </div>
      </div>

      <div className="w-full md:flex justify-center items-center mt-10">
        <div className="w-full  pr-40 md:pr-56 xl:mt-14 laptop:mt-0">
          <img
            className="ml-20 laptop:ml-auto 2xl:w-[600px] laptop:w-10/12"
            src={engineers}
            alt=""
          />
        </div>

        <div dir="rtl" className="w-[50%] lg:w-[30%] mx-auto md:mr-0 xl:mr-10 2xl:mr-36 laptop:mr-40">
          <div className="w-full pl-14">
            <img className="w-[55%]  md:mr-0 xl:mr-auto" src={logoBlack} alt="logo black" />
          </div>
          <p className="text-nowrap lg:text-[0.70rem] xl:text-[0.80rem] laptop:text-[1rem] leading-9 font-cairo">
            كويكلي هي شركة متخصصة في تصليح الأجهزة الكهربائية <br /> تساعد
            كويكلي على التواصل مابين العميل والمهندس
          </p>
          <div className="flex items-end relative">
            <p className="text-nowrap lg:text-[0.70rem] xl:text-[0.80rem] laptop:text-[1rem] leading-9 mt-4 font-cairo">
              كويكلي هي شركة متخصصة في تصليح الأجهزة الكهربائية <br /> تساعد
              كويكلي على التواصل مابين العميل والمهندس <br /> وذلك لتسهيل صيانة
              الأجهزة كويكلي هي شركة متخصصة في <br /> تصليح الأجهزة الكهربائية
              <br /> تساعد كويكلي على التواصل مابين العميل والمهندس
              <br /> وذلك لتسهيل صيانة الأجهزة
            </p>
            <a
              className="text-orange font-cairo lg:text-[0.70rem] xl:text-[0.80rem] laptop:text-[1rem] text-nowrap absolute -left-20 bottom-[1px] xl:left-6 xl:bottom-[7px]"
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
