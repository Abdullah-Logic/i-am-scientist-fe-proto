// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaMedal } from "react-icons/fa";

// const page = () => {
//   const [total, setTotal] = useState<String>("");
//   const [obtained, setObtained] = useState<String>("");
//   const [percentage, setPercentage] = useState<String>("");
//   const [showPosition, setShowPosition] = useState<Boolean>(false);
//   const [position, setPosition] = useState<String>("");
//   const [medal, setMedal] = useState<String>("");
//   const [name, setName] = useState<String>("");

//   const router = useRouter();
//   const handleLogout = () => {
//     localStorage.removeItem("examUsername");
//     localStorage.removeItem("examId");
//     localStorage.removeItem("classLevel");
//     localStorage.removeItem("completed");

//     router.push("/");
//   };

//   const fetchResult = async () => {
//     try {
//       const id = localStorage.getItem("examId");
//       if (!id) {
//         throw new Error("Exam ID not found in localStorage.");
//       }

//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/exam/getExamDetail/${id}`,
//         {
//           method: "GET",
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status} - ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log(data);

//       // ✅ Update state only once
//       setName(data.student_name);
//       setObtained(data.obtained_marks);
//       setPercentage(data.percentage);
//       setTotal(data.total_marks);
//       setPosition(data.position);
//       setShowPosition(!data.position.toLowerCase().startsWith("p"));
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchResult();
//   }, []);

//   const getMedalColor = (position: String) => {
//     switch (position.toLowerCase()) {
//       case "gold":
//         setMedal("Gold Medalist");
//         return "text-yellow-500"; // Gold color
//       case "silver":
//         setMedal("Silver Medalist");
//         return "text-gray-400"; // Silver color
//       case "bronze":
//         setMedal("Bronze Medalist");
//         return "text-orange-500"; // Bronze color
//       default:
//         return "text-gray-300"; // Default color
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] font-inter flex items-center justify-center">
//       <div className="w-11/12 max-w-xl bg-black bg-opacity-20 p-[2px] rounded-lg">
//         <div className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] p-[1.5px] rounded-lg">
//           <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] p-6 md:p-8 rounded-lg shadow-2xl">
//             <div className="flex flex-col items-center mb-3">
//               <img
//                 src="/navbar/logo.png"
//                 alt="Logo"
//                 className="h-16 md:h-20 mb-4"
//               />
//               <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-4 border-0 h-[2px]" />
//               <p className="text-2xl font-bold text-center text-blue-400 px-4 md:px-8 mb-4 md:mb-6">
//                 AI Contest Result
//               </p>
//             </div>
//             <div className="text-white text-center px-4 md:px-14 ">
//               <div className="flex justify-between px-2 md:px-6">
//                 <span className="font-bold">Student Name:</span>
//                 <span className="font-bold">{name}</span>
//               </div>
//               <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />

//               <div className="font-semibold space-y-2 md:space-y-3">
//                 <div className="flex justify-between px-2 md:px-6">
//                   <span className="font-bold">Score:</span>
//                   <span className="font-bold">
//                     {obtained}/{total}
//                   </span>
//                 </div>
//                 <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />

//                 <div className="flex justify-between px-2 md:px-6">
//                   <span className="font-bold">Percentage:</span>
//                   <span className="font-bold">{percentage}%</span>
//                 </div>

//                 {showPosition ? (
//                   <div>
//                     <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />
//                     <div className="flex justify-between px-2 md:px-6 ">
//                       <span className="font-bold">
//                         <FaMedal
//                           className={`text-3xl ${getMedalColor(position)}`}
//                         />
//                       </span>
//                       <span>{medal}</span>
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
//                     <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />
//                     <div className="flex justify-between px-2 md:px-6 ">
//                       <span className="font-bold">Remarks:</span>
//                       <span>Good effort!</span>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-4 border-0 h-[2px]" />
//             </div>

//             <div className="flex flex-col md:flex-row justify-center mt-6 md:mt-8 space-y-2 md:space-y-0 gap-2 md:gap-4 lg:gap-10">
//               <button
//                 onClick={handleLogout}
//                 className="bg-[rgba(196,7,185,1)] hover:bg-pink-600 text-white font-bold py-2 px-6 md:px-10 rounded transition-all"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaMedal } from "react-icons/fa";

