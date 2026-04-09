"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";


interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const AffiliateLogin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const validate = (): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const tempErrors: FormErrors = {};

    if (!formData.email || !emailPattern.test(formData.email)) {
      tempErrors.email = "Valid email is required.";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role: string) => {
    setFormData((prevData) => ({ ...prevData, role }));
  };

  const handleSubmit = async () => {
    console.log("hellow")
    if (validate()) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/affiliate/login`,
          formData
        );

        if (response) {
          const data = response.data.affiliate;
          console.log(data)
          // const { id, role, profile } = response.data.user;
          localStorage.setItem("IASAFFILIATEID", data.id);

          toast.success("User Logged in Successfully");
          router.push('/dashboard')
        }
      } catch (error) {
        console.log(error)
        toast.error("Invalid Username or Password");
      }
    }
  };

  const goBack = () => {
    // Go to the previous page
    router.back();
  };

  return (
    <>
      <ToastContainer />
      {/* <Navbar /> */}
      <div className="bg-[#280253] flex flex-col items-center h-full py-8 justify-center">
          <div className="w-32 absolute z-0 h-32 bg-[#6C0988] top-0 left-0 rounded-bl-full opacity-60 blur-xl"></div>
          <div className="w-32 absolute z-0 h-32 bg-[#6C0988] top-0 right-0 rounded-tr-full opacity-80 blur-xl"></div>
          <div className="w-32 absolute z-0 h-32 bg-[#1F3174] top-1/2 left-0 rounded-bl-full opacity-60 blur-xl"></div>
          <div className="w-32 absolute z-0 h-32 bg-[#1F3174] top-1/2 right-0 rounded-bl-full opacity-60 blur-xl"></div>
          <div className="w-32 absolute z-0 h-32 bg-[#6C0988] bottom-0 left-0 rounded-tr-full opacity-80 blur-xl"></div>
          <div className="w-32 absolute z-0 h-32 bg-[#6C0988] bottom-0 right-0 rounded-tr-full opacity-80 blur-xl"></div>

        <div
          style={{
            background:
              "linear-gradient(191.13deg, #200339 8.76%, #2F0851 51.41%, #2F0851 92.39%)",
          }}
          className="relative w-full md:w-[40%]  p-8 rounded-lg shadow-lg flex flex-col gap-2 z-10"
        >
          <Link href="/">
            <Image
              src="/navbar/logo.webp"
              width={214}
              height={75}
              alt="Iamscientist logo"
              className="cursor-pointer mx-auto"
            />
          </Link>

          <h1 className="text-2xl md:text-4xl font-bold text-white  text-center mb-2">
            Login
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Login to earn 10% commision!
          </p>

          {/* <form > */}
            <div className="mb-4 relative">
              <label htmlFor="email" className="block text-gray-300 mb-1">
                Email
              </label>
              <div className="flex items-center bg-[#0F2A5B] text-white rounded-md py-2 px-3 shadow-2xl">
                <FaEnvelope className="mr-2" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-300 mb-1">
                Password
              </label>
              <div className="flex items-center bg-[#0F2A5B] text-white rounded-md py-2 px-3 shadow-2xl">
                <FaLock className="mr-2" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="mb-2 flex items-center">
              <input type="checkbox" id="remember" className="text-gray-400" />
              <label htmlFor="remember" className="ml-2 text-gray-400">
                Remember Me
              </label>
            </div>

            <div className="mb-2 text-[#F472B6] text-start">
              <Link href="/auth/forget-password?affiliate=true" className="hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              onClick={handleSubmit}
              // type="submit"
              className="text-white font-semibold rounded-md py-2 px-4 w-full mb-1"
              style={{
                background: "linear-gradient(225deg, #C407B9 0%, #DE0DD3 100%)",
              }}
            >
              Login
            </button>
          {/* </form> */}

          <div className="p-4 rounded-md mt-1 text-gray-400 text-center">
            <Link href="/affiliate" className="hover:underline">
              Don't have an account?{" "}
              <span className="text-[#F472B6]">Register</span>
            </Link>
          </div>
        </div>

        <button
          // onClick={() =>
          //   typeof window !== "undefined" && window.history.length > 1
          //     ? window.history.back()
          //     : (window.location.href = "/")
          // }
          onClick={goBack}
          className="absolute top-0 left-0 m-4 px-4 py-2 border border-gray-300 text-gray-300 rounded-full hover:text-white hover:border-white text-sm"
        >
          Back
        </button>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AffiliateLogin;
