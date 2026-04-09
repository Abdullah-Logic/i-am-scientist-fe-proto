"use client";

import Head from "next/head";
import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Fastest");
  const [showModelMenu, setShowModelMenu] = useState(false);

  return (
    <DashboardLayout activeTab="Chatbot">
      <div className="chatbot-scroll-scope flex w-full flex-1 flex-col overflow-hidden font-popins text-white">
        <Head>
          <title>I am Scientist - Chatbot</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="flex min-h-0 min-w-0 flex-1 flex-row">
          <main className="relative flex min-h-0 min-w-0 flex-1 flex-col">
            <header className="flex items-center px-4 py-4 md:px-8 md:py-6">
              <div className="flex items-center gap-2 text-[0.95rem] font-semibold md:text-[1.1rem]">
                <span>Model</span>
                <div className="relative">
                  <button
                    type="button"
                    className="flex min-w-[100px] cursor-pointer items-center justify-between gap-4 rounded-md border border-[rgba(135,45,230,0.6)] bg-transparent px-3 py-1.5 text-[0.85rem] text-[#e0e0e0] md:min-w-[120px] md:px-4"
                    onClick={() => setShowModelMenu(!showModelMenu)}
                  >
                    {selectedModel}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {showModelMenu && (
                    <div className="absolute left-0 top-[calc(100%+5px)] z-[100] flex w-full min-w-[120px] flex-col rounded-md bg-[#c30bb5] py-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                      <button
                        type="button"
                        className={`cursor-pointer px-4 py-2 text-left text-[0.85rem] font-semibold text-white transition-colors hover:bg-black/15 ${
                          selectedModel === "Fastest" ? "bg-black/20" : ""
                        }`}
                        onClick={() => {
                          setSelectedModel("Fastest");
                          setShowModelMenu(false);
                        }}
                      >
                        Fastest
                      </button>
                      <button
                        type="button"
                        className={`cursor-pointer px-4 py-2 text-left text-[0.85rem] font-semibold text-white transition-colors hover:bg-black/15 ${
                          selectedModel === "Smartest" ? "bg-black/20" : ""
                        }`}
                        onClick={() => {
                          setSelectedModel("Smartest");
                          setShowModelMenu(false);
                        }}
                      >
                        Smartest
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </header>

            <div className="flex flex-1 flex-col items-center overflow-y-auto px-4 pb-10 pt-2 md:px-8 md:pb-10">
              <img
                src="/raina_avatar.png"
                alt="Kiswa Avatar"
                className="mb-4 h-[60px] w-[60px] rounded-lg object-contain md:h-20 md:w-20"
              />
              <h1 className="mb-0.5 text-center text-[1.25rem] font-bold md:text-2xl">
                Hello ! I am AI Scientist.
              </h1>
              <h2 className="mb-4 text-center text-[0.9rem] text-[#e0e0e0] md:text-base">
                Made for Schools
              </h2>

              <div className="mb-3 w-full max-w-[750px] rounded-lg border border-[rgba(209,18,209,0.4)] bg-[rgba(30,9,71,0.5)] px-4 py-3 text-center text-[0.8rem] leading-[1.5] text-[#e0e0e0] md:px-6 md:text-[0.85rem]">
                Hello! My name is Kiswa, your AI instructional coach. You can
                ask any questions related to best practices in teaching or your
                work in a school building. Feel free to ask me for ideas for
                your classroom, research on best practices in pedagogy, behavior
                management strategies, or any general advice! The more specific
                your questions, the better my responses will be. How can I help
                you today?
              </div>

              <div className="mb-8 flex w-full max-w-[800px] flex-wrap items-center justify-center gap-4 px-0 md:gap-6 md:px-4">
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-[0.75rem] font-semibold text-white opacity-80 transition-opacity hover:opacity-100 md:text-[0.8rem]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy
                </button>
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-[0.75rem] font-semibold text-white opacity-80 transition-opacity hover:opacity-100 md:text-[0.8rem]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                  Read Aloud
                </button>
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-[0.75rem] font-semibold text-white opacity-80 transition-opacity hover:opacity-100 md:text-[0.8rem]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Export
                </button>
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-[0.75rem] font-semibold text-white opacity-80 transition-opacity hover:opacity-100 md:text-[0.8rem]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                  More
                </button>
              </div>

              <div className="mb-4 mt-auto flex w-full max-w-[800px] flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-6">
                <div className="relative w-full md:w-auto">
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-none bg-[#d112d1] px-5 py-3 text-[0.95rem] font-semibold text-white md:w-auto md:justify-start md:py-[0.65rem]"
                    onClick={() => setShowActionMenu(!showActionMenu)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="rounded-full bg-white text-[#d112d1]"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                    Action
                  </button>

                  {showActionMenu && (
                    <div className="absolute bottom-[calc(100%+15px)] left-0 z-[100] flex w-full min-w-0 flex-row flex-wrap items-center gap-4 overflow-x-auto rounded bg-[#c30bb5] px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] md:bottom-[calc(100%+15px)] md:w-auto md:gap-6 md:whitespace-nowrap md:px-4 md:py-2">
                      {["Translate", "Questions", "Length", "Summarize", "Custom"].map(
                        (label) => (
                          <span
                            key={label}
                            className="cursor-pointer text-[0.9rem] font-bold text-white transition-opacity hover:opacity-80"
                          >
                            {label}
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 items-center rounded-lg border border-[rgba(209,18,209,0.5)] bg-[rgba(46,15,99,0.4)] px-4 py-0.5 md:py-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 shrink-0"
                  >
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Send a Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border-none bg-transparent py-3 font-[inherit] text-[0.85rem] text-white outline-none placeholder:text-white/50 md:text-[0.9rem]"
                  />
                  <div className="flex flex-shrink-0 items-center gap-3 pl-2 text-white/60 [&>svg]:cursor-pointer [&>svg]:transition-colors hover:[&>svg]:text-white">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="23" />
                      <line x1="8" y1="23" x2="16" y2="23" />
                    </svg>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <aside className="hidden w-[300px] flex-shrink-0 flex-col rounded-lg border border-[rgba(135,45,230,0.3)] border-l-[rgba(135,45,230,0.3)] p-6 m-6 mb-6 ml-0 lg:flex">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">History</h2>
              <button
                type="button"
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-none bg-[#2E98FC] text-lg leading-none text-white"
              >
                +
              </button>
            </div>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}
