import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQ from "../components/Faqs";
import Container from "../components/container/container";
import CourseSelection from "../components/CourseSelection";
import { coursesFAQs } from "../constant/data";
import {
  Sparkles,
  CirclePlay,
  Quote,
  CircleCheckBig,
  Award,
} from "lucide-react";

const cards = [
  {
    id: "coding",
    title: "Coding",
    subtitle: "Create with logic",
    imageSrc: "/courses/coding.webp",
    borderColor: "border-[#34CBFF]",
    gradient: "from-[#00C8F9] to-[#3E6ED0]",
    transform:
      "rotate-[-14deg] translate-y-[37px] translate-x-[43px] md:translate-y-[72px] md:translate-x-[84px]",
    zIndex: "z-0",
  },
  {
    id: "robotics",
    title: "Robotics",
    subtitle: "Build real tech",
    imageSrc: "/courses/robotics.webp",
    borderColor: "border-[#FCF5C4]",
    gradient: "from-[#FFB306] to-[#FBF6C9]",
    transform:
      "rotate-[-7deg] translate-y-[22px] translate-x-[22px] md:translate-y-[42px] md:translate-x-[42px]",
    zIndex: "z-10",
  },
  {
    id: "financial",
    title: "Finance",
    subtitle: "Smart money habits",
    imageSrc: "/courses/finlet.webp",
    borderColor: "border-[#25F7EE]",
    gradient: "from-[#00E2A3] to-[#05E0D8]",
    transform:
      "rotate-[-2deg] translate-y-[9px] translate-x-[6px] md:translate-y-[18px] md:translate-x-[12px]",
    zIndex: "z-20",
  },
  {
    id: "gen-ai",
    title: "Gen AI",
    subtitle: "Future-ready thinking",
    imageSrc: "/courses/gen-ai.webp",
    borderColor: "border-[#B588FF]",
    gradient: "from-[#8F54FC] to-[#7C35CF]",
    transform: "",
    zIndex: "z-30",
  },
  {
    id: "math",
    title: "Math",
    subtitle: "Master number skills",
    imageSrc: "/courses/math.webp",
    borderColor: "border-[#FFE064]",
    gradient: "from-[#D6AA00] to-[#FFDA43]",
    transform:
      "rotate-[2deg] translate-y-[9px] translate-x-[-6px] md:translate-y-[18px] md:translate-x-[-12px]",
    zIndex: "z-20",
  },
  {
    id: "english",
    title: "English",
    subtitle: "Express with impact",
    imageSrc: "/courses/english.webp",
    borderColor: "border-[#FF8888]",
    gradient: "from-[#EC655A] to-[#F13B2B]",
    transform:
      "rotate-[7deg] translate-y-[22px] translate-x-[-22px] md:translate-y-[42px] md:translate-x-[-42px]",
    zIndex: "z-10",
  },
  {
    id: "science",
    title: "Science",
    subtitle: "Explore with curiosity",
    imageSrc: "/courses/science.webp",
    borderColor: "border-[#FF78D0]",
    gradient: "from-[#E958B7] to-[#BE2E8C]",
    transform:
      "rotate-[14deg] translate-y-[37px] translate-x-[-43px] md:translate-y-[72px] md:translate-x-[-84px]",
    zIndex: "z-0",
  },
];

const cardBaseClass =
  "relative flex flex-col rounded-[16px] border-[1.75px] bg-gradient-to-b pt-3 pl-3 shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:z-50 h-[150px] w-[105px] md:h-[273px] md:w-[204px] md:rounded-[32px] md:pt-6 md:pl-6 ";

type Decoration = {
  size: number;
  top: number;
  left: number;
  rotate: number;
};

