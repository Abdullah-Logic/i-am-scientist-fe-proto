import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import { getCourseBySection } from "../../courseContentData";
import CourseImage from "../../CourseImage";
import type { TopicContentBlock } from "../../topicContent";

const scrollbarClass =
  "[scrollbar-width:auto] [scrollbar-color:#00B8DB_#0A0E27] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#0A0E27] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-[#0A0E27] [&::-webkit-scrollbar-thumb]:bg-[linear-gradient(180deg,#00B8DB_0%,#9810FA_55%,#E91E8C_100%)] [&::-webkit-scrollbar-thumb:hover]:bg-[linear-gradient(180deg,#0097B8_0%,#B835FF_100%)]";

const loadTopicContentBySection = cache(async () => {
  const mod = await import("../../topicContent");
  return mod.topicContentBySection;
});

function renderBlock(block: TopicContentBlock, key: string) {
  if (block.type === "heading") {
    return (
      <h3
        key={key}
        className="text-xl font-bold"
        style={{ color: "#FFFFFF" }}
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p key={key} className="text-[15px] leading-relaxed text-[#FFFFFF]">
        {block.text}
      </p>
    );
  }

  if (block.type === "text") {
    return (
      <p key={key} className="text-[15px] leading-relaxed text-[#FFFFFF]">
        {block.content}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <div key={key} className="space-y-2">
        {block.title && (
          <h3 className="text-base font-bold text-[#FFFFFF]">{block.title}</h3>
        )}
        <ul className="space-y-1.5 pl-2 text-[15px] leading-relaxed text-[#FFFFFF]">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-[7px] h-0 w-0 shrink-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-[#00D3F2]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "imageGrid") {
    return (
      <div key={key} className="space-y-3">
        {block.title && (
          <h3 className="text-base font-bold text-[#FFFFFF]">{block.title}</h3>
        )}
        <div
          className={`grid gap-4 ${
            block.items.length === 1
              ? "max-w-xs grid-cols-1"
              : block.items.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {block.items.map((item) => (
            <figure
              key={`${item.src}-${item.label}`}
              className="overflow-hidden rounded-lg border border-[#00B8DB]/35 bg-[#330C60] shadow-sm"
            >
              <div className="flex h-44 items-center justify-center bg-[linear-gradient(145deg,_#FFFFFF_0%,_#C0C0C0_100%)] p-3">
                <div className="rounded-lg border border-[#A0A0A0]/70 bg-[#FFFFFF]/85 p-2 shadow-inner">
                  <CourseImage
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              {item.label && (
                <figcaption className="border-t border-[#00B8DB]/30 px-3 py-2 text-center text-sm font-semibold italic text-[#FFFFFF]">
                  {item.label}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div key={key} className="space-y-2">
        {block.title && (
          <h3 className="text-base font-bold text-[#FFFFFF]">{block.title}</h3>
        )}
        <div
          className={`${scrollbarClass} overflow-x-auto rounded-lg border border-[#00B8DB]/35 shadow-sm`}
        >
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#0A0E27]">
                {block.columns.map((column) => (
                  <th
                    key={column}
                    className="border-b border-[#00B8DB]/35 px-4 py-2.5 text-left font-bold text-[#FFFFFF]"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr
                  key={`${key}-row-${rowIndex}`}
                  className="odd:bg-[#330C60] even:bg-[#0A1A3A] transition-colors hover:bg-[#9810FA]/15"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${key}-cell-${rowIndex}-${cellIndex}`}
                      className="border-b border-[#00B8DB]/20 px-4 py-2 text-[#FFFFFF]"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <figure key={key} className="space-y-5">
        {block.title && (
          <h3 className="text-base font-bold text-[#FFFFFF]">{block.title}</h3>
        )}
        <div className="flex justify-center">
          <div className="inline-flex overflow-hidden rounded-xl border border-[#00B8DB]/35 bg-[linear-gradient(145deg,_#FFFFFF_0%,_#C0C0C0_100%)] p-3 shadow-[0_0_0_1px_rgba(0,184,219,0.2)]">
            <div className="rounded-lg border border-[#A0A0A0]/70 bg-[#FFFFFF]/85 p-2">
              <CourseImage
                src={block.src}
                alt={block.alt}
                width={1200}
                height={675}
                className="h-auto w-[400px] max-w-full object-contain"
              />
            </div>
          </div>
        </div>
        {block.caption && (
          <figcaption className="text-center text-sm italic text-[#FFFFFF]">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block.type === "video") {
    return (
      <div key={key} className="space-y-2">
        {block.title && (
          <h3 className="text-base font-bold text-[#FFFFFF]">{block.title}</h3>
        )}
        <div className="overflow-hidden rounded-xl border border-[#00B8DB]/35 shadow-sm">
          <div className="relative aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${block.videoId}`}
              title={block.title ?? "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
        {block.caption && (
          <p className="text-center text-sm italic text-[#FFFFFF]">
            {block.caption}
          </p>
        )}
      </div>
    );
  }

  if (block.type === "quiz") {
    return (
      <div key={key} className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#FFFFFF]">{block.title}</h3>
          {block.timeLimit && (
            <span className="rounded-full border border-[#00B8DB]/50 bg-[#00B8DB]/15 px-3 py-1 text-xs font-semibold text-[#FFFFFF]">
              Time limit: {block.timeLimit}
            </span>
          )}
        </div>

        <div className="space-y-6">
          {block.questions.map((q, qi) => (
            <div
              key={qi}
              className="space-y-3 rounded-lg border border-[#00B8DB]/35 bg-[#0A1A3A] p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-bold text-[#FFFFFF]">
                  {qi + 1}. {q.question}
                </p>
                <span className="shrink-0 rounded-full bg-[#0A0E27] px-2 py-0.5 text-xs font-semibold text-[#FFFFFF]">
                  {q.points} pt{q.points !== 1 ? "s" : ""}
                </span>
              </div>

              {(q.type === "true-false" || q.type === "multiple-choice") && (
                <ul className="space-y-2">
                  {q.options.map((opt, oi) => (
                    <li
                      key={oi}
                      className="cursor-pointer rounded-md border border-[#00B8DB]/30 px-3 py-2 text-sm text-[#FFFFFF] hover:bg-[#9810FA]/15"
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}

              {q.type === "reorder" && (
                <ul className="space-y-2">
                  {q.options.map((opt, oi) => (
                    <li
                      key={oi}
                      className="cursor-grab rounded-md border border-[#00B8DB]/30 bg-[#330C60] px-3 py-2 text-sm text-[#FFFFFF]"
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}

              {q.type === "match" && (
                <div className="space-y-3">
                  {q.instruction && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#FFFFFF]">
                      {q.instruction}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {q.terms.map((term, ti) => (
                      <span
                        key={ti}
                        className="cursor-grab rounded-md border border-[#00B8DB]/30 bg-[#330C60] px-3 py-1 text-sm font-medium text-[#FFFFFF] shadow-sm"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {q.definitions.map((def, di) => (
                      <li
                        key={di}
                        className="flex items-center gap-3 rounded-md border border-dashed border-[#00B8DB]/30 bg-[#0A1A3A] px-3 py-2 text-sm text-[#FFFFFF]"
                      >
                        <span className="h-6 w-24 shrink-0 rounded border border-[#00B8DB]/30 bg-[#0A0E27]" />
                        {def}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const toneClass =
    block.tone === "success"
      ? "border-l-[#00B8DB] bg-[#0A1A3A] text-[#FFFFFF]"
      : block.tone === "warning"
        ? "border-l-[#E91E8C] bg-[#2A1238] text-[#FFFFFF]"
        : "border-l-[#00B8DB] bg-[#330C60] text-[#FFFFFF]";

  return (
    <div
      key={key}
      className={`rounded-r-md border-l-4 px-4 py-3 text-sm leading-relaxed ${toneClass}`}
    >
      {block.text}
    </div>
  );
}

type SectionPageProps = {
  params: Promise<{ section: string }>;
  searchParams?: Promise<{ topic?: string }>;
};

export default async function SectionLearnPage({
  params,
  searchParams,
}: SectionPageProps) {
  const { section } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const course = getCourseBySection(section);

  if (!course) return notFound();

  const allTopics = course.lessons.flatMap((lesson) =>
    lesson.topics.map((topic) => ({
      topic,
      lessonTitle: lesson.title,
    })),
  );

  const selectedTopic = resolvedSearchParams?.topic ?? allTopics[0]?.topic;
  const getTopicHref = (topic: string) =>
    `/courses/course-content/${section}/learn?topic=${encodeURIComponent(topic)}`;

  const selectedTopicEntry = allTopics.find((entry) => entry.topic === selectedTopic);

  if (!selectedTopicEntry) return notFound();

  const selectedTopicIndex = allTopics.findIndex(
    (entry) => entry.topic === selectedTopicEntry.topic,
  );
  const previousTopic =
    selectedTopicIndex > 0 ? allTopics[selectedTopicIndex - 1] : null;
  const nextTopic =
    selectedTopicIndex < allTopics.length - 1
      ? allTopics[selectedTopicIndex + 1]
      : null;

  const topicContentBySection = await loadTopicContentBySection();
  const topicContent = topicContentBySection[section]?.[selectedTopicEntry.topic];

  return (
    <div
      className="min-h-screen"
      style={{
          background: "linear-gradient(180deg, #1F0432 0%, #4B0B69 50%, #0E032C 100%)",

      }}
    >
      <div className="relative w-full overflow-hidden">
        <div
          className="pointer-events-none absolute bottom-0 right-20 z-0 h-[300px] w-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, #E91E8C 0%, transparent 70%)",
            opacity: 0.41,
            filter: "blur(100px)",
          }}
        />

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-8 md:px-12 md:py-10">
          <nav
            className="rounded-xl border p-4"
            style={{
              background: "#330C60",
              borderColor: "rgba(0,184,219,0.3)",
              boxShadow: "0px 0px 37px rgba(0,217,255,0.1)",
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[#FFFFFF]">
                Topic {selectedTopicIndex + 1} of {allTopics.length}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {previousTopic ? (
                  <Link
                    href={getTopicHref(previousTopic.topic)}
                    aria-label={`Previous topic: ${previousTopic.topic}`}
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium text-[#FFFFFF] transition hover:bg-[#9810FA]/20"
                    style={{ borderColor: "rgba(0,184,219,0.35)" }}
                  >
                    <span className="text-base leading-none">←</span>
                    <span className="truncate">Previous</span>
                  </Link>
                ) : null}
                {nextTopic ? (
                  <Link
                    href={getTopicHref(nextTopic.topic)}
                    aria-label={`Next topic: ${nextTopic.topic}`}
                    className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-white transition hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(90deg, #C407B9 0%, #C407B9 100%)",
                    }}
                  >
                    <span className="truncate">Next</span>
                    <span className="text-base leading-none">→</span>
                  </Link>
                ) : null}
              </div>
            </div>

            <details className="mt-3">
              <summary className="cursor-pointer text-sm font-semibold text-[#FFFFFF] hover:text-[#FFFFFF]">
                Browse all lesson topics
              </summary>
              <div
                className={`${scrollbarClass} mt-3 max-h-64 space-y-3 overflow-y-auto rounded-md border p-3`}
                style={{
                  borderColor: "rgba(0,184,219,0.35)",
                  background: "#0A1A3A",
                }}
              >
                {course.lessons.map((lesson) => (
                  <div key={lesson.title} className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wide text-[#FFFFFF]">
                      {lesson.title}
                    </h3>
                    <ul className="space-y-1">
                      {lesson.topics.map((topic) => {
                        const isActive = topic === selectedTopicEntry.topic;
                        return (
                          <li key={topic}>
                            <Link
                              href={getTopicHref(topic)}
                              className={`block rounded-md px-2 py-1.5 text-sm transition ${
                                isActive
                                  ? "font-semibold text-[#FFFFFF]"
                                  : "text-[#FFFFFF] hover:bg-[#9810FA]/20"
                              }`}
                              style={
                                isActive
                                  ? {
                                      background:
                                        "linear-gradient(90deg, rgba(0,184,219,0.2) 0%, rgba(152,16,250,0.25) 100%)",
                                      border: "1px solid rgba(0,184,219,0.45)",
                                    }
                                  : undefined
                              }
                            >
                              {topic}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          </nav>
        </section>
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-6 md:px-12">
        <header
          className="mb-6 rounded-xl border p-6"
          style={{
            background: "#330C60",
            borderColor: "rgba(0,184,219,0.3)",
            boxShadow: "0px 0px 37px rgba(0,217,255,0.1)",
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#FFFFFF" }}
          >
            {course.title}
          </p>
          <h1
            className="mt-2 text-3xl font-extrabold leading-tight"
            style={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #C27AFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {selectedTopicEntry.topic}
          </h1>
          <p className="mt-1 text-sm text-[#FFFFFF]">
            {selectedTopicEntry.lessonTitle}
          </p>
        </header>

        {topicContent ? (
          <article
            className="rounded-xl border p-6 md:p-8"
            style={{
              background: "#330C60",
              borderColor: "rgba(0,184,219,0.3)",
              boxShadow: "0px 0px 37px rgba(0,217,255,0.1)",
            }}
          >
            {topicContent.intro && (
              <div className="mb-8 border-l-4 border-[#00B8DB] pl-4">
                <p className="text-[15px] leading-relaxed text-[#FFFFFF]">
                  {topicContent.intro}
                </p>
              </div>
            )}

            {topicContent.blocks.map((block, index) => (
              <div key={`${block.type}-${index}`} className="pb-8 last:pb-0">
                {renderBlock(block, `${block.type}-${index}`)}
              </div>
            ))}
          </article>
        ) : (
          <article
            className="rounded-xl border p-6"
            style={{
              background: "#330C60",
              borderColor: "rgba(0,184,219,0.3)",
            }}
          >
            <p className="text-[15px] leading-relaxed text-[#FFFFFF]">
              You are viewing <strong>{selectedTopicEntry.topic}</strong> from{" "}
              <strong>{selectedTopicEntry.lessonTitle}</strong>.
            </p>
          </article>
        )}

        <nav
          className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4"
          style={{
            background: "#330C60",
            borderColor: "rgba(0,184,219,0.3)",
          }}
        >
          {previousTopic ? (
            <Link
              href={getTopicHref(previousTopic.topic)}
              aria-label={`Previous topic: ${previousTopic.topic}`}
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium text-[#FFFFFF] transition hover:bg-[#9810FA]/20"
              style={{ borderColor: "rgba(0,184,219,0.35)" }}
            >
              <span className="text-base leading-none">←</span>
              <span className="truncate">{previousTopic.topic}</span>
            </Link>
          ) : (
            <span />
          )}
          {nextTopic ? (
            <Link
              href={getTopicHref(nextTopic.topic)}
              aria-label={`Next topic: ${nextTopic.topic}`}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white transition hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #E91E8C00 0%, #9810FA 100%)",
              }}
            >
              <span className="truncate">{nextTopic.topic}</span>
              <span className="text-base leading-none">→</span>
            </Link>
          ) : null}
        </nav>
      </section>
    </div>
  );
}
