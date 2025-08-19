import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    img: "/chapter/c1.jpeg",
    title: "Children & Pregnancy",
    desc: "This chapter has details about the seeker’s children. Birth, lifespan, achievements, problems, death and their overall performance have...",
  },
  {
    img: "/chapter/c2.webp",
    title: "Spouse & Matrimony",
    desc: "This chapter gives information about the Nadi seeker's matrimonial details like the Date, Time and Place of Marriage. Name of spouse...",
  },
  {
    img: "/chapter/c3.jpg",
    title: "Spiritual Inclinations & Wealth",
    desc: "This chapter gives information about the Nadi seeker's ancestral property, about his/her father, about accruing of wealth...",
  },
  {
    img: "/chapter/c3.jpg",
    title: "Spiritual Inclinations & Wealth",
    desc: "This chapter gives information about the Nadi seeker's ancestral property, about his/her father, about accruing of wealth...",
  },
];

const HomeHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const chapterSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const mobileSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1, // desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
              src="/hero/h1.jpg"
              alt="slide1"
              className="w-full h-[400px] md:h-[500px] object-cover"
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
              src="/hero/h2.jpg"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8R3e5NtyjQCbCm5bF8Z2TDVYhfFBcAQIK4A&s"
            alt="Astrologer"
            className="rounded-lg shadow-lg w-full md:w-[90%] h-[300px] md:h-[400px] object-cover object-center"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 md:text-xl md:text-left">
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
          <button className="bg-red-600 md:text-[15px] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-red-700 transition duration-300">
            Learn More
          </button>
        </div>
      </section>
      <div className="border-b border-neutral-200 md:max-w-[1200px] lg:max-w-[1400px] my-5 md:my-10 lg:my-16  max-w-[400px] mx-auto"></div>
      <section className="w-full mt-10 md:mt-24 px-3 md:px-20 py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left - Image */}
        <div className="w-full md:order-2 md:w-1/2 flex justify-center">
          <img
            src="https://astroera.in/public/cms-images/blogs/1997004197_Best-online-astrology-service-Chat-With-Astroera.jpg"
            alt="Astrologer"
            className="rounded-lg shadow-lg w-full md:w-[90%] h-[300px] md:h-[400px] object-cover object-center"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 md:text-xl md:order-1 md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">
            How to Seek Nadi Astrology Online Predictions?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In Online Nadi Astrology, predictions are obtained from Nadi Leafs
            using one's Thump Impression
            <span className="font-semibold md:px-2 text-orange-600">
              "For Males the Right Hand Thumb Impression and for Females the
              Left Thumb Impression is Used".
            </span>
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            For each thumb impression there are likely to be around five to six
            bundles; each such bundle in turn containing 50 to 100 leaves. In
            <span className="font-semibold px-2 text-orange-600">
              Nadi Astrology
            </span>
            these plam leafes are catalogued as per the signs on the thumb
            print. The seeker's thumb print is used to approximately locate the
            closest bundle of leaves.
          </p>
          <button className="bg-red-700 md:text-[15px] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-red-800 transition duration-300">
            Learn More
          </button>
        </div>
      </section>
      <div className="border-b border-neutral-200 md:max-w-[1200px] lg:max-w-[1400px] my-5 md:my-10 lg:my-16  max-w-[400px] mx-auto"></div>
      <section className="w-full mt-10 md:mt-24 px-3 md:px-20 py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://d2vlk40wphb5v6.cloudfront.net/public/cms-images/blogs/1599544609_What-are-the-benefits-of-astrology-services-1.webp"
            alt="Astrologer"
            className="rounded-lg shadow-lg w-full md:w-[90%] h-[300px] md:h-[400px] object-cover object-center"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 md:text-xl md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold md:w-[500px] text-red-700 mb-4">
            Benefits of Online Nadi Astrology Reading
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Online Nadi Astrology reading benefits you in many ways such as You
            don't have to be here in person directly. You can just send your
            thumb impression to us, by email along with your details. Hence you
            can save your time and money from your
            <span className="font-semibold px-2 text-orange-600">
              Nadi Astrology Online
            </span>
            <span className="text-gray-700">reading.</span>
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Since you don't have to spend your valuable time till we find your
            leaf as we will do it and get back you asap for your Nadi Astrology
            online reading.
          </p>
          <button className="bg-red-700 md:text-[15px] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-red-800 transition duration-300">
            Learn More
          </button>
        </div>
      </section>
      <section className="bg-red-700 py-10 md:pt-32 md:pb-20 mt-10 md:mt-32">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Title */}
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-white  py-3 rounded-md">
            Get Your predictions today!
          </h2>

          {/* Form */}
          <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Inputs */}
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="City"
              className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Country"
              className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Message"
              className="p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <div className="md:col-span-3 flex flex-col md:flex-row items-center gap-4">
              {/* Button */}
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-500 w-[400px] md:max-w-36 text-white font-bold px-6 py-3 rounded-xl shadow-2xl">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Desktop only show carosel */}

        <section className="px-2 hidden md:block max-w-[1400px] pt-32 mx-auto ">
          <h2 className="text-center md:text-3xl font-semibold py-10  text-white mb-8">
            Online Nadi Astrology <span className="text-black">Chapters</span>
          </h2>
          <Slider {...chapterSettings}>
            {cards.map((card, i) => (
              <div key={i} className="px-3">
                <div className="bg-white h-[500px] w-[400px] mx-auto rounded-lg shadow-md overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-10">
                    <h3 className="font-semibold text-2xl text-red-600 mb-2">
                      {card.title}
                    </h3>
                    <p className=" text-gray-700 text-[20px] mb-4">
                      {card.desc}
                    </p>
                    <button className="border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* mobile visible only */}

        <section className="px-2 md:hidden max-w-[1400px] pt-10 mx-auto overflow-hidden ">
          <h2 className="w-[300px] mx-auto text-2xl px-2 font-semibold py-3  text-white mb-8">
            Online Nadi Astrology{" "}
            <span className="text-black font-bold">Chapters</span>
          </h2>
          <Slider {...mobileSettings}>
            {cards.map((card, i) => (
              <div key={i} className="px-3">
                <div className="bg-white h-[500px] w-[400px] mx-auto rounded-lg shadow-md overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-10">
                    <h3 className="font-semibold text-2xl text-red-600 mb-2">
                      {card.title}
                    </h3>
                    <p className=" text-gray-700 text-[20px] mb-4">
                      {card.desc}
                    </p>
                    <button className="border border-red-700 text-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </section>
    </div>
  );
};

export default HomeHero;
