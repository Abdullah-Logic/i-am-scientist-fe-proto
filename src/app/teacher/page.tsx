"use client";

import Image from "next/image";
import Container from "../components/container/container";
import {
  Sparkles,
  ArrowRight,
  Users,
  Star,
  Award,
  Shield,
  Zap,
  TrendingUp,
  BookOpen,
  Wrench,
  UserCheck,
  CircleCheckBig,
  Video,
  Clock,
  ThumbsUp,
  ChevronRight,
  FileText,
  Target,
  PenLine,
  Rocket,
  Layers,
  Brain,
  ClipboardList,
  MessageSquare,
  HelpCircle,
  BookText,
  Puzzle,
  Languages,
  Lightbulb,
  Calculator,
  Bot,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import FAQ from "../components/Faqs";
import { teachersFAQs } from "../constant/data";

function teacherCtaPlaceholder(message?: string) {
  void Swal.fire({
    title: "Coming soon",
    text:
      message ??
      "This experience is not available yet. Please check back soon.",
    icon: "info",
    confirmButtonColor: "#C543BA",
  });
}

const heroSocialAvatars: { src: string; alt: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=128&h=128&q=80",
    alt: "Educator portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=128&h=128&q=80",
    alt: "Educator portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&h=128&q=80",
    alt: "Educator portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80",
    alt: "Educator portrait",
  },
];

const toolCategoryTabs = [
  "All tools",
  "Planning",
  "Content",
  "Questions",
  "Student Support",
] as const;

const teachingCareerCards = [
  {
    logo: Award,
    heading: "Certifications",
    exploreHref: "#Certifications",
    slogan: "Earn industry-recognized certifications",
    amount: "45+",
    type: "Programs",
    users: "28k+",
    colorGradient: "from-[#AD46FF] via-[#E12AFB] to-[#F6339A]",
  },
  {
    logo: BookOpen,
    heading: "Online Courses",
    exploreHref: "#Online Courses",
    slogan: "Self-paced expert-designed courses",
    amount: "110+",
    type: "Courses",
    users: "60k+",
    colorGradient: "from-[#00B8DB] via-[#2B7FFF] to-[#615FFF]",
  },
  {
    logo: Wrench,
    heading: "AI Tools",
    exploreHref: "#AI Tools",
    slogan: "Automate tasks & save time",
    amount: "50+",
    type: "Tools",
    users: "40k+",
    colorGradient: "from-[#00C950] via-[#00BC7D] to-[#00BBA7]",
  },
  {
    logo: UserCheck,
    heading: "Teacher Services",
    exploreHref: "#",
    slogan: "Expert guidance & support",
    amount: "200+",
    type: "Mentors",
    users: "24/7",
    colorGradient: "from-[#FF6900] via-[#FE9A00] to-[#F0B100]",
  },
];

const advantageCards = [
  {
    logo: Award,
    tag: "100% Accredited",
    heading: "Accredited Certifications",
    desc: "Earn CEU credits and certificates recognized by school districts nationwide Learn more",
    colorGradient: "from-[#C27AFF] to-[#E60076]",
  },
  {
    logo: Users,
    tag: "50+ Experts",
    heading: "Expert Instructors",
    desc: "Learn from PhD educators with 10+ years of classroom experience",
    colorGradient: "from-[#51A2FF] to-[#0092B8]",
  },
  {
    logo: Video,
    tag: "500+ Videos",
    heading: "Interactive Learning",
    desc: "Engage with HD video lessons, live sessions, and hands-on projects",
    colorGradient: "from-[#05DF72] to-[#009966]",
  },
  {
    logo: Clock,
    tag: "Learn Anytime",
    heading: "Flexible Schedule",
    desc: "Self-paced courses with lifetime access to all materials and updates",
    colorGradient: "from-[#FF8904] to-[#D08700]",
  },
];

const trustedInstitutions = [
  "National Book Foundation",
  "MoonLight Publishers",
  "NITB",
  "BISE Rawalpindi",
  "IBCC",
];

