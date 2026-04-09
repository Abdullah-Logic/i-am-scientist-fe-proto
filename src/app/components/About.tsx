"use client";
import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";

import AboutFAQ from "./AboutFaq";
import { AboutFaq } from "../constant/data";

const About = () => {
  return (
    <>
      <div
        className="relative h-auto md:h-[300px]  2xl:h-[320px] p-4 md:p-6 bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: "url('/about-us/Hero-BG.webp')",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center text-[#FFFFFF] mb-8 w-full md:w-10/12 2xl:w-[60%] mx-auto">
          <p className="font-misri mt-3 text-3xl md:text-5xl font-bold">
            About Us
          </p>

          <p className="text-2xl md:text-3xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
            Develop the skills to succeed in the world of technology
          </p>
        </div>
      </div>

      {/*  second section start */}
      <div className="z-[-1] p-8 md:p-0 bg-[#280253] relative w-full h-auto ">
        {/* Top images */}
        <div className=" hidden z-[-1]  lg:flex justify-between items-center w-full flex-wrap absolute top-0 left-0 right-0">
          <Image
            src="/about-us/Ellipse 4.webp"
            width={323}
            height={323}
            alt="images"
            className=" z-0 md:relative md:-top-36"
          />

          <Image
            src="/about-us/Ellipse 8.webp"
            width={323}
            height={323}
            alt="images"
            className=" z-0 md:relative md:-top-52"
          />

          <Image
            src="/about-us/Ellipse 5.webp"
            width={323}
            height={323}
            alt="images"
            className=" z-0 md:relative md:-top-36"
          />
        </div>

        {/* Center content */}
        <div className="z-50 mx-auto md:p-12 lg:grid lg:grid-cols-2 grid grid-cols-1 gap-8 md:max-w-[1500px] h-auto w-full">
          <div className=" md:flex justify-center md:flex-row flex flex-col items-center gap-3 h-auto">
            <div className="flex flex-col gap-4">
              <Image
                src="/about-us/01.jpg.webp"
                width={270}
                height={410}
                alt="images"
                className="object-cover"
              />

              <button
                style={{ borderBottomLeftRadius: "5px" }}
                className="max-w-[300px] rounded-[37px] flex gap-3 p-3 justify-between border-r- items-center w-full md:h-26 h-auto bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] shadow-lg"
              >
                <Image
                  src="/about-us/Background.webp"
                  width={90}
                  height={90}
                  alt="images"
                  className="object-cover"
                />
                <h2 className="text-white font-popins text-base font-bold">
                  30 year of quality services
                </h2>
              </button>
            </div>
            <div>
              <Image
                src="/about-us/Container (13).webp"
                width={309}
                height={349}
                alt="images"
                className=""
              />
            </div>
          </div>

          <div className=" flex flex-col items-start gap-6 xl:gap-24 lg:relative lg:top-20 h-auto w-full">
            <div>
              <h2 className="text-white text-center text-3xl md:text-5xl font-bold font-misri mt-3  relative">
                Join the future of{" "}
                <span className="text-[#3096FC] relative inline-block border-b-2 border-[#FFFF]">
                  inspires
                </span>{" "}
                today!
              </h2>

              <p className="font-misri mt-3 text-base 2xl:text-xl font-bold text-[#FFFFFF] text-justify">
                I am Scientist is a platform that helps young learners to
                explore and grow in the exciting world of technology. We believe
                every student has the potential to be a scientist,
                problem-solver and leader. Our platform is open to students from
                schools, colleges and individuals across Pakistan.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-6 w-full">
                {/* Contests Section */}
                <div className="flex items-center gap-6">
                  <Image
                    src="/about-us/Background+Shadow.webp"
                    height={70}
                    width={70}
                    alt="images"
                    className=""
                  />

                  <div className="flex-grow">
                    <h2 className="font-bold font-popins text-base 2xl:text-xl text-white">
                      Contests
                    </h2>
                    <p className="font-normal font-popins text-base 2xl:text-xl text-white">
                      Challenges that spark curiosity and test skills
                    </p>
                  </div>
                </div>
                {/* Courses Section */}
                <div className="flex items-center gap-6">
                  <Image
                    src="/about-us/image.svg"
                    width={70}
                    height={70}
                    alt="images"
                    className=""
                  />
                  <div className="flex-grow">
                    <h2 className="font-bold font-popins text-base 2xl:text-xl text-white">
                      Courses
                    </h2>
                    <p className="font-normal font-popins  text-base 2xl:text-xl text-white">
                      Interactive courses that teach valuable tech skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom images */}
        <div className="pt-12  lg:pt-10">
          <div className="z-[-1] hidden  absolute bottom-0 flex-wrap  right-0 left-0  lg:flex justify-between">
            <Image
              src="/about-us/Ellipse 6.webp"
              width={323}
              height={323}
              alt="images"
              className=" z-0 relative top-[100px]"
            />

            <Image
              src="/about-us/Ellipse 7.webp"
              width={323}
              height={323}
              alt="images"
              className=" z-0 relative top-[100px]"
            />
          </div>
        </div>
      </div>
      {/*section 3 code start here  */}
      <div
        className="p-8  md:p-0 relative h-auto md:h-full bg-cover bg-center flex flex-col   md:flex-row justify-center items-center font-popins"
        style={{
          backgroundImage:
            "url('/about-us/ffedf3031bd598592621051d28156250.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#5D3794] opacity-90"></div>
        <div className="relative xl:grid xl:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-1 text-white gap-8 md:gap-16 py-10">
          <div className="text-center relative">
            <div className="relative w-[130px] h-[100px] mb-6">
              <div
                className="absolute inset-0"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "35px",
                  borderBottomRightRadius: "70px",
                  borderBottomLeftRadius: "65px",
                  border: "3px solid white",
                  marginTop: "3px",
                  transform: "translateX(10px)", // Adjust the translate value as needed
                  backgroundColor: "", // Lighter pink background color
                  zIndex: 0,
                }}
              ></div>
              <div
                className="absolute inset-0 flex justify-center items-center"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "35px",
                  borderBottomRightRadius: "70px",
                  borderBottomLeftRadius: "65px",
                  backgroundColor: "#FF00EA", // Pink color
                  zIndex: 1,
                }}
              >
                <img
                  src="/about-us/Group.webp"
                  alt="Icon4"
                  className="h-12 w-12"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">300</h2>
            <p className="font-semibold text-base md:text-xl ">
              + Total Courses
            </p>
          </div>

          <div className="text-center relative">
            <div className="relative w-[130px] h-[100px] mb-6">
              <div
                className="absolute inset-0"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "35px",
                  borderBottomRightRadius: "70px",
                  borderBottomLeftRadius: "65px",
                  border: "3px solid white",
                  marginTop: "3px",
                  transform: "translateX(10px)", // Adjust the translate value as needed
                  backgroundColor: "", // Lighter pink background color
                  zIndex: 0,
                }}
              ></div>
              <div
                className="absolute inset-0 flex justify-center items-center"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "35px",
                  borderBottomRightRadius: "70px",
                  borderBottomLeftRadius: "65px",
                  backgroundColor: "#FF00EA", // Pink color
                  zIndex: 1,
                }}
              >
                <img
                  src="/about-us/Group (1).webp"
                  alt="Icon4"
                  className="h-12 w-12"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">1140</h2>
            <p className="font-semibold text-base md:text-xl ">
              + Our Students
            </p>
          </div>

          <div className="text-center relative">
            <div className="relative w-[130px] h-[100px] mb-6">
              <div
                className="absolute inset-0"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "35px",
                  borderBottomRightRadius: "70px",
                  borderBottomLeftRadius: "65px",
                  border: "3px solid white",
                  marginTop: "3px",
                  transform: "translateX(10px)", // Adjust the translate value as needed
                  backgroundColor: "", // Lighter pink background color
                  zIndex: 0,
                }}
              ></div>
              <div
                className="absolute inset-0 flex justify-center items-center"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "35px",
                  borderBottomRightRadius: "70px",
                  borderBottomLeftRadius: "65px",
                  backgroundColor: "#FF00EA", // Pink color
                  zIndex: 1,
                }}
              >
                <img
                  src="/about-us/Group (1).webp"
                  alt="Icon4"
                  className="h-12 w-12"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">450</h2>
            <p className="font-semibold text-base md:text-xl ">
              + Skilled Lectures
            </p>
          </div>

          <div className="text-center relative">
            <div className="relative w-[130px] h-[100px] mb-6">
              <div
                className="absolute inset-0"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "35px",
                  borderBottomRightRadius: "70px",
                  borderBottomLeftRadius: "65px",
                  border: "3px solid white",
                  marginTop: "3px",
                  transform: "translateX(10px)", // Adjust the translate value as needed
                  backgroundColor: "", // Lighter pink background color
                  zIndex: 0,
                }}
              ></div>
              <div
                className="absolute inset-0 flex justify-center items-center"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "35px",
                  borderBottomRightRadius: "70px",
                  borderBottomLeftRadius: "65px",
                  backgroundColor: "#FF00EA", // Pink color
                  zIndex: 1,
                }}
              >
                <img
                  src="/about-us/award.webp"
                  alt="Icon4"
                  className="h-12 w-12"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">18</h2>
            <p className="font-semibold text-base md:text-xl ">+ Win Awards</p>
          </div>
        </div>
      </div>
      {/* 4th section start  */}
      <div className="p-8 md:p-0 bg-[#280253] relative w-full  h-auto ">
        <div className=" hidden  h-auto lg:flex justify-between items-center w-full flex-wrap absolute top-0 left-0 right-0">
          <Image
            src="/about-us/Ellipse 4.webp"
            width={323}
            height={323}
            alt="images"
            className=" md:relative md:-top-36"
          />
          <Image
            src="/about-us/Ellipse 8.webp"
            width={323}
            height={323}
            alt="images"
            className=" md:relative md:-top-52"
          />
          <Image
            src="/about-us/Ellipse 5.webp"
            width={323}
            height={323}
            alt="images"
            className=" md:relative md:-top-36"
          />
        </div>
        <div>
          <div className="md:p-12 lg:p-0 lg:grid lg:grid-cols-2 gap-12 md:relative lg:top-36 grid grid-cols-1  mx-auto max-w-[1200px] 2xl:max-w-[1400px] w-full h-auto lg:h-[700px]">
            <div className="">
              <Image
                src="/about-us/Group 22.webp"
                width={610}
                height={504}
                alt="images"
              />
            </div>
            {/* right side code start */}
            <div className=" flex flex-col gap-8 h-auto p-8">
              <div>
                <h2 className="font-misri mt-3 text-3xl md:text-5xl font-bold text-white">
                  Our Mission
                </h2>
                <div className="w-28 h-1 rounded-lg bg-white mt-4 ml-2"></div>
              </div>
              <div>
                <p className="text-justify  text-gray-200 font-popins   text-base 2xl:text-xl font-normal">
                  Our mission is to help young learners succeed in the world of
                  technology by providing the tools and opportunities they need.
                  We are committed to helping young minds develop skills in
                  areas like AI, Machine Learning and Deep Learning.
                </p>
              </div>
              <div className="flex items-center  md:gap-4 gap-3">
                <div>
                  <FaCircle className="text-[#FF00EA] w-6" />
                </div>
                <div>
                  <p className=" w-full font-popins  font-normal  text-base 2xl:text-xl text-start text-white">
                    Test your skills with exciting contests
                  </p>
                </div>
              </div>
              <div className="flex items-center md:gap-4 gap-3  ">
                <div>
                  <FaCircle className="text-[#FF00EA] w-6" />
                </div>
                <div>
                  <p className="w-full font-popins font-normal  text-base 2xl:text-xl text-white">
                    Build confidence to succeed and lead in the digital world
                  </p>
                </div>
              </div>{" "}
              <div className="flex items-center md:gap-4 gap-3 ">
                <div>
                  <FaCircle className="text-[#FF00EA] w-6" />
                </div>
                <div>
                  <p className="w-full font-popins font-normal  text-base 2xl:text-xl  text-white">
                    Enjoy hands-on projects that make learning practical and fun
                  </p>
                </div>
              </div>
            </div>

            {/* right side code end */}
          </div>
        </div>
      </div>
      {/* 5th section */}
      <div className="p-12 md:p-6 lg:p-0 bg-[#280253] relative w-full  h-auto ">
        <div className=" hidden  h-auto lg:flex justify-between items-center w-full  absolute top-0 left-0 right-0">
          <Image
            src="/about-us/Ellipse 12.webp"
            width={323}
            height={323}
            alt="images"
            className=" md:relative md:-top-36"
          />

          <Image
            src="/about-us/Ellipse 13.webp"
            width={323}
            height={323}
            alt="images"
            className=" md:relative md:-top-36"
          />
        </div>
        <div>
          <div className="md:p-14  lg:grid lg:grid-cols-2 gap-12 lg:relative lg:top-18 grid grid-cols-1 mx-auto max-w-[1200px] md:max-w-[1500px] w-full h-auto">
            <div className=" flex flex-col gap-8  h-auto">
              <div>
                <h2 className=" font-misri mt-3 text-3xl md:text-5xl font-bold text-white">
                  Our Vision
                </h2>
                <div className=" w-28 h-1 rounded-lg bg-white mt-4 ml-2"></div>
              </div>
              <div>
                <p className="text-justify text-gray-200 font-popins  font-normal  text-base 2xl:text-xl">
                  Our vision is to inspire young minds to become leaders and
                  innovators in technology and science. By helping young
                  learners explore new ideas and develop valuable skills, we
                  encourage them to make a positive impact on the world.
                </p>
              </div>
              <div
                className="flex items-center md:gap-4 gap-3
                "
              >
                <div>
                  <FaCircle className="text-[#FF00EA] w-6" />
                </div>
                <div>
                  <p className="w-full font-popins font-normal text-base 2xl:text-lg   text-white">
                    Encourage critical thinking and innovative ideas
                  </p>
                </div>
              </div>
              <div className="flex items-center md:gap-4 gap-3 ">
                <div>
                  <FaCircle className="text-[#FF00EA] w-6" />
                </div>
                <div>
                  <p className="w-full font-popins font-normal  text-base 2xl:text-xl text-white">
                    Provide opportunities to make a difference in their
                    communities
                  </p>
                </div>
              </div>{" "}
              <div className="flex items-center gap-4 ">
                <div>
                  <FaCircle className="text-[#FF00EA] w-6" />
                </div>
                <div>
                  <p className="w-full font-popins font-normal  text-base 2xl:text-xl   text-white">
                    Support growth and learning in a world of technology
                  </p>
                </div>
              </div>
            </div>

            {/* right side code start */}
            <div className="">
              <Image
                src="/about-us/Group 23.webp"
                width={610}
                height={504}
                alt="images"
              />
            </div>

            {/* right side code end */}
          </div>
        </div>
      </div>
      <AboutFAQ AboutFaq={AboutFaq} />
    </>
  );
};

export default About;
