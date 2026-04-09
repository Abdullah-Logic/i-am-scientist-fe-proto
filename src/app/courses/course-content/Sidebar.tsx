"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { courseContentLinks, getCourseByPath } from "./courseContentData";

const scrollbarClass =
  "[scrollbar-width:auto] [scrollbar-color:#E01CF4_#0A0E27] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#E01CF4] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-[#E01CF4] [&::-webkit-scrollbar-thumb]:bg-[linear-gradient(180deg,#00B8DB_0%,#9810FA_55%,#E91E8C_100%)] [&::-webkit-scrollbar-thumb:hover]:bg-[linear-gradient(180deg,#0097B8_0%,#B835FF_100%)]";

const Sidebar = (): JSX.Element => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedTopic = searchParams.get("topic") ?? "";
  const isLearnPage = pathname.endsWith("/learn");

  const activeLink = getCourseByPath(pathname);
  const [openLessonIndex, setOpenLessonIndex] = useState<number>(0);
  const effectiveSelectedTopic = isLearnPage
    ? selectedTopic || activeLink?.lessons?.[0]?.topics?.[0] || ""
    : "";

  const selectedLessonIndex = useMemo(() => {
    if (!activeLink || !effectiveSelectedTopic) return 0;
    return activeLink.lessons.findIndex((lesson) =>
      lesson.topics.some((topic) => topic === effectiveSelectedTopic),
    );
  }, [activeLink, effectiveSelectedTopic]);

  useEffect(() => {
    if (selectedLessonIndex >= 0) {
      setOpenLessonIndex(selectedLessonIndex);
    }
  }, [selectedLessonIndex]);

  return (
    <aside
      className={`${scrollbarClass} relative w-full border-r border-r-[#00B8DB]/30 bg-[#2E0B54] md:h-full md:w-[360px] md:shrink-0 md:overflow-y-auto`}
    >
      <Link href="/courses">
        <div className="absolute left-5 top-5 rounded-full border border-[#00B8DB]/60 bg-[#0A0E27]/80 px-3 py-1 text-xs font-semibold text-[#FFFFFF] transition-all hover:bg-[#9810FA]/45">
          Back
        </div>
      </Link>
      <nav className="p-4">
        {activeLink && (
          <div className="mt-10 overflow-hidden rounded-xl border border-[#00B8DB]/35 bg-[#2E0B54]/70 shadow-[0_0_0_1px_rgba(0,184,219,0.2)]">
            <Link
              href={activeLink.href}
              className="block border-b border-[#00B8DB]/35 bg-[#0A1A3A] px-4 py-3 text-2xl font-extrabold leading-tight text-[#FFFFFF] transition-colors hover:bg-[#102651]"
            >
              {activeLink.title}
            </Link>

            <div className="border-b border-[#00B8DB]/35 bg-[#2E0B54]/90 px-4 py-2.5 text-xs text-[#8AB3D8]">
              <p className="font-semibold text-[#FFFFFF]">0% Complete</p>
            </div>

            <div>
              {activeLink.lessons?.map((lesson, lessonIndex) => {
                const isLessonActive = lessonIndex === selectedLessonIndex;
                return (
                  <section key={lesson.title}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenLessonIndex((prev) =>
                          prev === lessonIndex ? -1 : lessonIndex,
                        )
                      }
                      className={`flex w-full items-center justify-between border-y border-[#00B8DB]/30 px-4 py-2.5 text-left text-[14px] font-bold text-[#CEFAFE] transition-colors ${
                        isLessonActive
                          ? "bg-[#4B0B69] shadow-[inset_0_0_0_1px_rgba(0,184,219,0.45)]"
                          : "bg-[#4B0B69] hover:bg-[#4B0B69]/80"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[9px] text-[#8AB3D8]">
                          {openLessonIndex === lessonIndex ? "▼" : "▶"}
                        </span>
                        <span className="truncate">{lesson.title}</span>
                      </span>
                      <span className="shrink-0 text-[11px] font-medium text-[#8AB3D8]">
                        {lesson.topics.length} Topics | 1 Quiz
                      </span>
                    </button>

                    {openLessonIndex === lessonIndex && (
                      <ul className="divide-y divide-[#00B8DB]/20">
                        {lesson.topics?.map((topic) => {
                          const isTopicActive =
                            lessonIndex === selectedLessonIndex &&
                            effectiveSelectedTopic === topic;
                          return (
                            <li key={topic}>
                              <Link
                                href={`${activeLink.href}/learn?topic=${encodeURIComponent(topic)}`}
                                className={`flex items-center justify-between gap-3 px-4 py-2.5 text-[13px] transition-colors ${
                                  isTopicActive
                                    ? "bg-[#00B8DB]/20 font-semibold text-[#CEFAFE]"
                                    : "text-[#C0E6FF] hover:bg-[#102651]"
                                }`}
                              >
                                <span className="truncate">{topic}</span>
                                <span
                                  className={`h-4 w-4 shrink-0 rounded-full border-2 transition-colors ${
                                    isTopicActive
                                      ? "border-[#00B8DB] bg-[#00B8DB]/30"
                                      : "border-[#8AB3D8]"
                                  }`}
                                />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        )}

        {!activeLink && (
          <div className="rounded-md border border-[#00B8DB]/35 bg-[#2E0B54]/70 p-4 text-sm text-[#C0E6FF]">
            <p>Open this page from a course card to load its syllabus.</p>
            <div className="mt-3 space-y-2">
              {courseContentLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded border border-[#00B8DB]/35 bg-[#0A1A3A] px-3 py-2 text-[#CEFAFE] transition-colors hover:bg-[#102651]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
