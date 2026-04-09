"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Code,
  Globe,
  GraduationCap,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Upload,
  UserPlus,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import Container from "../components/container/container";

function uniPlusCtaPlaceholder(message?: string) {
  void Swal.fire({
    title: "Coming soon",
    text:
      message ??
      "This experience is not available yet. Please check back soon.",
    icon: "info",
    confirmButtonColor: "#C543BA",
  });
}

const highlights = [
  {
    icon: GraduationCap,
    title: "Hands-on AI Projects",
    description:
      "Build real-world AI applications with cutting-edge technologies and expert mentorship.",
    color: "from-[#2563EB] to-[#06B6D4]",
  },
  {
    icon: Users,
    title: "University Collaboration",
    description:
      "Connect with fellow students, professors, and industry professionals across universities.",
    color: "from-[#7C3AED] to-[#A78BFA]",
  },
  {
    icon: Award,
    title: "Certification & Recognition",
    description:
      "Earn certificates and showcase your projects to build a strong portfolio for your career.",
    color: "from-[#06B6D4] to-[#2563EB]",
  },
  {
    icon: Sparkles,
    title: "Industry Exposure",
    description:
      "Get noticed by leading tech companies and access exclusive internship opportunities.",
    color: "from-[#1E3A8A] to-[#7C3AED]",
  },
];

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account and join the UniPlus community",
    color: "from-[#2563EB] to-[#06B6D4]",
  },
  {
    icon: Calendar,
    title: "Join Hackathon",
    description: "Browse and register for upcoming AI hackathons",
    color: "from-[#7C3AED] to-[#A78BFA]",
  },
  {
    icon: Code,
    title: "Build Project",
    description: "Collaborate with your team and build innovative solutions",
    color: "from-[#06B6D4] to-[#2563EB]",
  },
  {
    icon: Upload,
    title: "Submit Project",
    description: "Upload your project and showcase your work",
    color: "from-[#1E3A8A] to-[#7C3AED]",
  },
  {
    icon: Trophy,
    title: "Get Evaluated & Win",
    description: "Receive feedback, earn recognition, and win prizes",
    color: "from-[#7C3AED] to-[#A78BFA]",
  },
];

const hackathons = [
  {
    id: 1,
    title: "AI Healthcare Challenge",
    date: "April 15-17, 2026",
    theme: "Healthcare & Medical AI",
    participants: "500+",
    duration: "48 hours",
    status: "upcoming",
    image: "/uniPlus/upcoming.svg",
  },
  {
    id: 2,
    title: "Smart Cities Innovation",
    date: "May 5-7, 2026",
    theme: "Urban Tech & Sustainability",
    participants: "350+",
    duration: "48 hours",
    status: "upcoming",
    image: "/uniPlus/upcoming.svg",
  },
  {
    id: 3,
    title: "EdTech Revolution",
    date: "June 10-12, 2026",
    theme: "Education & Learning AI",
    participants: "400+",
    duration: "48 hours",
    status: "upcoming",
    image: "/uniPlus/upcoming.svg",
  },
] as const;

const criteria = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Creativity and originality of your solution",
  },
  {
    icon: Target,
    title: "Usability",
    description: "Practical application and user experience",
  },
  {
    icon: CheckCircle,
    title: "AI Usage",
    description: "Effective implementation of AI technologies",
  },
];

const benefits = {
  students: [
    {
      icon: Award,
      title: "Certificates & Recognition",
      description:
        "Earn industry-recognized certificates to boost your credentials",
    },
    {
      icon: Briefcase,
      title: "Portfolio Building",
      description: "Build an impressive portfolio with real-world AI projects",
    },
    {
      icon: TrendingUp,
      title: "Career Exposure",
      description:
        "Get noticed by top tech companies and access exclusive opportunities",
    },
  ],
  universities: [
    {
      icon: Building,
      title: "University Collaboration",
      description:
        "Foster partnerships with leading tech companies and institutions",
    },
    {
      icon: Rocket,
      title: "Innovation Ecosystem",
      description:
        "Create a thriving culture of innovation and entrepreneurship",
    },
    {
      icon: Globe,
      title: "Enhanced Branding",
      description:
        "Strengthen institutional reputation as a hub for AI excellence",
    },
  ],
};

