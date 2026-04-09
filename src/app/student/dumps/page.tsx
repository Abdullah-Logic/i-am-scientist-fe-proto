"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Dumps from '../../components/Dumps'
import Link from 'next/link';


export default function OutlinesPage() {
    const router = useRouter();
    const handleLogout = () => {
      localStorage.removeItem('IASID')
      localStorage.removeItem('IASROLE')
      localStorage.removeItem('IASEMAIL')
      localStorage.removeItem('IASPHONE')
      localStorage.removeItem('plan')
      localStorage.removeItem('price')
      localStorage.removeItem('quant')
      localStorage.removeItem('status')
        router.push("/auth/login");
      };
      
  return (
    // <Dumps/>
    <div className="bg-[#280253] ">
      <nav className="bg-[#5D3794] flex justify-between items-center w-full px-4 md:px-12 py-5 font-popins">
        <div className="w-[40%] ">
          <div className="flex justify-start space-x-10 items-center w-full">
            <Link href={"/student/dashboard"}>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">
                  Dashboard
                </h3>
              </div>
            </Link>
            <Link href={"/student/dumps"} className={`${localStorage.getItem('status') === "Approved" ? "" : "hidden"}`}>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">
                  Outline/dump
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div onClick={handleLogout} className=" cursor-pointer">
          <h2 className="text-lg font-semibold text-white">Logout</h2>
        </div>
      </nav>

      {/* Title Section */}
      

      <Dumps/>
      
    </div>
  );
}
