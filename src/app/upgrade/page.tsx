"use client";

import Head from "next/head";
import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const plans = [
  {
    name: "Student Starter",
    price: "$0",
    period: "",
    description:
      "Begin your AI journey with free access to essential tools and resources.",
    buttonText: "Get Started Free",
    features: [
      "Access to free AI courses for students",
      "Participation in basic AI contests",
      "Limited free AI tools for students",
      "Guidance resources from educators",
      "Community support and forums",
    ],
  },
  {
    name: "Student Pro",
    price: "$9.99",
    period: "/ month",
    description:
      "Unlock premium AI courses, advanced contests, and student tools.",
    buttonText: "Upgrade to Pro",
    features: [
      "Everything in Student Starter plan",
      "Access to advanced AI courses",
      "Eligibility for premium AI contests",
      "Paid AI tools for students",
      "Priority support and updates",
    ],
  },
  {
    name: "Enterprise",
    price: "$19.99",
    period: "/ month",
    description: "Empower your classroom with AI tools and teaching resources.",
    buttonText: "Subscribe Now",
    features: [
      "Access to free & paid AI tools for teachers and students",
      "AI contests for unlimited students",
      "Monitor student AI progress",
      "Exclusive AI teaching resources",
      "Priority support and updates",
    ],
  },
];

const tierTopBar = [
  "before:bg-gradient-to-r before:from-[#2E98FC] before:to-[#52b8ff]",
  "before:bg-gradient-to-r before:from-[#4ade80] before:to-[#86efac]",
  "before:bg-gradient-to-r before:from-[#fbbf24] before:to-[#fcd34d]",
] as const;

export default function Upgrade() {
  return (
    <DashboardLayout activeTab="Upgrade">
      <Head>
        <title>I am Scientist - Upgrade</title>
      </Head>

      <div className="flex w-full flex-col items-center px-4 py-8 text-center font-popins text-white md:px-8 md:py-12">
        <div className="mb-0">
          <h1 className="mb-4 text-[1.8rem] font-semibold text-[#d112d1]">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto max-w-[900px] text-[0.95rem] leading-relaxed text-[#e0e0e0]">
            Free for educators and subscription levels to fit your needs. Over
            5,000 school and district partners and growing - the award-winning,
            most loved, and most used AI platform in the world for education.
          </p>
        </div>

        <div className="mt-12 grid w-full max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-xl border border-[rgba(135,45,230,0.4)] bg-[rgba(30,9,71,0.6)] p-8 text-left shadow-[0_10px_30px_rgba(0,0,0,0.2)] before:absolute before:left-0 before:right-0 before:top-0 before:h-1.5 before:rounded-t-xl before:content-[''] ${tierTopBar[index] ?? tierTopBar[0]}`}
            >
              <div className="mb-2 flex min-h-[3rem] items-start text-[1.1rem] font-semibold">
                {plan.name}
              </div>
              <div className="mb-3 flex min-h-[2.5rem] items-baseline gap-1 text-2xl font-semibold">
                {plan.price}{" "}
                {plan.period && (
                  <span className="text-base font-normal text-[#a09eb5]">
                    {plan.period}
                  </span>
                )}
              </div>
              <div className="mb-5 min-h-[3rem] text-[0.85rem] leading-normal text-[#a09eb5]">
                {plan.description}
              </div>
              <button
                type="button"
                className="mb-5 w-full cursor-pointer rounded-lg border-none bg-[#d112d1] py-3 text-[0.9rem] font-medium text-white transition-colors hover:bg-[#ff33ff]"
              >
                {plan.buttonText}
              </button>

              <div className="mb-4 border-t border-[rgba(135,45,230,0.3)] pt-4 text-[0.9rem] font-medium">
                Features:
              </div>
              <ul className="m-0 flex-1 list-none p-0">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="mb-4 flex items-start gap-2 text-[0.75rem] font-normal leading-snug text-[#e0e0e0]"
                  >
                    <span className="font-bold text-[#d112d1]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
