"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Container from "../components/container/container";

type CourseCategory = {
  name: string;
  bg: string;
  shadow: string;
  icon?: string;
};

type CourseCard = {
  id: string;
  title: string;
  description: string;
  category: string;
  enrolled: number;
  students: number;
  rating: number;
  ratingsCount: number;
  price: string;
  originalPrice?: string;
  perClass: string;
  image: string;
  chips: string[];
  link: string;
};

type CourseSelectionProps = {
  title?: string;
  subtitle?: string;
  viewAllHref?: string;
  categories?: CourseCategory[];
  courses?: CourseCard[];
};

const defaultCategories: CourseCategory[] = [
  {
    name: "Coding",
    bg: "#3DA5E9",
    shadow: "0px 4px 6px -4px #3DA5E980, 0px 10px 15px -3px #3DA5E980",
  },
  {
    name: "Robotics",
    bg: "#FACF55",
    shadow: "0px 4px 6px -4px #FACF5580, 0px 10px 15px -3px #FACF5580",
  },
  {
    name: "Financial Literacy",
    bg: "#EE5448",
    shadow: "0px 4px 6px -4px #EE544880, 0px 10px 15px -3px #EE544880",
  },
  {
    name: "Gen AI",
    bg: "#884AEE",
    shadow: "0px 4px 6px -4px #884AEE80, 0px 10px 15px -3px #884AEE80",
  },
  {
    name: "Math",
    bg: "#E8C044",
    shadow: "0px 4px 6px -4px #E8C04480, 0px 10px 15px -3px #E8C04480",
  },
  {
    name: "English",
    bg: "#65E3BE",
    shadow: "0px 4px 6px -4px #65E3BE80, 0px 10px 15px -3px #65E3BE80",
  },
  {
    name: "Science",
    bg: "#DB4AA9",
    shadow: "0px 4px 6px -4px #DB4AA980, 0px 10px 15px -3px #DB4AA980",
  },
  {
    name: "DIY",
    bg: "#C354D8",
    shadow: "0px 4px 6px -4px #C354D880, 0px 10px 15px -3px #C354D880",
  },
];

const defaultCourses: CourseCard[] = [
  {
    id: "quarky-creators-kit",
    title: "Quarky Creator’s Kit Course",
    description: "3 Lessons",
    category: "Coding",
    enrolled: 0,
    students: 0,
    rating: 0,
    ratingsCount: 0,
    price: "",
    perClass: "0% Complete",
    image: "/courses/creators-kits.webp",
    chips: ["FREE"],
    link: "/courses/course-content/creators-kits",
  },
  {
    id: "intro-to-robotics",
    title: "Introduction to Robotics",
    description: "12 Lessons",
    category: "Robotics",
    enrolled: 0,
    students: 0,
    rating: 0,
    ratingsCount: 0,
    price: "",
    perClass: "0% Complete",
    image: "/courses/robotics.jpeg",
    chips: ["FREE"],
    link: "/courses/course-content/introduction-to-robotics",
  },
  {
    id: "intro-to-programming",
    title: "Introduction to Programming",
    description: "11 Lessons",
    category: "Coding",
    enrolled: 0,
    students: 0,
    rating: 0,
    ratingsCount: 0,
    price: "",
    perClass: "0% Complete",
    image: "/courses/for-kids.webp",
    chips: ["FREE"],
    link: "/courses/course-content/for-kids",
  },
  {
    id: "intro-to-python",
    title: "Introduction to Python",
    description: "6 Lessons",
    category: "Coding",
    enrolled: 0,
    students: 0,
    rating: 0,
    ratingsCount: 0,
    price: "",
    perClass: "0% Complete",
    image: "/courses/python.webp",
    chips: ["FREE"],
    link: "/courses/course-content/python",
  },
  {
    id: "smart-money-foundations",
    title: "Smart Money Foundations",
    description: "8 Lessons",
    category: "Financial Literacy",
    enrolled: 0,
    students: 0,
    rating: 0,
    ratingsCount: 0,
    price: "",
    perClass: "0% Complete",
    image: "/courses/finlet.jpeg",
    chips: ["FREE"],
    link: "/courses/course-content/financial-literacy",
  },
  {
    id: "gen-ai-creators",
    title: "Gen AI for Creators",
    description: "8 Lessons",
    category: "Gen AI",
    enrolled: 0,
    students: 0,
    rating: 0,
    ratingsCount: 0,
    price: "",
    perClass: "0% Complete",
    image: "/courses/gen-ai.jpeg",
    chips: ["FREE"],
    link: "/courses/course-content/gen-ai",
  },
  {
    id: "math-adventures",
    title: "Math Adventures: Patterns & Problem Solving",
    description: "8 Lessons",
    category: "Math",
    enrolled: 0,
    students: 0,
    rating: 0,
    ratingsCount: 0,
    price: "",
    perClass: "0% Complete",
    image: "/courses/math.jpeg",
    chips: ["FREE"],
    link: "/courses/course-content/math",
  },
  {
    id: "creative-writing",
    title: "Creative Writing & Communication",
    description: "8 Lessons",
    category: "English",
    enrolled: 0,
    students: 0,
    rating: 0,
    ratingsCount: 0,
    price: "",
    perClass: "0% Complete",
    image: "/courses/english.jpeg",
    chips: ["FREE"],
    link: "/courses/course-content/english",
  },
  {
    id: "exploring-science",
    title: "Exploring Science Lab",
    description: "8 Lessons",
    category: "Science",
    enrolled: 0,
    students: 0,
    rating: 0,
    ratingsCount: 0,
    price: "",
    perClass: "0% Complete",
    image: "/courses/science.jpeg",
    chips: ["FREE"],
    link: "/courses/course-content/science",
  },
  {
    id: "diy-makers-lab",
    title: "DIY Makers Lab",
    description: "8 Lessons",
    category: "DIY",
    enrolled: 0,
    students: 0,
    rating: 0,
    ratingsCount: 0,
    price: "",
    perClass: "0% Complete",
    image: "/courses/diy.jpeg",
    chips: ["FREE"],
    link: "/courses/course-content/diy",
  },
];

