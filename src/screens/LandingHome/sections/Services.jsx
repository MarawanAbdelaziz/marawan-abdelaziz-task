import g1535 from "../../../assets/image/Group 1535.svg";
import g1538 from "../../../assets/image/Group 1538.svg";
import g1539 from "../../../assets/image/Group 1539.svg";

const Services = () => {
  return (
    <section id="services" className="h-screen w-[90%] mx-auto">
      <div className="pt-40">
        <h2 className="text-center font-cairo font-semibold text-[20px] text-orange">
          خدماتنا
        </h2>
        <div className="w-40 mx-auto mt-4">
          <div className="w-14 h-1 bg-orange ml-20" />
        </div>
      </div>

      <div dir="rtl" className="flex mt-20 w-[75%] mx-auto">
        <div className="border-t border-l border-b basis-1/3 mx-5">
          <div className="pt-10 pb-44">
            <div className="w-full">
              <img className="mx-auto w-16" src={g1538} alt="g1538" />
            </div>
            <h3 className="text-nowrap font-cairo font-semibold text-base 2xl:text-lg text-orange text-center mr-12 mt-6">
              وظائف متاحة
            </h3>
            <p className="font-cairo text-xs text-center text-gray1 mt-6">
              يتم الإعلان عن الوظائف المتاحة من <br /> قبل مراكز الصيانة
              المتعددة
            </p>
          </div>
        </div>
        <div className="border-t border-l border-b basis-1/3 mx-5">
          <div className="pt-10 pb-44">
            <div className="w-full">
              <img className="mx-auto w-16" src={g1539} alt="g1539" />
            </div>
            <h3 className="text-nowrap font-cairo font-semibold text-base 2xl:text-lg text-orange text-center mt-6">
              آخر الأخبار
            </h3>
            <p className="font-cairo text-xs text-gray1 mt-6 text-center ml-10">
              معرفة آخر اخبار الخاصة بالأجهزة <br />
              الكهربائية والأطلاع عليها أول بأول
            </p>
          </div>
        </div>
        <div className="border-t border-l border-b basis-1/3 mx-5">
          <div className="pt-10 pb-44">
            <div className="w-full">
              <img className="mx-auto w-16" src={g1535} alt="g1535" />
            </div>
            <h3 className="text-nowrap font-cairo font-semibold text-base 2xl:text-lg text-orange text-center mr-20 mt-6">
              صيانة الأجهزة الكهربائية
            </h3>
            <p className="font-cairo text-xs text-center text-gray1 mt-6">
              يتم تصليح وصيانة الأجهزة الكهربائية ونقل <br /> الأجهزة من وإلي
              مركز الصيانة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
