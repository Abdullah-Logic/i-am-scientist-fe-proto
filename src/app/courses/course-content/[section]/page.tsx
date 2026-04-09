import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseBySection } from "../courseContentData";
import CourseImage from "../CourseImage";
import Image from "next/image";
import { Clock, Globe, Captions } from "lucide-react";

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

const courseCoverBySection: Record<string, string> = {
  "creators-kits": "/courses/creators-Kits.webp",
  "for-kids": "/courses/for-Kids.webp",
  python: "/courses/python.webp",
  "introduction-to-robotics": "/courses/robotics.jpeg",
  "financial-literacy": "/courses/finlet.jpeg",
  "gen-ai": "/courses/gen-ai.jpeg",
  math: "/courses/math.jpeg",
  english: "/courses/english.jpeg",
  science: "/courses/science.jpeg",
  diy: "/courses/landscape.jpeg",
};

const courseIncludesBySection: Record<string, string[]> = {
  "creators-kits": [
    "10 hours on demand video",
    "Hands-on robotics projects",
    "Free of cost",
    "Full lifetime access",
    "Certificate on completion",
  ],
  "for-kids": [
    "8 hours on demand video",
    "Coding exercises",
    "Free of cost",
    "Full lifetime access",
    "Certificate on completion",
  ],
  python: [
    "12 hours on demand video",
    "Real coding exercises",
    "Free of cost",
    "Full lifetime access",
    "Certificate on completion",
  ],
  "introduction-to-robotics": [
    "Hands-on robotics concepts",
    "Printable activity sheets",
    "Free of cost",
    "Full lifetime access",
    "Certificate on completion",
  ],
  "financial-literacy": [
    "Budgeting worksheets",
    "Real-life money scenarios",
    "Free of cost",
    "Full lifetime access",
    "Certificate on completion",
  ],
  "gen-ai": [
    "Prompting playbook",
    "Creative project templates",
    "Free of cost",
    "Full lifetime access",
    "Certificate on completion",
  ],
  math: [
    "Practice problem sets",
    "Visual math activities",
    "Free of cost",
    "Full lifetime access",
    "Certificate on completion",
  ],
  english: [
    "Writing prompts",
    "Speaking practice guides",
    "Free of cost",
    "Full lifetime access",
    "Certificate on completion",
  ],
  science: [
    "Mini lab experiments",
    "Science journals",
    "Free of cost",
    "Full lifetime access",
    "Certificate on completion",
  ],
  diy: [
    "Project build plans",
    "Material checklists",
    "Free of cost",
    "Full lifetime access",
    "Certificate on completion",
  ],
};

const courseSummaryBySection: Record<string, string> = {
  "creators-kits":
    "Build with the Quarky Creator’s Kit while learning mechanics, electronics, and simple programming through guided assemblies.",
  "for-kids":
    "Learn programming fundamentals with fun PictoBlox activities, games, and hands-on challenges designed for young learners.",
  python:
    "Step into text-based coding with beginner-friendly Python lessons and guided practice projects.",
  "introduction-to-robotics":
    "Explore what robots are, how they work, and how to design and program simple robot behaviors.",
  "financial-literacy":
    "Build smart money habits with budgeting, saving goals, and real-world spending decisions.",
  "gen-ai":
    "Learn how generative AI works and use it responsibly for creative projects and problem solving.",
  math: "Strengthen number sense, patterns, geometry, and data skills with engaging practice.",
  english:
    "Develop writing, speaking, and media literacy skills with creative, confidence-building exercises.",
  science:
    "Investigate the natural world through observation, experiments, and core science concepts.",
  diy: "Design, build, and showcase hands-on projects with safe, step-by-step maker skills.",
};

const courseCategoryBySection: Record<string, string> = {
  "creators-kits": "Robotics",
  "for-kids": "Programming",
  python: "Programming",
  "introduction-to-robotics": "Robotics",
  "financial-literacy": "Life Skills",
  "gen-ai": "AI & Technology",
  math: "STEM",
  english: "Language Arts",
  science: "STEM",
  diy: "Maker Education",
};