const featuredCourses = [
  {
    bestSeller: false,
    image: "/uniPlus/upcoming.svg",
    tag: "Intermediate",
    rating: "4.7",
    reviews: "(128)",
    heading: "Classroom Engagement & Active Learning",
    para: "Practical techniques to keep students participating, with simple structures you can reuse across subjects.",
    modules: "10 modules",
    time: "5 weeks",
    prof: "Ayesha Khan",
    newPrice: "2,799",
    oldPrice: "3,499",
  },
  {
    bestSeller: false,
    image: "/uniPlus/upcoming.svg",
    tag: "Beginner",
    rating: "4.6",
    reviews: "(94)",
    heading: "Digital Tools for Everyday Lessons",
    para: "Step-by-step use of common classroom software to share materials, collect work, and give quick feedback.",
    modules: "6 modules",
    time: "3 weeks",
    prof: "Omar Siddiqui",
    newPrice: "1,899",
    oldPrice: "2,399",
  },
  {
    bestSeller: false,
    image: "/uniPlus/upcoming.svg",
    tag: "Advanced",
    rating: "4.8",
    reviews: "(61)",
    heading: "Formative Assessment at Scale",
    para: "Design low-prep checks for understanding that work in larger groups and busy timetables.",
    modules: "8 modules",
    time: "4 weeks",
    prof: "Sana Malik",
    newPrice: "3,200",
    oldPrice: "",
  },
  {
    bestSeller: false,
    image: "/uniPlus/upcoming.svg",
    tag: "Intermediate",
    rating: "4.5",
    reviews: "(47)",
    heading: "Reading Support for Mixed-Ability Classes",
    para: "Strategies to differentiate reading tasks without multiplying your prep time.",
    modules: "7 modules",
    time: "4 weeks",
    prof: "Hassan Raza",
    newPrice: "2,199",
    oldPrice: "2,699",
  },
];

const certifications = [
  {
    image: "/uniPlus/upcoming.svg",
    topTag: "",
    bottomTag: "",
    countries: "🇵🇰 🇬🇧",
    heading: "Classroom Management Fundamentals",
    likes: "1,842",
    duration: "6",
    learners: "18,400",
    rating: 4.7,
    colorGradient: "from-[#AD46FF] to-[#E12AFB]",
  },
  {
    image: "/uniPlus/upcoming.svg",
    topTag: "",
    bottomTag: "",
    countries: "🇵🇰",
    heading: "Student Wellbeing & Positive Climate",
    likes: "1,256",
    duration: "5",
    learners: "12,100",
    rating: 4.6,
    colorGradient: "from-[#00C950] to-[#00BC7D]",
  },
  {
    image: "/uniPlus/upcoming.svg",
    topTag: "",
    bottomTag: "",
    countries: "🇵🇰 🇺🇸",
    heading: "Fair Grading & Rubric Design",
    likes: "2,018",
    duration: "8",
    learners: "24,600",
    rating: 4.8,
    colorGradient: "from-[#00B8DB] to-[#2B7FFF]",
  },
  {
    image: "/uniPlus/upcoming.svg",
    topTag: "",
    bottomTag: "",
    countries: "🇵🇰",
    heading: "Blended Learning Essentials",
    likes: "987",
    duration: "7",
    learners: "9,800",
    rating: 4.5,
    colorGradient: "from-[#E01CF4] to-[#E01CF4]",
  },
];

