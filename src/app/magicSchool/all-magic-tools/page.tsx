"use client";
import React, { useState } from "react";
// import { Search, Heart, ChevronDown } from "lucide-react";

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

  const buttons = [
    { id: 1, name: "All Tools" },
    { id: 2, name: "New" },
    { id: 3, name: "custom Tools" },
    { id: 4, name: "Planning" },
    { id: 5, name: "Content" },
    { id: 6, name: "Questions" },
    { id: 7, name: "Intellectual Prep" },
    { id: 8, name: "Student Support" },
    { id: 9, name: "Admin" },
  ];

  return (
    <div className=" font-popins pt-10 px-4 md:p-10  text-white ">
      {/* Title and Sort */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">All Magic Tools</h1>
        <div className="relative">
          <div
            style={{
              border: "1px solid",

              borderImageSource:
                "linear-gradient(90deg, #2E98FC 0%, #E01CF4 100%)",
              borderImageSlice: 1,
            }}
            className="shadow-xl"
          >
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF00FF]"
            >
              <span>Sort By: {selectedSort}</span>
              {/* <ChevronDown className="h-4 w-4" /> */}
            </button>
          </div>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#C407B9] rounded-md shadow-lg z-10">
              {["Most Popular", "Most Recent", "Alphabetical"].map((option) => (
                <button
                  key={option}
                  className="block w-full text-left px-4 py-2 hover:opacity-90 transition-colors"
                  onClick={() => selectOption(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filter Buttons */}
      {/* className="flex flex-wrap gap-3 mb-8"
       */}

      <div className=" flex flex-wrap gap-3   mb-8">
        {buttons.map((category) => {
          return (
            <button
              key={category.id}
              className={` pt-[10px] pb-[10px] pr-[39px]  pl-[39px]  font-popins ${
                selectedButton === category.name
                  ? "rounded-full bg-[#C407B9] hover:opacity-90 p-2"
                  : "iambutton"
              }`}
              onClick={() => handleButtonClick(category.name)}
            >
              {category.name}
            </button>
          );
        })}
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

        <ToolCard
          imagePath="/ai-magic-tool/image6.svg"
          title="Songs Generator"
          description="Write a custom song about any topic to the tune of the song 'If your happy..."
          color="from-green-600 to-teal-600"
          borderTopColor="border-t-[#78EAC4]"
          borderRightColor="border-r-[#E01CF4]"
          borderBottomColor="border-b-[#2E98FC]"
          borderLeftColor="border-l-[#2E98FC]"
        />

        <ToolCard
          imagePath="/ai-magic-tool/image.svg"
          title="Vocabulary List Generator"
          description="Generate a list of vocabulary words based on a subject topic or text that are..."
          color="from-green-600 to-teal-600"
          borderTopColor="border-t-[#FFFFFF]"
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
        {/* <Heart className="h-5 w-5" /> */}
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
