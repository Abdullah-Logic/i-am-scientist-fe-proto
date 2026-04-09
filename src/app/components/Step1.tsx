"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
}

const AffiliateLogin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const validate = (): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const tempErrors: FormErrors = {};

    if (!formData.first_name) {
      tempErrors.first_name = "First name is required.";
    }
    if (!formData.last_name) {
      tempErrors.last_name = "Last name is required.";
    }
    if (!formData.email || !emailPattern.test(formData.email)) {
      tempErrors.email = "Valid email is required.";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required.";
    }
    if (formData.password !== formData.confirm_password) {
      tempErrors.confirm_password = "Passwords do not match.";
    }

    setErrors(tempErrors);
    console.log("Validation errors:", tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(`Field updated: ${name}, Value: ${value}`);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    if (validate()) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/affiliate/signup`,
          formData,
        );
        console.log("Server response:", response);

        if (response) {
          toast.success("User Sign Up successfully");
        }
        setTimeout(() => {
          router.push("/affiliate-login");
        }, 2000);
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Invalid credentials or server error");
      }
    }
  };

  return (
    <div className="bg-[#280253] text-white h-full p-8 md:p-16 relative">
      {/* Background Effects */}
      <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 z-0"></div>
      <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-0 right-0 blur-xl backdrop-blur-2xl rounded-bl-full rounded-tl-full opacity-80 z-0"></div>
      <div className="h-16 w-16 md:w-40 md:h-36 bg-blue-600 absolute top-0 left-1/2 transform -translate-x-1/2 blur-2xl backdrop-blur-2xl rounded-full opacity-50"></div>
      <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-50 z-0"></div>
      <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-50 z-0"></div>
      <div className="h-12 w-12 md:w-32 md:h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-0 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-50 z-0"></div>

      <div className="h-16 w-16 md:w-40 md:h-40 bg-blue-600 absolute top-2/4 left-0 transform -translate-x-1/2 -translate-y-1/2 blur-2xl backdrop-blur-2xl rounded-full opacity-50"></div>
      {/* Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-6">
          <h1 className=" font-el-messiri text-3xl md:text-5xl  font-semibold">
            Join Us to Shape the Future of Learning
          </h1>
          <p className="text-base 2xl:text-xl text-gray-200">
            At I'm Scientist, we’re working together with schools, educators and
            organizations to make learning more exciting and accessible for
            students
          </p>

          <h1 className="font-el-messiri text-3xl md:text-5xl font-semibold">
            Why Join Us?
          </h1>

          <div className="space-y-4">
            <div className="flex items-start">
              {/* <div className="w-6 h-4 mt-1 rounded-full bg-[#c407b9]"></div> */}
              <div>
                <GoDotFill className="text-[#c407b9] size-7 " />
              </div>
              <div className="ml-4">
                <h2 className="text-base 2xl:text-xl font-bold">
                  Enhance Your Program
                </h2>
                <p className="pt-2 text-base 2xl:text-xl text-gray-200">
                  Collaborate with top educators and experts to enrich your
                  curriculum with the latest developments in science and
                  technology .
                </p>
              </div>
            </div>
            <div className="flex items-start">
              {/* <div className="w-6 h-4 mt-1 rounded-full bg-[#c407b9]"></div> */}
              <div>
                <GoDotFill className="text-[#c407b9] size-7 " />
              </div>
              <div className="ml-4">
                <h2 className=" text-base 2xl:text-xl font-bold">
                  Get Exclusive Resources
                </h2>
                <p className="pt-2 text-base 2xl:text-xl text-gray-200">
                  Stay ahead with the latest educational tools, updates and
                  insights only available through our partnerships.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              {/* <div className="w-6 h-4 mt-1 rounded-full bg-[#c407b9]"></div> */}
              <div>
                <GoDotFill className="text-[#c407b9] size-7 " />
              </div>
              <div className="ml-4">
                <h2 className="text-base 2xl:text-xl font-bold">
                  Receive exclusive and latest updated educational resources
                </h2>
                <p className="pt-2 text-base 2xl:text-xl text-gray-200">
                  You will receive exclusive benefits and access to updated
                  information from our partnerships with educators.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-lg shadow-lg">
          {/* <h2 className="text-2xl md:text-3xl font-bold mb-4">Step 1 of 2</h2> */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-2 font-normal">
                  First Name <span className="text-[#c407b9]">*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="bg-[#0F2A5B] rounded-md w-full p-2 border-gray-300"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm">{errors.first_name}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-normal">
                  Last Name <span className="text-[#c407b9]">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="bg-[#0F2A5B] rounded-md w-full p-2 border-gray-300"
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm">{errors.last_name}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block mb-2 font-normal">
                Email <span className="text-[#c407b9]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 bg-[#0F2A5B] rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-normal">
                Password <span className="text-[#c407b9]">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-2 bg-[#0F2A5B] rounded-md"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-normal">
                Confirm Password <span className="text-[#c407b9]">*</span>
              </label>
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="Enter your password again"
                className="w-full p-2 bg-[#0F2A5B] rounded-md"
              />
              {errors.confirm_password && (
                <p className="text-red-500 text-sm">
                  {errors.confirm_password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-10 bg-[#c407b9] rounded-md text-2xl text-white font-semibold hover:bg-opacity-80"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AffiliateLogin;
