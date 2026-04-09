"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DashboardLayout from "./DashboardLayout";

const tools = [
  {
    title: "Math Story Word Problems",
    desc: "Write custom math word problems based on what you're teaching and any story topic.",
    href: "/ai-tools/math-story-word-problems",
    icon: "/calculator_icon.png",
    category: "Planning",
    gradient: "green-gradient",
  },
  {
    title: "Writing Feedback",
    desc: "Generate feedback on student writing based on custom criteria or a rubric.",
    href: "/ai-tools/writing-feedback",
    icon: "/marker_icon.png",
    category: "Content",
    gradient: "blue-gradient",
  },
  {
    title: "Standards Unpacker",
    desc: "Unpack any standard into component parts to understand what students need.",
    href: "/ai-tools/standards-unpacker",
    icon: "/apple_icon.png",
    category: "Planning",
    gradient: "purple-gradient",
  },
  {
    title: "SEL Lesson Plan",
    desc: "Generate a custom social emotional learning (SEL) lesson plan for students.",
    href: "/ai-tools/sel-lesson-plan",
    icon: "/sel_icon.png",
    category: "Planning",
    gradient: "blue-gradient",
  },
  {
    title: "Text Scaffolder",
    desc: "Scaffold text for readers who are behind grade level or need extra support.",
    href: "/ai-tools/text-scaffolder",
    icon: "/vocab_icon.png",
    category: "Student Support",
    gradient: "pink-gradient",
  },
  {
    title: "Multiple Explanations",
    desc: "Generate additional explanations of topics that you're teaching.",
    href: "/ai-tools/multiple-explanations",
    icon: "/lesson_hook_icon.png",
    category: "Content",
    gradient: "purple-gradient",
  },
  {
    title: "Lesson Hook",
    desc: "Get suggestions for a hook to engage students in your lesson.",
    href: "/ai-tools/lesson-hook",
    icon: "/lesson_hook_icon.png",
    category: "Planning",
    gradient: "blue-gradient",
  },
  {
    title: "Informational Texts",
    desc: "Generate original informational texts for your class.",
    href: "/ai-tools/informational-texts",
    icon: "/informational_texts_icon.png",
    category: "Content",
    gradient: "pink-gradient",
  },
  {
    title: "Chat with Docs",
    desc: "Upload a document and have an AI-powered chat with it.",
    href: "/ai-tools/chat-with-docs",
    icon: "/open_book_icon.png",
    category: "Student Support",
    gradient: "blue-gradient",
  },
  {
    title: "Worksheet Generator",
    desc: "Generate a worksheet based on any topic or text.",
    href: "/ai-tools/worksheet-generator",
    icon: "/worksheet_icon.png",
    category: "Questions",
    gradient: "purple-gradient",
  },
  {
    title: "Lesson Plan Generator",
    desc: "Generate a comprehensive lesson plan based on a standard or topic.",
    href: "/ai-tools/lesson-plan",
    icon: "/lesson_plan_icon.png",
    category: "Planning",
    gradient: "pink-gradient",
  },
  {
    title: "Text Summarizer",
    desc: "Summarize any text in whatever length you choose.",
    href: "/ai-tools/text-summarizer",
    icon: "/highlighter_icon.png",
    category: "Content",
    gradient: "blue-gradient",
  },
  {
    title: "Vocabulary List Generator",
    desc: "Generate a list of vocabulary words based on a subject or topic.",
    href: "/ai-tools/vocab-generator",
    icon: "/vocab_icon.png",
    category: "Content",
    gradient: "green-gradient",
  },
  {
    title: "Multiple Choice Quiz",
    desc: "Generate a multiple choice assessment, quiz, or test.",
    href: "/ai-tools/multiple-choice-quiz",
    icon: "/quiz_icon.png",
    category: "Questions",
    gradient: "purple-gradient",
  },
  {
    title: "Presentation Generator",
    desc: "Generate exportable slides based on a topic, text, or video.",
    href: "/ai-tools/presentation-generator",
    icon: "/presentation_icon.png",
    category: "Content",
    gradient: "green-gradient",
  },
  {
    title: "Text Leveler",
    desc: "Level any text to adapt it to fit a student's reading level.",
    href: "/ai-tools/text-leveler",
    icon: "/text_leveler_icon.png",
    category: "Student Support",
    gradient: "pink-gradient",
  },
  {
    title: "Text Translator",
    desc: "Translate any text or uploaded document into any language.",
    href: "/ai-tools/text-translator",
    icon: "/translator_icon.png",
    category: "Content",
    gradient: "blue-gradient",
  },
  {
    title: "Choice Board (UDL)",
    desc: "Create a choice board for student assignments using UDL principles.",
    href: "/ai-tools/choice-board",
    icon: "/choice_board_new_icon.png",
    category: "Planning",
    gradient: "pink-gradient",
  },
  {
    title: "Chat with Kiswa",
    desc: "Hi! I'm Kiswa. I'm built for education. Ask me anything!",
    href: "/ai-tools/raina",
    icon: "/raina_avatar.png",
    category: "Student Support",
    gradient: "purple-gradient",
  },
];

