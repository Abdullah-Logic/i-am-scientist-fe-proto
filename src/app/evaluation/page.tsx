import React from "react";
import { evaluationData } from "../constant/data";
import Image from "next/image";
import RemoteCompetition from "../components/remotecompetition";
import Container from "../components/container/container";

const AwardPage = () => {
  return (
    <Container>
      {/* Hero section start */}

      <div
        className="relative z-40 h-[170px] md:h-[300px] 2xl:h-[350px]  bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: "url('/about-us/Hero-BG.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center text-[#FFFFFF] mb-8 w-full md:w-10/12 px-3">
          <p className="font-misri mt-6  md:mt-3 text-2xl md:text-4xl font-bold">
            Evaluation
          </p>
          <p className="text-md md:text-2xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
            Track your progress and unlock new opportunities for growth
          </p>
        </div>
      </div>
      {/* Hero section end */}

      <div className="bg-[#280253]  relative text-white py-2 md:py-8 2xl:py-12 flex flex-col items-center justify-center px-3 md:px-0">
        <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
        <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute -top-12 left-0 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0  mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2  right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>

        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>

        {/* Evaluation Criteria start */}

        <div className="bg-[#660885B2] rounded-lg w-full md:w-[95%]   xl:w-[80%] p-2 md:px-6 2xl:px-10 py-12 2xl:py-16 2xl:w-[75%] z-40 mt-6  2xl:mt-8 mx-auto">
          <div className="flex flex-col items-center text-[#FFFFFF]  w-full md:w-10/12 px-3 mx-auto">
            <p className="font-misri mt-3 text-2xl md:text-4xl font-bold ">
              I am Scientist
            </p>
            <p className=" text-center text-3xl md:text-5xl font-bold font-misri mt-3">
              Evaluation Criteria
            </p>
            <div className="w-28 h-1 border-t-2xl:border-t-5  rounded-full mt-2"></div>
          </div>

          <div className="grid gap-4 px-2 md:px-4 mt-8">
            <div className="flex flex-col md:flex-row justify-center lg:justify-center gap-4">
              {evaluationData.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className=" md:w-80 
                  lg:w-72 xl:w-[325px] 2xl:w-[460px]   rounded-lg p-6 text-white border-2 2xl:border-4 shadow-lg "
                >
                  <h3 className="text-base font-bold font-popins mb-4 text-center">
                    {item.title}
                  </h3>
                  <ol className="space-y-2 list-decimal pl-3">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-xs font-normal 2xl:text-sm font-popins"
                      >
                        {desc}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full xl:w-[100%]  mx-auto">
              {evaluationData.slice(2).map((item) => (
                <div
                  key={item.id}
                  className=" border-2 2xl:border-4 rounded-lg p-6 text-white  shadow-lg "
                >
                  <h3 className="text-base font-bold font-popins mb-4 text-center">
                    {item.title}
                  </h3>
                  <ol className="space-y-2 list-decimal pl-3">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-xs font-normal 2xl:text-sm font-popins"
                      >
                        {desc}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evaluation Criteria end */}
      </div>

      {/* Remote competition section */}

      <RemoteCompetition />
    </Container>
  );
};

export default AwardPage;
