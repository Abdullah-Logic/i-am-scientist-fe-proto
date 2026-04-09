import React from "react";

const ChooseRole: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] text-white">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/navbar/logo.png" // Replace with your logo path
          width={150}
          height={100}
          alt="I Am Scientist"
        />
      </div>

      {/* Heading */}
      <p className="text-sm md:text-base font-semibold mb-8 text-center">
        I will be using I Am Scientist as:
      </p>

      {/* Role Selection */}
      <div className="flex flex-col sm:flex-row gap-10 justify-center">
        {/* Student Box */}
        <div className="p-[1px] rounded-xl bg-gradient-to-l from-[rgba(196,7,185,1)] to-[rgba(46,152,252,1)]">
          <div className="flex flex-col items-center justify-center w-44 h-52  2xl:w-64 2xl:h-72 bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] rounded-xl transition-transform duration-500 hover:scale-105 hover:shadow-lg p-6 box-border">
            <img
              src="/dashboard/icon-backpack.svg.png" // Replace with the student icon path
              alt="Student"
              width={60}
              height={60}
              className="mb-4"
            />
            <h2 className="text-base font-semibold whitespace-nowrap">A Student</h2>
            <p className="text-sm whitespace-nowrap">(Under age 18)</p>
          </div>
        </div>

        {/* Educator Box */}
        <div className="p-[1px] rounded-xl bg-gradient-to-l from-[rgba(196,7,185,1)] to-[rgba(46,152,252,1)]">
          <div className="flex flex-col items-center justify-center w-44 h-52  2xl:w-64 2xl:h-72 bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] rounded-xl transition-transform duration-500 hover:scale-105 hover:shadow-lg p-6 box-border">
            <img
              src="/dashboard/icon-briefcase.svg.png" // Replace with the educator icon path
              width={60}
              height={60}
              alt="Educator"
              className="mb-4"
            />
            <h2 className="text-base font-semibold whitespace-nowrap">An Educator</h2>
            <p className="text-sm whitespace-nowrap">(Age 18+)</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p className="text-base font-thin text-gray-200">
          By continuing, you consent to the{" "}
          <a
            href="/privacy-policy"
            className="text-[rgba(196,7,185,1)] underline hover:text-pink-300"
          >
            privacy policy
          </a>{" "}
          and{" "}
          <a
            href="/terms-of-service"
            className="text-[rgba(196,7,185,1)] underline hover:text-pink-300"
          >
            terms of service
          </a>
        </p>
        <button className="text-base mt-3 text-gray-300">Change language</button>
      </div>
    </div>
  );
};

export default ChooseRole;
