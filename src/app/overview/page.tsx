import Image from "next/image";
import React from "react";
import { overviewData } from "./../constant/data";
import RemoteCompetition from "./../components/remotecompetition";
import Link from "next/link";
import Container from "../components/container/container";

const OverviewPage = () => {
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
            Overview
          </p>
          <p className="text-2xl md:text-3xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
            Show your creativity through the AI Contest and earn incredible
            prizes
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
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tl-full rounded-bl-full  opacity-80 z-10"></div>

        {/* bottom section start */}
        <div className="w-full md:w-[95%]   xl:w-[80%]   2xl:w-[75%] z-50 my-6  2xl:my-8 mx-auto">
          <div className="flex gap-6 flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <p className="text-justify  text-gray-200 font-popins  leading-tight text-base 2xl:text-xl font-normal">
                The I am Scientist is an exciting platform for young learners to
                explore the world of Artificial Intelligence. Whether you're new
                to AI or already love technology, it gives you the chance to
                solve cool challenges, show off your skills and win amazing
                prizes. Open to everyone, you can join on your own or as part of
                a school team. It's a great way to learn, be creative and dive
                into the future of AI while having fun.
              </p>
              <div className="flex justify-center md:justify-start items-center mt-10">
                <Link href="/auth/signup">
                  <div className="flex justify-center">
                    <button className="font-semibold w-fit text-base md:text-xl font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2 md:py-3  px-2 md:px-6 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90 ">
                      {" "}
                      Register Now
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center ">
              <Image
                src="/competitionOverview/competition.webp"
                alt="competative Image"
                width={400}
                height={200}
                className="object-contain h-auto md:h-80 2xl:h-96 w-full "
              />
            </div>
          </div>
        </div>
        {/* bottom section  end*/}

        {/* Contest Structure section start */}
        <div className="flex flex-col items-center text-[#FFFFFF] w-full py-5  px-3 md:mt-16 md:mb-8">
          <p className="font-misri mt-3 text-2xl md:text-4xl font-bold ">
            Stages
          </p>
          <p className=" text-center text-3xl md:text-5xl font-bold font-misri mt-3">
            Contest Structure
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[95%] gap-4  xl:w-[80%] 2xl:w-[75%] mx-auto z-50">
          {overviewData.map((data) => (
            <div
              key={data.id}
              className={`z-50 border-2 rounded-lg p-6 text-center text-white shadow-lg transition-transform transform hover:shadow-xl`}
            >
              <div className="flex justify-center items-center mb-2 2xl:mb-4">
                <Image src={data.img} alt="Award" width={40} height={40} />
              </div>
              <h3 className="text-xl font-popins 2xl:text-xl font-bold mb-2 2xl:mb-4">
                {data.title}
              </h3>
              <p className="text-justify text-gray-200 font-popins   text-base 2xl:text-lg font-normal leading-6 2xl:leading-9">
                {data.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contest Structure section end */}
      </div>
      <RemoteCompetition />
    </Container>
  );
};

export default OverviewPage;