export default function UniPlusPage() {
  return (
    <Container>
      <div className="min-h-screen overflow-x-hidden text-white">
        <main>
          <section
            id="home"
            className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#1B042D] via-[#4B0764] to-[#090327] px-4 pb-16 pt-24 sm:px-6 lg:px-8"
          >
            <div className="absolute top-52 left-0 w-[500px] h-[500px] rounded-full bg-[#5B7CFF]/30 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="absolute bottom-52 right-0 w-[500px] h-[500px] rounded-full bg-[#E91E8C]/30 blur-[120px] translate-x-1/2 translate-y-1/2 z-0" />
            <div className="absolute bottom-24 left-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/25 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Image
                src="/teachers/stars.svg"
                alt="image of blue stars"
                width={900}
                height={900}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              />
            </motion.div>
            <div className="relative z-10 mx-auto grid max-w-5xl items-center justify-items-center gap-7 lg:grid-cols-2 lg:justify-items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex w-full min-w-0 flex-col items-center text-center lg:items-start lg:text-left"
              >
                <h1 className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                  Build the Future
                  <br />
                  with <span className="text-[#FDC700]">AI Hackathons</span>
                </h1>
                <p className="mb-8 max-w-xl text-sm text-[#D1D5DC] sm:text-base">
                  UniPlus connects students and universities through innovative
                  AI hackathons. Build real-world projects, gain hands-on
                  experience, and shape the future of technology.
                </p>
                <div className="flex w-full max-w-md flex-col items-center gap-3 lg:max-w-none lg:flex-row lg:justify-start">
                  <button
                    type="button"
                    onClick={() =>
                      uniPlusCtaPlaceholder(
                        "Hackathon registration will open soon. Stay tuned for updates.",
                      )
                    }
                    className="w-full max-w-xs rounded-lg bg-gradient-to-r from-[#C800DE] to-[#9810FA] px-6 py-2.5 shadow-[0_0_28px_rgba(200,0,222,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(200,0,222,0.5)] lg:w-auto lg:max-w-none"
                  >
                    Register Now
                  </button>
                  <Link href="#hackathons">
                    <button className="w-full max-w-xs rounded-lg border border-[#8151B2] bg-[#1A0033] px-6 py-2.5 shadow-[0_0_22px_rgba(129,81,178,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(129,81,178,0.4)] lg:w-auto lg:max-w-none">
                      Explore Hackathons
                    </button>
                  </Link>
                </div>
                <div className="mt-5 w-full self-stretch">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center lg:text-left">
                      <div className="text-lg font-bold sm:text-2xl">50+</div>
                      <div className="text-xs text-[#D1D5DC]">Universities</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-lg font-bold sm:text-2xl">10K+</div>
                      <div className="text-xs text-[#D1D5DC]">Students</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-lg font-bold sm:text-2xl">500+</div>
                      <div className="text-xs text-[#D1D5DC]">Projects</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto w-full max-w-xl relative"
              >
                <div className="overflow-hidden rounded-2xl border border-[#5F328B] bg-[#240D3E] relative h-[270px] shadow-[0_0_40px_rgba(91,124,255,0.25)] sm:h-[320px]">
                  <Image
                    src="/uniPlus/hackathon.jpeg"
                    alt="Students coding at hackathon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#1A0033E5] rounded-xl border border-[#06B6D44D] p-3 w-[min(100%,18rem)] lg:w-fit flex flex-row items-center justify-center gap-3 absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 shadow-[0_0_26px_rgba(6,182,212,0.35)] lg:-left-7 lg:translate-x-0">
                  <div className="bg-gradient-to-br from-[#06B6D4] to-[#2563EB] p-3 rounded-full">
                    <Rocket size={15} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <p className="text-xs font-semibold">Next Hackathon</p>
                    <p className="text-xs text-gray-400">
                      Starts April 15, 2026
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section
            id="about"
            className="relative overflow-hidden bg-gradient-to-b from-[#1F0432] via-[#4B0B69] to-[#0E032C] py-10 flex flex-col gap-12"
          >
            <div className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#5B7CFF]/25 blur-[120px] translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="absolute top-[55%] left-0 w-[500px] h-[500px] rounded-full bg-[#E91E8C]/22 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 text-center"
              >
                <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                  What is <span className="text-[#5898F7]">UniPlus ?</span>
                </h2>
                <p className="mx-auto max-w-3xl text-sm text-[#D0BBE5]">
                  UniPlus is a university-focused initiative that empowers
                  students to participate in AI hackathons, build innovative
                  projects, and connect with the global tech ecosystem.
                  We&apos;re creating a platform where education meets
                  innovation, and students become the innovators of tomorrow.
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {highlights.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="h-full"
                  >
                    <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] tracking-wide shadow-[0_16px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(246,76,255,0.35)] h-full">
                      <div className="rounded-xl bg-[#2E124D] p-4 h-full flex flex-col text-left">
                        <div
                          className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br ${item.color}`}
                        >
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="mb-4 text-base font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-xs leading-5 text-[#D0BBE5]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 text-center">
                <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                  How It <span className="text-[#5898F7]">Works ?</span>
                </h2>
                <p className="mx-auto max-w-2xl text-sm text-[#D0BBE5]">
                  UniPlus is a university-focused initiative that empowers
                  students to participate in AI hackathons, build innovative
                  projects, and connect with the global tech ecosystem.
                  We&apos;re creating a platform where education meets
                  innovation, and students become the innovators of tomorrow.
                </p>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute left-8 right-8 top-14 h-0.5 bg-gradient-to-r from-[#FF00CC4D] via-[#7C3AED4D] to-[#06B6D44D] z-0" />
                <div className="flex items-start justify-between gap-4 relative z-50">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="max-w-[180px] text-center"
                    >
                      <div
                        className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${step.color}`}
                      >
                        <step.icon className="h-4 w-4 " />
                      </div>
                      <div className="mx-auto mb-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#7C3AED] bg-[#1A0033] text-xs font-bold">
                        {index + 1}
                      </div>
                      <h3 className="mb-1 text-sm font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#D0BBE5]">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-7 lg:hidden">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="mx-auto flex w-full max-w-md items-start gap-4"
                  >
                    <div className="flex shrink-0 flex-col items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${step.color}`}
                      >
                        <step.icon className="h-4 w-4" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="my-2 h-14 w-0.5 bg-gradient-to-b from-[#FF00CC4D] via-[#7C3AED4D] to-[#06B6D44D]" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 pt-1 text-left">
                      <h3 className="mb-1 text-sm font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#D0BBE5]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="hackathons"
            className="relative overflow-hidden bg-[#170629] py-10"
          >
            <div className="absolute top-32 left-0 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/20 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="absolute bottom-28 right-0 w-[500px] h-[500px] rounded-full bg-[#E91E8C]/25 blur-[120px] translate-x-1/2 translate-y-1/2 z-0" />
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 text-center"
              >
                <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                  Upcoming <span className="text-[#5898F7]">Hackathons</span>
                </h2>
                <p className="mx-auto max-w-2xl text-sm text-[#D0BBE5]">
                  Join our exciting AI hackathons and showcase your skills with
                  innovative projects
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {hackathons.map((hackathon, index) => (
                  <motion.article
                    key={hackathon.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className={` overflow-hidden`}
                  >
                    <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] tracking-wide shadow-[0_16px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(246,76,255,0.35)] h-full">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={hackathon.image}
                          alt={hackathon.title}
                          height={100}
                          width={100}
                          className="h-full w-full object-cover rounded-t-xl"
                        />
                      </div>
                      <div className="rounded-b-xl bg-[#2E124D] p-4 flex flex-col ">
                        <div className="p-5">
                          <h3 className="mb-1 text-lg font-semibold">
                            {hackathon.title}
                          </h3>
                          <p className="mb-4 text-xs text-[#D3C1E8]">
                            {hackathon.theme}
                          </p>
                          <div className="mb-5 space-y-2 text-xs text-[#D3C1E8]">
                            <p className="flex items-center gap-2">
                              <Calendar className="h-3.5 w-3.5 text-[#4BB7D4]" />
                              {hackathon.date}
                            </p>
                            <p className="flex items-center gap-2">
                              <Users className="h-3.5 w-3.5 text-[#EB4ECC]" />
                              {hackathon.participants} participants
                            </p>
                            <p className="flex items-center gap-2">
                              <Clock className="h-3.5 w-3.5 text-[#7D48ED]" />
                              {hackathon.duration}
                            </p>
                          </div>
                          <Link href={"/projects-bidding/register"}>
                            <button className="w-full rounded-lg bg-gradient-to-r from-[#FF00CC] to-[#7C3AED] px-4 py-2 text-xs font-semibold shadow-[0_0_24px_rgba(255,0,204,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(255,0,204,0.45)]">
                              Register Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-11 text-center">
                <Link href={"/projects-bidding"}>
                  <button className="rounded-full bg-[#C406B9] px-7 py-2.5 text-sm font-semibold shadow-[0_0_26px_rgba(196,6,185,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(196,6,185,0.5)]">
                    Explore All Hackathons{" "}
                    <ArrowRight size={15} className="inline mb-1" />
                  </button>
                </Link>
              </div>
            </div>
          </section>

          <section
            id="submit"
            className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#1F0432] via-[#4B0B69] to-[#0E032C] py-16"
          >
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#5B7CFF]/22 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/28 blur-[120px] translate-x-1/2 translate-y-1/2 z-0" />
            <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 items-center justify-items-center lg:justify-items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-xl text-center lg:max-w-none lg:text-left"
              >
                <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                  <span className="text-[#5898F7]">Submit Your</span> Project
                </h2>
                <p className="mb-7 text-sm text-[#D0BBE5] mx-auto lg:mx-0">
                  Showcase your innovative AI project to our panel of expert
                  judges and the global community. Get valuable feedback,
                  recognition, and opportunities to take your project to the
                  next level.
                </p>
                <div className="space-y-4">
                  {criteria.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="flex items-start gap-4 text-left"
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-[#F5A622]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        <p className="text-xs text-[#D0BBE5]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-7 flex justify-center lg:justify-start">
                  <Link href={"/projects-bidding/sell"}>
                    <button className="inline-flex items-center rounded-lg bg-[#C406B9] px-6 py-2.5 text-sm font-semibold shadow-[0_0_26px_rgba(196,6,185,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(196,6,185,0.5)]">
                      <Upload className="mr-2 h-4 w-4" />
                      Submit Your Project
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-xl mx-auto p-6 lg:mx-0 lg:max-w-none"
              >
                <div className="bg-[#1A0033B2] p-5 border border-[#7C3AED4D] rounded-lg text-left">
                  <h3 className="mb-5 text-xl font-bold">
                    Submission Guidelines
                  </h3>
                  <div className="space-y-3 text-xs text-[#D0BBE5] sm:text-sm">
                    {[
                      {
                        label: "Project Description:",
                        desc: "goals and problem solved.",
                        badgeClass:
                          "border-[#06B6D4] text-[#06B6D4] bg-[#06B6D433]",
                      },
                      {
                        label: "Demo Video:",
                        desc: "a 3-5 minute product walkthrough.",
                        badgeClass:
                          "border-[#7C3AED] text-[#7C3AED] bg-[#7C3AED33]",
                      },
                      {
                        label: "Source Code:",
                        desc: "GitHub repo with docs.",
                        badgeClass:
                          "border-[#FF00CC] text-[#FF00CC] bg-[#FF00CC33]",
                      },
                      {
                        label: "Presentation:",
                        desc: "slides explaining technical approach.",
                        badgeClass:
                          "border-[#06B6D4] text-[#06B6D4] bg-[#06B6D433]",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 text-xs font-bold ${item.badgeClass}`}
                        >
                          {index + 1}
                        </div>
                        <div className="flex flex-col">
                          <p className="text-white font-bold">{item.label}</p>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-lg border border-[#7C3AED4D0] bg-gradient-to-r from-[#7C3AED33] to-[#06B6D433] p-4">
                    <p className="text-xs text-[#DCCBEF] sm:text-sm">
                      <strong className="text-white">Deadline:</strong> Projects
                      must be submitted within 48 hours of hackathon end time
                    </p>
                  </div>
                </div>
              </motion.aside>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#170629] py-16">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#E91E8C]/30 blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="absolute top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/20 blur-[120px] translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 text-center"
              >
                <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                  <span className="text-[#5898F7]">Why Join</span> Uni Plus ?
                </h2>
              </motion.div>
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.article
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={` p-6`}
                >
                  <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] tracking-wide shadow-[0_16px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(246,76,255,0.35)] h-full">
                    <div className="rounded-xl bg-[#2E124D] p-6 flex flex-col h-full">
                      <h3 className="mb-5 text-lg font-bold text-left">
                        For Students
                      </h3>
                      <div className="space-y-5">
                        {benefits.students.map((item, index) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            className="flex items-start gap-4 text-left"
                          >
                            <div className="flex h-fit w-fit p-1 items-center justify-center rounded-md bg-gradient-to-br from-[#06B6D4] to-[#2563EB]">
                              <item.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="mb-1 text-sm font-semibold">
                                {item.title}
                              </h4>
                              <p className="text-xs text-[#D0BBE5]">
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={` p-6`}
                >
                  <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553] tracking-wide shadow-[0_16px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(246,76,255,0.35)] h-full">
                    <div className="rounded-xl bg-[#2E124D] p-6 flex flex-col h-full">
                      <h3 className="mb-5 text-lg font-bold text-left">
                        For Universities
                      </h3>
                      <div className="space-y-5">
                        {benefits.universities.map((item, index) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            className="flex items-start gap-4 text-left"
                          >
                            <div className="flex h-fit w-fit p-1 items-center justify-center rounded-md bg-[#F5A622]">
                              <item.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="mb-1 text-sm font-semibold">
                                {item.title}
                              </h4>
                              <p className="text-xs text-[#D0BBE5]">
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden">
            <div className="relative z-10 bg-[#5D3794] py-10 px-4 sm:px-0 flex flex-col justify-center items-center text-center">
              <div className="bg-gradient-to-br from-[#9810FA] to-[#E60076] p-3 rounded-xl h-fit w-fit mb-4">
                <Rocket size={25} />
              </div>
              <h2 className="font-bold text-2xl mb-2 px-2 sm:text-3xl">
                Join Exciting Hackathons & Showcase Your Projects
              </h2>
              <p className="text-[#E9D4FF] text-sm max-w-sm mb-4">
                Discover the latest hackathons, compete with peers, and get your
                projects featured on our platform. Connect, learn, and grow your
                skills.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2 w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Enter Your Email to Get Featured"
                  className="bg-[#00000080] border border-[#AD46FF4D] placeholder:text-xs placeholder:text-[#DAB2FF80] px-2 py-2 rounded-lg sm:col-span-2 w-full"
                />
                <button
                  type="button"
                  onClick={() =>
                    uniPlusCtaPlaceholder(
                      "Project listing is coming soon. We will notify you when you can feature your work.",
                    )
                  }
                  className="rounded-lg bg-[#C543BA] px-4 py-2 text-sm w-full shadow-[0_0_22px_rgba(197,67,186,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(197,67,186,0.5)]"
                >
                  List Your Project
                </button>
              </div>
              <p className="text-xs text-[#DAB2FF]">
                Free to list • Feature your projects in front of thousands of
                students & professionals
              </p>
            </div>
          </section>
        </main>
      </div>
    </Container>
  );
}
