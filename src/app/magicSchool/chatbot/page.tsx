"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdContentCopy } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";
import { IoMicOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";

const Page = () => {
  const description = `Hello! My name is Kiswa, your AI instructional coach. You can
    ask any questions related to best practices in teaching or your
    work in a school building. Feel free to ask me for ideas for your
    classroom, research on best practices in pedagogy, behavior
    management strategies, or any general advice! The more specific
    your questions, the better my responses will be. How can I help
    you today?`;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropupOpen, setIsDropupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Fastest");

  const handleCopy = () => {
    navigator.clipboard.writeText(description);
    alert("Text copied to clipboard!");
  };

  const handleReadAloud = () => {
    const utterance = new SpeechSynthesisUtterance(description);
    speechSynthesis.speak(utterance);
  };

  const handleExport = () => {
    const blob = new Blob([description], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "description.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleMore = () => {
    alert("More options coming soon!");
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`File uploaded: ${file.name}`);
    }
  };

  const handleVoiceMessage = () => {
    alert("Voice message recorded!");
  };

  const handleSendMessage = () => {
    alert("Message sent!");
  };

  return (

      <div className="flex flex-col w-full  md:flex-row gap-2 lg:gap-5">
        <div className="text-white flex flex-col  px-2 md:w-[77%] ">
          {/* Dropdown */}
          <div className="relative w-72  flex gap-4 justify-center items-center">
            <div>
              <p className="text-xl">Model</p>
            </div>
            <div className="p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-[#400C79] text-white py-2 px-4 rounded-lg flex items-center justify-between  focus:outline-none"
                >
                  <span>{selectedOption}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform ml-6 transition-transform ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute w-full bg-[#C407B9] text-white mt-2 rounded-lg -ml-20 shadow-lg z-10">
                    <div
                      onClick={() => handleOptionClick("Fastest")}
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer "
                    >
                      <span className="text-xl">⚡</span>
                      <div>
                        <p className="font-bold">Fastest</p>
                        <p className="text-sm text-gray-300">
                          Great for most use cases
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => handleOptionClick("Smartest")}
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer "
                    >
                      <span className="text-xl">💡</span>
                      <div>
                        <p className="font-bold">Smartest</p>
                        <p className="text-sm text-gray-300">
                          Advance / Complex Use cases
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="max-w-4xl w-full p-6">
            <div className="text-center">
              <Image
                src="/chatbot/chatbot.png"
                alt="AI Scientist Icon"
                width={90}
                height={120}
                className="mx-auto mb-4"
              />
              <h1 className="text-xl font-bold">Hello! I am AI Scientist.</h1>
              <div className="text-lg mt-2">Made for Schools</div>
            </div>
            <div className="p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-6 rounded-lg">
              <div className="bg-[#400C79] text-justify flex justify-center items-center  text-sm rounded-lg p-4">
                <p>{description}</p>
              </div>
            </div>
            {/* Actions */}
            <div className="flex space-x-4 text-white flex-wrap items-center mt-6">
              <div className="flex gap-1">
                <MdContentCopy className="mt-1" />
                <button onClick={handleCopy}>Copy</button>
              </div>
              <div className="flex gap-1">
                <img
                  src="/chatbot/ReadAloud.svg"
                  alt="read"
                  className="size-3 mt-1"
                />
                <button onClick={handleReadAloud}>Read Aloud</button>
              </div>
              <div className="flex gap-1">
                <IoExitOutline className="mt-1" />
                <button onClick={handleExport}>Export</button>
              </div>
              <div className="flex gap-1">
                <BiDotsVerticalRounded className="mt-1" />
                <button onClick={handleMore}>More</button>
              </div>
            </div>
          </div>

          {/* Bottom Input Section */}
          <div className="mt-16 px-4 sm:mt-8 sm:px-2 ">
            <div className="p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
              <div className="bottom-0 left-0 right-0 z-50">
                <div className="bg-[#400C79] rounded-lg shadow-lg p-4  justify-center items-center flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 relative">
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsDropupOpen(!isDropupOpen)}
                      className="bg-[#C407B9] text-white py-2 px-4 rounded-md hover:bg-[#9b0799] focus:outline-none focus:ring-2 focus:ring-[#C407B9] focus:ring-opacity-50 transition duration-200 ease-in-out"
                      aria-label="Toggle action dropdown"
                    >
                      <span className="text-[#C407B9] bg-white rounded-full px-1 mr-2">
                        +
                      </span>
                      Action
                    </button>
                  </div>

                  {/* Drop-up Menu */}
                  {isDropupOpen && (
                    <div className="absolute bottom-28 md:bottom-20 left-0 sm:-left-5 bg-[#C407B9] text-white flex flex-col rounded-md shadow-lg w-full sm:w-auto">
                      <button
                        className="block w-full text-center px-4 py-2 hover:bg-purple-800"
                        onClick={() => alert("Translate clicked")}
                      >
                        Translate
                      </button>
                      <button
                        className="block w-full text-center px-4 py-2 hover:bg-purple-800"
                        onClick={() => alert("Questions clicked")}
                      >
                        Questions
                      </button>
                      <button
                        className="block w-full text-center px-4 py-2 hover:bg-purple-800"
                        onClick={() => alert("Length clicked")}
                      >
                        Length
                      </button>
                      <button
                        className="block w-full text-center px-4 py-2 hover:bg-purple-800"
                        onClick={() => alert("Summarize clicked")}
                      >
                        Summarize
                      </button>
                      <button
                        className="block w-full text-center px-4 py-2 hover:bg-purple-800"
                        onClick={() => alert("Custom clicked")}
                      >
                        Custom
                      </button>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
                    <div className="relative w-full">
                      <label
                        htmlFor="file-upload"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      >
                        <AiOutlineFile className="text-white text-lg" />
                      </label>
                      <input
                        type="text"
                        placeholder="Send a Message"
                        className="w-full bg-transparent border-[#ACACAC] rounded-lg border py-2 pl-10 pr-20 focus:outline-none text-white placeholder-gray-300"
                      />
                      <button
                        onClick={handleVoiceMessage}
                        className="absolute right-10 top-1/2 transform -translate-y-1/2 text-white"
                      >
                        <IoMicOutline className="text-xl" />
                      </button>
                      <button
                        onClick={handleSendMessage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                      >
                        <IoSend className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}

          <div className=" text-white bg-[#400C79] rounded-lg  shadow-md p-4">
            <div className="xl:h-[555px]  md:h-[600px] flex justify-between">
              <div>
                <h2 className="lg:text-xl text-lg  font-bold ">History</h2>
              </div>
              <div>
                <button className="bg-[#2E98FC] hover:to-blue-500 text-white lg:px-3 lg:py-1 px-2 xl:ml-0 ml-2 text-xl h-fit rounded-full ">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Page;
