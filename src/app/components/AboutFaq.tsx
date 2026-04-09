"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
    AboutFaq: FAQItem[];
}

const AboutFAQ: React.FC<FAQProps> = ({AboutFaq}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

  return (
    <div className="h-auto text-white py-6 md:py-16 bg-gradient-to-r from-[#1C032F] to-[#0032AB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-misri mt-3 text-center">
            Frequently Asked Questions
          </h2>
          <div className="w-28 h-1 rounded-lg bg-white mt-4"></div>
        </div>
        <div className="mx-auto max-w-[800px] space-y-4">
          {AboutFaq.map((faq, index) => (
            <div
              key={index}
              className="border border-[#FFFFFF] bg-gradient-to-r from-[#1C032FB2] to-[#0032ABB2] rounded-lg shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-inter text-base md:text-xl font-semibold focus:outline-none flex justify-between items-center"
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
                  <p className="font-inter text-sm md:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFAQ;
