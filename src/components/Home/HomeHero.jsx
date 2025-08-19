import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="pb-56">
      {/* Hero Section - Slick Carousel */}
      <div className="mt-[120px]  w-full md:mt-[0px] md:px-[0px]  md:py-[0px] overflow-hidden">
        {" "}
        {/* space for fixed navbar + mobile buttons */}
        <Slider {...settings}>
          <div className="relative">
            <img
              //src="https://www.nadiastrologyonline.com/img/sugar-nadi-jothidam.jpg"
              alt="slide1"
              className="w-full h-[400px] md:h-[500px] md:w-[1000px] md:object-rig object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-lg md:text-3xl font-bold">
                CHIEF ASTROLOGER: T.CHIDAMBARAM
              </h2>
              <p className="text-sm md:text-2xl mt-3">
                Accurate Predictions, Happy Customers!
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8sNNBv5Ni1uuFvJHo5sP4_uttReHFutJxWBr3PcLPMdxcgM_mVVAwIP6JkiNtVjKoMU&usqp=CAU"
              alt="slide2"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-lg md:text-3xl font-bold">
                Get Video Consulting
              </h2>
              <p className="text-sm md:text-2xl mt-3">
                Skype | WhatsApp | Google Meet
              </p>
            </div>
          </div>
        </Slider>
      </div>

      {/* section-2 */}

      <section className="px-3 md:px-0 md:mt-20 mt-5">
        <div>
          <h1 className="md:text-center py-5 font-bold text-3xl md:text-5xl">
            Welcome to{" "}
            <span className="text-red-700">Nadi Astrology Online</span>
          </h1>
          <p className="md:text-center text-gray-700 text-[16px] md:w-[600px] md:text-2xl mx-auto">
            Sri Atri Nadi Astrology Centre is a Traditional Online Nadi
            Astrology Centre in Vaitheeswaran Koil, India.
          </p>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-24 px-3 md:px-20 py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/hero/h1.jpeg" // change your image path
            alt="Astrologer"
            className="rounded-lg shadow-lg w-full md:w-[90%] h-[300px] md:h-[400px] object-cover object-center"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">
            Why Seek Nadi Astrology Online?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We invite you to experience one of the few remaining ancient
            mysteries of the world. Imagine someone born thousands of years ago
            promising to change your current destiny, right now from{" "}
            <span className="font-semibold text-orange-600">
              Online Nadi Astrology Services.
            </span>
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To prepare to discover a new destiny, you are invited to search for
            your{" "}
            <span className="font-semibold text-orange-600">
              Nadi palm leaf
            </span>
            today and perform the simple remedies indicated. Seek now and you
            shall find your future through Online Nadi Astrology Services.
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-red-700 transition duration-300">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
