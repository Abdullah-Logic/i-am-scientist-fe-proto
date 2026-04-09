"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/navbar/logo.png";
import { FaLock, FaEnvelope, FaUser } from "react-icons/fa";

import { ToastContainer } from "react-toastify";
import { FaArrowLeft, FaPhone } from "react-icons/fa6";

type RegisterFormData = {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const BidLogin = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (data: RegisterFormData) => {
    const nextErrors: Partial<RegisterFormData> = {};
    if (!data.name.trim()) nextErrors.name = "Name is required.";
    if (!data.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!data.email.trim()) nextErrors.email = "Email is required.";
    if (!data.password.trim()) nextErrors.password = "Password is required.";
    if (!data.confirmPassword.trim())
      nextErrors.confirmPassword = "Confirm your password.";
    if (
      data.password.trim() &&
      data.confirmPassword.trim() &&
      data.password !== data.confirmPassword
    ) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
  };

  return (
    <div className=" bg-[#280253] text-white flex min-h-screen justify-center items-center p-4 py-8">
      <ToastContainer />
      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute -top-12 left-0 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0  mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2  right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>

      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
      <div
        style={{
          background:
            "linear-gradient(191.13deg, #200339 8.76%, #2F0851 51.41%, #2F0851 92.39%)",
        }}
        className="w-full max-w-md p-8 rounded-lg shadow-2xl z-10"
      >
        <div className="relative text-center mb-6">
          <div className="absolute top-5 left-2">
            <Link href="/projects-bidding">
              <button className="flex items-center text-white text-lg md:text-xl font-semibold hover:underline">
                <FaArrowLeft className="mr-2" />
              </button>
            </Link>
          </div>

          <Link href="/">
            <Image
              src={logo}
              width={214}
              height={75}
              alt={"Iam Scientist logo"}
              className="cursor-pointer mx-auto"
            />
          </Link>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
          Login
        </h1>
        <p className="text-[16px] text-gray-300 text-center mt-2">
          Login to Connect and Learn
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <button className="w-full flex items-center justify-center gap-3 rounded-lg bg-[#CE47C2] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#CE47C2]/90 transition-colors">
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center justify-center my-4">
            <p className="text-lg">or</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center bg-[#0F2A5B] text-white shadow-inner rounded-md py-2 px-3">
              <FaEnvelope className="mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your  Email"
                className="w-full bg-transparent outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center bg-[#0F2A5B] text-white shadow-inner rounded-md py-2 px-3">
              <FaLock className="mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="w-full bg-transparent outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <p className="text-pink-400 hover:underline cursor-pointer text-sm my-4">
            Forgot Password?
          </p>

          <button
            type="submit"
            style={{
              background: "linear-gradient(225deg, #C407B9 0%, #DE0DD3 100%)",
            }}
            className="w-full py-2 px-4 mb-4 font-semibold text-white rounded-md hover:opacity-90"
          >
            Sign Up
          </button>
        </form>

        <div className="text-gray-500 text-center mt-4">
          <Link href="/projects-bidding/register" className="hover:underline">
            Don't have an account?{" "}
            <span className="text-pink-400">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BidLogin;
