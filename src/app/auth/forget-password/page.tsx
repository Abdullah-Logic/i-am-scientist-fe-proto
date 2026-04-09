"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
}

interface FormErrors {
  email?: string;
}

const Page: React.FC = () => {
  const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const affiliate = urlParams ? urlParams.get("affiliate") : null;
  const { setId, setRole } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [flag,setFlag] = useState<Boolean>(false);
  const router = useRouter();

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !emailPattern.test(formData.email)) {
      tempErrors.email = "Valid email is required.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      let endpoint = "user";
      if(affiliate){
        endpoint = "affiliate"
      }
      setFlag(true)
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}/forgot-password`,
          formData
        );
        if (response) {
          toast.success("Password reset email sent successfully.");
          // router.push("/");
        }

        setFlag(false)
      } catch (error) {
        console.error(error);
        toast.error("Error sending password reset email.");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-[#280253] flex flex-col items-center h-auto py-8 justify-center font-popins">
        {/* Decorative elements */}

        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-0 right-0 blur-xl rounded-tr-full rounded-br-full opacity-80"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 blur-xl rounded-tr-full rounded-br-full opacity-80 z-10"></div>

        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute bottom-10 left-0 blur-xl rounded-tr-full rounded-br-full opacity-80 z-10"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-10 right-0 blur-xl rounded-tr-full rounded-br-full opacity-80 z-10"></div>

        {/* Form container */}
        
        <div
          style={{
            background:
              "linear-gradient(191.13deg, #200339 8.76%, #2F0851 51.41%, #2F0851 92.39%)",
          }}
          className="p-8 rounded-lg shadow-lg w-[90%] sm:w-[70%] lg:w-[40%] text-white "
        >
          <h1 className="text-2xl md:text-4xl font-semibold text-center mb-6">
            Forgot Password
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-6 relative">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <div className="flex items-center bg-[#0F2A5B] text-white rounded-md py-3 px-4">
                <FaEnvelope className="mr-3" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0F2A5B] text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#c407b9] hover:shadow-lg duration-500 ease-in-out hover:opacity-90 text-white font-bold py-2 rounded-md shadow-md transition"
            >
              {flag? 'Sending...':'Send'}
            </button>
          </form>

          {/* Go back link */}
          <div className="flex mt-6 justify-between items-center font-popins w-[100%]">
            <div className="ml-1 text-center">
              <Link href={"/"}>
                <span className="text-[#F472B6] text-md hover:underline font-semibold">Go back</span>
              </Link>
            </div>
            <div>
              <p className="text-[#C7CDD1] font-normal text-sm">we will email you a link to reset your password</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
