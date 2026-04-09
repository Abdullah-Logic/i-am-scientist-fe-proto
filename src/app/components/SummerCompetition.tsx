import React from "react";
import gold from "../../../public/award/Gold-Medal.png";
import silver from "../../../public/award/Silver-Medal.png";
import bronze from "../../../public/award/Bronze-Medal.png";

import Image from "next/image";
const Competition = () => {
  return (
    <div
className="text-white py-6 md:py-16 bg-[#0b2941]"    >
      {/* Head section start */}
      <div className="flex flex-col items-center text-white">
        <p className="font-inter mt-3 text-2xl md:text-4xl font-bold ">
          Latest Prizes
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-inter mt-3 text-center">
          Find Out the Latest Competition Prizes
        </h2>
        <div className="w-28 h-1 rounded-lg bg-white mt-4"></div>
      </div>
      {/* head section end */}
      <div className="w-full md:w-[80%] 2xl:w-[65%] mx-auto text-center px-6 mt-12">
        {/* Main Prizes */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-8 ">
          {/* Runners-Up Left */}
          <div className="w-full md:w-full flex flex-col justify-center items-center md:mt-8 order-2 md:order-1 text-white">
            <div className="flex justify-center gap-2 items-center mb-4 2xl:mb-8">
              {/* <CiMedal size={35} />
               */}
              <Image width={100} height={100} src={silver} alt="images" />

              <h3 className="text-2xl md:text-3xl font-medium font-inter">
                Silver
              </h3>
            </div>
            <div className="bg-[rgba(200,14,189,1)] text-white p-6 rounded-2xl shadow-lg w-full flex flex-col justify-between">
              <p className="font-inter flex items-center justify-center text-base md:text-xl font-medium h-auto ">
                Honored for excellent effort and creative skills
                {/* 75% to
                study their chosen subject with Immerse.
               */}
              </p>
            </div>
          </div>

          {/* 1st Place (Center and Larger Height, increased from top) */}
          <div className="w-full md:w-full  flex flex-col justify-center items-center order-1 md:order-2 ">
            <div className="flex justify-center gap-2 items-center mb-4 2xl:mb-8">
              <Image width={100} height={100} src={gold} alt="images" />

              <h3 className="text-2xl md:text-3xl font-medium font-inter text-white">
                Gold
              </h3>
            </div>
            <div className="bg-[rgba(200,14,189,1)] flex justify-center items-center border border-[rgba(255,255,255,1)] border-opacity-70 text-base md:text-xl p-6 rounded-2xl shadow-lg w-full h-auto flex-col md:mb-12 md:py-8 ">
              <p className=" font-inter  font-medium">
                Awarded for outstanding performance and remarkable innovation
               
              </p>
            </div>
          </div>

          {/* Runners-Up Right */}
          <div className="w-full md:w-full h-auto flex flex-col justify-center items-center md:mt-8 order-3">
            <div className="flex justify-center gap-2 items-center mb-4 2xl:mb-8">
              <Image width={100} height={100} src={bronze} alt="images" />

              <h3 className="text-2xl md:text-3xl font-medium font-inter text-white">
                Bronze
              </h3>
            </div>
            <div className="bg-[rgba(200,14,189,1)] h-auto p-6 rounded-2xl shadow-lg w-full   flex flex-col justify-center items-center">
              <p className="font-inter flex justify-center items-center text-base md:text-xl font-medium h-auto ">
                Honored for hard work and great progress
              </p>
            </div>
          </div>
        </div>

        {/* Merit Awards */}
        <div className="bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] p-8 rounded-2xl shadow-lg mt-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-inter ">
            Merit Awards
          </h2>
          <p className="font-inter font-bold text-base md:text-xl">
            The top 20 students of the contest will receive a fully sponsored,
            one-month online crash course on AI , taught by industry expert
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default Competition;
