"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/navbar/logo.png";
import { FaLock, FaEnvelope, FaUser } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { FaArrowLeft, FaPhone } from "react-icons/fa6";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  role: string;
  referral?: string | null;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: String;
  referral?: string;
}

const SignUpForm: React.FC = () => {
  const referral =
    typeof window !== "undefined" ? localStorage.getItem("referralCode") : "";
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    referral: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [selectedRole, setSelectedRole] = useState<string>("Student");
  const [feeStructureVisible, setFeeStructureVisible] =
    useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || ""; // G

  const validate = (): boolean => {
    let tempErrors: Errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const pakistanPhonePattern = /^03[0-9]{9}$/;

    if (!formData.name) tempErrors.name = "Username is required.";
    if (!formData.phone || !pakistanPhonePattern.test(formData.phone))
      tempErrors.phone = "Phone number is required (e.g., 03xxxxxxxx).";

    if (!formData.email || !emailPattern.test(formData.email))
      tempErrors.email = "Valid email is required.";
    if (!formData.password || !passwordPattern.test(formData.password))
      tempErrors.password =
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = "Password does not match.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (role) {
      setFormData((prev) => ({ ...prev, role })); // Set the role in formData
      setSelectedRole(role);
    }
  }, [role]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formData.role = selectedRole; // Set the role dynamically
    formData.referral = referral;
    console.log(formData);
    if (validate()) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
          formData,
        );
        if (response.statusText) {
          console.log(response.statusText);
        }
        if (response) {
          // console.log("response", response)
          toast.success("Registration Successful");

          setTimeout(() => {
            router.push("/auth/login");
          }, 1000);
        }
      } catch (error: any) {
        console.error("Error:", error.response.data.message);
        toast.error(`${error.response.data.message}`);
        // toast.error("Registration failed. Please try again.");
      }
    }
  };

  const handleShowFee = () => {
    setFeeStructureVisible(true);
  };

  const handleCloseFee = () => {
    setFeeStructureVisible(false);
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
            <Link href="/auth/signup">
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
          Register today and start your journey to success
        </p>

        <form className="mt-6">
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
              <FaPhone className="mr-2" />
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" 03xxxxxxxx"
                className="w-full bg-transparent outline-none"
              />
            </div>
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
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
          <span className="text-sm text-white/60 mb-3">
            <span className="font-medium">Strong Password: </span>
            IamScientist@738
          </span>

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

          <button
            type="submit"
            style={{
              background: "linear-gradient(225deg, #C407B9 0%, #DE0DD3 100%)",
            }}
            onClick={(e) => handleSubmit(e)}
            className="w-full py-2 px-4 mb-4 font-semibold text-white rounded-md hover:opacity-90"
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={handleShowFee}
            className="w-full py-2 px-4 font-semibold text-white border-2 border-purple-700 rounded-md hover:bg-purple-700"
          >
            Fee Structure
          </button>
        </form>

        <div className="text-gray-500 text-center mt-4">
          <Link href="/auth/login" className="hover:underline">
            Already have an account?{" "}
            <span className="text-pink-400">Login</span>
          </Link>
        </div>
      </div>

      {feeStructureVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-[#1C0F3A] p-4 md:p-6 rounded-lg relative w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-4xl">
            <button
              onClick={handleCloseFee}
              className="absolute top-2 right-2 text-white text-xl md:text-2xl"
            >
              &times;
            </button>
            <div className="flex justify-center items-center">
              <Image
                src="/register/Fee-2.webp"
                alt="Fee Structure"
                width={500}
                height={500}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Button to go back to the previous page or home if there's no history */}
      <button
        onClick={() =>
          typeof window !== "undefined" && window.history.length > 1
            ? window.history.back()
            : (window.location.href = "/")
        }
        className="absolute top-0 left-0 m-4 px-4 text-sm py-2 border border-gray-300 text-gray-300 rounded-full hover:text-white hover:border-white"
      >
        Back
      </button>
    </div>
  );
};

export default SignUpForm;
