import Image from "next/image";
import React from "react";
import Link from "next/link";
import { competitionCategory } from "../constant/data";
import Container from "../components/container/container";

const CompetionPage = () => {
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
            Competition
          </p>
          <p className="text-xl md:text-3xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
            Show your skills and compete for success in our exciting challenge
          </p>
        </div>
      </div>
      {/* Hero section end */}

      <div className="bg-[#280253]  relative text-white py-2 md:py-12 2xl:py-16 flex flex-col items-center justify-center px-3 md:px-0">
        <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
        <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute -top-12 left-0 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60 z-10"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0  mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2  right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>

        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>

        {/* bottom section start */}
        <div className="w-full md:w-[95%]   xl:w-[80%]   2xl:w-[75%] z-50 my-6  2xl:my-8 mx-auto">
          {/* competion Overview section start */}
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="w-full md:w-1/2 space-y-4 mt-3">
              <h2 className="text-md md:text-2xl font-semibold font-misri w-full leading-relaxed  text-center md:text-left">
                <span className="text-[#3096FC]">Competition</span> Overview
              </h2>
              <p className="font-popins font-normal text-sm 2xl:text-lg text-justify">
                Our AI competition encourages students to showcase their
                creativity and technical skills by solving real-world problems
                using AI. Participants will be judged on innovation,
                practicality and technical accuracy across various grade levels.
                The contest fosters learning, problem-solving and collaboration.
                It's an exciting opportunity to explore AI and make a real
                impact.
              </p>
              <Link href="/student/register-as-student">
                <div className="flex justify-center md:justify-start items-center mt-4">
                  <button className="font-semibold shadow-xl text-sm font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2   px-2 md:px-6 text-white rounded-md  transform transition-all duration-500 ease-in-out hover:opacity-90 w-fit mt-3">
                    {" "}
                    Register Now!
                  </button>
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center ">
              <Image
                src="/competitionOverview/competition.webp"
                alt="competative Image"
                layout="re"
                width={400}
                height={200}
                className="object-contain h-auto md:h-80 2xl:h-96 w-full "
              />
            </div>
          </div>
          {/* competion Overview section start */}

          {/* Category by Grade Level section start */}
          <div className="flex flex-col items-center text-[#FFFFFF] w-full  px-3 mt-16 mb-8">
            <p className="font-misri mt-3 text-2xl md:text-4xl font-bold ">
              I am Scientist
            </p>
            <p className=" text-center text-3xl md:text-5xl font-bold font-misri mt-3">
              Categories by Grade Level
            </p>
          </div>
          {competitionCategory.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row justify-between items-center py-6 px-8 rounded-lg border border-white shadow-lg text-white mb-4 ${
                item.id % 2 !== 0 ? "bg-[#5D3794]" : ""
              }`}
            >
              {item.id % 2 === 0 && (
                <div className="mt-4 md:mt-0 md:mr-4">
                  <Image
                    src="/competitionOverview/test.webp"
                    alt="Illustrative image"
                    width={150}
                    height={150}
                    className="object-contain w-full h-auto"
                  />
                </div>
              )}

              <div
                className={`flex-1 font-popins ${
                  item.id % 2 === 0 ? "md:ml-4" : ""
                }`}
              >
                <h2 className="text-base 2xl:text-lg font-bold mb-4">
                  {item.title}
                </h2>
                <ul className="list-decimal list-inside space-y-2">
                  {item.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-xs font-normal md:text-sm 2xl:text-base"
                    >
                      <span className="font-bold">{item.split(":")[0]}:</span>{" "}
                      {item.split(":")[1]}
                    </li>
                  ))}
                </ul>
              </div>

              {item.id % 2 !== 0 && (
                <div className="mt-4 md:mt-0 md:ml-4">
                  <Image
                    src="/competitionOverview/test.webp"
                    alt="Illustrative image"
                    width={150}
                    height={150}
                    className="object-contain w-full h-auto"
                  />
                </div>
              )}
              {item.id % 2 !== 0 && (
                <div className="mt-4 md:mt-0 md:ml-4"></div>
              )}
            </div>
          ))}

          {/* Category by Grade Level section end */}
        </div>
        {/* bottom section */}
      </div>
    </Container>
  );
};

export default CompetionPage;