const gradientBarClass: Record<string, string> = {
  "pink-gradient":
    "before:bg-gradient-to-r before:from-[#ff5b94] before:to-[#ffb38a]",
  "green-gradient":
    "before:bg-gradient-to-r before:from-[#2ae0b3] before:to-[#3afccc]",
  "blue-gradient":
    "before:bg-gradient-to-r before:from-[#4da4f7] before:to-[#605cff]",
  "purple-gradient":
    "before:bg-gradient-to-r before:from-[#3a97f9] before:to-[#3afccc]",
};

export default function AllMagicTools() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Most Popular");
  const [selectedFilter, setSelectedFilter] = useState("All tools");
  let filteredTools = tools;

  if (selectedFilter !== "All tools") {
    filteredTools = tools.filter((tool) => tool.category === selectedFilter);
  }

  if (selectedSort === "A- Z") {
    filteredTools = [...filteredTools].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  }

  if (selectedSort === "Z-A") {
    filteredTools = [...filteredTools].sort((a, b) =>
      b.title.localeCompare(a.title),
    );
  }

  if (selectedSort === "Newest") {
    filteredTools = [...filteredTools].reverse();
  }

  const filterKeys = [
    "All tools",
    "New",
    "Custom tool",
    "Planning",
    "Content",
    "Questions",
    "Intellectual Prep",
    "Student Support",
    "Admin",
  ] as const;

  return (
    <DashboardLayout activeTab="All Magic Tools">
      <div className="mb-6 flex flex-col items-start gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold md:text-[2rem]">All Magic Tools</h1>
        <div className="flex w-full flex-wrap items-center justify-between gap-2 text-[0.85rem] font-medium md:w-auto md:gap-4 md:text-[1.1rem]">
          <span>Sort By</span>
          <div className="relative text-[0.9rem]">
            <button
              type="button"
              className="flex min-w-[120px] cursor-pointer items-center justify-between gap-6 rounded-md border border-[rgba(135,45,230,0.6)] bg-transparent px-3 py-2 text-[0.85rem] font-medium text-white md:min-w-[170px] md:px-4 md:py-[0.65rem] md:text-base"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              {selectedSort}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`shrink-0 transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-[calc(100%+5px)] z-[100] flex w-full min-w-[170px] flex-col rounded-lg bg-[#c30bb5] py-3 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                {(
                  [
                    "Most Popular",
                    "Newest",
                    "A- Z",
                    "Z-A",
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className="cursor-pointer px-5 py-3 text-left text-base font-bold text-white transition-colors hover:bg-black/15"
                    onClick={() => {
                      setSelectedSort(opt);
                      setIsSortOpen(false);
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] md:mb-12 md:gap-6 md:overflow-visible md:pb-0">
        {filterKeys.map((key) => {
          const isActive = selectedFilter === key;
          return (
            <button
              key={key}
              type="button"
              className={
                isActive
                  ? "shrink-0 cursor-pointer whitespace-nowrap rounded-full border-2 border-[#f472f6] bg-[#d112d1] px-7 py-2 text-[0.95rem] font-semibold text-white shadow-[0_2px_10px_rgba(209,18,209,0.45)] transition-all duration-200 hover:bg-[#e01ce0]"
                  : "shrink-0 cursor-pointer whitespace-nowrap rounded-full border border-[rgba(135,45,230,0.6)] bg-transparent px-7 py-2 text-[0.95rem] font-medium text-white transition-all duration-200 hover:bg-[rgba(209,18,209,0.2)]"
              }
              onClick={() => setSelectedFilter(key)}
            >
              {key}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredTools.map((tool, index) => (
          <Link
            key={index}
            href={tool.href}
            className="h-full text-inherit no-underline"
          >
            <div
              className={`relative flex h-full cursor-pointer items-start gap-4 overflow-hidden rounded-xl bg-[rgba(30,9,71,0.7)] p-4 shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all duration-200 before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:content-[''] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] md:p-5 ${gradientBarClass[tool.gradient] ?? gradientBarClass["purple-gradient"]}`}
            >
              <Image
                src={tool.icon}
                alt={tool.title}
                width={40}
                height={40}
                className="h-[38px] w-[38px] shrink-0 object-contain max-md:h-11 max-md:w-11 max-md:rounded max-md:bg-white max-md:p-2"
              />

              <div className="min-w-0 flex-1">
                <div className="mb-0.5 text-[0.85rem] font-semibold text-white max-md:mb-1 max-md:text-[1.1rem] max-md:font-bold">
                  {tool.title}
                </div>
                <div className="line-clamp-2 text-[0.7rem] leading-snug text-[#a09eb5] max-md:text-[0.85rem]">
                  {tool.desc}
                </div>
              </div>

              <div
                className="ml-auto flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/15 max-md:h-8 max-md:w-8 max-md:bg-white/10"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                role="presentation"
              >
                <span className="text-base leading-none">❤️</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  );
}
