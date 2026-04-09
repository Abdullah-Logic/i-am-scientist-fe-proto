"use client";
import React, { useState } from "react";
// import {  Heart as HeartIcon, ChevronDown as ChevronDownIcon } from "lucide-react";

export default function MagicTools() {
  // State to track the clicked button
  const [selectedButton, setSelectedButton] = useState("All Tools");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Most Popular");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option: string) => {
    setSelectedSort(option);
    setIsOpen(false);
  };

  // Handle button click
  const handleButtonClick = (category: string) => {
    setSelectedButton(category); // Set the selected button
  };

  return (
    <div className="text-white font-popins pt-10 px-4 md:p-10 ">
      <div className="mb-8">
        <h1 className="text-2xl flex justify-center text-center items-center md:text-left md:items-center md:justify-start font-bold">
          Recommended for You
        </h1>
      </div>
      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ToolCard
          imagePath="/ai-magic-tool/image.svg"
          title="Vocabulary List Generator"
          description="Generate a list of vocabulary words based on a subject topic or text that are..."
          color="from-pink-600 to-purple-600"
          borderTopColor="border-t-[#C407B9]"
          borderRightColor="border-r-[#E01CF4]"
          borderBottomColor="border-b-[#2E98FC]"
          borderLeftColor="border-l-[#2E98FC]"
        />

        <ToolCard
          imagePath="/ai-magic-tool/image2.svg"
          title="Choice Board (UDL)"
          description="Create a choice board for a student assignments based on the principles of......"
          color="from-purple-600 to-pink-600"
          borderTopColor="border-t-[#2E98FC]"
          borderRightColor="border-r-[#E01CF4]"
          borderBottomColor="border-b-[#2E98FC]"
          borderLeftColor="border-l-[#2E98FC]"
        />
        <ToolCard
          imagePath="/ai-magic-tool/image3.svg"
          title="Behavior Intervention Suggestions"
          description="Generate a list of suggestions for behavior intervention based on the..."
          color="from-purple-600 to-indigo-600"
          borderTopColor="border-t-[#F472B6]"
          borderRightColor="border-r-[#E01CF4]"
          borderBottomColor="border-b-[#2E98FC]"
          borderLeftColor="border-l-[#2E98FC]"
        />
        <ToolCard
          imagePath="/ai-magic-tool/image4.svg"
          title="Decode able Texts"
          description="Generate a decode able text based on a science of reading to support early..."
          color="from-yellow-600 to-orange-600"
          borderTopColor="border-t-[#8BB6EF]"
          borderRightColor="border-r-[#E01CF4]"
          borderBottomColor="border-b-[#2E98FC]"
          borderLeftColor="border-l-[#2E98FC]"
        />
        <ToolCard
          imagePath="/ai-magic-tool/image5.svg"
          title="Songs Generator"
          description="Write a custom song about any topic to the tune of the song 'If your happy..."
          color="from-green-600 to-teal-600"
          borderTopColor="border-t-[#EFAA66]"
          borderRightColor="border-r-[#E01CF4]"
          borderBottomColor="border-b-[#2E98FC]"
          borderLeftColor="border-l-[#2E98FC]"
        />
      </div>
    </div>
  );
}
function ToolCard({
  imagePath,
  title,
  description,
  color,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
}: {
  imagePath: string;
  title: string;
  description: string;
  color: string;
  borderTopColor: string;
  borderRightColor: string;
  borderBottomColor: string;
  borderLeftColor: string;
}) {
  return (
    <div
      className={`relative p-6 rounded-t-xl shadow-md border-t-8 ${borderTopColor} 
      border-r-2 ${borderRightColor} border-b-2 ${borderBottomColor} border-l-2 ${borderLeftColor}`}
    >
      <button className="absolute top-4 right-4 text-white hover:scale-110 transition-transform">
        {/* <HeartIcon className="h-5 w-5" /> */}
      </button>
      <div className="flex gap-4 items-start">
        <img
          src={imagePath}
          alt={title}
          className="w-12 h-12 object-cover rounded-lg"
        />
        <div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}
