"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/navbar/logo.png";
import Profile from "../../../public/MagicSchool/profile.png";
// import Profile from "../../../public/MagicSchool/profile.svg";
import Americaflag from "../../../public/MagicSchool/America Flag.png";
import PakistanFlag from "../../../public/MagicSchool/Pakistan Flag.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowUp } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import SubNavBar from "./SubNavBar";

const Navbar = ({ aboutRef, pricingRef }: any) => {
  const pathname = usePathname();
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<Boolean>(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const handleMenuToggle = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  };

  useEffect(() => {
    checkVisibility();
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, [pathname]);

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <div className="fixed top-0 hidden lg:flex w-full text-md bg-transparent shadow-[rgba(0,_0,_0,_0.4)_0px_4px_8px] z-40 h-20">
        <div className="absolute top-0 h-20 backdrop-blur-lg w-full"></div>
        <div className="flex justify-between items-center w-full px-2 md:px-6 lg:px-10 2xl:px-20 mx-auto py-4 z-30">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="IamScientist logo"
              className="cursor-pointer"
            />
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            {/* Language Selector */}
            <div className="relative">
              <div
                className="flex items-center gap-2 text-white cursor-pointer"
                onClick={handleMenuToggle}
              >
                {selectedLanguage === "English" ? (
                  <Image src={Americaflag} width={30} height={20} alt="Flag" />
                ) : (
                  <Image src={PakistanFlag} width={30} height={20} alt="Flag" />
                )}
                <p className="flex items-center gap-2">
                  {selectedLanguage}
                  <IoIosArrowUp
                    className={`size-4 ${
                      isDesktopMenuOpen
                        ? "rotate-180 transition-all duration-500"
                        : "rotate-0 transition-all duration-500"
                    }`}
                  />
                </p>
              </div>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-10 right-0 bg-white text-black shadow-lg rounded-lg w-40 ${
                  isDesktopMenuOpen ? "block" : "hidden"
                }`}
              >
                <ul className="py-2">
                  <li
                    onClick={() => handleLanguageChange("English")}
                    className="flex gap-3 justify-between px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    English
                    <Image
                      src={Americaflag}
                      width={30}
                      height={20}
                      alt="Flag"
                    />
                  </li>
                  <li
                    onClick={() => handleLanguageChange("Urdu")}
                    className="flex gap-3 justify-between px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Urdu
                    <Image
                      src={PakistanFlag}
                      width={30}
                      height={20}
                      alt="Flag"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed top-0 block lg:hidden w-full bg-transparent shadow-[rgba(0,_0,_0,_0.4)_0px_4px_8px] z-40">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="IamScientist logo"
              className="cursor-pointer"
            />
          </Link>

          {/* Hamburger Menu */}
          <div
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      <div
        className=" fixed top-[4rem] lg:top-[5rem] lg:left-[15rem] xl:left-[17rem] 2xl:left-[19rem] flex gap-4 md:flex-row justify-between bg-transparent p-4 w-full lg:w-[calc(100vw-15rem)] xl:w-[calc(100vw-17rem)] 2xl:w-[calc(100vw-19rem)] border-[1.5px] rounded-full"
        style={{
          borderImage:
            "linear-gradient(to right, #007BFF, rgba(196,7,185,1)) 1",
          borderImageSlice: 1,
        }}
      >
        <SubNavBar />
      </div>

      {/* Sidebar for Medium & Large devices */}
      <aside className="fixed top-[5rem] left-0 hidden lg:block w-[15rem] xl:w-[17rem] 2xl:w-[19rem] h-[calc(100vh-5rem)] shadow-[rgba(0,_0,_0,_0.4)_0px_4px_8px] bg-[#FFFFFF0A] z-40 border-t-4 border-[#C407B9]">
        <Sidebar />
      </aside>

      {/* Sidebar for Small devices */}
      <aside
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #1D013C 0%, #310266 42%, #3C027D 64%, #4E03A2 100%)",
        }}
        className={`fixed top-[4rem] left-0 block lg:hidden w-[19rem] h-[calc(100vh-4rem)] shadow-[rgba(0,_0,_0,_0.4)_0px_4px_8px] z-40 border-t-4 border-[#C407B9] ${isMobileMenuOpen ? " translate-x-0 transition-all duration-500 " : " -translate-x-[1000px] transition-all duration-500 "}  `}
      >
        <Sidebar />
      </aside>
    </>
  );
};

export default Navbar;
