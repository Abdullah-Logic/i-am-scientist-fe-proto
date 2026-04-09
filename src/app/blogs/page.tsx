import React from "react";
import { courses, coursesFAQs, technology, topics } from "../constant/data";
import CourseCard from "../components/coursecard";
import { MdArrowDropDown } from "react-icons/md";
import FAQ from "../components/Faqs";

const CoursesPage = () => {
  return (
    <>
      {/* Hero section start */}

      <div
        className="relative z-40 h-auto md:h-[300px] 2xl:h-[350px]  bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: "url('/about-us/Hero-BG.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center text-[#FFFFFF] mb-8 w-full md:w-10/12 px-3">
          <p className="font-misri mt-6  md:mt-3 md:text-sm text-md font-bold">
            Courses
          </p>
          <p className="text-md md:text-2xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
          &quot;Explore our cutting-edge courses.&quot;
          </p>
        </div>
      </div>
      {/* Hero section end */}

      <div className="bg-[#280253]  relative text-white py-2 md:py-12 2xl:py-24 flex flex-col items-center justify-center px-3 md:px-0">
        <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
        <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute -top-12 left-0 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60 z-10"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0  mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2  right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>

        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
        <div className="w-12 h-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>

        {/****************************************** * courses cars section start */}

        <div className="w-full md:w-[95%]   xl:w-[85%]    mx-auto  md:p-8 md:flex z-40">
          {/* Sidebar Section */}
          <aside className="md:w-1/3 lg:w-1/4 text-white space-y-8 font-popins  md:mt-8">
            <div>
              <h2 className="font-semibold  text-lg 2xl:text-xl mb-4 2xl:mb-8 flex items-center">
                Technology{" "}
                <span className="ml-3">
                  <MdArrowDropDown size={40} />
                </span>
              </h2>
              <ul className="space-y-2 2xl:space-y-4">
                {technology.map((data, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="checkbox w-4 h-4 [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
                    />{" "}
                    {data}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold  text-lg 2xl:text-xl mb-4 2xl:mb-8 flex items-center">
                Topics{" "}
                <span className="ml-3">
                  <MdArrowDropDown size={40} />
                </span>
              </h2>
              <ul className="space-y-2 2xl:space-y-4">
                {topics.map((topic, idx) => (
                  <li key={idx} className="flex items-center  gap-2">
                    <input type="checkbox" className="checkbox w-4 h-4 " />{" "}
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content Section */}
          <main className="md:w-2/3 lg:w-3/4 mt-8 md:mt-0 space-y-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </main>
        </div>
        {/****************************************** * courses cart section end */}
      </div>

      {/* FAQS section start */}
      <FAQ faqs={coursesFAQs} />
    </>
  );
};

export default CoursesPage;
