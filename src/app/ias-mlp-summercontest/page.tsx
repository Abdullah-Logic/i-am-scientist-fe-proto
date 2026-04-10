"use client";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  Clock,
  Handshake,
  Medal,
  Rocket,
  Trophy,
} from "lucide-react";
import Container from "../components/container/container";
import Image from "next/image";
import TestimonialCarousel from "./TestimonialCarousel";
import Link from "next/link";
import SummerCompetition from "../components/SummerCompetition";
import { useEffect, useRef } from "react";

const SummerContest = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  const summerContests = [
    {
      bg: "from-[#00D3F3] via-[#46ECD5] to-[#00B8DB]",
      image: "/summerContest/maths.png",
      title: "Maths Contest",
      titleColor: "#0092B8",
      deadline: "June, 15, 2026",
    },
    {
      bg: "from-[#FDC700] via-[#FFD230] to-[#F0B100]",
      image: "/summerContest/english.png",
      title: "English Contest",
      titleColor: "#F54900",
      deadline: "June, 15, 2026",
    },
    {
      bg: "from-[#8EC5FF] via-[#B8E6FE] to-[#51A2FF]",
      image: "/summerContest/science.png",
      title: "Science Contest",
      titleColor: "#00A63E",
      deadline: "June, 15, 2026",
    },
  ];

  const topAchievers = [
    {
      name: "Umme Habiba",
      photo: "/summerContest/std1.jpeg",
      rank: "/summerContest/rank-1.webp",
    },
    {
      name: "Minahil",
      photo: "/summerContest/std2.jpeg",
      rank: "/summerContest/rank-2.webp",
    },
    {
      name: "Zain-Ul-Abidin",
      photo: "/summerContest/std3.jpeg",
      rank: "/summerContest/rank-3.webp",
    },
    {
      name: "Yamman",
      photo: "/summerContest/std4.jpeg",
      rank: "/summerContest/rank-1.webp",
    },
    {
      name: "Ukasha",
      photo: "/summerContest/std5.jpeg",
      rank: "/summerContest/rank-2.webp",
    },
    {
      name: "Amina Asif",
      photo: "/summerContest/std6.jpeg",
      rank: "/summerContest/rank-3.webp",
    },
  ];

  return (
    <Container>
      <div
        className="text-[#0F172A] bg-[#F8FAFC]
        [--ai-primary:#6D28D9]
        [--ai-secondary:#9333EA]
        [--ml-primary:#EA580C]
        [--ml-secondary:#DC2626]
        [--ml-accent:#FBBF24]
        [--joint-gradient:linear-gradient(90deg,#6D28D9,#7C3AED,#2563EB,#EA580C)]
        [--joint-accent:linear-gradient(90deg,#8B5CF6,#F97316)]
        "
      >
        <section className="bg-[url('/summerContest/header-bg.jpeg')] bg-cover bg-center bg-no-repeat relative pb-32 sm:pb-34 lg:pb-64 font-inter">
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 py-16 sm:py-20 text-center">
            {/* Top Badge */}
            <div className="mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2 text-sm sm:text-base">
              <span>🏆</span>
              <span className="tracking-wide">NATIONAL LEVEL COMPETITION</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
              Summer Contest{" "}
              <span className="bg-gradient-to-r from-[var(--ai-primary)] via-[var(--ai-secondary)] to-[#8B5CF6] bg-clip-text text-transparent">
                2026
              </span>
            </h2>

            {/* Subjects */}
            <p className="mt-4 text-base sm:text-lg md:text-xl">
              <span className="text-pink-500">English</span>
              {" • "}
              <span className="text-[#ffc52f]">Maths</span>
              {" • "}
              <span className="text-[#ed1b24]">Science</span>
            </p>

            {/* Description */}
            <p className="text-[#F7E7FF] text-sm sm:text-base md:text-lg mt-4 max-w-xl">
              For Students (Grade 1–12) <br />
              Win Medals, Certificates &{" "}
              <span className="text-[#ffc52f] font-semibold">
                National Recognition
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 my-8">
              <Link href="/ias-mlp-summercontest/registration">
                <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-base md:text-lg font-semibold rounded-full py-3 px-6 shadow-lg hover:scale-105 transition">
                  Register Now →
                </button>
              </Link>
            </div>
          </div>

          <div className="relative lg:absolute bottom-0 left-1/2 z-20 flex w-full max-w-[1100px] -translate-x-1/2 lg:translate-y-1/2 flex-col flex-wrap justify-center gap-6 px-4 sm:flex-row sm:items-stretch sm:justify-center">
            {summerContests.map(({ image, title, deadline }, index) => (
              <div
                key={index}
                className="w-full sm:w-[18rem] md:w-[20rem] overflow-hidden flex flex-col items-center rounded-2xl bg-white border border-[rgba(109,40,217,0.2)] shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="flex flex-col items-center justify-start gap-5 w-full py-8 px-6">
                  <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ml-primary)] bg-[#ffc52f] px-3 py-1 rounded-full border border-[rgba(251,191,36,0.6)]">
                    Upcoming
                  </span>
                  <h2 className="text-xl sm:text-3xl font-extrabold tracking-wider text-center text-[#1F1F1F]">
                    {title}
                  </h2>
                  <div className="flex items-center gap-2 bg-[#FFF3E0] border border-[rgba(234,88,12,0.5)] text-[var(--ml-primary)] font-semibold text-sm md:text-base rounded-full px-3 py-1.5">
                    <Calendar size={15} className="inline mb-0.5" />
                    Deadline: {deadline}
                  </div>
                  <div className="text-xs md:text-sm text-[#4B5563] flex flex-col gap-2 items-center">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <BarChart3
                          size={14}
                          className="text-[var(--ai-primary)]"
                        />
                        Grade: 3–8 / 9–12
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Clock size={14} className="text-[var(--ai-primary)]" />
                        Duration: 60 mins
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Medal size={14} className="text-[var(--ai-primary)]" />
                        Prize: Gold Medal + Certificate
                      </span>
                    </div>
                  </div>

                  <Link href="/ias-mlp-summercontest/registration">
                    <button className="bg-pink-500 text-white font-bold text-sm md:text-base rounded-full px-4 py-2.5 shadow-[0_10px_24px_rgba(109,40,217,0.25)]">
                      <Trophy size={16} className="inline mr-2 mb-1" />
                      Register Now
                      <ArrowRight
                        size={14}
                        className="inline ml-1"
                        strokeWidth={3}
                      />
                    </button>
                  </Link>
                </div>
                <div className="w-full mt-auto">
                  <Image
                    src={image}
                    alt="Summer Contest Card Image"
                    width={320}
                    height={320}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-[2px] w-full bg-[var(--joint-gradient)]" />

        <section className="bg-[#F8FAFC] pt-40 sm:pt-20 lg:pt-96 pb-16 sm:pb-40 relative px-4 font-inter">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--joint-accent)]" />
          <div className="flex flex-col items-center">
            <div className="rounded-3xl p-[1px] bg-[var(--joint-accent)] w-full max-w-2xl">
              <div className="relative flex flex-col sm:flex-row items-center gap-6 bg-[#F8FAFC] rounded-3xl p-4 sm:p-6">
                <div className="absolute hidden sm:block left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-[#D6D6D6]" />

                <div className="bg-white rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5 z-20 w-full sm:w-auto flex justify-center">
                  <Image
                    src="/navbar/logo-white.png"
                    alt="I Am Scientist"
                    width={280}
                    height={110}
                    className="w-[180px] h-[75px] sm:w-[220px] sm:h-[90px] md:w-[280px] md:h-[110px] object-contain"
                  />
                </div>

                <div className="flex items-center justify-center z-10">
                  <div className="bg-white border border-[rgba(109,40,217,0.22)] rounded-full p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                    <Handshake size={36} className="text-[#2563EB]" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5 z-20 w-full sm:w-auto flex justify-center">
                  <Image
                    src="/countrypartner/Logos/moonlight.png"
                    alt="Moonlight Publishers"
                    width={280}
                    height={110}
                    className="w-[180px] h-[75px] sm:w-[220px] sm:h-[90px] md:w-[280px] md:h-[110px] object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center max-w-5xl px-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffc52f]">
                <span className="text-[#ed1b24]">
                  I Am Scientist and Moonlight Publishers{" "}
                </span>
                <span className="">Building a</span> Learning Collaboration
              </h3>
              <p className="text-base sm:text-lg text-[#4B5563] mt-5">
                I Am Scientist and Moonlight Publishers have joined forces to
                deliver an innovative online summer AI contest experience.
                Together, we provide engaging competition materials, smart
                learning resources, and student-friendly guides designed to make
                preparation more interactive, practical, and future-ready.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-[#374151] px-4">
              <div className="flex items-center gap-2 bg-white border border-[rgba(109,40,217,0.22)] rounded-full px-4 py-2">
                {/* <Check size={15} className="text-[#ed1b24]" /> --Glitching On Mobile screens-- */}
                Contest preparation kits
              </div>
              <div className="text-white flex items-center gap-2 bg-[#ffc52f] border border-[rgba(251,191,36)] rounded-full px-4 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
                {/* <Check size={15} className="text-white" /> --Glitching On Mobile screens-- */}
                Teacher & student support
              </div>
              <div className="flex items-center gap-2 bg-white border border-[rgba(109,40,217,0.22)] rounded-full px-4 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
                {/* <Check size={15} className="text-[#ed1b24]" />  --Glitching On Mobile screens-- */}
                Curriculum‑aligned content
              </div>
            </div>
          </div>
        </section>

        <section className="!bg-white">
          <SummerCompetition />
        </section>

        <section className="bg-gradient-to-b from-[#F8FAFC] via-[#EEF2FF] to-[#ed1b24]/60 py-16 sm:py-24 relative overflow-hidden px-4 font-inter">
          <div className="flex flex-col gap-20 items-center justify-center max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-center w-full">
              <div className="relative w-full md:col-span-2 overflow-visible">
                <div className="hidden md:block absolute bg-white -inset-0.5 rounded-2xl border-2 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] z-20 pointer-events-none" />
                <div className="hidden md:block absolute w-full h-full -rotate-[20deg] -left-[60%] translate-x-1/2 top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden z-0">
                  <Image
                    src="/summerContest/certificate-bg.png"
                    alt=""
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="hidden md:block bg-white w-full h-full -rotate-[10deg] absolute -left-[55%] translate-x-1/2 top-1/2 -translate-y-1/2 rounded-2xl shadow-lg z-10" />
                <video
                  src="/summerContest/introduction.mp4"
                  ref={videoRef}
                  autoPlay
                  controls
                  playsInline
                  loop
                  preload="metadata"
                  poster="/summerContest/header.png"
                  className="w-full h-auto object-contain rounded-2xl z-30 relative"
                />
              </div>

              <div className="bg-white border border-[rgba(109,40,217,0.22)] rounded-2xl p-6 sm:p-8 w-full flex flex-col justify-center md:col-span-3 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-[var(--ai-primary)]">
                  Interactive Learning Experience
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 leading-tight text-[#1F1F1F]">
                  Ready to discover something new?
                </h3>
                <p className="text-[#4B5563] mt-3 text-sm sm:text-base">
                  Experience a smarter way of learning through interactive video
                  lessons designed to simplify complex concepts. Watch,
                  understand, and explore topics step by step with AI-guided
                  explanations that make learning engaging, practical, and easy
                  to follow.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-stretch w-full">
              <div className="bg-white border border-[rgba(109,40,217,0.22)] rounded-2xl p-6 sm:p-8 w-full flex flex-col justify-center md:col-span-3 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-[var(--ai-primary)]">
                  Recognize Your Achievement
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 leading-tight text-[#1F1F1F]">
                  Earn Certificates and Celebrate Success
                </h3>
                <p className="text-[#4B5563] mt-3 text-sm sm:text-base">
                  Showcase your hard work and accomplishments with official
                  certificates awarded upon completion. Celebrate your success
                  and gain recognition for your performance with credentials
                  that highlight your dedication and achievement.
                </p>
              </div>

              <div className="relative w-full md:col-span-2 min-h-[280px] sm:min-h-[320px] overflow-visible">
                <div className="hidden md:block absolute bg-white -inset-0.5 rounded-2xl border-2 border-[#F59E0B] z-20 pointer-events-none" />
                <div className="hidden md:block absolute w-full h-full rotate-[20deg] left-[60%] -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden z-0">
                  <Image
                    src="/summerContest/certificate-bg.png"
                    alt=""
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="hidden md:block bg-white w-full h-full rotate-[10deg] absolute left-[55%] -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-2xl shadow-lg z-10" />
                <Image
                  src="/summerContest/certificate.png"
                  alt="Certificate"
                  fill
                  className="object-contain z-30 relative w-full h-auto md:!absolute"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#EEF2FF] via-[#F8FAFC] to-[#FFE0B2] py-16 sm:py-20 flex flex-col items-center justify-center gap-8 relative overflow-hidden px-4 font-inter">
          <Image
            src="/summerContest/achievers-bg.webp"
            alt="Confetti bg"
            width={1920}
            height={800}
            quality={100}
            sizes="100vw"
            className="absolute -top-24 left-0 w-full h-auto opacity-60 z-0"
          />

          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <span className="text-white text-sm md:text-base font-bold uppercase tracking-[0.3em] text-[var(--ml-primary)] bg-[#ffc52f] border border-[rgba(234,88,12,0.45)] px-4 py-1 rounded-full">
              Celebration
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1F1F1F]">
              Contest Top Achievers
            </h2>
            <p className="text-base md:text-lg font-medium text-[#0F172A] max-w-2xl leading-relaxed">
              Recognizing standout performance across grades with verified
              results and nationwide participation.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-[1100px]">
            <div className="absolute -inset-6 bg-[radial-gradient(circle_at_top,rgba(109,40,217,0.25),transparent_60%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl bg-[url('/summerContest/rankers-bg.webp')] bg-cover p-6 sm:p-10 shadow-[0_30px_80px_rgba(76,29,149,0.35)] border border-white/15">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
                <div className="flex flex-col items-center gap-6 md:pr-8">
                  <h2 className="text-lg md:text-2xl font-semibold text-white">
                    Top Achievers
                  </h2>
                  <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                    {topAchievers.slice(0, 3).map(({ name, photo, rank }) => (
                      <div
                        key={name}
                        className="text-center flex flex-col items-center gap-1 w-20 sm:w-28"
                      >
                        <div className="relative h-16 w-16 sm:h-24 sm:w-24">
                          <Image
                            src={photo}
                            alt={name}
                            fill
                            sizes="96px"
                            className="object-cover rounded-2xl ring-2 ring-white/40 shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                          />
                        </div>
                        <p className="text-white text-xs sm:text-base font-medium leading-snug line-clamp-2 py-1">
                          {name}
                        </p>
                        <div className="h-10 flex items-center justify-center">
                          <Image
                            src={rank}
                            alt={`${name} rank`}
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:hidden h-px w-full bg-white/40 rounded-full" />
                <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-white/40 rounded-full" />

                <div className="flex flex-col items-center gap-6 md:pl-8">
                  <h2 className="text-lg md:text-2xl font-semibold text-white">
                    Top Achievers
                  </h2>
                  <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                    {topAchievers.slice(3, 6).map(({ name, photo, rank }) => (
                      <div
                        key={name}
                        className="text-center flex flex-col items-center gap-1 w-20 sm:w-28"
                      >
                        <div className="relative h-16 w-16 sm:h-24 sm:w-24">
                          <Image
                            src={photo}
                            alt={name}
                            fill
                            sizes="96px"
                            className="object-cover rounded-2xl ring-2 ring-white/40 shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                          />
                        </div>
                        <p className="text-white text-xs sm:text-base font-medium leading-snug line-clamp-2 py-1">
                          {name}
                        </p>
                        <div className="h-10 flex items-center justify-center">
                          <Image
                            src={rank}
                            alt={`${name} rank`}
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#F8FAFC] via-[#EEF2FF] to-[#E0F2FE] py-16 sm:py-20 gap-8 relative px-4 font-inter">
          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <span className="text-white text-sm md:text-base font-bold uppercase tracking-[0.3em] text-[var(--ml-primary)] bg-[#ffc52f] border border-[rgba(234,88,12,0.45)] px-4 py-1 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1F1F1F]">
              What Students Say
            </h2>
            <p className="text-base md:text-lg font-medium text-[#0F172A] max-w-2xl leading-relaxed">
              Recognizing standout performance across grades with verified
              results and nationwide participation.
            </p>
            <TestimonialCarousel />
          </div>
        </section>
      </div>
    </Container>
  );
};

export default SummerContest;
