"use client";
import { useState } from "react";
import logoutImage from "../../../public/images/Vector.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AffiliateNavbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem('IASAFFILIATEID');
    router.push("/");
  };
  return (
    <nav className="bg-[#4e1b89] px-6 py-4 font-bold">
      <div className="flex items-center justify-between">
        {/* Links for Larger Screens */}
        <div className="hidden md:flex space-x-6 ml-16">
          <a href="/dashboard" className="hover:text-pink-500 text-white">
            Dashboard
          </a>
          <a
            href="/dashboard/details"
            className="hover:text-pink-500 text-white"
          >
            Earnings
          </a>
      
          <a
            href="/dashboard/profile"
            className="hover:text-pink-500 text-white"
          >
            Profile
          </a>
          <a
            href="/dashboard/addpayment"
            className="hover:text-pink-500 text-white"
          >
             Payment Method
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden ml-auto text-white hover:text-pink-500"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Logout Section for Larger Screens */}
        <div className="hidden md:flex items-center gap-2 mr-16">
          
          <Image src={logoutImage} alt="alt" />
          <button
            onClick={handleLogout}
            className="text-white hover:text-pink-500"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      {isMenuOpen && (
        <div className="flex flex-col mt-4 space-y-4 md:hidden">
          <a href="/dashboard" className="hover:text-pink-500 text-white">
            Dashboard
          </a>
          <a
            href="/dashboard/details"
            className="hover:text-pink-500 text-white"
          >
            Details
          </a>
          <a
            href="/dashboard/profile"
            className="hover:text-pink-500 text-white"
          >
            Profile
          </a>
          <div className="flex items-center gap-2">
            <Image src={logoutImage} alt="alt" />
            <button
              onClick={handleLogout}
              className="text-white hover:text-pink-500"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AffiliateNavbar;
