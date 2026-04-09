import React from "react";
import { usePathname } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { FaTools } from "react-icons/fa";
import { TbListCheck } from "react-icons/tb";
import { GrCube } from "react-icons/gr";
import { MdModelTraining } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";

const sidebarItems = [
  { icon: <FaPlus />, label: "Favourite", Url: "/magicSchool/favorites" },
  {
    icon: <LuRefreshCcw />,
    label: "Recommendations for you",
    Url: "/magicSchool/recommended-foryou",
  },
  {
    icon: <FaTools />,
    label: "All Magic Tools",
    Url: "/magicSchool/teacher",
  },
  { icon: <TbListCheck />, label: "Chatbot", Url: "/magicSchool/chatbot" },
  { icon: <GrCube />, label: "History", Url: "/magicSchool/history" },
  {
    icon: <MdModelTraining />,
    label: "Training",
    Url: "/magicSchool/training",
  },
  { icon: <GiUpgrade />, label: "Upgrade", Url: "/magicSchool/upgrade" },
  { icon: <LuLogOut />, label: "Logout", Url: "/magicSchool/logout" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="p-5 text-white space-y-7 mt-10">
      <ul>
        {sidebarItems.map((item, index) => {
          const isActive = pathname === item.Url;

          return (
            <li key={index} className="group cursor-pointer">
              <Link
                href={item.Url}
                className={`flex gap-4 items-center ${
                  isActive
                    ? " text-[#C407B9]"
                    : "text-white group-hover:text-[#C407B9]"
                } p-2 rounded-md`}
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



