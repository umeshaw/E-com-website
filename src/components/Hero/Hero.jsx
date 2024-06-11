import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/macbook.png";
import Image3 from "../../assets/category/vr.png";
import Button from "../shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title1: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title1: "Laptop",
    title2: "Mac Book",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title1: "V R",
    title2: "VR 3D",
  },
];

const Hero = ({handleOrderPopup}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container pt-1">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="w-full">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid items-center grid-cols-1 pl-20 sm:grid-cols-2">
                  {/* Text content section */}
                  <div className="relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:pl-3 sm:pt-0 sm:text-left sm:order-1">
                    <h1 data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-2xl font-bold sm:text-2xl lg:text-2xl">
                      {data.subtitle}
                    </h1>
                    <h1 data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true" className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                      {data.title1}
                    </h1>
                    <h1 data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white sm:text-[80px] md:text-[100px]
                                xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-once="true">
                      <Button text="Shop By Category" bgColor="bg-primary" textColor="text-white" handler={handleOrderPopup}/>
                    </div>
                  </div>
                  
                  {/* Image section */}
                  
                  <div
                   className="order-1 r sm:order-2">
                    <div data-aos="zoom-in"
                  className="relative z-10"
                    data-aos-once="true">
                    <img
                      src={data.img}
                      alt={data.title2}
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain 
                                    mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 "
                    />
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
