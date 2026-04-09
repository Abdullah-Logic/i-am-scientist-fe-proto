"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/navbar/logo.png";
import { FaLock, FaEnvelope, FaUser } from "react-icons/fa";

import { ToastContainer } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa6";

type RegisterFormData = {
  name: string;
  title: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    title: "",
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
    if (!data.title.trim()) nextErrors.title = "Title is required.";
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
          Register
        </h1>
        <p className="text-[16px] text-gray-300 text-center mt-2">
          Start generating your thoughts with I am Scientist
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center bg-[#0F2A5B] text-white shadow-inner rounded-md py-2 px-3">
              <FaUser className="mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-transparent outline-none"
              />
            </div>
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center bg-[#0F2A5B] text-white shadow-inner rounded-md py-2 px-3">
              <FaUser className="mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full bg-transparent outline-none"
              />
            </div>
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center bg-[#0F2A5B] text-white shadow-inner rounded-md py-2 px-3">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full bg-transparent outline-none"
              />
            </div>
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center bg-[#0F2A5B] text-white shadow-inner rounded-md py-2 px-3">
              <FaEnvelope className="mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
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
                placeholder="Password"
                className="w-full bg-transparent outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="my-4">
            <div className="flex items-center bg-[#0F2A5B] text-white shadow-inner rounded-md py-2 px-3">
              <FaLock className="mr-2" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full bg-transparent outline-none"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <label className="flex items-start gap-3 cursor-pointer my-4">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 accent-[#EA418D]"
            />
            <span className="text-[13px] text-white/60">
              I agree to the{" "}
              <a href="#" className="text-[#EA418D] hover:underline">
                terms of use
              </a>
            </span>
          </label>

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
          <Link href="/projects-bidding/login" className="hover:underline">
            Already have an account?{" "}
            <span className="text-pink-400">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