const circleDecorations: Decoration[] = [
  { size: 20, top: 18.8, left: 29.72, rotate: 45 },
  { size: 40, top: 22.2, left: 48, rotate: 120 },
  { size: 30, top: 24, left: 39.86, rotate: 200 },
  { size: 25, top: 29.2, left: 63.52, rotate: 75 },
  { size: 35, top: 50, left: 33.1, rotate: 310 },
  { size: 15, top: 57.8, left: 70.28, rotate: 150 },
  { size: 45, top: 70.8, left: 43.24, rotate: 90 },
  { size: 25, top: 76, left: 60.14, rotate: 270 },
];

const squareDecorations: Decoration[] = [
  { size: 20, top: 21.4, left: 36.48, rotate: 30 },
  { size: 30, top: 29.2, left: 56.76, rotate: 90 },
  { size: 25, top: 37, left: 43.24, rotate: 200 },
  { size: 35, top: 44.8, left: 66.9, rotate: 120 },
  { size: 15, top: 55.2, left: 26.34, rotate: 270 },
  { size: 40, top: 63, left: 50, rotate: 60 },
  { size: 25, top: 70.8, left: 73.66, rotate: 150 },
  { size: 30, top: 78.6, left: 53.38, rotate: 330 },
];

const CoursesPage = () => {
  return (
    <Container>
      <section className="relative w-full overflow-x-hidden overflow-y-visible">
        <div className="w-full relative z-10 flex flex-col items-center text-center text-white ">
          <div className="">
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <Image
                src="/courses/stars.png"
                height={900}
                width={900}
                className="absolute -top-[1rem] right-40 opacity-90"
                alt="stars"
              />
              <Image
                src="/courses/stars.png"
                height={900}
                width={900}
                className="absolute -top-[1rem] left-40 opacity-90"
                alt="stars"
              />
              <Image
                src="/courses/bird-1.svg"
                height={300}
                width={300}
                className="absolute top-[13rem] left-0"
                alt="bird"
              />
              <Image
                src="/courses/bird-2.svg"
                height={250}
                width={250}
                className="absolute top-[20rem] right-0"
                alt="bird"
              />
            </div>
            <div
              className="absolute top-[7rem] left-[29rem] w-[300px] h-[300px] rounded-full opacity-90 blur-[120px] -z-50"
              style={{
                background:
                  "radial-gradient(circle, #5B7CFF 0%, transparent 70%)",
              }}
            />

            <div
              className="absolute top-[7rem] right-[29rem] w-[300px] h-[300px] rounded-full opacity-90 blur-[120px] -z-50"
              style={{
                background:
                  "radial-gradient(circle, #E91E8C 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="absolute inset-0 -z-20 pointer-events-none">
            <div className="absolute top-56 right-[300px] w-[700px] h-[700px] bg-[#1B042D] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
            <div className="absolute top-48 left-[10px] w-[700px] h-[700px] bg-[#4B0764] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
            <div className="absolute top-48 right-[10px] w-[700px] h-[700px] bg-[#4B0764] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
            <div className="absolute top-72 left-[500px] w-[500px] h-[500px] bg-[#090327] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
          </div>

          <div className="relative z-20 mt-20 w-full max-w-xl sm:max-w-[950px] xl:max-w-[1200px] px-4 sm:px-0">
            <div className="rounded-3xl bg-[#041431]/45 px-4 py-5 backdrop-blur-md sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0">
              <div className="my-5 inline-block rounded-full border border-gray-600 bg-gray-400/30 px-5 py-2">
                <p className="text-sm">
                  <Sparkles className="mr-4 inline h-4 w-4 text-[#FBD84C]" />
                  Trusted by 15,000+ students worldwide
                </p>
              </div>
              <p className="text-lg md:text-xl">Join Our Expert-Led</p>
              <h2 className="my-2 text-4xl font-extrabold md:text-6xl text-transparent bg-clip-text">
                <span className="bg-gradient-to-b from-[#4A9EF5] via-[#7B88FF] to-[#FF5FB5] bg-clip-text">
                  Online Courses{" "}
                </span>
                <span className="bg-gradient-to-b from-[#FFD84D] via-[#5FD9A8] to-[#4A9EF5] bg-clip-text">
                  {" "}
                  for Kids
                </span>
              </h2>
              <p className="w-3/4 mx-auto text-gray-300 text-sm md:text-lg text-wrap mt-5 sm:text-gray-200">
                Empower your child with future-ready skills in coding, robotics,
                AI, and more. Live classes with expert instructors,
                project-based learning, and global community.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 z-50">
                <Link
                  href="#course-selection"
                  className="mt-8 rounded-full bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] px-7 py-3 font-semibold text-white transition-all duration-500 ease-in-out hover:opacity-90"
                >
                  View All Courses
                </Link>
                {/* <Link
                  href="#"
                  className="mt-8 inline-block rounded-full border border-gray-600 bg-gray-400/30 px-7 py-3 transition-all duration-500 ease-in-out hover:opacity-90"
                >
                  <span>
                    <CirclePlay className="mr-4 inline h-5 w-5" />
                    Watch Demo
                  </span>
                </Link> */}
              </div>
            </div>
          </div>

          <div className="relative z-[2] mt-12 flex flex-nowrap items-end justify-center gap-0 -space-x-[16px] sm:-space-x-[58px] xl:-space-x-[16px]">
            {cards.map((card) => (
              <Link
                key={card.id}
                href="/select-course"
                className={`${cardBaseClass} ${card.borderColor} ${card.gradient} ${card.transform} ${card.zIndex}`}
              >
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-left text-xl font-extrabold leading-tight tracking-normal text-white md:text-[23px] md:leading-[22px] md:tracking-[0.5px]">
                    {card.title}
                  </h3>
                  <h4 className="text-left text-xs font-extrabold leading-tight tracking-normal text-white md:text-[13px] md:leading-[22px] md:tracking-[0.24px]">
                    {card.subtitle}
                  </h4>
                </div>

                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 90px, 147px"
                  className="absolute bottom-[13%] left-1/2 z-[1] h-14 w-14 -translate-x-1/2 md:h-[147px] md:w-[147px]"
                />
                <div className="absolute bottom-[10%] left-1/2 h-[64px] w-[64px] -translate-x-1/2 rounded-full bg-white md:h-[138px] md:w-[139px]" />
              </Link>
            ))}
          </div>

          <div className="relative overflow-hidden z-20 -mt-[50px] flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#1D2249] via-[#263E6C] to-[#1E244B] py-8 md:-mt-20 md:py-[100px]">
            <div className="pointer-events-none absolute inset-0 -z-[50]">
              <div className="absolute top-56 right-[300px] w-[700px] h-[700px] bg-[#1B042D] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
              <div className="absolute top-48 left-[10px] w-[700px] h-[700px] bg-[#4B0764] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
              <div className="absolute top-48 right-[10px] w-[700px] h-[700px] bg-[#4B0764] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
              <div className="absolute top-72 left-[500px] w-[500px] h-[500px] bg-[#090327] rotate-[40deg] opacity-50 blur-3xl rounded-full" />
              <Image
                src="/courses/kid2.svg"
                alt="image of a boy"
                height={200}
                width={200}
                className="absolute left-6 top-20 h-[160px] w-[160px] md:left-1 md:h-[300px] md:w-[300px]"
              />
              <Image
                src="/courses/kid1.svg"
                alt="image of a girl"
                height={180}
                width={180}
                className="absolute bottom-0 right-1 h-[160px] w-[160px] md:h-[280px] md:w-[280px]"
              />
              <div
                className="absolute bottom-[5rem] right-[2rem] w-[200px] h-[200px] rounded-full opacity-90 blur-[120px] -z-50"
                style={{
                  background:
                    "radial-gradient(circle, #E91E8C 30%, transparent 95%)",
                }}
              />
              {circleDecorations.map((shape, index) => (
                <div
                  key={`circle-${index}`}
                  className="absolute rounded-full bg-gradient-to-b from-[#5B7CFF] to-[#E91E8C] opacity-20"
                  style={{
                    width: `${shape.size}px`,
                    height: `${shape.size}px`,
                    top: `${shape.top}%`,
                    left: `${shape.left}%`,
                    transform: `translate(-50%, -50%) rotate(${shape.rotate}deg)`,
                  }}
                />
              ))}

              {squareDecorations.map((shape, index) => (
                <div
                  key={`square-${index}`}
                  className="absolute rounded-md bg-gradient-to-b from-[#FFD84D] to-[#5FD9A8] opacity-20"
                  style={{
                    width: `${shape.size}px`,
                    height: `${shape.size}px`,
                    top: `${shape.top}%`,
                    left: `${shape.left}%`,
                    transform: `translate(-50%, -50%) rotate(${shape.rotate}deg)`,
                  }}
                />
              ))}
            </div>

            <div className="z-50 flex w-full flex-col items-center justify-center xl:justify-between gap-16 md:gap-28 px-4 sm:px-8 md:px-14 lg:flex-row xl:px-[20rem]">
              <div className="flex flex-col items-center text-center gap-2 md:gap-[7px]">
                <p className="text-sm font-bold leading-[110%] text-gray-200 uppercase">
                  In collaboration with
                </p>
                <div className="mt-5 flex items-center justify-center w-[200px] h-[200px] rounded-full bg-white/90 border-2 border-white/20">
                  <Image
                    src="/courses/ibcc.png"
                    alt="IBCC"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="relative flex max-w-[960px] flex-col items-center gap-3 md:items-start md:gap-2">
                <Quote className="absolute -left-7 -top-7 h-20 w-20 text-[#BE3681] opacity-30" />
                <div className="relative w-full max-w-[600px] rounded-2xl border-2 border-[#2D3C63] bg-[#0B1F50] p-5 text-left text-sm leading-5 text-white md:w-[450px] xl:w-[500px] md:max-w-none md:text-lg md:leading-relaxed">
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-[#5C7AF7]" />
                  <Quote className="h-10 w-10 text-[#BE3681] mb-3" />
                  <p>
                    Through our partnership with{" "}
                    <span className="text-[#7B87F7]">
                      Inter Boards Coordination Commission,
                    </span>{" "}
                    we integrate{" "}
                    <span className="font-bold">IBCC ManageMentor</span> courses
                    into our curriculum, providing kids with{" "}
                    <span className="text-[#62D9A8]">
                      interactive online access.
                    </span>
                  </p>
                  <p className="mt-3 flex items-center text-sm text-gray-400">
                    <span className="mr-2 inline-block rounded-full bg-[#62D9A8] p-1">
                      <CircleCheckBig className="h-4 w-4 text-white" />
                    </span>
                    Verified Partnership • Est. 2026
                  </p>
                  <div className="absolute bottom-0 right-0 h-10 w-10 rounded-br-2xl border-b-2 border-r-2 border-[#EA418D]" />
                </div>
              </div>
            </div>
            <div className="mt-16 flex w-full flex-wrap items-center justify-center gap-4 px-4 md:gap-6 xl:gap-16">
              <div className="bg-white/5 border border-white/20 px-4 py-2 rounded-full">
                <Award className="bg-gradient-to-b from-[#5B7CFF] to-[#E91E8C] p-1 rounded-full inline mr-2" />
                IBCC-certified curriculum
              </div>
              <div className="bg-white/5 border border-white/20 px-4 py-2 rounded-full">
                <Sparkles className="bg-gradient-to-b from-[#5B7CFF] to-[#E91E8C] p-1 rounded-full inline mr-2" />
                Interactive online access
              </div>
              <div className="bg-white/5 border border-white/20 px-4 py-2 rounded-full">
                <CircleCheckBig className="bg-gradient-to-b from-[#5B7CFF] to-[#E91E8C] p-1 rounded-full inline mr-2" />
                Industry-recognized certificates
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="course-selection">
        <CourseSelection />
      </div>
      <FAQ faqs={coursesFAQs} />
    </Container>
  );
};

export default CoursesPage;
