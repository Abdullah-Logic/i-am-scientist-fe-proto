"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";

const Popup = () => {
  const [isClose, setisClose] = useState(false);
  const router = useRouter();

  const onClose = () => {
    setisClose(true);
  };

  const navigateToContest = () => {
    router.push("/test-login");
  };

  return (
    <div
      className={`fixed inset-0 ${isClose ? "hidden" : "flex"} items-center justify-center bg-black bg-opacity-50 z-50`}
    >
      <div className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] p-[1.5px] w-11/12 max-w-2xl">
        <div className="relative flex flex-col gap-7 justify-center items-center bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] shadow-2xl p-6">
          {/* Logo */}
          <Image src="/navbar/logo.png" width={170} height={170} alt="logo" />

          {/* Headline */}
          <h2 className="text-2xl font-bold text-white text-center">
            Take the AI Challenge Today!
          </h2>

          {/* Description */}
          <p className="text-center text-white md:w-[80%]">
            Join the <strong>IAS Test Contest</strong> to explore Artificial
            Intelligence! Compete, learn new skills, and win exciting prizes.
            Click the button below to start your journey and be part of the
            future of tech!
          </p>

          {/* Button */}
          <button
            onClick={navigateToContest}
            className="flex gap-2 items-center bg-[rgba(196,7,185,1)] hover:bg-opacity-60 text-white font-bold px-6 py-2 rounded-tr-lg rounded-bl-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            Start the Contest <LuArrowUpRight className="size-5" />
          </button>

          {/* Close Button */}
          <div className="absolute top-3 right-3">
            <IoClose
              onClick={onClose}
              className="text-2xl cursor-pointer hover:text-[rgba(196,7,185,1)] text-white ease-in-out duration-300"
              aria-label="Close Popup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