const courseSubcategoryBySection: Record<string, string> = {
  "creators-kits": "Hands-on Kits",
  "for-kids": "Foundations",
  python: "Text-based Coding",
  "introduction-to-robotics": "Foundations",
  "financial-literacy": "Money Skills",
  "gen-ai": "Creative AI",
  math: "Problem Solving",
  english: "Communication",
  science: "Exploration",
  diy: "Project Building",
};

const courseRequirementsBySection: Record<string, string[]> = {
  "creators-kits": [
    "Interest in building and experimenting",
    "Access to a Creator's Kit (recommended)",
    "No prior robotics experience required",
  ],
  "for-kids": [
    "No prior coding knowledge required",
    "A computer or tablet with internet access",
    "Willingness to learn through activities",
  ],
  python: [
    "Basic comfort using a computer",
    "No prior Python experience required",
    "A device with stable internet connection",
  ],
  "introduction-to-robotics": [
    "Curiosity about how robots work",
    "No prior robotics knowledge required",
    "A device with stable internet connection",
  ],
  "financial-literacy": [
    "No prior finance knowledge required",
    "Notebook for budgeting activities",
    "A device with stable internet connection",
  ],
  "gen-ai": [
    "No prior AI knowledge required",
    "A device with stable internet connection",
    "Readiness to practice responsible AI use",
  ],
  math: [
    "Basic arithmetic familiarity",
    "Notebook for practice problems",
    "A device with stable internet connection",
  ],
  english: [
    "Interest in reading and writing",
    "Notebook for writing exercises",
    "A device with stable internet connection",
  ],
  science: [
    "Curiosity and observation mindset",
    "Simple household materials for activities",
    "A device with stable internet connection",
  ],
  diy: [
    "Interest in making and prototyping",
    "Basic craft materials (recommended)",
    "A device with stable internet connection",
  ],
};

