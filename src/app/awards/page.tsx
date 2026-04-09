import React from "react";
import { awards, criteria } from "../constant/data";
import Image from "next/image";
import RemoteCompetition from "../components/remotecompetition";
import Container from "../components/container/container";

const AwardPage = () => {
  return (
    <Container>
      {/* Hero section start */}

      <div
        className="relative z-50 h-[170px] md:h-[300px] 2xl:h-[350px]  bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: "url('/about-us/Hero-BG.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center text-[#FFFFFF] mb-8 w-full md:w-10/12 px-3">
          <p className="font-misri mt-6  md:mt-3 text-3xl md:text-5xl font-bold">
            Awards
          </p>
          <p className="text-xl md:text-3xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
            Explore our awards, celebrating top AI projects for creativity and
            technical excellence
          </p>
        </div>
      </div>
      {/* Hero section end */}

      <div className="bg-[#280253]  relative text-white py-2 md:py-12 2xl:py-24 flex flex-col items-center justify-center px-3 md:px-0">
        <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
        <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute -top-12 left-0 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0  mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2  right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>

        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
        {/* Award section start */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[95%]   xl:w-[80%] 2xl:w-[75%] mx-auto z-50">
          {awards.map((award) => (
            <div
              key={award.id}
              className={`z-50 rounded-lg p-6 px-10 text-center ${
                award.bgColor
              } text-white shadow-lg transition-transform transform hover:shadow-xl ${
                award.id === 2
                  ? "order-1 md:order-2 border-t-2 border-b-2 2xl:border-t-4 2xl:border-b-4"
                  : award.id === 1
                    ? "order-2 md:order-1 border-2 my-3 2xl:border-4"
                    : "order-3 md:order-3 border-2 my-3 2xl:border-4"
              }`}
            >
              <div className="flex justify-center items-center mb-2 2xl:mb-4">
                <Image
                  src="/award/award.png"
                  alt="Award"
                  width={80}
                  height={70}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-16 lg:h-14 2xl:w-24 2xl:h-20"
                />
              </div>
              <h3 className="text-2xl font-popins 2xl:text-3xl font-bold mb-2 2xl:mb-4">
                {award.title}
              </h3>
              <ul className="text-left space-y-2 2xl:space-y-4">
                {award.description.map((desc, index) => (
                  <li
                    key={index}
                    className="text-sm 2xl:text-base font-popins font-normal list-disc pl-4 text-justify"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Award section end */}

        {/* Judging Criteria start */}

        <div className="bg-[#660885B2] rounded-lg w-full md:w-[95%] xl:w-[80%] p-2 md:p-6 2xl:w-[75%] z-50 mt-6 md:mt-16 2xl:mt-20 mx-auto">
          <div className="flex flex-col items-center text-[#FFFFFF]  w-full md:w-10/12 px-3 mx-auto">
            <p className="font-misri mt-3 text-2xl md:text-4xl font-bold ">
              I am Scientist
            </p>
            <p className=" text-center text-3xl md:text-5xl font-bold font-misri mt-3">
              Judging Criteria
            </p>
            <div className="w-28 h-1 border-t-2 rounded-full mt-2"></div>
          </div>

          <div className="grid gap-4 px-2 md:px-4 mt-8">
            <div className="flex flex-col md:flex-row justify-center lg:justify-center gap-4">
              {criteria.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className=" md:w-80 
                  lg:w-72 xl:w-[325px] 2xl:w-[460px] rounded-lg p-6 text-white border-2 2xl:border-4 shadow-lg "
                >
                  <h3 className="text-base font-bold font-popins mb-4 text-center">
                    {item.title}
                  </h3>
                  <ul className="space-y-2 list-disc pl-4">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-xs font-normal 2xl:text-sm font-popins"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-fit">
              {criteria.slice(2).map((item) => (
                <div
                  key={item.id}
                  className=" md:w-80 
                  lg:w-72 xl:w-[325px] 2xl:w-[460px] border-2 2xl:border-4 rounded-lg p-6 text-white shadow-lg"
                >
                  <h3 className="text-base font-bold font-popins mb-4 text-center">
                    {item.title}
                  </h3>
                  <ul className="space-y-2 list-disc pl-4">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-xs font-normal 2xl:text-sm font-popins"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Judging Criteria end */}
      </div>

      {/* Remote competition section */}

      <RemoteCompetition />
    </Container>
  );
};

export default AwardPage;
