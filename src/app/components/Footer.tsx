import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../../public/navbar/logo.png";
import Link from "next/link";
import Container from "./container/container";
const Footer = () => {
  return (
    <Container>
      <footer className="bg-gradient-to-r from-[#1C032F] to-[#0032AB] text-white py-12">
        <div className="w-[90%] lg:w-[85%] 2xl:w-[70%] mx-auto px-4 md:px-10 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Logo and Description */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <Link href="/">
                  <Image
                    src={logo}
                    width={150}
                    height={100}
                    alt="AI Scientist logo"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <p className="text-white mt-2 lg:pr-3 w-full md:w-[90%] text-justify font-normal text-base md:text-lg leading-6">
                We offer exciting contests, top courses and hands-on challenges.
                It’s a place where students can learn, compete and grow
                together.
              </p>
            </div>

            {/* Links and Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:-ml-24 font-jost">
              {/* General Links */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-4">General</h3>
                <ul className="space-y-2 font-normal text-sm md:text-base">
                  <li>
                    <Link href="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link href="/competition">Competitions</Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link href="/soon">
                      Careers{" "}
                      <span className="bg-[rgba(18,123,190,1)] p-1 rounded-md">
                        (UPCOMING)
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/affiliate">Affiliate Program</Link>
                  </li>
                </ul>
              </div>

              {/* Important Links */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-4">
                  Important Links
                </h3>
                <ul className="space-y-2 font-normal text-sm md:text-base">
                  <li>
                    <Link href="/termscondition">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                  {/* <li>
                  <Link href="/faqs">FAQs</Link>
                </li> */}
                  <li>
                    <Link href="/free-tools">Free Tools</Link>
                  </li>
                  <li>
                    <Link href="/verify-certificate">Verify Certificate</Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-4">
                  Contacts
                </h3>
                <ul className="space-y-2 font-normal text-sm md:text-base">
                  <li>
                    167-169 Great Portland Street, 5th Floor, London, England,
                    W1W 5PF
                  </li>
                  <li>+923310001900</li>
                  <li>
                    <a
                      href="mailto:info@iamscientist.ai"
                      className="text-[#ff40cc] hover:underline"
                    >
                      info@iamscientist.ai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-8 pt-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-normal text-sm md:text-base mb-4 md:mb-0">
                Copyright © 2026, I am Scientist
              </p>
              <div className="flex space-x-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=61567286317086&mibextid=ZbWKwL"
                >
                  <span className="hover:cursor-pointer transform transition-transform duration-500 hover:text-gray-100">
                    <FaFacebook size={20} />
                  </span>
                </Link>
                <Link href="https://www.linkedin.com/company/i-m-scientist">
                  <span className="hover:cursor-pointer transition-transform ease-in-out duration-500 hover:scale-105">
                    <FaLinkedin size={20} />
                  </span>
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/i_am__scientist/profilecard/?igsh=b2lwZGRqaDNmZjM2"
                >
                  <span className="hover:cursor-pointer transition-transform ease-in-out duration-500 hover:scale-105">
                    <FaInstagram size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
