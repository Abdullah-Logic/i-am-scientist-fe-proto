"use client";
import React, { useRef, useState } from "react";
import { outlineData, courseOutlineContent } from "../constant/data";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Container from "../components/container/container";

const OutlinePage: React.FC = () => {
  const [selectedData, setSelectedData] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const detailSectionRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (id: number) => {
    const selected = courseOutlineContent.find((item) => item.id === id);
    setSelectedData(selected);
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 768) {
        // Medium and larger devices: Show modal
        setIsModalOpen(true);
      } else {
        // Small devices: Scroll to detail section
        detailSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  return (
    <Container>
      {/* Hero section */}
      <div
        className="relative z-40 h-[170px] md:h-[300px] 2xl:h-[350px] bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: "url('/about-us/Hero-BG.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center text-[#FFFFFF] mb-8 w-full md:w-10/12 px-3">
          <p className="font-misri mt-6 md:mt-3 text-3xl md:text-5xl font-bold">
            Course Outline
          </p>
          <p className="text-2xl md:text-3xl font-semibold font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
            Begin your AI journey today and unlock the future of technology
          </p>
        </div>
      </div>

      {/* Course Outline Section */}
      <div className="bg-[#280253] relative text-white py-6 md:py-12 2xl:py-24 flex flex-col items-center justify-center px-3 md:px-0">
        <p className="font-misri mt-3 text-2xl md:text-3xl font-bold text-white">
          Course Outline
        </p>
        <h2 className="text-center text-3xl md:text-5xl font-bold font-misri mt-3">
          I am Scientist
        </h2>

        {/* Contact Information Section */}
        <div className="flex flex-wrap justify-center pt-6 md:pt-12 w-full md:w-[95%] xl:w-[80%] mx-auto gap-6 z-40">
          {outlineData.map((data) => {
            const description = data.description || "No description available.";
            const words = description.split(" ");
            const shortDescription = words.slice(0, 8).join(" ");
            const [isExpanded, setIsExpanded] = useState<boolean>(false);

            return (
              <div key={data.id} className="relative">
                <Image
                  src={data.image}
                  width={500}
                  height={200}
                  alt={data.title}
                  className="w-80 lg:w-72 xl:w-80 2xl:w-full h-auto"
                />
                <div className="absoulte flex flex-col space-y-3 left-0 -mt-20 rounded-md opacity-80 bg-[#6C0988] w-[250px] md:w-62 lg:w-56 xl:w-72 2xl:w-96 mx-auto z-40 p-3">
                  <h3 className="text-center text-2xl font-bold font-jost">
                    {data.title}
                  </h3>
                  <h3 className="font-popins text-xs 2xl:text-lg font-bold text-center">
                    {data.grade}
                  </h3>
                  <p className="font-popins font-medium text-xs 2xl:text-base text-center">
                    {isExpanded ? description : `${shortDescription}...`}
                    <span
                      className="text-blue-500 cursor-pointer ml-2"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {/* {isExpanded ? "Read Less" : "Read More"} */}
                    </span>
                  </p>

                  <button
                    onClick={() => {
                      handleButtonClick(data.id); // First call
                      setTimeout(() => handleButtonClick(data.id), 100); // Second call after 100ms
                    }}
                    className="font-semibold text-sm font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2 md:py-3 px-2 md:px-6 text-white rounded-md mt-4 md:mt-8 transform transition-all duration-500 ease-in-out hover:opacity-90 w-fit flex mx-auto"
                  >
                    View Courses
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Section */}
      {selectedData && (
        <div
          ref={detailSectionRef}
          className="bg-[#280253] relative py-6 mb:py-12 2xl:py-24 text-white flex flex-col items-center justify-center px-3 md:px-0"
        >
          <div className="text-white p-4 w-full md:w-10/12 lg:w-8/12 rounded-xl border-2">
            <h1 className="font-misri text-3xl font-bold text-center">
              Course Outline
            </h1>
            <h3 className="text-2xl font-bold font-misri my-4">
              {selectedData.title}
            </h3>
            <ul className="grid gap-4">
              {selectedData.content.map((lesson: string, index: string) => {
                const title = lesson.substring(0, 10); // First 10 characters as title
                const body = lesson.substring(10); // Rest as body
                return (
                  <div key={index} className="space-y-1">
                    <li className="font-bold">{title}</li>
                    <li>{body}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* Modal for Medium and Large Devices */}
      {isModalOpen && selectedData && (
        <div className="fixed inset-0 bg-[#280253] bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative bg-[#6C0988] text-white p-8 rounded-xl shadow-lg w-11/12 lg:w-[75%] xl:w-3/5">
            <h1 className="font-misri mt-6 md:mt-3 text-3xl md:text-5xl font-bold text-center">
              Course Outline
            </h1>
            <h3 className="text-4xl font-bold font-misri mb-4">
              {selectedData.title}
            </h3>
            <ul className="grid gap-2">
              {selectedData.content.map((lesson: string, index: string) => {
                const title = lesson.substring(0, 10); // First 10 characters as title
                const body = lesson.substring(10); // Rest as body
                return (
                  <div key={index} className="flex gap-4 items-center">
                    <li className="font-bold text-base xl:text-lg">{title}</li>
                    <li>{body}</li>
                  </div>
                );
              })}
            </ul>
            <button
              onClick={closeModal}
              className="absolute top-0 right-7 mt-7"
            >
              <IoClose className="size-7" />
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default OutlinePage;