const aiTools = [
  {
    logo: Calculator,
    heading: "Math Story Word Problems",
    desc: "Write custom math word problems based on what you're teaching and any story topic.",
    colorGradient: "from-[#22C55E] to-[#15803D]",
    category: "Planning",
    href: "/ai-tools/math-story-word-problems",
  },
  {
    logo: PenLine,
    heading: "Writing Feedback",
    desc: "Generate feedback on student writing based on custom criteria or a rubric.",
    colorGradient: "from-[#51A2FF] to-[#155DFC]",
    category: "Content",
    href: "/ai-tools/writing-feedback",
  },
  {
    logo: Brain,
    heading: "Standards Unpacker",
    desc: "Unpack any standard into component parts to understand what students need.",
    colorGradient: "from-[#7C3AED] to-[#4C1D95]",
    category: "Planning",
    href: "/ai-tools/standards-unpacker",
  },
  {
    logo: Users,
    heading: "SEL Lesson Plan",
    desc: "Generate a custom social emotional learning (SEL) lesson plan for students.",
    colorGradient: "from-[#FB7185] to-[#BE123C]",
    category: "Planning",
    href: "/ai-tools/sel-lesson-plan",
  },
  {
    logo: BookText,
    heading: "Text Scaffolder",
    desc: "Scaffold text for readers who are behind grade level or need extra support.",
    colorGradient: "from-[#10B981] to-[#065F46]",
    category: "Student Support",
    href: "/ai-tools/text-scaffolder",
  },
  {
    logo: Lightbulb,
    heading: "Multiple Explanations",
    desc: "Generate additional explanations of topics that you're teaching.",
    colorGradient: "from-[#A684FF] to-[#7F22FE]",
    category: "Content",
    href: "/ai-tools/multiple-explanations",
  },
  {
    logo: Sparkles,
    heading: "Lesson Hook",
    desc: "Get suggestions for a hook to engage students in your lesson.",
    colorGradient: "from-[#FF8904] to-[#F54900]",
    category: "Planning",
    href: "/ai-tools/lesson-hook",
  },
  {
    logo: FileText,
    heading: "Informational Texts",
    desc: "Generate original informational texts for your class.",
    colorGradient: "from-[#EC4899] to-[#9D174D]",
    category: "Content",
    href: "/ai-tools/informational-texts",
  },
  {
    logo: MessageSquare,
    heading: "Chat with Docs",
    desc: "Upload a document and have an AI-powered chat with it.",
    colorGradient: "from-[#22D3EE] to-[#0891B2]",
    category: "Student Support",
    href: "/ai-tools/chat-with-docs",
  },
  {
    logo: ClipboardList,
    heading: "Worksheet Generator",
    desc: "Generate a worksheet based on any topic or text.",
    colorGradient: "from-[#38BDF8] to-[#0EA5E9]",
    category: "Questions",
    href: "/ai-tools/worksheet-generator",
  },
  {
    logo: BookOpen,
    heading: "Lesson Plan Generator",
    desc: "Generate a comprehensive lesson plan based on a standard or topic.",
    colorGradient: "from-[#F97316] to-[#C2410C]",
    category: "Planning",
    href: "/ai-tools/lesson-plan",
  },
  {
    logo: FileText,
    heading: "Text Summarizer",
    desc: "Summarize any text in whatever length you choose.",
    colorGradient: "from-[#6366F1] to-[#312E81]",
    category: "Content",
    href: "/ai-tools/text-summarizer",
  },
  {
    logo: BookText,
    heading: "Vocabulary List Generator",
    desc: "Generate a list of vocabulary words based on a subject or topic.",
    colorGradient: "from-[#00D5BE] to-[#009689]",
    category: "Content",
    href: "/ai-tools/vocab-generator",
  },
  {
    logo: Target,
    heading: "Multiple Choice Quiz",
    desc: "Generate a multiple choice assessment, quiz, or test.",
    colorGradient: "from-[#FF8904] to-[#F54900]",
    category: "Questions",
    href: "/ai-tools/multiple-choice-quiz",
  },
  {
    logo: Layers,
    heading: "Presentation Generator",
    desc: "Generate exportable slides based on a topic, text, or video.",
    colorGradient: "from-[#14B8A6] to-[#0F766E]",
    category: "Content",
    href: "/ai-tools/presentation-generator",
  },
  {
    logo: HelpCircle,
    heading: "Text Leveler",
    desc: "Level any text to adapt it to fit a student's reading level.",
    colorGradient: "from-[#F59E0B] to-[#B45309]",
    category: "Student Support",
    href: "/ai-tools/text-leveler",
  },
  {
    logo: Languages,
    heading: "Text Translator",
    desc: "Translate any text or uploaded document into any language.",
    colorGradient: "from-[#0EA5E9] to-[#075985]",
    category: "Content",
    href: "/ai-tools/text-translator",
  },
  {
    logo: Puzzle,
    heading: "Choice Board (UDL)",
    desc: "Create a choice board for student assignments using UDL principles.",
    colorGradient: "from-[#FDC700] to-[#F59E0B]",
    category: "Planning",
    href: "/ai-tools/choice-board",
  },
  {
    logo: Bot,
    heading: "Chat with Kiswa",
    desc: "Hi! I'm Kiswa. I'm built for education. Ask me anything!",
    colorGradient: "from-[#A78BFA] to-[#6D28D9]",
    category: "Student Support",
    href: "/ai-tools/raina",
  },
];

type TeacherLandingAiTool = (typeof aiTools)[number];

function TeacherToolCard({ tool }: { tool: TeacherLandingAiTool }) {
  const { logo: Logo, heading, desc, colorGradient, href } = tool;
  return (
    <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] w-full max-w-full sm:max-w-[17.5rem] tracking-wide transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6B41FF]/20">
      <div className="rounded-xl bg-[#2E124D] p-6 h-full flex flex-col">
        <div
          className={`bg-gradient-to-br ${colorGradient} p-3 rounded-xl h-fit w-fit mb-4`}
        >
          <Logo size={25} />
        </div>
        <h2 className="font-bold text-xl mb-2">{heading}</h2>
        <p className="text-gray-500 text-sm mb-2">{desc}</p>
        <Link
          href={href}
          className="text-[#00D3F3] mt-auto text-sm transition-colors duration-150 hover:text-[#8EE9FF] text-left"
        >
          Try this tool <ChevronRight size={15} className="inline" />
        </Link>
      </div>
    </div>
  );
}

