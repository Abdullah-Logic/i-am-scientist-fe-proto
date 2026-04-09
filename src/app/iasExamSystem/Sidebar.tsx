"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";
import { BsKey } from "react-icons/bs"; // Importing icon for Generate Logins
import { useRouter } from "next/navigation";
import { FaChartBar, FaFileExport } from "react-icons/fa"; // Importing icon for Results
import { UserRoundPlus } from 'lucide-react';


const sidebarItems = [
  { icon: <FaPlus />, label: "Dashboard", Url: "/iasExamSystem/" }, // Check for root
  {
    icon: <UserRoundPlus />,
    label: "Add Students",
    Url: "/iasExamSystem/add-student", // Base URL for the test pages
  },
  {
    icon: <FaUsers />,
    label: "All Registrations",
    Url: "/iasExamSystem/registrations",
  }, // New link
  
  {
    icon: <BsKey />,
    label: "Generate Logins",
    Url: "/iasExamSystem/generate-logins",
  }, // New link
  
  {
    icon: <LuRefreshCcw />,
    label: "Tests",
    Url: "/iasExamSystem/test", // Base URL for the test pages
  },
  
  {
    icon: <FaFileExport />,
    label: "Exam Export",
    Url: "/iasExamSystem/exam-export",
  }, // New link
  {
    label: "Results",
    icon: <FaChartBar />,
    Url: "/iasExamSystem/results",
  },
  { icon: <LuLogOut />, label: "Logout", Url: "/administrative-signin" },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout =  () => {
    console.log("delete");
    localStorage.removeItem("IASADMINID");
    localStorage.removeItem("IASADMIN");
    router.push("/administrative-signin");

  };

  const handleNo = () => {};

  return (
    <div className="p-5 text-white space-y-10 mt-10">
      <ul className="flex flex-col gap-3 xl:gap-5">
        {sidebarItems.map((item, index) => {
          // Check if the current page is active
          const isActive =
            pathname === item.Url ||
            (item.Url === "/iasExamSystem/" && pathname === "/iasExamSystem") || // Dashboard is active on root
            (item.Url === "/iasExamSystem/test" &&
              pathname.startsWith("/iasExamSystem/test"));

          return (
            <li key={index} className="group cursor-pointer">
              <Link
                onClick={item.label === "Logout" ? handleLogout : handleNo}
                href={item.Url}
                className={`flex gap-5 items-center 
                  ${
                    isActive
                      ? " text-[#C407B9] bg-white"
                      : "text-white group-hover:text-[#C407B9] hover:bg-white"
                  } 
                p-2 rounded-md
                `}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    isActive
                      ? "bg-[#C407B9] text-white"
                      : "bg-white text-[#C407B9] group-hover:text-white group-hover:bg-[#C407B9]"
                  }`}
                >
                  {item.icon}
                </div>
                <span className="xl:text-lg font-semibold">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
