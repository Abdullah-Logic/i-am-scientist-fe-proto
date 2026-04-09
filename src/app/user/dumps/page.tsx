"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Dumps from "../../components/Dumps";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import StudentHeader from "@/app/components/studentHeader";

export default function OutlinesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const click = () => {
    setIsOpen(!isOpen);
  };
  const [activeItem, setActiveItem] = useState(null);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('IASID')
    localStorage.removeItem('IASROLE')
    localStorage.removeItem('IASEMAIL')
    localStorage.removeItem('IASPHONE')
    localStorage.removeItem('plan')
    localStorage.removeItem('price')
    localStorage.removeItem('quant')
    router.push("/auth/login");
  };

  const handleClick = (item: any) => {
    setActiveItem(item);
    if (item === "Logout") {
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
  return (
    // <Dumps/>
    <div className="bg-[#280253] ">
      <StudentHeader/>

      {/* Title Section */}

      <Dumps />
    </div>
  );
}
