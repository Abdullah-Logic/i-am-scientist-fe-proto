import Image from "next/image";
import React from "react";
import {
  // announcementsData,
  competitionNews,
  popularCourse,
  upcomingCompetitions,
} from "../constant/data";

import { FaRegClock, FaRegPlayCircle, FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { ImInsertTemplate } from "react-icons/im";

const ContestPage = ({ announcementsData }: any) => {
  const imageBg = [
    {
      id: 1,
      url: "/contest/SkyBlue.png",
    },
    {
      id: 2,
      url: "/contest/pink.png",
    },
    {
      id: 3,
      url: "/contest/offblue.png",
    },
  ];
  return (
    <>
      <div
        className="bg-[#210145] text-white py-6 md:py-12 px-3 flex justify-center"
        style={{
          backgroundImage: "url('/contest/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center">
          <p className="font-misri mt-3 text-2xl md:text-4xl font-bold ">
            {" "}
            Schedule
          </p>
          <h2 className=" text-center text-3xl md:text-5xl font-bold font-misri mt-3">
            The National I am Scientist System
          </h2>
          <p className="w-full md:w-1/2 2xl:w-[60%]  font-popins font-normal text-base md:text-2xl text-center text-white mt-2">
            Stay tuned for registration details and get ready to unlock your
            potential
          </p>

          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid xl:grid-cols-3 gap-4 mt-12 font-popins ">
            {announcementsData.map((announcement: any, index: any) => (
              <div
                key={index}
                className={`border-2 ${announcement.border} rounded-xl p-3  md:p-4 w-full
                transition-all ease-in-out duration-500 hover:scale-105 }`}
              >
                <h3
                  className={`${announcement.color} font-marinda text-4xl font-bold mb-2`}
                >
                  {announcement.category}
                </h3>
                <h4 className="text-black text-xl md:text-3xl xl:text-2xl text-center font-popins font-semibold mt-1 mb-4 bg-white rounded-lg p-2">
                  ANNOUNCEMENTS
                </h4>
                <div className="space-y-4">
                  {announcement.items.map((item: any, idx: any) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-4 ${
                        idx % 2 === 0 ? "" : "flex-row-reverse"
                      } `}
                    >
                      {/* Calendar UI start */}
                      <div
                        className={`${
                          announcement.bor
                        } flex w-[70px] font-popins flex-col items-center
                        ${
                          idx % 2 === 0 ? "border-l-[3px] " : "border-r-[3px]"
                        } border-t-[3px]  text-white rounded-lg`}
                      >
                        <div
                          className={`${
                            announcement.bor
                          } flex items-center justify-center w-16 h-6 
                      ${idx % 2 === 0 ? "border-r-[4px]" : "border-l-[3px]"}
                          border-b-[3px]  rounded-tr-md rounded-tl-md relative`}
                        >
                          <div
                            className={`w-1 h-1 rounded-full mx-1 ${announcement.bgcolor}`}
                          ></div>
                          <div
                            className={`w-1 h-1 rounded-full mx-1 ${announcement.bgcolor}`}
                          ></div>
                          <div
                            className={`absolute -top-2 left-3 w-1 h-4 rounded-lg ${announcement.bgcolor}`}
                          ></div>
                          <div
                            className={`absolute -top-2 right-3 w-1 h-4 rounded-lg bg-white ${announcement.bgcolor}`}
                          ></div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-2xl font-bold flex items-center justify-center">
                            {item.iconDate}
                          </span>
                          <span className="text-sm font-semibold flex items-center justify-center">
                            {item.iconMonth}
                          </span>
                        </div>
                      </div>
                      {/* Calendar UI end */}

                      {/* Text content */}
                      <div className="border-b-4">
                        <h5 className="text-white font-bold text-base  whitespace-nowrap ">
                          {item.title}
                        </h5>
                        <p
                          className={`${announcement.bgcolor} rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black`}
                        >
                          {item.startDate} - {item.endDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href={announcement.route}>
                  <button className="mt-6 bg-white w-full text-black py-3 px-4 text-base md:text-xl rounded-lg font-semibold hover:bg-opacity-90">
                    Enroll Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* // Test your limit section start */}
      <div className="w-full pb-10 md:pb-0 h-auto md:h-[350px] xl:h-[300px] bg-[#5D3794] relative px-2">
        <div className="h-6 w-16 lg:h-14 lg:w-40 bg-[#C406B9] rounded-tr-full rounded-br-full absolute left-0 bottom-0 -z-5"></div>
        <div className="h-6 w-16 lg:h-14 lg:w-40 bg-[#C406B9] rounded-tl-full rounded-bl-full absolute right-0 top-3 -z-5"></div>
        <div className="w-6 h-6 md:w-20 md:h-20 rounded-full bg-[#408CFB] absolute top-4 left-10 md:top-6 lg:left-28  2xl:left-36 shadow-xl -z-5"></div>
        <div className="w-6 h-6 md:w-20 md:h-20 rounded-full  bg-[#408CFB] absolute bottom-4 right-10 md:bottom-6 lg:right-28 2xl:right-40 shadow-xl -z-5"></div>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full  bg-[#97DB4E] absolute bottom-4 left-8 md:bottom-8 lg:left-24 shadow-xl -z-5"></div>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full  bg-[#97DB4E] absolute top-6 right-8 md:top-14 lg:right-24 shadow-xl -z-5"></div>
        <div className="flex flex-col justify-center items-center relative z-10">
          <h3 className="font-misri font-bold text-3xl md:text-5xl text-white text-center pt-14 md:pt-12 w-3/4">
            Test Your Limits and Rise to the Top
          </h3>
          <p className="w-full md:w-[65%] 2xl:w-[45%] font-popins  font-normal text-base md:text-xl text-center text-white mt-2">
            Start your journey with us and take part in our exciting
            competitions. Don't miss this chance to challenge yourself
          </p>
          <Link href="/auth/signup">
            <button className="font-semibold text-base md:text-xl font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2 md:py-3  px-2 md:px-6 text-white rounded-full mt-4 md:mt-8 transform transition-all duration-500 ease-in-out hover:opacity-90">
              {" "}
              Get started
            </button>
          </Link>
        </div>
      </div>

      {/* // Test your limit section end */}

      <div
        className=" bg-[#210145] text-white py-6 md:py-12 2xl:py-14  px-4 flex flex-col items-center"
        style={{
          backgroundImage: "url('/popularcourse/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold font-misri mt-3 text-center">
            Explore Our Courses
          </h2>
          <div className="w-28 h-1 rounded-lg bg-gradient-to-r from-[rgba(46,152,252,1)] to-[rgba(224,28,244,1)] mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid xl:grid-cols-3 gap-3 2xl:gap-6 mx-auto mt-14 md:w-[87%] 2xl:w-[75%] w-full">
          {popularCourse.map((items) => (
            <div
              key={items.id}
              className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  bg-[linear-gradient(90deg,rgba(35,3,63)32.12%,rgba(0,50,171,0.7)100%)] rounded-xl w-full border-2 2xl:border-4  border-white transition-all ease-in-out duration-500 hover:scale-105"
            >
              <Image
                src={items.src}
                width={300}
                height={200}
                alt={items.title}
                className="w-full h-auto rounded-tl-xl rounded-tr-xl"
              />
              <div className="flex flex-col  space-y-6 2xl:space-y-8  p-3 2xl:p-5 mt-3">
                <h3 className="text-white font-inter text-base 2xl:text-xl font-bold">
                  {items.title}
                </h3>
                <div className="flex space-x-4 ">
                  <div className="flex items-center justify-center space-x-2">
                    <FaRegClock />
                    <p className="text-xs 2xl:text-base  font-semibold">
                      {items.hours}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 ">
                    <FaRegUser />
                    <p className="text-xs 2xl:text-base  font-semibold">
                      {items.stdCount}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 ">
                    <FaRegPlayCircle />
                    <p className="text-xs 2xl:text-base font-semibold">
                      {items.lessonCount}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link href="/select-course">
                    <button className="font-semibold w-fit text-base md:text-xl font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2 md:py-3  px-2 md:px-6 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90 ">
                      {" "}
                      {items.btn}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/courses">
          <div className="flex justify-center mt-16 2xl:mt-20">
            <button className="font-semibold w-fit text-base md:text-xl font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2 md:py-3  px-2 md:px-6 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90">
              {" "}
              Explore More
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ContestPage;
