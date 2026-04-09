import React from "react";
import { FaCircle } from "react-icons/fa";

const cardData = [
  {
    title: "I Am Scientist Free",
    price: "$0",
    description: "The most used and loved platform for educators and students.",
    buttonText: "Sign Up Free",
    features: [
      "All 70+ standards based, time saving AI tools for educators and growing.",
      "I Am scientist, our AI chatbot built specifically for education.",
      "All 40+ educator monitored tools for students that build AI literacy and skills.",
      "AI Slides generation with Presentation Generator exportable to Google Slides.",
      "AI Image generation for educators and students powered by Adobe.",
    ],
  },
  {
    title: "I Am Scientist Plus",
    price: "$8.33/month",
    description: "The most used and loved platform for educators and students.",
    buttonText: "Sign Up Free",
    features: [
      "All 70+ standards based, time saving AI tools for educators and growing.",
      "I Am scientist, our AI chatbot built specifically for education.",
      "All 40+ educator monitored tools for students that build AI literacy and skills.",
      "AI Slides generation with Presentation Generator exportable to Google Slides.",
      "AI Image generation for educators and students powered by Adobe.",
    ],
  },
  {
    title: "I Am Scientist Enterprise",
    price: "Custom",
    description: "The most used and loved platform for educators and students.",
    buttonText: "Sign Up Free",
    features: [
      "All 70+ standards based, time saving AI tools for educators and growing.",
      "I Am scientist, our AI chatbot built specifically for education.",
      "All 40+ educator monitored tools for students that build AI literacy and skills.",
      "AI Slides generation with Presentation Generator exportable to Google Slides.",
      "AI Image generation for educators and students powered by Adobe.",
    ],
  },
];

const PricingCards = () => {
  const topGradients = ["bg-[#2E98FC]", "bg-[#78EAC4]", "bg-[#EFAA66]"];

  const splitPrice = (price: string): { dollar: string; value: string } => {
    if (price.startsWith("$")) {
      const [dollar, ...rest] = price.split(/(?<=\$)/);
      return { dollar, value: rest.join("") };
    }
    return { dollar: "", value: price };
  };

  return (
    <div className="w-full  min-h-screen font-popins flex flex-col items-center justify-center py-10 px-2 md:px-6">
      <div className="flex flex-col justify-center items-center text-center w-full md:w[90%] xl:w-[70%] 2xl:max-w-4xl mb-10 gap-3">
        <h1 className="text-[#C407B9] text-xl md:text-2xl font-semibold tracking-wide font-popins ">
          Simple, transparent pricing
        </h1>
        <p className="text-sm font-popins text-justify md:text-center">
          Free for educators and subscription levels to fit your needs. Over
          5,000 school and district partners and growing - the award-winning,
          most loved, and most used AI platform in the world for education.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 space-y-4  justify-center items-center sm:grid-cols-1 max-w-6xl">
        {cardData.map((card, index) => {
          const { dollar, value } = splitPrice(card.price);
          return (
            <div
              key={index}
              className="max-w-sm p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-lg"
            >
              {/* Top gradient */}
              <div
                className={`rounded-t-xl h-4 ${
                  topGradients[index % topGradients.length]
                }`}
              />

              <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] text-white rounded-b-xl p-6 flex flex-col text-left">
                <h2>
                  {card.title}
                </h2>
                <p className="text-4xl font-bold mb-4 tracking-wider font-popins flex items-baseline">
                  <span className="text-2xl">{dollar}</span>
                  <span className="ml-1">{value}</span>
                </p>
                <p className="mb-6 font-popins">{card.description}</p>
                <button className="bg-[#C407B9] hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg mb-6 transform transition-colors duration-300">
                  {card.buttonText}
                </button>
                <h3 className="font-semibold mb-4">Free For Educators.....</h3>
                <ul className="text-sm space-y-2 ">
                  {card.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start transform transition-transform duration-300"
                    >
                      <FaCircle className="text-white mr-3 mt-2 size-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCards;
