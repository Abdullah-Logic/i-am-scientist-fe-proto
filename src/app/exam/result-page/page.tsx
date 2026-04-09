"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleLogout = () =>{
    localStorage.removeItem("examUsername")
    localStorage.removeItem("examId")
    localStorage.removeItem("classLevel")
    localStorage.removeItem("completed")

    router.push("/")
  }
  return (
    <div className="min-h-screen bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] font-inter flex items-center justify-center">
      <div className="w-11/12 max-w-xl bg-black bg-opacity-20 p-[2px] rounded-lg">
        <div className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] p-[1.5px] rounded-lg">
          <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] p-6 md:p-8 rounded-lg shadow-2xl">
            <div className="flex flex-col items-center">
              <img
                src="/navbar/logo.png"
                alt="Logo"
                className="h-16 md:h-20 mb-4"
              />
              <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-4 border-0 h-[2px]" />
              <p className="text-xl font-bold text-center text-blue-400 px-4 md:px-8 mb-4 md:mb-6">
                Test Results
              </p>
            </div>
            <div className="text-white text-center px-4 md:px-14">
              <p className="text-lg font-semibold mb-6 md:mb-12">
                Congratulations on completing the test!
              </p>
              <div className="font-semibold space-y-2 md:space-y-3">
                <div className="flex justify-between px-2 md:px-6">
                  <span className="font-bold">Score:</span>
                  <span className="text-green-400">Will be announced on 10<sup>th</sup> Dec</span>
                </div>
                <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />

                <div className="flex justify-between px-2 md:px-6">
                  <span className="font-bold">Status:</span>
                  <span className="text-green-400">Exam Completed</span>
                </div>
                <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />
{/* 
                <div className="flex justify-between px-2 md:px-6">
                  <span className="font-bold">Time Taken:</span>
                  <span>25 Minutes</span>
                </div>
                <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" /> */}

                <div className="flex justify-between px-2 md:px-6 ">
                  <span className="font-bold">Feedback:</span>
                  <span >Great job! Keep it up.</span>
                </div>
              </div>
              <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-4 border-0 h-[2px]" />
            </div>
            <div className="flex flex-col md:flex-row justify-center mt-6 md:mt-8 space-y-2 md:space-y-0 gap-2 md:gap-4 lg:gap-10">
              <button onClick={handleLogout} className="bg-[rgba(196,7,185,1)] hover:bg-pink-600 text-white font-bold py-2 px-6 md:px-10 rounded transition-all">
                Logout
              </button>
              {/* <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 md:px-10 rounded transition-all">
                View Details
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
