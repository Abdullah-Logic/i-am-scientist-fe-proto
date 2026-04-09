"use client";
import React,{useState,useEffect} from "react";

const subBar = () => {
  const [username,SetUsername] = useState<String>("");

  useEffect(()=>{
    const user = localStorage.getItem('IASADMIN')
    SetUsername(user || "");
  },[])
  return (
    <>
      {/* Search Field */}

      <div className="relative flex items-center w-1/2 md:w-1/3">
        {/* Search Icon Inside Input Field */}
        <span className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="url(#gradient)"
            className="w-5 h-5"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#007BFF", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgba(196,7,185,1)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-7l4 4"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent border rounded-full border-1 outline-none text-white  pl-10 py-1"
          style={{
            borderImage:
              "linear-gradient(to right, #007BFF, rgba(196,7,185,1)) 1",
            borderImageSlice: 1,
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 text-white items-center">
        <p>{username}</p>
      </div>
    </>
  );
};

export default subBar;
