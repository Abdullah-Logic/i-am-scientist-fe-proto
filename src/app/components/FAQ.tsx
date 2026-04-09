
"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex((prev: number | null) => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: "Who can become an affiliate partner?",
      answer:
        "Educational institutions, educators and organizations passionate about enhancing AI education ",
    },
    {
      question: " Why should I become an affiliate partner?",
      answer:
        "Access high-quality educational tools, expert collaborations and exclusive content for your students",
    },
    {
      question: 'How can "I\'m Scientist" help to improve your curriculum?',
      answer:
        "We provide expert-developed resources and programs in science, technology and AI to enrich your curriculum with up-to-date content that sparks creativity and critical thinking.",
    },
    {
      question: " How do I get access to the educational resources?",
      answer:
        "Once your status is approved, you’ll gain access to our resources, programs and updates directly through our platform ",
    },
    {
      question: " How do I get started as an affiliate? ",
      answer:
        "Fill out the affiliation form on website and our team will reach out to discuss the next steps for partnership ",
    },
  ];

  return (
    <div className="h-auto text-white py-6 md:py-16 bg-gradient-to-r from-[#1C032F] to-[#0032AB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold font-misri mt-3 text-center">
            Frequently Asked Questions
          </h2>
          <div className="w-28 h-1 rounded-lg bg-white mt-4"></div>
        </div>
        <div className="mx-auto max-w-[800px] space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#FFFFFF] bg-gradient-to-r from-[#1C032FB2] to-[#0032ABB2] rounded-lg shadow-lg"
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-left px-6 py-4 font-inter text-sm md:text-lg font-semibold focus:outline-none flex justify-between items-center"
              >
                {faq.question}
                <span>
                  {openIndex === index ? (
                    <FaMinus size={15} />
                  ) : (
                    <FaPlus size={15} />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-2">
                  <p className="font-inter text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
