import React from "react";

const Favorites: React.FC = () => {
  return (
    <>
      <div
        className="flex gap-4 flex-col md:flex-row justify-between bg-transparent p-4 w-full border-[1.5px] rounded-full"
        style={{
          borderImage:
            "linear-gradient(to right, #007BFF, rgba(196,7,185,1)) 1",
          borderImageSlice: 1,
          margin: 0, // Explicitly set margin to 0
        }}
      >
        {/* Search Field */}

        <div className="relative flex items-center md:w-1/3 w-full">
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
        <div className="flex gap-2 items-start">
          <button className="bg-transparent border border-[rgba(196,7,185,1)] text-white px-4 md:px-6 py-2 rounded-full font-medium hover:bg-[rgba(196,7,185,1)] whitespace-nowrap">
            Magic Student
          </button>
          <button className="bg-[rgba(196,7,185,1)] text-white px-4 md:px-6 py-2 rounded-full font-medium hover:bg-opacity-90 whitespace-nowrap">
            Magic School
          </button>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-start pt-10 p-4 md:p-10 justify-start  text-white">
        {/* Heading */}
        <h1 className="text-3xl md:text-3xl font-bold mb-8">Favorites</h1>

        {/* Favorites Box */}
        <div className="p-[1.5px] rounded-xl bg-gradient-to-l from-[rgba(196,7,185,1)] to-[rgba(46,152,252,1)]">
          <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] rounded-xl">
            <div className="w-full relative -mt-0.5 bg-[rgba(196,7,185,1)] p-1 rounded-tr-full rounded-tl-full">
              <div className="h-1"></div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-lg md:text-xl font-medium mb-2 px-6 pt-7">
                  Your Favorite tools appear here!
                </p>
                <p className="text-sm md:text-base text-gray-300 px-6 pb-6">
                  Click the star on any tool to add it to your favorites
                </p>
              </div>
              <div className="text-center flex items-center justify-center p-6 pt-4">
                <img src="/dashboard/sparkles.png" alt="Sparkles Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