export default function TeacherLandingPage() {
  const [active, setActive] =
    useState<(typeof toolCategoryTabs)[number]>("All tools");
  const filteredTools =
    active === "All tools"
      ? aiTools
      : aiTools.filter((tool) => tool.category === active);

  const TOOLS_PREVIEW_LIMIT = 4;
  const previewTools = filteredTools.slice(0, TOOLS_PREVIEW_LIMIT);
  const hasMoreTools = filteredTools.length > previewTools.length;

  return (
    <Container>
      <div className="text-white leading-normal sm:leading-relaxed">
        <div className="py-10 px-4 sm:px-0 bg-gradient-to-b from-[#1B042D] via-[#4B0764] to-[#090327] relative">
          <Image
            src="/teachers/stars.svg"
            alt="image of blue stars"
            width={700}
            height={700}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          />
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8 items-center justify-items-center lg:justify-items-stretch mx-auto w-full max-w-[1120px]">
            <div className="flex flex-col max-w-3xl z-10 text-center lg:text-left lg:justify-self-end">
              <div className="px-3 py-2 border border-[#AD46FF66] rounded-full bg-[#491B64] w-fit mx-auto lg:mx-0">
                <p className="text-[#F5A641] text-xs font-semibold uppercase">
                  <Sparkles size={15} className="inline mr-2 text-[#EC69F9]" />
                  Courses for Teachers 100% Approved by IBCC
                </p>
              </div>
              <h2 className="my-5 text-5xl font-bold">
                Free Online Courses With <br />
                <span className="text-[#F5A641]">Certifications</span>
              </h2>
              <div className="max-w-lg mx-auto lg:mx-0">
                <p className="text-sm leading-normal sm:leading-relaxed">
                  Upgrade your teaching with flexible, self-paced online courses
                  designed for modern educators. Earn globally recognized
                  certifications and diplomas while using powerful AI tools to
                  streamline lesson planning, automate administrative work, and
                  personalize student learning. Whether you&apos;re a classroom
                  teacher or a school leader, gain practical skills, save
                  valuable time, and stay ahead in the future of education—all
                  in one place.
                </p>
                <p className="text-sm mt-3 leading-normal sm:leading-relaxed">
                  The #1 education AI assistant, trusted by over 380,000+
                  educators worldwide.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 my-5 items-center justify-center lg:justify-start lg:items-start">
                <Link href={"/teacher/tools"}>
                  <button className="rounded-lg px-6 py-3 bg-gradient-to-r from-[#C800DE] to-[#9810FA] border border-[#E12AFB80] text-sm font-bold w-full sm:w-auto transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#9810FA]/30">
                    Get Started <ArrowRight size={15} className="inline" />
                  </button>
                </Link>
                <Link href={"#Certifications"}>
                  <button className="rounded-lg px-6 py-3 bg-[#0F172B99] border border-[#C27AFF99] text-sm font-bold w-full sm:w-auto transition-all duration-200 hover:bg-[#0F172BCC] hover:border-[#C27AFF] hover:shadow-lg hover:shadow-[#C27AFF]/20">
                    Get Certificates
                  </button>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center lg:justify-start lg:items-start">
                <div className="flex flex-row -space-x-2">
                  {heroSocialAvatars.map(({ src, alt }) => (
                    <div
                      key={src}
                      className="relative size-10 shrink-0 overflow-hidden rounded-full border-2 border-[#0F172B] bg-[#2E124D] ring-1 ring-white/10 shadow-sm"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={80}
                        height={80}
                        sizes="40px"
                        className="size-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-row gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        size={15}
                        key={i}
                        className="text-[#F9C747]"
                        fill="#F9C747"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-white/70">
                    <span className="text-white font-bold">4.9/5</span> from
                    2,000+ reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-[520px] lg:justify-self-start">
              <div className="bg-gradient-to-br from-[#0F172BF2] via-[#59168BF2] to-[#0F172BF2] rounded-xl border border-[#FDC70099] py-3 px-5 w-fit absolute right-[8rem] -top-5 rotate-3 scale-75">
                <div className="flex flex-row">
                  <p className="text-[#F9C747] font-bold text-base uppercase">
                    <Award size={25} className="inline mr-1 mb-2" /> Nationally
                    Recognized
                  </p>
                </div>
                <p className="text-sm font-bold leading-tight">
                  Certified & Accredited
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0F172BF2] via-[#1C398EF2] to-[#0F172BF2] rounded-xl border border-[#51A2FF99] py-3 px-5 w-fit absolute right-0 -top-5 -rotate-3 scale-75 z-10">
                <div className="flex flex-row">
                  <p className="text-[#51A1F8] font-bold text-lg uppercase">
                    <Shield size={25} className="inline mr-1 mb-2" /> Top Rated
                  </p>
                </div>
                <p className="text-sm font-bold leading-tight">
                  Learning Platform
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0F172BF2] via-[#1C398EF2] to-[#0F172BF2] rounded-xl border border-[#51A2FF99] py-4 px-5 w-fit absolute -right-5 top-12 scale-75">
                <div className="flex flex-row gap-2 items-center">
                  <div className="bg-[#2E8AD5] p-2 rounded-xl h-fit w-fit">
                    <Zap size={25} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-2xl">Save Time</p>
                    <p className="text-[#51A1F8] font-semibold text-xs leading-tight">
                      Boost Productivity
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src="/teachers/teacher.png"
                alt="Image of a teacher sitting in a classroom"
                width={500}
                height={500}
                className="aspect-square w-full"
              />
              <div className="bg-gradient-to-br from-[#0F172BF2] via-[#59168BF2] to-[#0F172BF2] rounded-xl border border-[#FDC70099] py-4 px-5 w-fit absolute left-0 bottom-0">
                <div className="flex flex-row gap-2 items-center">
                  <div className="bg-[#58BF55] p-2 rounded-xl h-fit w-fit">
                    <TrendingUp size={25} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-2xl">100%</p>
                    <p className="text-[#F9C747] font-semibold text-sm leading-tight">
                      Approved by IBCC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#1F0432] to-[#4B0B69]">
          <div className="py-10 px-4 sm:px-0 flex flex-col items-center justify-center space-y-9">
            <div className="text-center">
              <h2 className="font-bold text-3xl mb-2">
                <span className="text-[#5898F7]">Elevate Your </span>Teaching
                Career
              </h2>
              <p className="text-white/70 text-sm max-w-lg">
                Transform your teaching with cutting-edge AI technology. Save
                hours every week while delivering exceptional educational
                experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {teachingCareerCards.map(
                (
                  {
                    logo: Logo,
                    heading,
                    exploreHref,
                    slogan,
                    amount,
                    type,
                    users,
                    colorGradient,
                  },
                  index,
                ) => (
                  <div
                    className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] w-full max-w-full sm:max-w-[17.5rem] tracking-wide"
                    key={index}
                  >
                    <div className="rounded-xl bg-[#2E124D] p-6 h-full flex flex-col">
                      <div
                        className={`bg-gradient-to-br ${colorGradient} p-3 rounded-xl h-fit w-fit mb-4`}
                      >
                        <Logo size={25} />
                      </div>
                      <p className="text-xl font-bold mb-2">{heading}</p>
                      <p className="text-sm text-white/50 max-w-sm mb-4">
                        {slogan}
                      </p>
                      <div className="mt-auto">
                        <div className="flex flex-row justify-between items-center">
                          <div className="flex flex-col">
                            <p className="text-3xl font-bold">{amount}</p>
                            <p className="text-sm text-white/50">{type}</p>
                          </div>
                          <p className="text-white/50 text-xs">
                            <Users size={12} className="inline mb-0.5" />
                            {users}
                          </p>
                        </div>
                        <div className="bg-gray-500/50 h-px w-full rounded-full" />
                        {exploreHref === "#" ? (
                          <button
                            type="button"
                            onClick={() => teacherCtaPlaceholder()}
                            className={`rounded-lg mt-5 px-6 py-3 bg-gradient-to-r ${colorGradient} text-sm font-bold w-full transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20`}
                          >
                            Explore <ArrowRight size={15} className="inline" />
                          </button>
                        ) : (
                          <Link href={exploreHref}>
                            <button
                              className={`rounded-lg mt-5 px-6 py-3 bg-gradient-to-r ${colorGradient} text-sm font-bold w-full transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20`}
                            >
                              Explore{" "}
                              <ArrowRight size={15} className="inline" />
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="bg-[url('/teachers/teachersbg.png')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative flex flex-col items-center justify-center py-20 z-10 text-center space-y-4 px-4 sm:px-0">
            <h2 className="text-4xl font-bold">Become A Member</h2>
            <p className="text-sm max-w-2xl">
              We offer specifically curated content for teachers’ professional
              development - workshops based on book orientation and evolving
              pedagogies, videos and webinars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href={"/contact"}>
                <button className="rounded-sm px-7 py-3 bg-[#E2EBEC] text-[#E91E8C] text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20">
                  Contact Us
                </button>
              </Link>
              <Link href={"/affiliate-login"}>
                <button className="rounded-sm px-7 py-3 bg-transparent border border-[#E2EBEC] text-sm font-semibold transition-all duration-200 hover:bg-white/10 hover:border-white">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#170629] relative overflow-hidden">
          <div className="absolute top-52 left-0 w-[500px] h-[500px] rounded-full bg-[#5B7CFF]/30 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
          <div className="absolute bottom-52 right-0 w-[500px] h-[500px] rounded-full bg-[#E91E8C]/30 blur-[120px] translate-x-1/2 translate-y-1/2 z-0 pointer-events-none" />
          <div className="py-10 px-4 sm:px-0 flex flex-col items-center justify-center space-y-9 z-10">
            <div className="text-center">
              <h2 className="font-bold text-3xl mb-2">
                <span className="text-[#5898F7]">Why Educators </span>Choose Us
              </h2>
              <p className="text-white/70 text-sm max-w-md">
                Comprehensive professional development backed by research and
                proven results
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {advantageCards.map(
                ({ logo: Logo, tag, heading, desc, colorGradient }, index) => (
                  <div
                    key={index}
                    className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] w-full max-w-full sm:max-w-[17.5rem] tracking-wide"
                  >
                    <div className="rounded-xl bg-[#2E124D] p-6 h-full flex flex-col">
                      <div
                        className={`bg-gradient-to-br ${colorGradient} p-3 rounded-xl h-fit w-fit mb-4`}
                      >
                        <Logo size={25} />
                      </div>
                      <div
                        className={`font-bold text-sm rounded-full px-4 py-1 bg-gradient-to-br ${colorGradient} mb-2 w-fit`}
                      >
                        <CircleCheckBig size={15} className="inline mr-1" />{" "}
                        {tag}
                      </div>
                      <h2 className="font-bold text-xl mb-2">{heading}</h2>
                      <p className="text-gray-500 text-sm mb-2">{desc}</p>
                      <button
                        type="button"
                        onClick={() => teacherCtaPlaceholder()}
                        className="text-[#FB64B6] mt-auto text-sm transition-colors duration-150 hover:text-[#FFD1EC] text-left"
                      >
                        Learn More <ArrowRight size={15} className="inline" />
                      </button>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#59168B33] to-[#86104333] border-b border-t border-[#AD46FF33] flex flex-col items-center justify-center py-10 px-4 sm:px-0 space-y-10">
          <h2 className="text-[#DAB2FF] font-bold text-xl">
            Trusted by Leading Educational Organizations
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {trustedInstitutions.map((item, index) => (
              <p key={index} className="px-4 py-2 text-[#E9D4FF99] font-semibold text-center min-w-[120px]">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div
          className="bg-gradient-to-b from-[#1F0432] via-[#4B0B69] to-[#0E032C] py-10 relative overflow-hidden"
          id="Online Courses"
        >
          <div className="absolute top-10 left-0 w-[500px] h-[500px] rounded-full bg-[#5B7CFF]/30 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />
          <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#E91E8C]/30 blur-[120px] translate-x-1/2 translate-y-1/2 z-0" />
          <div className="py-10 px-4 sm:px-0 flex flex-col items-center justify-center space-y-9 z-10">
            <div className="text-center">
              <h2 className="font-bold text-3xl mb-2">
                <span className="text-[#5898F7]">Featured Professional </span>
                Courses
              </h2>
              <p className="text-white/70 text-sm max-w-lg">
                Start your journey with practical, self-paced programs designed
                for busy educators.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredCourses.map(
                (
                  {
                    bestSeller,
                    image,
                    tag,
                    rating,
                    reviews,
                    heading,
                    para,
                    modules,
                    time,
                    prof,
                    newPrice,
                    oldPrice,
                  },
                  index,
                ) => (
                  <div
                    className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] w-full max-w-full sm:max-w-[17.5rem] tracking-wide"
                    key={index}
                  >
                    <div className="rounded-xl bg-[#2E124D] h-full flex flex-col">
                      <div className="rounded-t-xl overflow-hidden relative">
                        <Image
                          src={image}
                          alt=""
                          width={400}
                          height={220}
                          className="h-40 w-full object-cover sm:h-44"
                        />
                        {bestSeller === true && (
                          <div className="absolute left-2 top-2 bg-gradient-to-r from-[#F0B100] to-[#FF6900] rounded-full px-2 py-1">
                            <p className="uppercase text-black text-xs font-semibold">
                              Bestseller
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1 relative">
                        <div className="absolute inset-0 backdrop-blur-lg rounded-b-xl" />
                        <p className="text-xl font-bold text-center z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap">
                          Coming Soon...
                        </p>
                        <div className="flex flex-row justify-between items-center mb-2">
                          <div className="bg-[#AD46FF33] border border-[#AD46FF66] rounded-full px-3 py-1 ">
                            <p className="text-xs text-[#DAB2FF] font-semibold">
                              {tag}
                            </p>
                          </div>
                          <p className="text-sm font-bold">
                            <Star
                              size={15}
                              className="text-[#F9C747] inline mr-1"
                              fill="#F9C747"
                            />
                            {rating}{" "}
                            <span className="font-normal text-[#DAB2FF]">
                              {reviews}
                            </span>
                          </p>
                        </div>
                        <p className="text-md font-bold mb-2">{heading}</p>
                        <p className="text-xs text-white/50 max-w-sm mb-4">
                          {para}
                        </p>

                        <div className="mt-auto">
                          <p className="text-sm text-[#DAB2FF] max-w-sm mb-2">
                            <BookOpen
                              size={15}
                              className="inline mr-2 text-[#C27AFF]"
                            />
                            {modules}
                          </p>
                          <p className="text-sm text-[#DAB2FF] max-w-sm mb-2">
                            <Clock
                              size={15}
                              className="inline mr-2 text-[#C27AFF]"
                            />
                            {time}
                          </p>
                          <p className="text-sm text-[#DAB2FF] max-w-sm mb-4">
                            <Users
                              size={15}
                              className="inline mr-2 text-[#C27AFF]"
                            />
                            {prof}
                          </p>
                          <div className="bg-gray-500/50 h-px w-full rounded-full" />
                          <div className="mt-5 flex flex-row items-center gap-2">
                            <p className="font-bold text-xl">Rs {newPrice}</p>
                            {oldPrice && (
                              <p className="text-sm text-[#C279F9] line-through">
                                Rs {oldPrice}
                              </p>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => teacherCtaPlaceholder()}
                            className="rounded-lg mt-4 px-5 py-2 bg-[#C407B9] text-sm font-semibold w-full transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C407B9]/30"
                          >
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div
          className="bg-[#170629] relative overflow-hidden"
          id="Certifications"
        >
          <div className="absolute top-52 left-0 w-[500px] h-[500px] rounded-full bg-[#5B7CFF]/30 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />
          <div className="absolute bottom-52 right-0 w-[500px] h-[500px] rounded-full bg-[#E91E8C]/30 blur-[120px] translate-x-1/2 translate-y-1/2 z-0" />
          <div className="py-10 px-4 sm:px-0 flex flex-col items-center justify-center space-y-9 z-10">
            <div className="text-center">
              <h2 className="font-bold text-3xl mb-2">
                <span className="text-[#5898F7]">Top Certifications </span>
                For Educators
              </h2>
              <p className="text-white/70 text-sm max-w-lg">
                Recognized short programs to strengthen your practice and meet
                common professional development goals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map(
                (
                  {
                    image,
                    topTag,
                    bottomTag,
                    countries,
                    heading,
                    likes,
                    duration,
                    learners,
                    rating,
                    colorGradient,
                  },
                  index,
                ) => (
                  <div
                    className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] w-full max-w-full sm:max-w-[17.5rem] tracking-wide"
                    key={index}
                  >
                    <div className="rounded-xl bg-[#2E124D] h-full flex flex-col">
                      <div className="rounded-t-xl overflow-hidden relative">
                        <Image
                          src={image}
                          alt=""
                          width={400}
                          height={220}
                          className="h-40 w-full object-cover sm:h-44"
                        />
                        {topTag && bottomTag ? (
                          <div
                            className={`absolute left-2 top-2 bg-gradient-to-r ${colorGradient} rounded-lg px-2 py-1`}
                          >
                            <p className="uppercase text-xs font-semibold">
                              <TrendingUp size={15} className="inline mr-1" />{" "}
                              {topTag}
                            </p>
                          </div>
                        ) : null}
                        {topTag && bottomTag ? (
                          <div className="absolute right-2 top-2 bg-[#FFFFFFF2] text-[#4CA640] rounded-lg p-2">
                            <Award size={20} />
                          </div>
                        ) : null}
                        {topTag && bottomTag ? (
                          <div className="absolute left-2 bottom-2 bg-[#00000097] rounded-full p-2">
                            <p className="uppercase text-[10px] font-semibold">
                              {bottomTag}
                            </p>
                          </div>
                        ) : null}
                      </div>
                      <div className="p-6 flex flex-col flex-1 relative">
                        <div className="absolute inset-0 backdrop-blur-lg rounded-b-xl" />
                        <p className="text-xl font-bold text-center z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap">
                          Coming Soon...
                        </p>
                        <div className="mb-2">
                          <p className="text-xs font-bold uppercase text-[#DAB2FF99]">
                            Also available in {countries}
                          </p>
                        </div>
                        <p className="text-md font-bold mb-2">{heading}</p>

                        <div className="mt-auto">
                          <p className="text-xs text-[#DAB2FF] max-w-sm mb-2">
                            <ThumbsUp size={15} className="inline mr-2" />
                            {likes} Liked this course
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
                            <p className="text-xs text-[#DAB2FF] max-w-sm mb-2">
                              <Clock size={15} className="inline mr-2" />
                              {duration} hrs
                            </p>
                            <p className="text-xs text-[#DAB2FF] max-w-sm mb-4">
                              <Users size={15} className="inline mr-2" />
                              {learners} learners
                            </p>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-row gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  size={15}
                                  key={i}
                                  className={
                                    rating < i + 1
                                      ? "text-[#45556C]"
                                      : "text-[#F9C747]"
                                  }
                                  fill={rating < i + 1 ? "none" : "#F9C747"}
                                />
                              ))}
                            </div>
                            <p className="font-semibold text-sm">{rating}</p>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <button
                              type="button"
                              onClick={() => teacherCtaPlaceholder()}
                              className="rounded-lg mt-4 px-2 py-4 bg-gradient-to-r from-[#1D293D99] to-[#0F172B99] border border-[#AD46FF4D] text-sm font-semibold w-full transition-all duration-200 hover:border-[#AD46FF] hover:bg-[#1D293DCC]"
                            >
                              More Info
                            </button>
                            <button
                              type="button"
                              onClick={() => teacherCtaPlaceholder()}
                              className="rounded-lg mt-4 px-2 py-4 bg-[#E01CF4] text-sm font-semibold w-full transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E01CF4]/30"
                            >
                              Start Test
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div
          className="bg-gradient-to-b from-[#1F0432] via-[#4B0B69] to-[#0E032C] relative overflow-hidden"
          id="AI Tools"
        >
          <div className="absolute top-52 left-0 w-[500px] h-[500px] rounded-full bg-[#5B7CFF]/30 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />
          <div className="absolute bottom-52 right-0 w-[500px] h-[500px] rounded-full bg-[#E91E8C]/30 blur-[120px] translate-x-1/2 translate-y-1/2 z-0" />
          <div className="py-10 px-4 sm:px-0 flex flex-col items-center justify-center space-y-9 z-10">
            <div className="text-center">
              <h2 className="font-bold text-3xl mb-2">
                <span className="text-[#5898F7]">Powerful AI Tools </span>For
                Educators
              </h2>
              <p className="text-white/70 text-sm max-w-md">
                Transform your teaching with cutting-edge AI technology. Save
                hours every week while delivering exceptional educational
                experiences.
              </p>
            </div>
            <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] w-full max-w-4xl tracking-wide">
              <div className="rounded-xl bg-[#2E124D] p-2 h-full flex flex-col sm:flex-row sm:flex-wrap gap-3 text-sm text-[#90A1B9] font-semibold">
                {toolCategoryTabs.map((label) => {
                  const isActive = active === label;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setActive(label)}
                      aria-pressed={isActive}
                      className={`px-4 py-2 rounded-lg transition-colors duration-150 w-full sm:w-auto text-center font-semibold ${
                        isActive
                          ? "bg-white text-black"
                          : "text-[#90A1B9] hover:text-white"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {previewTools.map((tool) => (
                <TeacherToolCard key={tool.href} tool={tool} />
              ))}
            </div>
            {hasMoreTools && (
              <p className="text-center text-xs text-white/60">
                Showing {previewTools.length} of {filteredTools.length} tools.
                Click the button below to see the full list.
              </p>
            )}
            <Link
              href="/teacher/tools"
              className="relative z-10 inline-flex items-center rounded-full bg-[#C543BA] px-5 py-3 text-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C543BA]/30"
            >
              Explore All tools <ArrowRight size={15} className="inline" />
            </Link>
          </div>
        </div>
        <div className="bg-[#5D3794] py-10 px-4 sm:px-0 flex flex-col justify-center items-center text-center">
          <div className="bg-gradient-to-br from-[#9810FA] to-[#E60076] p-3 rounded-xl h-fit w-fit mb-4">
            <Rocket size={25} />
          </div>
          <h2 className="font-bold text-3xl mb-2">
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-[#E9D4FF] text-sm max-w-sm mb-4">
            Join 50,000+ educators advancing their careers with our expert-led
            courses. Start your free trial today.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2 w-full max-w-xl">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="bg-[#00000080] border border-[#AD46FF4D] placeholder:text-xs placeholder:text-[#DAB2FF80] px-2 py-2 rounded-lg sm:col-span-2 w-full"
            />
            <button
              type="button"
              onClick={() =>
                teacherCtaPlaceholder(
                  "Free trial signup is coming soon. We will let you know when it is available.",
                )
              }
              className="rounded-lg bg-[#C543BA] px-4 py-2 text-sm w-full transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C543BA]/30 sm:col-span-1"
            >
              Start Free Trial
            </button>
          </div>
          <p className="text-xs text-[#DAB2FF]">
            No credit card required • 30-day money-back guarantee
          </p>
        </div>
        <div>
          <FAQ faqs={teachersFAQs} />
        </div>
      </div>
    </Container>
  );
}
