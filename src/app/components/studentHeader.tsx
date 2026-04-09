"use client"
import React,{useState,useEffect} from "react";
import {useRouter} from 'next/navigation'
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import {
  FaUsers,
  FaEdit,
  FaBook,
  FaUserPlus,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const StudentHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const handleClick = (item: any) => {
    console.log("hello")
    setActiveItem(item);
    if(item === "Logout"){
      localStorage.removeItem('IASID')
      localStorage.removeItem('IASROLE')
      localStorage.removeItem('IASEMAIL')
      localStorage.removeItem('IASPHONE')
      localStorage.removeItem('plan')
      localStorage.removeItem('price')
      localStorage.removeItem('quant')
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    const status = localStorage.getItem("status");
    setIsApproved(status === "Approved");
  }, []);
  const click = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  
  return (
    <nav className="bg-[#5D3794]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 text-[13px]">
        <div className="flex flex-wrap items-center gap-6 text-white/80">
          <span className="text-white">AI Sciences</span>
          <Link
            href="/user/dashboard"
            onClick={() => handleClick("Students List")}
            className={
              activeItem === "Students List"
                ? "text-white border-b-2 border-[#BE8FE4] pb-0.5"
                : ""
            }
          >
            Students List
          </Link>
          <Link
            href="/user/studentinfo"
            onClick={() => handleClick("Add Students")}
            className={
              activeItem === "Add Students"
                ? "text-white border-b-2 border-[#BE8FE4] pb-0.5"
                : ""
            }
          >
            Add Students
          </Link>
          <span>Edit Institution</span>
          {isApproved && (
            <Link
              href="/user/dumps"
              onClick={() => handleClick("Outlines")}
              className={
                activeItem === "Outlines"
                  ? "text-white border-b-2 border-[#BE8FE4] pb-0.5"
                  : ""
              }
            >
              Outlines / Dumps
            </Link>
          )}
        </div>
        <button
          onClick={() => handleClick("Logout")}
          className="flex items-center gap-2 rounded-md bg-gradient-to-r from-[#9D4DF6] to-[#E43D7A]  px-4 py-1.5 text-[12px] font-semibold text-white"
        >
          Logout
        </button>
      </div>

      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 pb-3 md:hidden">
        <button onClick={click} className="text-white">
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        {isOpen && (
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-white/80">
            <Link
              href="/user/dashboard"
              onClick={() => handleClick("Students List")}
              className={
                activeItem === "Students List"
                  ? "text-white border-b-2 border-[#BE8FE4] pb-0.5"
                  : ""
              }
            >
              Students List
            </Link>
            <Link
              href="/user/studentinfo"
              onClick={() => handleClick("Add Students")}
              className={
                activeItem === "Add Students"
                  ? "text-white border-b-2 border-[#BE8FE4] pb-0.5"
                  : ""
              }
            >
              Add Students
            </Link>
            {isApproved && (
              <Link
                href="/user/dumps"
                onClick={() => handleClick("Outlines")}
                className={
                  activeItem === "Outlines"
                    ? "text-white border-b-2 border-[#BE8FE4] pb-0.5"
                    : ""
                }
              >
                Outlines / Dumps
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default StudentHeader;
