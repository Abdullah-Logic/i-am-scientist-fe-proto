"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/navbar/logo.png";
import Link from "next/link";
import { navbarItems } from "../constant/data";
import { usePathname } from "next/navigation";
import Container from "./container/container";

const Navbar = ({ aboutRef, pricingRef }: any) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<Boolean>(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path: string) => {
    return pathname === path || (pathname === "/" && path === "/");
  };

  const checkVisibility = () => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("IASID");
      setVisible(id === null);
    }
  };

  useEffect(() => {
    checkVisibility();
  }, [pathname]);

  return (
    <div className="w-full text-md relative bg-[#04236E] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-50">
      {/* Desktop Navbar */}
      <div className="flex justify-between  gap-[14px] items-center w-full px-10 md:px-0 md:w-[90%] mx-auto py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            width={120}
            height={100}
            alt={"IamScientist logo"}
            className="cursor-pointer w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-12 2xl:w-44 2xl:h-16"
          />
        </Link>

        {/* Right Side Options */}
        <div className="hidden xl:flex gap-4 2xl:gap-6 z-20 items-center font-poppins">
          {navbarItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link href={item.path}>
                <div
                  className={`text-sm xl:text-md 2xl:text-lg flex items-center gap-2 text-white whitespace-nowrap font-inter font-semibold cursor-pointer ${
                    isActiveLink(item.path)
                      ? "!text-[#6B58FD] font-bold"
                      : "transition-all duration-500 hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden xl:flex gap-4 z-20 items-center font-poppins">
          <Link href="/partner-with-us">
            <div className="border border-gray-200 text-sm 2xl:text-lg font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] hover:shadow-lg font-poppins leading-snug cursor-pointer">
              Partner with Us
            </div>
          </Link>

          {visible ? (
            <>
              <Link href="/auth/signup">
                <div className="border border-gray-200 text-sm 2xl:text-lg font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-lg rounded-bl-lg bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer">
                  Enroll
                </div>
              </Link>
              <Link href="/auth/login">
                <div className="border border-gray-200 text-sm 2xl:text-lg font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-lg rounded-bl-lg bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer">
                  Login
                </div>
              </Link>
            </>
          ) : (
            <Link
              href={
                typeof window !== "undefined" &&
                localStorage.getItem("IASROLE") === "student"
                  ? "/student/dashboard"
                  : "/user/dashboard"
              }
            >
              <div className="border border-gray-200 text-sm 2xl:text-lg font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-lg rounded-bl-lg bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer">
                Go to Dashboard
              </div>
            </Link>
          )}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="xl:hidden">
          {isMenuOpen ? (
            <div
              className="cursor-pointer text-white"
              onClick={handleMenuToggle}
            >
              <FaTimes size={24} />
            </div>
          ) : (
            <div
              className="cursor-pointer text-white"
              onClick={handleMenuToggle}
            >
              <FaBars size={24} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div className="flex flex-col justify-center w-full bg-[#5D3794] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8 absolute top-19 left-0 z-50 xl:hidden space-y-3">
          {navbarItems.map((item) => (
            <div key={item.path}>
              <Link href={item.path} onClick={closeMenu}>
                <div
                  className={`z-50 text-sm 2xl:text-lg justify-center text-center gap-2 text-white whitespace-nowrap font-inter font-semibold cursor-pointer ${
                    isActiveLink(item.path)
                      ? "!text-[#6B58FD] font-bold"
                      : "transition-all duration-500 hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            </div>
          ))}

          <Link href="/partner-with-us" onClick={closeMenu}>
            <div className="text-center border w-full border-gray-200 text-sm font-semibold px-6 py-[8px] mt-5 transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] hover:shadow-lg font-poppins cursor-pointer">
              Partner with Us
            </div>
          </Link>

          {visible ? (
            <>
              <Link href="/auth/signup" onClick={closeMenu}>
                <div className="text-center border w-full mt-2 border-gray-200 text-sm font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-2xl rounded-bl-2xl bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer">
                  Enroll
                </div>
              </Link>
              <Link href="/auth/login" onClick={closeMenu}>
                <div className="text-center border w-full my-2 border-gray-200 text-sm font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-2xl rounded-bl-2xl bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer">
                  Login
                </div>
              </Link>
            </>
          ) : (
            <Link
              href={
                typeof window !== "undefined" &&
                localStorage.getItem("IASROLE") === "student"
                  ? "/student/dashboard"
                  : "/user/dashboard"
              }
            >
              <div className="border border-gray-200 text-sm 2xl:text-lg font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-lg rounded-bl-lg bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer">
                Go to Dashboard
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