const cardActions = [
  { action: "Share", color: "bg-[#E91E8C]" },
  { action: "Apply Coupon", color: "bg-black" },
];

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const course = getCourseBySection(section);

  if (!course) return notFound();

  const courseIncludes = courseIncludesBySection[
    section as keyof typeof courseIncludesBySection
  ] ?? [
    "On demand video",
    "Practice exercises",
    "Free of cost",
    "Lifetime access",
  ];

  const allTopics = course.lessons.flatMap((lesson) => lesson.topics);
  const firstTopic = allTopics[0];
  const totalLessons = course.lessons.length;
  const totalTopics = allTopics.length;
  const totalQuizzes = allTopics.filter((t) =>
    t.toLowerCase().startsWith("quiz"),
  ).length;
  const courseCover =
    courseCoverBySection[section] ?? "/courses/coming-soon.png";
  const category = courseCategoryBySection[section] ?? "Courses";
  const subcategory = courseSubcategoryBySection[section] ?? "Learning Path";
  const requirements = courseRequirementsBySection[section] ?? [
    "No prior knowledge required",
    "A device with stable internet connection",
    "Commitment to complete lesson activities",
  ];
  const relatedTopics = Array.from(
    new Set(
      course.lessons
        .slice(0, 6)
        .flatMap((lesson) =>
          lesson.topics
            .filter((topic) => !topic.toLowerCase().startsWith("quiz"))
            .slice(0, 1),
        ),
    ),
  ).slice(0, 6);

  const getTopicHref = (topic: string) =>
    `/courses/course-content/${section}/learn?topic=${encodeURIComponent(topic)}`;

  return (
    <div className="min-h-screen text-white">
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#1F0432] via-[#4B0B69] to-[#0E032C]">
        <Image
          src="/courses/stars.png"
          alt="stars"
          height={900}
          width={900}
          className="absolute -top-4 left-60 opacity-90 pointer-events-none z-0"
        />
        <div className="absolute bottom-0 right-20 z-0 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,#E91E8C_0%,transparent_70%)] opacity-[0.41] blur-[100px] pointer-events-none" />

        <div className="absolute top-48 right-[300px] w-[700px] h-[700px] bg-[#1B042D] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
        <div className="absolute top-24 left-[10px] w-[700px] h-[700px] bg-[#4B0764] rotate-[40deg] opacity-40 blur-3xl rounded-full" />
        <div className="absolute top-24 right-[10px] w-[700px] h-[700px] bg-[#4B0764] rotate-[40deg] opacity-40 blur-3xl rounded-full" />
        <div className="absolute top-36 right-[10px] w-[700px] h-[700px] bg-[#4B0764] rotate-[40deg] opacity-40 blur-3xl rounded-full" />
        <div className="absolute top-36 left-[10px] w-[700px] h-[700px] bg-[#4B0764] rotate-[40deg] opacity-40 blur-3xl rounded-full" />
        <div className="absolute top-52 left-[500px] w-[500px] h-[500px] bg-[#090327] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
        <div className="absolute top-24 left-[50px] w-[500px] h-[500px] bg-[#090327] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
        <div className="absolute top-24 right-[50px] w-[500px] h-[500px] bg-[#090327] rotate-[40deg] opacity-50 blur-3xl rounded-full" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-28">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
            <div className="space-y-5">
              <nav className="flex flex-wrap items-center gap-1 text-white text-sm font-semibold">
                <Link href="/courses" className="hover:underline">
                  Courses
                </Link>
                <span className="opacity-40 mx-1">&gt;</span>
                <Link href="/courses" className="hover:underline">
                  {category}
                </Link>
                <span className="opacity-40 mx-1">&gt;</span>
                <span>{subcategory}</span>
                <span className="opacity-40 mx-1">&gt;</span>
                <span className="text-white/80">{course.title}</span>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-white">
                {course.title}
              </h1>

              <p className="text-lg leading-relaxed text-white">
                {courseSummaryBySection[section] ??
                  "Learn with expert guidance, hands-on activities, and practical projects tailored for young learners."}
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <span>
                  <Clock className="mr-1 inline h-5 w-5" /> {totalLessons}{" "}
                  lessons
                </span>
                <span>
                  <Globe className="mr-1 inline h-5 w-5" /> Self-paced
                </span>
                <span>
                  <Captions className="mr-1 inline h-5 w-5" /> {totalTopics}{" "}
                  topics
                </span>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="bg-[#220A34]">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8 lg:items-start">
            <div className="pt-8 space-y-8 pb-24 lg:pb-16">
              <div className="overflow-hidden rounded-xl border border-[#5D3794]/30 bg-[#5D3794] shadow-[0px_0px_50px_rgba(0,217,255,0.2)] lg:hidden">
                <div className="relative cursor-pointer">
                  <CourseImage
                    src={courseCover}
                    alt={`${course.title} cover`}
                    width={340}
                    height={176}
                    className="h-[176px] w-full object-cover"
                  />

                  <div className="absolute bg-[#E91E8C] right-4 top-4 rounded px-2 py-1 text-xs font-bold text-white">
                    Preview this course
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-white">
                      $13.99
                    </span>
                    <span className="text-base line-through text-white/70 ">
                      $84.99
                    </span>
                    <span className="rounded bg-black px-2 py-1 text-xs font-semibold text-white">
                      84% off
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded border border-[#FB2C364D] bg-[#FB2C361A] px-4 py-3">
                    <span>
                      <Clock size={15} />
                    </span>
                    <span className="text-sm font-semibold">
                      2 hours left at this price!
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {firstTopic && (
                      <Link
                        href={getTopicHref(firstTopic)}
                        className="flex h-10 bg-[#E91E8C] w-full items-center justify-center rounded-lg text-sm font-bold text-white transition hover:opacity-90"
                      >
                        Add to cart
                      </Link>
                    )}
                    <button
                      type="button"
                      className="flex h-10 w-full items-center justify-center rounded-lg border border-[#00B8DB] bg-[#0A0E27] text-sm font-bold text-[#00B8DB] transition hover:opacity-80"
                    >
                      Buy now
                    </button>
                  </div>

                  <p className="text-center text-sm text-[#53EAFDB2]">
                    30-Day Money-Back Guarantee
                  </p>

                  <div className="space-y-2.5 border-t border-[rgba(0,184,219,0.2)] pt-4">
                    <h3 className="text-base font-bold text-[#53EAFD]">
                      This course includes:
                    </h3>
                    <ul className="space-y-2 text-sm text-white">
                      {courseIncludes.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="text-white">▶</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between border-t border-[rgba(0,184,219,0.2)] pt-4">
                    {cardActions.map(({ action, color }, index) => (
                      <button
                        type="button"
                        key={index}
                        className={`text-sm font-bold text-white px-3 py-2 rounded-lg ${color}`}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Explore related topics
                </h2>
                <div className="flex flex-wrap gap-3">
                  {relatedTopics.map((topic) => (
                    <div
                      key={topic}
                      className="relative w-fit cursor-pointer rounded-md bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] p-[1px] tracking-wide transition hover:opacity-80"
                    >
                      <div className="rounded-md bg-[#330C60] h-full flex flex-col">
                        <span className="px-4 py-2 text-sm font-bold">
                          {topic}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-[#00B8DB4D] bg-[#330C60] p-10 shadow-[0px_0px_37px_rgba(0,217,255,0.1)]">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-[#00B8DB4D] bg-gradient-to-br from-[#00B8DB33] to-[#AD46FF33]">
                    <span className="text-2xl">{">"}_</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold">Coding Exercises</h3>
                    <p className="mb-4 text-sm leading-relaxed text-white/70">
                      This course includes our updated coding exercises so you
                      can practice your skills.
                    </p>
                    <button
                      type="button"
                      className="text-sm font-bold underline"
                    >
                      Learn more
                    </button>
                  </div>
                  <div className="hidden w-[200px] shrink-0 rounded-xl border border-[#00B8DB4D] bg-[#0A0E27] p-4 font-mono text-sm leading-loose shadow-[0px_0px_24px_rgba(0,217,255,0.2)] sm:block">
                    <div>
                      <span className="text-[#569CD6]">def </span>
                      <span className="text-[#DCDCAA]">train_model</span>
                      <span className="text-[#FFD700]">(</span>
                      <span className="text-[#9CDCFE]">data</span>
                      <span className="text-[#FFD700]">)</span>
                      <span className="text-[#D4D4D4]">:</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-[#9CDCFE]">model</span>
                      <span className="text-[#D4D4D4]"> = </span>
                      <span className="text-[#DCDCAA]">create</span>
                      <span className="text-[#FFD700]">()</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-[#9CDCFE]">model</span>
                      <span className="text-[#D4D4D4]">.</span>
                      <span className="text-[#DCDCAA]">fit</span>
                      <span className="text-[#FFD700]">(</span>
                      <span className="text-[#9CDCFE]">data</span>
                      <span className="text-[#FFD700]">)</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-[#569CD6]">return </span>
                      <span className="text-[#9CDCFE]">model</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="overflow-hidden rounded-xl border border-[#00B8DB4D] bg-[#330C60] shadow-[0px_0px_37px_rgba(0,217,255,0.1)]">
                <div className="border-b border-[rgba(0,184,219,0.2)] px-8 pb-6 pt-8">
                  <h2 className="mb-3 text-2xl font-bold">Course content</h2>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      {totalLessons} sections • {totalTopics} lectures •{" "}
                      {totalQuizzes} quizzes
                    </span>
                    <button type="button" className="text-sm font-bold">
                      Expand all sections
                    </button>
                  </div>
                </div>
                <div>
                  {course.lessons.map((lesson, li) => (
                    <details
                      key={lesson.title}
                      open={li === 0}
                      className="group border-b border-[rgba(0,184,219,0.2)]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between px-8 py-4 hover:opacity-80 transition">
                        <div className="flex items-center gap-3">
                          <span className="inline-block -rotate-90 text-xs text-white transition-transform group-open:rotate-0">
                            ▼
                          </span>
                          <span className="text-sm font-bold text-white">
                            {lesson.title}
                          </span>
                        </div>
                        <div className="flex shrink-0 items-center gap-2 text-xs font-semibold text-[rgba(162,244,253,0.7)]">
                          <span>{lesson.topics.length} lectures</span>
                          <span>•</span>
                          <span>45 min</span>
                        </div>
                      </summary>
                      <ul>
                        {lesson.topics.map((topic) => (
                          <li
                            key={topic}
                            className="border-t border-[rgba(0,184,219,0.1)]"
                          >
                            <Link
                              href={getTopicHref(topic)}
                              className="flex items-center justify-between px-10 py-3 hover:opacity-70 transition"
                            >
                              <span className="flex items-center gap-3 text-sm text-[rgba(206,250,254,0.8)]">
                                <span className="text-xs">▶</span>
                                {topic}
                              </span>
                              <span className="ml-4 shrink-0 text-xs text-[rgba(162,244,253,0.7)]">
                                {topic.toLowerCase().startsWith("quiz")
                                  ? "Quiz"
                                  : "5 min"}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </section>

              <section className="space-y-4 !text-white">
                <h2 className="text-2xl font-bold">Requirements</h2>
                <ul className="space-y-2.5">
                  {requirements.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4 pb-10 text-white">
                <h2 className="text-2xl font-bold">Description</h2>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>
                    {courseSummaryBySection[section] ??
                      `${course.title} helps learners build practical skills through structured lessons and guided activities.`}
                  </p>
                  <p>
                    This course contains {totalLessons} sections and{" "}
                    {totalTopics} total topics, designed to help learners
                    progress step by step from fundamentals to practical
                    application.
                  </p>
                </div>
              </section>
            </div>

            <div className="hidden lg:block lg:self-stretch -mt-[20.5rem] my-10 z-50">
              <div className="sticky top-24">
                <div className="overflow-hidden rounded-xl border border-[#00B8DB4D] bg-[#5D3794] shadow-[0px_0px_50px_rgba(0,217,255,0.2)]">
                  <div className="relative cursor-pointer">
                    <CourseImage
                      src={courseCover}
                      alt={`${course.title} cover`}
                      width={340}
                      height={176}
                      className="h-[176px] w-full object-cover"
                    />

                    <div className="absolute right-5 top-5 rounded bg-[#E91E8C] px-2 py-1 text-xs font-bold text-white">
                      Preview this course
                    </div>
                  </div>

                  <div className="space-y-3 p-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-white">
                        $13.99
                      </span>
                      <span className="text-lg text-white/70 line-through">
                        $84.99
                      </span>
                      <span className="rounded bg-black px-2 py-1 text-xs font-semibold text-white">
                        84% off
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded border border-[#FB2C364D] bg-[#FB2C361A] px-4 py-2">
                      <span>
                        <Clock size={15} />
                      </span>
                      <span className="text-sm font-semibold">
                        2 hours left at this price!
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {firstTopic && (
                        <Link
                          href={getTopicHref(firstTopic)}
                          className="flex bg-[#E91E8C] h-10 w-full items-center justify-center rounded-lg text-sm font-bold text-white transition hover:opacity-90"
                        >
                          Add to cart
                        </Link>
                      )}
                      <button
                        type="button"
                        className="flex h-10 w-full items-center justify-center rounded-lg border border-[#00B8DB] bg-[#0A0E27] text-sm font-bold text-[#00B8DB] transition hover:opacity-80"
                      >
                        Buy now
                      </button>
                    </div>

                    <p className="text-center text-sm text-[#53EAFDB2]">
                      30-Day Money-Back Guarantee
                    </p>

                    <div className="space-y-2.5 border-t border-[rgba(0,184,219,0.2)] pt-4">
                      <h3 className="text-base font-bold text-[#53EAFD]">
                        This course includes:
                      </h3>
                      <ul className="space-y-2">
                        {courseIncludes.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-white"
                          >
                            <span className="text-white">▶</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between border-t border-[rgba(0,184,219,0.2)] pt-4">
                      {cardActions.map(({ action, color }, index) => (
                        <button
                          type="button"
                          key={index}
                          className={`text-sm font-bold text-white px-3 py-2 rounded-lg ${color}`}
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
