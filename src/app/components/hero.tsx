"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { heroData } from "../constant/data";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      className="relative w-full h-[380px] md:h-[550px] 2xl:h-[650px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero/BG.webp')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {heroData.map((ele, index) => (
          <div
            key={ele.id}
            className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transition-transform duration-700 ease-in-out ${
              index === currentSlide ? "animate-slide-in" : "animate-slide-out"
            }`}
          >
            <div className="w-full md:w-[80%] mx-auto flex gap-6 flex-col md:flex-row">
              <div className="md:w-[70%] lg:w-[45%] w-full h-[320px] md:h-[480px] 2xl:h-[630px] px-3 md:px-12 flex flex-col justify-center space-y-4">
                <div className="w-[40%] md:w-[70%] lg:w-full">
                  <Image
                    src={ele.bannerTitle}
                    alt="image"
                    width={600}
                    height={300}
                  />
                </div>

                <h2 className="md:ml-2 w-full 2xl:w-[90%] text-base 2xl:text-xl text-white font-semibold font-inter text-justify">
                  {ele.text}
                </h2>
                <div className="flex justify-between items-center">
                  <Link href="/about">
                    <button
                      className={`border md:ml-2 w-fit lg:w-[250px] font-inter border-gray-200 text-base md:text-xl font-bold p-1 px-4 md:px-6 2xl:text-xl h-[50px] 2xl:h-[70px] mt-2 2xl:mt-0 transform transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-2xl rounded-bl-2xl bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer text-nowrap`}
                    >
                      Explore Now
                    </button>
                  </Link>
                  <h2 className="font-inter text-sm 2xl:text-lg mx-4 font-semibold text-white">
                    <span className="font-inter text-2xl md:text-5xl text-[#53b9e3] font-bold">
                      5000+
                    </span>
                    <br />
                    Trusted Schools / Academies
                  </h2>
                </div>
              </div>

              <div className="w-full md:w-1/2 mx-auto hidden md:flex justify-center items-center h-[480px] 2xl:h-[600px]">
                <Image src={ele.heroBg} height={600} width={700} alt="image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
