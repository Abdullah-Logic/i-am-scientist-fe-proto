"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Referal = () => {
  const router = useRouter();
  const handleRoute = (type: string) => {
    if (type === "signup") {
      // Scroll to a specific Y position
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 400, behavior: "smooth" }); // Adjust 'top' value as per your need
      }
    } else {
      router.push("/affiliate-login");
    }
  };

  return (
    <div className="relative h-auto md:h-[300px] 2xl:h-[320px] p-4 md:p-6 bg-[url('/affiliate/Hero-BG.png')] bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col items-center text-[#FFFFFF] my-8 w-full md:w-10/12 2xl:w-[70%] mx-auto">
        <p className="font-el-messiri text-2xl md:text-5xl font-semibold text-center">
          Earn a 10% Commission on Every Referral
        </p>
        <p className="text-base 2xl:text-2xl font-misri w-full leading-relaxed mt-3 text-center px-2 md:px-0">
          Join the I Am Scientist affiliate program today and become our valued
          partner. Sign up now and start earning up to 10% commission for every
          successful referral
        </p>

        <div className="mx-2">
          <button
            onClick={() => handleRoute("signup")}
            className="text-center border mr-4  mt-6 border-gray-200 text-sm font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-xl rounded-bl-xl  hover:shadow-lg font-poppins cursor-pointer "
          >
            SIGN UP
          </button>
          <button
            onClick={() => handleRoute("signin")}
            className="text-center border  mt-6 border-gray-200 text-sm font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-xl rounded-bl-xl bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer "
          >
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Referal;
