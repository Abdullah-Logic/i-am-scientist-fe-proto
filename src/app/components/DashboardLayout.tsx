"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

interface DashboardLayoutProps {
  children: ReactNode;
  activeTab?: string;
  onTabChange?: (tabName: string) => void;
}

export default function DashboardLayout({
  children,
  activeTab = "Favorites",
  onTabChange,
}: DashboardLayoutProps) {
  const [isSidebarOpen] = useState(false);
  const sidebarItems = [
    {
      name: "All Magic Tools",
      icon: (
        <path
          d="M3 12h18M3 6h18M3 18h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ),
    },
    {
      name: "Chatbot",
      icon: (
        <path
          d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      name: "Upgrade",
      icon: (
        <path
          d="M5 10l7-7m0 0l7 7m-7-7v18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
  ];

  const isNestedPage = !onTabChange;

  const mainClassName =
    activeTab === "Chatbot"
      ? "flex min-h-0 flex-1 flex-col overflow-hidden p-0 font-poppins"
      : isNestedPage
        ? "min-h-0 flex-1 overflow-y-auto p-4 font-poppins md:px-16 md:py-6"
        : "min-h-0 flex-1 overflow-y-auto p-6 font-poppins md:p-10";

  return (
    <div className="flex min-h-screen w-full max-w-[100vw] flex-col overflow-hidden bg-[radial-gradient(circle_at_center,#3c0c73_0%,#1f0545_40%,#110129_100%)] font-poppins text-white">
      <Navbar />

      <div className="flex min-h-0 flex-1 flex-row overflow-hidden">
        <aside
          className={`flex w-[250px] shrink-0 flex-col self-stretch bg-[rgba(17,1,41,0.4)] max-md:fixed max-md:bottom-0 max-md:left-[-250px] max-md:top-[70px] max-md:z-[1000] max-md:bg-[rgba(17,1,41,0.95)] max-md:backdrop-blur-md max-md:transition-[left] max-md:duration-300 max-md:ease-in-out ${isSidebarOpen ? "max-md:left-0" : ""}`}
        >
          <div className="flex flex-1 flex-col gap-2 overflow-y-auto pt-[60px]">
            {sidebarItems.map((item) => {
              let linkHref = "#";
              if (item.name === "Favorites") linkHref = "/favorites";
              if (item.name === "All Magic Tools") linkHref = "/teacher/tools";
              if (item.name === "Chatbot") linkHref = "/chatbot";
              if (item.name === "Upgrade") linkHref = "/upgrade";

              const isActive = activeTab === item.name;

              return (
                <Link key={item.name} href={linkHref} className="no-underline">
                  <div
                    className={`flex cursor-pointer items-center gap-4 px-6 py-[0.85rem] text-[0.9rem] font-medium text-[#e0e0e0] transition-all duration-200 hover:bg-[rgba(209,18,209,0.1)] hover:text-white ${
                      isActive ? "text-[#d112d1]" : ""
                    }`}
                  >
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white [&>svg]:h-[14px] [&>svg]:w-[14px] [&>svg]:text-[#1a053f] ${
                        isActive ? "bg-[#d112d1] [&>svg]:text-white" : ""
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none">
                        {item.icon}
                      </svg>
                    </div>
                    <span>{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          <main className={mainClassName}>{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