const SECTION_ARIA_LABEL = "Choose Your Course";

const parseProgressPercent = (value: string): number | null => {
  const match = value.match(/(\d+(\.\d+)?)%/);

  if (!match) {
    return null;
  }

  const percent = Number.parseFloat(match[1]);

  if (!Number.isFinite(percent)) {
    return null;
  }

  return Math.min(100, Math.max(0, percent));
};

const hasNavigableHref = (href: string): boolean => {
  const trimmedHref = href.trim();
  return trimmedHref.length > 0 && trimmedHref !== "#";
};

const CourseSelection = ({
  title = "📚 Choose Your Course 📚",
  subtitle = "Exciting and effective programs, curated by experts!",
  // viewAllHref,
  categories,
  courses,
}: CourseSelectionProps) => {
  const activeCourses = courses ?? defaultCourses;
  const activeCategories = categories ?? defaultCategories;

  const [selectedCategory, setSelectedCategory] = useState(
    activeCategories[0]?.name ?? "Coding",
  );

  useEffect(() => {
    if (activeCategories.length === 0) {
      return;
    }

    const categoryNames = activeCategories.map((category) => category.name);

    if (!categoryNames.includes(selectedCategory)) {
      setSelectedCategory(categoryNames[0]);
    }
  }, [activeCategories, selectedCategory]);

  const filteredCourses = useMemo(
    () =>
      activeCourses.filter((course) => course.category === selectedCategory),
    [activeCourses, selectedCategory],
  );
  const hasCourses = filteredCourses.length > 0;

  return (
    <Container>
      <section
        aria-label={SECTION_ARIA_LABEL}
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#1A1A3E] via-[#2A4A7C] to-[#1A1A3E] text-white py-10"
      >
        <div className="absolute top-56 right-[300px] w-[700px] h-[700px] bg-[#1B042D] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
        <div className="absolute top-24 left-[10px] w-[700px] h-[700px] bg-[#4B0764] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
        <div className="absolute top-48 right-[10px] w-[700px] h-[700px] bg-[#4B0764] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
        <div className="absolute top-72 left-[500px] w-[500px] h-[500px] bg-[#090327] rotate-[40deg] opacity-50 blur-3xl rounded-full" />

        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute top-10 left-5 h-[300px] w-[300px] rounded-full opacity-90 blur-[120px] -z-20"
            style={{
              background:
                "radial-gradient(circle, #5B7CFF 20%, transparent 95%)",
            }}
          />
          <Image
            src="/courses/stars.png"
            alt="stars with transprent background"
            height={900}
            width={900}
            className="absolute left-1/2 top-[10rem] w-[700px] max-w-none -translate-x-1/2 opacity-50 md:left-[15rem] md:w-[900px] md:translate-x-0"
          />
          <Image
            src="/courses/bird-2.svg"
            alt="image of a bird sitting on a branch"
            height={250}
            width={250}
            className="absolute -left-10 top-[15rem] h-[170px] w-[170px] -rotate-[15deg] scale-x-[-1] md:h-[250px] md:w-[250px]"
          />
          <Image
            src="/courses/bird-2.svg"
            alt="image of a bird sitting on a branch"
            height={250}
            width={250}
            className="absolute -right-5 top-[35rem] z-10 h-[170px] w-[170px] rotate-[15deg] md:h-[250px] md:w-[250px]"
          />
          {/* <Image
            src="/courses/clouds.svg"
            alt="Dark clouds"
            height={900}
            width={500}
            className="absolute bottom-0 -right-1 w-screen"
          /> */}
          <Image
            src="/courses/bigstar.svg"
            alt="Big yellow star"
            height={90}
            width={90}
            className="absolute bottom-2 left-10 -z-50"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="relative inline-flex items-center gap-3 text-4xl font-extrabold tracking-tight md:text-5xl">
              {title}
            </h2>
            <p className="mt-3 text-white/90 text-lg">{subtitle}</p>
          </div>

          <div className="mb-6 border-b border-white/20">
            <div className="flex min-w-0 flex-wrap items-center justify-start pb-4 text-sm font-semibold">
              {" "}
              {activeCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  type="button"
                  className={`relative whitespace-nowrap rounded-tr-md  px-8 py-2 text-white transition-all duration-300 sm:px-7 hover:opacity-90
    ${selectedCategory === category.name ? "border-b-[3px] border-[#E91E8C]" : "border-b-[3px] border-transparent hover:border-white/30 "}
  `}
                  style={{
                    backgroundColor: category.bg,
                    boxShadow:
                      selectedCategory === category.name
                        ? category.shadow
                        : "none",
                  }}
                >
                  {category.icon && (
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={18}
                      height={18}
                      className="mr-2 inline-block h-[18px] w-[18px] rounded-full object-cover"
                    />
                  )}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {!hasCourses ? (
            <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-10 text-center text-white">
              No courses available for {selectedCategory}.
            </div>
          ) : (
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCourses.map((course) => {
                const progressPercent = parseProgressPercent(course.perClass);
                const isLinkNavigable = hasNavigableHref(course.link);
                const ctaLabel = "Continue";

                return (
                  <article
                    key={course.id}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B1F50] backdrop-blur-md transition-all duration-300 hover:border-[#912A73] hover:shadow-[0_10px_35px_rgba(145,42,115,0.5)]"
                  >
                    {course.chips?.[0] && (
                      <div className="absolute right-3 top-3 z-20">
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wide ${
                            course.chips[0] === "FREE"
                              ? "bg-yellow-400 text-black"
                              : "bg-emerald-500 text-white"
                          }`}
                        >
                          {course.chips[0]}
                        </span>
                      </div>
                    )}

                    <div className="h-44 w-full bg-[#4374C0] p-2">
                      <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5 mt-4">
                      <h3 className="text-lg font-semibold text-white leading-snug">
                        {course.title}
                      </h3>

                      <p className="mt-3 text-sm text-white/70">
                        {course.description}
                      </p>

                      {(course.rating > 0 || course.students > 0) && (
                        <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                          {course.rating > 0 && (
                            <span>
                              ⭐ {course.rating.toFixed(1)} (
                              {course.ratingsCount})
                            </span>
                          )}
                          {course.students > 0 && (
                            <span>{course.students} students</span>
                          )}
                        </div>
                      )}

                      {course.price && (
                        <div className="mt-4">
                          <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-white">
                              {course.price}
                            </span>
                            {course.originalPrice && (
                              <span className="text-sm text-white/40 line-through">
                                {course.originalPrice}
                              </span>
                            )}
                          </div>
                          {course.perClass && (
                            <p className="mt-2 text-xs text-white/60">
                              {course.perClass}
                            </p>
                          )}
                        </div>
                      )}

                      {progressPercent !== null && (
                        <div className="mt-4">
                          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full bg-gradient-to-r from-[#2E98FC] to-[#E01CF4]"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                          <p className="mt-4 text-xs text-white/60">
                            {course.perClass}
                          </p>
                        </div>
                      )}

                      <div className="pt-6 mt-3">
                        {isLinkNavigable ? (
                          <Link
                            href={course.link}
                            className="block w-full rounded-lg bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                          >
                            {ctaLabel}
                          </Link>
                        ) : (
                          <button
                            type="button"
                            disabled
                            className="block w-full cursor-not-allowed rounded-lg bg-white/20 py-2.5 text-center text-sm font-semibold text-white/70"
                          >
                            Coming Soon
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};

export default CourseSelection;
