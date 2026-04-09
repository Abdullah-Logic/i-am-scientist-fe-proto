import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contestt = () => {
  const arr = [
    {
      id: 1,
      title: "OVERVIEW",
      para: "Students will engage in competitions and assessments designed to enhance their cognitive skills in tech areas",
      link: "/overview",
    },
    {
      id: 2,
      title: "COURSE OUTLINE",
      para: "Courses are designed to build skills in AI technologies through interactive lessons, quizzes and hands-on projects",
      link: "/outline",
    },
    {
      id: 4,
      title: "AWARDS",
      para: "Top performers will have the chance to win prizes that celebrate their achievements in technology and innovation",
      link: "/awards",
    },
  ];

  const arr2 = [
    {
      id: 6,
      title: "COMPETITIONS",
      para: "A combination of AI-powered assessments and real-world tasks will be used to evaluate participants",
      link: "/competition",
    },
    {
      id: 8,
      title: "EVALUATION",
      para: "A variety of AI-focused contests will give students the opportunity to grow their tech skills and win exciting rewards",
      link: "/evaluation",
    },
  ];

  return (
    <div className="max-xl:min-h-screen">
      {/* Hero Section */}
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
          <p className="font-misri mt-10 md:mt-3 text-3xl md:text-5xl font-bold">
            AI Contest
          </p>
          <p className="text-2xl md:text-3xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
            Get ready for the challenge and showcase your incredible AI talent
          </p>
        </div>
      </div>
      {/* Second Section */}

      <div className="bg-[#280253] relative min-h-[500px] h-auto py-8">
        <div className="hidden lg:flex justify-between items-center w-full absolute top-0 left-0 right-0">
          <Image
            src="/about-us/Ellipse 4.webp"
            width={323}
            height={323}
            alt="images"
            className="z-0 md:relative md:-top-36"
          />
          <Image
            src="/about-us/Ellipse 8.webp"
            width={323}
            height={323}
            alt="images"
            className="z-0 md:relative md:-top-52"
          />
          <Image
            src="/about-us/Ellipse 5.webp"
            width={323}
            height={323}
            alt="images"
            className="z-0 md:relative md:-top-36"
          />
        </div>

        <div className="mx-auto flex justify-center items-center md:p-12">
          {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-y-10 gap-x-6 p-4 md:p-0 w-full md:max-w-[1080px]"> */}

          <div className="mx-auto flex flex-col justify-center items-center ">
            <div className=" gap-y-6 md:gap-y-3 gap-x-3 grid md:grid-cols-3  grid-cols-1  p-4 md:p-0 w-full ">
              {arr.map((val, i) => {
                return (
                  <div
                    key={val.id}
                    className={`mx-auto z-10 bg-[#280253] border shadow-3xl border-r-4 border-b-4 rounded-md flex justify-center items-center relative max-w-[385px] p-8 min-h-[226px] w-full h-auto ${
                      val.id === 7 ? "xl:col-span-3 " : ""
                    }`}
                  >
                    <Image
                      src="/about-us/Background (3).png"
                      width={50}
                      height={75}
                      alt="images"
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
                    />
                    <div className="flex flex-col justify-center items-center relative gap-3 z-10">
                      <h2 className="text-center font-popins text-lg md:text-[22px] text-white">
                        {val.title}
                      </h2>
                      <p className="md:text-[13px] text-center font-popins font-normal text-md text-gray-200">
                        {val.para}
                      </p>

                      <div className="-mt-3">
                        <Link href={val.link} target="_blank">
                          <button className="px-4 py-2 text-white  font-normal text-md rounded-md font-popins transition duration-200 text-base bg-gradient-to-r from-blue-500 to-pink-500 md:py-3 md:px-6 md:mt-8 transform ease-in-out hover:opacity-90">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" gap-y-6 md:gap-3 grid md:grid-cols-2 grid-cols-1 p-4 md:p-0 w-full md:w-[70%] -mt-2 md:mt-10 max-md:mb-10">
              {arr2.map((val, i) => {
                return (
                  <div
                    key={val.id}
                    className={`mx-auto z-10 bg-[#280253] border shadow-3xl border-r-4 border-b-4 rounded-md flex justify-center items-center relative max-w-[385px] p-8 min-h-[226px] w-full h-auto ${
                      val.id === 7 ? "xl:col-span-3 " : ""
                    }`}
                  >
                    <Image
                      src="/about-us/Background (3).png"
                      width={50}
                      height={75}
                      alt="images"
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
                    />
                    <div className="flex flex-col justify-center items-center relative gap-3 z-10">
                      <h2 className="text-center font-popins text-lg md:text-[22px] text-white">
                        {val.title}
                      </h2>
                      <p className="md:text-[13px] text-center font-popins font-normal text-md text-gray-200">
                        {val.para}
                      </p>

                      <div className="-mt-3">
                        <Link href={val.link} target="_blank">
                          <button className="px-4 py-2 text-white  font-normal text-md rounded-md font-popins transition duration-200 text-base bg-gradient-to-r from-blue-500 to-pink-500 md:py-3 md:px-6 md:mt-8 transform ease-in-out hover:opacity-90">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="hidden lg:flex justify-between items-center top-6 w-full absolute bottom-0 left-0 right-0 max-w-[120rem] mx-auto">
          <Image
            src="/about-us/Ellipse 6.webp"
            width={323}
            height={323}
            alt="images"
            className="z-0 relative top-[100px]"
          />
          <Image
            src="/about-us/Ellipse 7.webp"
            width={323}
            height={323}
            alt="images"
            className="z-0 relative top-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contestt;
