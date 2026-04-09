import React from "react";

const Step2 = () => {
  return (
    <div className="bg-[#280253] text-white min-h-screen p-8 md:p-16 relative">
      <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 z-0"></div>
      <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-0 right-0 blur-xl backdrop-blur-2xl rounded-bl-full rounded-tl-full opacity-80 z-0"></div>
      <div className="h-16 w-16 md:w-40 md:h-36 bg-blue-600 absolute top-0 left-1/2 transform -translate-x-1/2 blur-2xl backdrop-blur-2xl rounded-full opacity-50"></div>
      <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-50 z-0"></div>
      <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-50 z-0"></div>
      <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-50 z-0"></div>

      <div className="h-16 w-16 md:w-40 md:h-40 bg-blue-600 absolute top-2/4 left-0 transform -translate-x-1/2 -translate-y-1/2 blur-2xl backdrop-blur-2xl rounded-full opacity-50"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className=" font-el-messiri text-3xl md:text-5xl   font-semibold">
            Join Us in Changing the World of Learning for the Better.
          </h1>
          <p className=" text-gray-200 text-base 2xl:text-xl">
            At Aralia Education, we partner with educators and prestigious
            educational institutions to be able to further transform and
            redefine online teaching and learning.
          </p>

          {/* Bullet Points */}
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-4 mt-1 rounded-full bg-[#c407b9]"></div>
              <div className="ml-4">
                <h2 className="text-lg font-bold">
                  Create a long-term mentor-mentee relationship for your
                  students
                </h2>
                <p className="pt-2 text-gray-200 text-base 2xl:text-xl">
                  This partnership will allow companies to better support their
                  students during their new life-long learning journey in a
                  foreign country.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-4 mt-1 rounded-full bg-[#c407b9]"></div>
              <div className="ml-4">
                <h2 className="text-lg font-bold">
                  Enhance your company's course offerings
                </h2>
                <p className="pt-2 text-base 2xl:text-xl text-gray-200">
                  Aralia's teachers are current award-winning secondary school
                  teachers and college professors across America, the heart of
                  higher education.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-4 mt-1 rounded-full bg-[#c407b9]"></div>
              <div className="ml-4">
                <h2 className="text-lg font-bold">
                  Receive exclusive and latest updated educational resources
                </h2>
                <p className="pt-2 text-gray-200 text-base 2xl:text-xl">
                  You will receive exclusive benefits and access to updated
                  information from our partnerships with educators.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8  rounded-lg ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Step 2 of 2</h2>
          <div className="h-2 bg-gray-200 rounded-full mb-6 relative">
            <div
              className="h-2 bg-[#c407b9] rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block mb-2 font-normal">
                Company Name <span className="text-[#c407b9]">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your company Name"
                className="bg-[#5D3794] rounded-md w-full p-2  border-gray-300 "
              />
            </div>
            <label htmlFor="learners" className="block mb-2 font-normal">
              Job role <span className="text-[#c407b9]">*</span>
            </label>
            <div className="relative">
              <select
                id="learners"
                className="bg-[#5D3794] rounded-md w-full text-gray-400 p-2  border-gray-300 appearance-none "
              >
                <option value="" disabled selected hidden>
                  Select Your Job Role
                </option>
                <option value="one">Internee</option>
                <option value="two">HR</option>
                <option value="three">Team Lead</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <label htmlFor="learners" className="block mb-2 font-normal">
              Job Function <span className="text-[#c407b9]">*</span>
            </label>
            <div className="relative">
              <select
                id="learners"
                className="bg-[#5D3794] rounded-md w-full text-gray-400 p-2  border-gray-300 appearance-none "
              >
                <option value="" disabled selected hidden>
                  Select Your Job Function
                </option>
                <option value="one">Developer</option>
                <option value="two">Debugger</option>
                <option value="three">Manager</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <label htmlFor="learners" className="block mb-2 font-normal">
              Industry<span className="text-[#c407b9]">*</span>
            </label>
            <div className="relative">
              <select
                id="learners"
                className="bg-[#5D3794] rounded-md w-full text-gray-400 p-2  border-gray-300 appearance-none "
              >
                <option value="" disabled selected hidden>
                  Select Your Industry
                </option>
                <option value="one">Information Security</option>
                <option value="two">Software engineering</option>
                <option value="three">Information Technology</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <label htmlFor="learners" className="block mb-2 font-normal">
              Organization Type<span className="text-[#c407b9]">*</span>
            </label>
            <div className="relative">
              <select
                id="learners"
                className="bg-[#5D3794] rounded-md w-full text-gray-400 p-2  border-gray-300 appearance-none "
              >
                <option value="" disabled selected hidden>
                  Select Your Organization Type
                </option>
                <option value="one">Tech Startups</option>
                <option value="two">IT Consultant</option>
                <option value="three">Software Development</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="mx-2 flex justify-between">
              <button className="text-center border-2 rounded-md mr-4 px-20  mt-6 border-gray-200 text-base font-semibold  py-3 transition-all duration-500 ease-in-out hover:opacity-90 text-white   hover:shadow-lg font-poppins cursor-pointer ">
                Back
              </button>
              <button className="text-center  rounded-md px-20  mt-6 border-gray-200 text-base font-semibold  py-83transition-all duration-500 ease-in-out hover:opacity-90 text-white  bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;
