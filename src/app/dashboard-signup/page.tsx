"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle,  } from "react-icons/fc";
import { FaLock, FaEnvelope, FaUser } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

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
          formData
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
    <div className=" bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] text-white flex min-h-screen justify-center items-center p-4 py-8">
      <ToastContainer />
    <div
       
        className="w-2/5 bg-[rgba(255,255,255,0.04)] p-8 rounded-xl shadow-2xl z-10"
      >
        <div className="relative text-center mb-4">
          

          <Link href="/">
            <Image
              src="/navbar/logo.png"
              width={214}
              height={75}
              alt={"Iam Scientist logo"}
              className="cursor-pointer mx-auto"
            />
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          Sign up
        </h1>
        <p className="text-[16px] text-gray-400 text-center mt-2">
          Start generating your thoughts I am Scientist
        </p>

        <button
          type="submit"
          style={{
            background: "linear-gradient(225deg, #C407B9 0%, #DE0DD3 100%)",
          }}
          className="flex items-center justify-center text-white font-normal text-lg rounded-md py-2 px-4 w-full space-x-2 mt-4 mb-2"
        >
          <FcGoogle size={20} /> {/* Google icon */}
          <span>Continue with Google</span>
        </button>
        
                    <div className="flex justify-center items-center text-white">or</div>

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

         
        </form>

        <div className="text-gray-500 text-center mt-4">
          <Link href="/magicScientistHeaderSidebar/dashboard-login" className="hover:underline">
            Already have an account?{" "}
            <span className="text-pink-400">Login</span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default SignUpForm;
