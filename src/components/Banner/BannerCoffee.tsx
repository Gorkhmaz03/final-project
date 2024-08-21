import BannerImg from "../../assets/coffee-white.png";
import { MdCoffee } from "react-icons/md";
import BgImg from "../../assets/website/coffee-texture.jpg";
import { CiCoffeeCup } from "react-icons/ci";
import { FaCoffee } from "react-icons/fa";
import { GiCoffeeMug } from "react-icons/gi";
import { translate } from "../../i18n";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const BannerCoffee = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  {translate("premium")}
                </h1>
                <h2
                  data-aos="fade-up"
                  className="text-3xl text-primary/50 text-center tracking-wide leading-5 font-bold"
                >
                  {translate("offer")}
                </h2>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <CiCoffeeCup className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span>{translate("prem")}</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaCoffee className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span>{translate("hot")}</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiCoffeeMug className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>{translate("cold")}</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <MdCoffee className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-100" />
                      <span>{translate("milk")}</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                      {translate("loverTitle")}
                    </h1>
                    <p className="text-base text-gray-500">
                      {translate("lover")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCoffee;
