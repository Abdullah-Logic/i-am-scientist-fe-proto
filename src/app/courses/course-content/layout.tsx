"use client";

import Container from "@/app/components/container/container";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

const scrollbarClass =
  "[scrollbar-width:auto] [scrollbar-color:#E01CF4_#0A0E27] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#E01CF4] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-[#E01CF4] [&::-webkit-scrollbar-thumb]:bg-[linear-gradient(180deg,#00B8DB_0%,#9810FA_55%,#E91E8C_100%)] [&::-webkit-scrollbar-thumb:hover]:bg-[linear-gradient(180deg,#0097B8_0%,#B835FF_100%)]";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTocPage = /^\/courses\/course-content\/[^/]+\/?$/.test(pathname);

  return (
    <Container>
      <section className="bg-[linear-gradient(180deg,_#1A1A3E_0%,_#2A4A7C_48%,_#011C3A_100%)]">
        <div
          className={`flex min-h-screen flex-col ${
            isTocPage
              ? ""
              : "md:h-screen md:min-h-0 md:flex-row md:overflow-hidden"
          }`}
        >
          {!isTocPage ? <Sidebar /> : null}
          <div
            className={`${scrollbarClass} flex-1 ${
              isTocPage
                ? "bg-transparent p-0"
                : "min-h-screen bg-[#4B0B69]/55 p-6 md:min-h-0 md:overflow-y-auto md:p-10"
            }`}
          >
            {children}
          </div>
        </div>
      </section>
    </Container>
  );
}
