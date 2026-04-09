import Link from "next/link";
import React from "react";

const ThankYou: React.FC = () => {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen font-inter bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] text-white px-4">
    //   <div className="w-44 h-40 2xl:w-80  overflow-hidden 2xl:h-80 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-3xlxl rounded-tr-full rounded-b-full rounded-bl-full opacity-60 z-10"></div>
    //   <div className="w-44 h-40 2xl:w-80  overflow-hidden 2xl:h-80 bg-[#6C0988] absolute bottom-0 right-0 blur-xl backdrop-blur-3xlxl rounded-tr-full rounded-b-full rounded-bl-full opacity-60 z-10"></div>
    //   {/* Icon */}
    //   <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-[rgba(196,7,185,1)] rounded-full z-50">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-12 w-12 text-white"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //       strokeWidth={3}
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M5 13l4 4L19 7"
    //       />
    //     </svg>
    //   </div>

    //   {/* Thank You Text */}
    //   <h1 className="text-3xl font-bold mt-6 z-50">
    //     Thank You for Participation
    //   </h1>

    //   {/* Description */}
    //   <p className="text-center text-lg mt-4 z-50">
    //     This exam system contains easy questions. Please wait for grading.
    //   </p>

    //   {/* Candidate Name */}

    //   {/* Button */}
    //   <Link href="/exam/result-page">
    //     <button className="mt-8 px-8 py-3 bg-[rgba(196,7,185,1)] hover:bg-pink-600 transition z-50 text-white text-md font-semibold shadow-lg">
    //        Back To Home
    //     </button>
    //   </Link>
    // </div>

    <div className="relative flex flex-col items-center justify-center min-h-screen font-inter bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] text-white px-4 overflow-hidden">
      {/* Top Background Blob */}
      <div className="w-32 h-32 sm:w-44 sm:h-40 2xl:w-80 2xl:h-80 bg-[#6C0988] absolute top-0 left-0 blur-3xl backdrop-blur-3xl rounded-tr-full rounded-b-full rounded-bl-full opacity-60 z-10"></div>

      {/* Bottom Background Blob */}
      <div className="w-32 h-32 sm:w-44 sm:h-40 2xl:w-80 2xl:h-80 bg-[#6C0988] absolute bottom-0 right-0 blur-3xl backdrop-blur-3xl rounded-tr-full rounded-b-full rounded-bl-full opacity-60 z-10"></div>

      {/* Icon */}
      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-[rgba(196,7,185,1)] rounded-full z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Thank You Text */}
      <h1 className="text-2xl sm:text-3xl font-bold mt-6 z-50 text-center">
        Thank You for Participation
      </h1>

      {/* Description */}
      <p className="text-center text-base sm:text-lg mt-4 z-50 max-w-md">
        This exam system contains easy questions. Please wait for grading.
      </p>

      {/* Button */}
      <Link href="/exam/result-page">
        <button className="mt-8 px-6 py-3 text-sm sm:text-md bg-[rgba(196,7,185,1)] hover:bg-pink-600 transition z-50 text-white font-semibold shadow-lg rounded">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ThankYou;
