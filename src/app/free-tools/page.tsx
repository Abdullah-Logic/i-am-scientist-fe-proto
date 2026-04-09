"use client";

import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { freeTools } from "../../app/constant/data";
import Link from "next/link";
import Container from "../components/container/container";
import {
  Sparkles, // All
  FileText, // Text
  Video, // Video
  Shuffle, // Rephraser
  BookOpen, // Blog
  Lightbulb, // Solution
  Globe, // Web scrapper
  Zap, // Generator
} from "lucide-react";

const FreeTool = () => {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredTools, setFilteredTools] = useState(freeTools);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  useEffect(() => {
    const handleSearchAndFilter = () => {
      let filtered = freeTools;
      if (query) {
        filtered = filtered.filter((tool) =>
          tool.title.toLowerCase().includes(query.toLowerCase()),
        );
      }
      if (selectedTag !== "All") {
        filtered = filtered.filter((tool) =>
          tool.title.toLowerCase().includes(selectedTag.toLowerCase()),
        );
      }
      setFilteredTools(filtered);
    };
    handleSearchAndFilter();
  }, [query, selectedTag]);

  // const truncateDescription = (desc: string): string => {
  //   const words = desc.split(" ");
  //   if (words.length > 8) {
  //     return words.slice(0, 8).join(" ") + "...";
  //   }
  //   return desc;
  // };

  const tags = [
    { id: 1, name: "All", icon: Sparkles },
    { id: 2, name: "Text", icon: FileText },
    { id: 3, name: "Video", icon: Video },
    { id: 4, name: "Rephraser", icon: Shuffle },
    { id: 5, name: "Blog", icon: BookOpen },
    { id: 6, name: "Solution", icon: Lightbulb },
    { id: 7, name: "Web scrapper", icon: Globe },
    { id: 8, name: "Generator", icon: Zap },
  ];
  const cardBorders = [
    "from-[#5B7CFF] to-[#6D28D9]",
    "from-[#F59E0B] to-[#F97316]",
    "from-[#10B981] to-[#22C55E]",
    "from-[#F43F5E] to-[#FB7185]",
    "from-[#EAB308] to-[#F97316]",
    "from-[#A855F7] to-[#7C3AED]",
    "from-[#22D3EE] to-[#38BDF8]",
    "from-[#EC4899] to-[#F43F5E]",
  ];
  const iconBgs = [
    "bg-[#2D7EDA]",
    "bg-[#F59E0B]",
    "bg-[#10B981]",
    "bg-[#F97316]",
    "bg-[#EAB308]",
    "bg-[#7C3AED]",
    "bg-[#0EA5E9]",
    "bg-[#EC4899]",
  ];

  return (
    <Container>
      <div className="relative w-full h-full bg-[#280253] text-center text-white py-16 flex flex-col justify-center items-center font-popins">
        <div className="-z-8">
          <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 "></div>
          <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute -top-12 left-0 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60"></div>
          <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 "></div>
          <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0  mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60 "></div>
          <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2  right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60 "></div>
          <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 "></div>
          <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 "></div>
        </div>
        <div className="w-full z-10 md:w-[80%] flex flex-col gap-4 md:gap-6 items-center justify-center px-4">
          <div className="max-w-[800px] space-y-5">
            <h1 className="text-2xl md:text-4xl font-bold">
              Looking for AI-powered tools to enhance your creativity?
            </h1>
            <p className="text-sm">
              Explore our collection of innovative tools designed to elevate
              your content creation, streamline your tasks and boost
              your productivity
            </p>
          </div>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              className="w-full sm:w-[320px] md:w-[480px] p-2 pl-12 pr-4 bg-gradient-to-r from-[#632B93] via-[#7C3282] to-[#632B93] border border-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#6624BA] focus:border-[#6624BA]"
              placeholder="Search tools or content..."
            />
            <BiSearchAlt className="absolute top-1/2 left-4 transform -translate-y-1/2 text-xl" />
          </div>
          <div className="w-full sm:w-auto flex flex-wrap justify-center gap-3 my-5 px-4">
            {tags.map((item) => (
              <button
                key={item.id}
                className={`rounded-3xl px-3.5 py-1 border ${
                  selectedTag === item.name
                    ? "bg-gradient-to-r from-[#B150F7] to-[#EC459F] text-white scale-110"
                    : "border-gray-400"
                }   text-sm md:text-base hover:text-white hover:bg-gradient-to-r from-[#B150F7] to-[#EC459F]`}
                onClick={() => handleTagClick(item.name)}
              >
                <item.icon className="inline mr-2" size={15} />
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="z-50 w-full mx-auto md:w-[90%] py-5 flex flex-col items-center justify-center">
          {filteredTools.length > 0 ? (
            <div
              className={`${
                filteredTools.length >= 4
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                  : "flex flex-wrap justify-center gap-4 items-stretch"
              }`}
            >
              {filteredTools.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className="w-full max-w-[260px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[300px]"
                >
                  <div className="rounded-xl bg-gradient-to-r from-[#6D49F6] to-[#F7BA61] p-[1px] hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition-all duration-300 ">
                    <div className="h-[220px] flex flex-col items-start rounded-[11px] py-4 px-5 bg-[#2E124D] text-white gap-2 text-left transition-all duration-300 ">
                      <div className="relative">
                        <div
                          className={`w-[54px] h-[54px] rounded-xl flex items-center justify-center ${iconBgs[item.id % iconBgs.length]}`}
                        >
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-[34px] h-[34px] object-contain"
                          />
                        </div>
                      </div>
                      <div className="pt-1 flex-1 overflow-hidden">
                        <h2 className="text-[16px] mb-1 font-semibold line-clamp-2">
                          {item.title}
                        </h2>
                        <p className="text-[12px] font-normal text-white/70 break-words whitespace-normal line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-auto w-full">
                        <div className="h-px w-full bg-white/10" />
                        <div className="pt-2 text-[12px] font-semibold text-[#6aa6ff]">
                          Try this tool →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-xl text-gray-400 text-center">
              Whoops! No tools found.
            </p>
          )}
          <div className="flex flex-col bg-[#5D3794] border rounded-2xl space-y-5 p-10 my-10 w-full">
            <p className="font-bold text-3xl">
              Ready to transform your workflow?
            </p>
            <p className="text-smm">
              Join thousands of professionals using our AI tools to create
              exceptional content and save hours every week
            </p>
            <div className="flex flex-row gap-5 items-center justify-center text-sm font-semibold">
              <button className="bg-gradient-to-r from-[#3393F7] to-[#DD55F5] py-2 px-3 rounded-lg">
                Start Free Trial
              </button>
            </div>
            <p className="text-xs text-gray-300">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FreeTool;
