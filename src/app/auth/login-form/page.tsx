"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";


interface FormData {
  email: string;
  password: string;
  role?: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  role?: string;
}

const LoginForm: React.FC = () => {
  const searchParams = useSearchParams();
  const { id, setId, setRole } = useAuth();
  const [btnRole, setBtnRole] = useState("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const role = searchParams.get("role") || "";
  const router = useRouter();

  const validate = (): boolean => {
    let tempErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const handleRoleChange = (role: any) => {
    setFormData((prevData) => ({
      ...prevData,
      role, 
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      formData.role = role;
     
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
          formData
        );
        localStorage.removeItem("IASID");
        localStorage.removeItem("IASROLE");
        localStorage.removeItem("IASEMAIL");
        localStorage.removeItem("IASPHONE");
        localStorage.removeItem("plan");
        localStorage.removeItem("price");
        localStorage.removeItem("quant");
        if (response) {
          localStorage.setItem("IASID", response.data.user.id);
          localStorage.setItem("IASROLE", response.data.user.role);
          localStorage.setItem("IASEMAIL", response.data.user.email);
          localStorage.setItem("IASPHONE", response.data.user.phone);
          setId(response.data.user.id);
          setRole(response.data.user.role);

          toast.success("User Logged in Successfully");
          if (response.data.user.role === "student") {
            if (response.data.user.profile === false) {
              router.push("/student/register-as-student");
            } else {
              router.push("/student/dashboard");
            }
          } else {
            if (response.data.user.profile === false) {
              router.push("/user/registration");
            } else {
              router.push("/user/dashboard");
            }
          }
        }
      } catch (error: any) {
        
        console.log(error);
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
     

      <div className="bg-[#280253]  mx-5 flex flex-col items-center min-h-screen py-8 justify-center">
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>

        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0  mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2  right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>

        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-0 left-0  blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
        <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
 

        <div
          style={{
            background:
              "linear-gradient(191.13deg, #200339 8.76%, #2F0851 51.41%, #2F0851 92.39%)",
          }}
          className="p-8 rounded-lg shadow-lg flex flex-col gap-4 relative"
        >
          <div className="absolute top-10 left-4">
            <Link href="/auth/login">
              <button className="flex items-center text-white text-lg md:text-xl font-semibold hover:underline">
                <FaArrowLeft className="mr-2" />
              </button>
            </Link>
          </div>

          <Link href="/">
            <Image
              src="/navbar/logo.png"
              width={214}
              height={75}
              alt="Iamscientist logo"
              className="cursor-pointer mx-auto"
            />
          </Link>

          <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-2">
            Login
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Login to your account and unlock new opportunities
          </p>

          <form onSubmit={handleSubmit}>
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
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0F2A5B] focus:outline-none"
                />
              </div>
              {errors.email && (
                <p className=" text-red-600 text-sm mt-1">{errors.email}</p>
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
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-[#0F2A5B] focus:outline-none"
                />
              </div>
              {errors.password && (
                <p className="text-red-600  text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-gray-400"
              />
              <label htmlFor="remember" className="ml-2 text-gray-400">
                Remember Me
              </label>
            </div>

            <div className="mb-6 text-[#F472B6] text-start">
              <a href="/auth/forget-password" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              
              type="submit"
              style={{
                background: "linear-gradient(225deg, #C407B9 0%, #DE0DD3 100%)",
              }}
              className="text-white font-semibold rounded-md py-2 px-4 w-full mb-4"
            >
              Login
            </button>
          </form>

          <div className="p-4 rounded-md text-gray-400 text-center">
            <Link href="/auth/signup" className="hover:underline">
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
          className="absolute top-0 left-0 m-4 px-4 text-sm py-2 border border-gray-300 text-gray-300 rounded-full hover:text-white hover:border-white"
        >
          Back
        </button>
      </div>
    
    </>
  );
};

export default LoginForm;