const Page = () => {
  const [total, setTotal] = useState("");
  const [obtained, setObtained] = useState("");
  const [percentage, setPercentage] = useState("");
  const [showPosition, setShowPosition] = useState(false);
  const [position, setPosition] = useState("");
  const [medal, setMedal] = useState("");
  const [name, setName] = useState("");
  const [rank, setRank] = useState("");
  const [medalColor, setMedalColor] = useState("text-gray-300");

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("examUsername");
    localStorage.removeItem("examId");
    localStorage.removeItem("classLevel");
    localStorage.removeItem("completed");
    router.push("/");
  };

  const fetchResult = async () => {
    try {
      const id = localStorage.getItem("examId");
      if (!id) {
        throw new Error("Exam ID not found in localStorage.");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/exam/getExamDetail/${id}`,
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);

      setName(data.student_name);
      setObtained(data.obtained_marks);
      setPercentage(data.percentage);
      setTotal(data.total_marks);
      setPosition(data.position);
      setShowPosition(!data.position.toLowerCase().startsWith("p"));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  useEffect(() => {
    if (!position) return;

    switch (position.toLowerCase()) {
      case "gold":
        setMedal("Gold Medalist");
        setMedalColor("text-yellow-400");
        setRank("1st")
        break;
      case "silver":
        setMedal("Silver Medalist");
        setMedalColor("text-gray-400");
        setRank("2nd")
        break;
      case "bronze":
        setMedal("Bronze Medalist");
        setMedalColor("text-orange-400");
        setRank("3rd")
        break;
      default:
        setMedalColor("text-gray-300");
        setMedal("");
    }
  }, [position]);

  return (
    <div className="min-h-screen bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] font-inter flex items-center justify-center">
      <div className="w-11/12 max-w-xl bg-black bg-opacity-20 p-[2px] rounded-lg">
        <div className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] p-[1.5px] rounded-lg">
          <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] p-6 md:p-8 rounded-lg shadow-2xl">
            <div className="flex flex-col items-center mb-3">
              <img
                src="/navbar/logo.png"
                alt="Logo"
                className="h-16 md:h-20 mb-4"
              />
              <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-4 border-0 h-[2px]" />
              <p className="text-2xl font-bold text-center text-blue-400 px-4 md:px-8 mb-4 md:mb-6">
                AI Contest Result
              </p>
            </div>
            <div className="text-white text-center px-4 md:px-14 ">
              <div className="flex justify-between px-2 md:px-6">
                <span className="font-bold">Student Name:</span>
                <span className="font-bold">{name.split(" ").slice(0, 2).join(" ")}</span>
              </div>
              <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />

              <div className="font-semibold space-y-2 md:space-y-3">
                <div className="flex justify-between px-2 md:px-6">
                  <span className="font-bold">Score:</span>
                  <span className="font-bold">
                    {obtained}/{total}
                  </span>
                </div>
                <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />

                <div className="flex justify-between px-2 md:px-6">
                  <span className="font-bold">Percentage:</span>
                  <span className="font-bold">{percentage}%</span>
                </div>

                {showPosition ? (
                  <div>
                    <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />

                    <div className="flex justify-between px-2 md:px-6">
                      <span className="font-bold">Rank:</span>
                      <span className="font-bold">{rank}</span>
                    </div>
                    <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />
                    <div className="flex justify-center  align-middle items-center  mt-5 gap-5 px-2 md:px-6 ">
                      <span className="font-bold">
                        <FaMedal className={`text-5xl ${medalColor}`} />
                      </span>
                      <span>{medal}</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <hr className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 border-0 h-[2px]" />
                    <div className="flex justify-between px-2 md:px-6 ">
                      <span className="font-bold">Remarks:</span>
                      <span>Good effort!</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center mt-6 md:mt-8 space-y-2 md:space-y-0 gap-2 md:gap-4 lg:gap-10">
              <button
                onClick={handleLogout}
                className="bg-[rgba(196,7,185,1)] hover:bg-pink-600 text-white font-bold py-2 px-6 md:px-10 rounded transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
