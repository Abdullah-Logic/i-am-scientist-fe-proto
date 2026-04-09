"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
// import logo from "./navbar/logo.png";
import { FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
// import { useAuth } from "@/context/AuthContext";
// import Navbar from "@/app/components/navbar";
// import Footer from "@/app/components/Footer";

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
  // const { id, setId, setRole } = useAuth();
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
      role, // Update only the role field
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
          // setId(response.data.user.id);
          // setRole(response.data.user.role);

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
        // toast.error(error)
        console.log(error);
        toast.error("Invalid Username or Password");
      }
    }
  };

  return (
    <>
      <ToastContainer />
    

      <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)]  mx-0 flex flex-col items-center  h-auto py-8 justify-center">
     <div
       
          className="p-8 w-2/5 h-auto bg-[rgba(255,255,255,0.04)]   rounded-xl shadow-xl flex flex-col gap-3 relative"
        >
         

          <Link href="/">
            <Image
              src="/navbar/logo.png"
              width={214}
              height={75}
              alt="Iamscientist logo"
              className="cursor-pointer mx-auto"
            />
          </Link>

          <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-1">
            Login
          </h1>
          <p className="text-gray-300 text-center mb-4">
            Login to Connect and Learn
          </p>


<button
  type="submit"
  style={{
    background: "linear-gradient(225deg, #C407B9 0%, #DE0DD3 100%)",
  }}
  className="flex items-center justify-center text-white font-normal text-lg rounded-md py-2 px-4 w-full space-x-2"
>
  <FcGoogle size={20} /> {/* Google icon */}
  <span>Sign in with Google</span>
</button>

            <div className="flex justify-center items-center text-white">or</div>

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

            {/* <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-gray-400"
              />
              <label htmlFor="remember" className="ml-2 text-gray-400">
                Remember Me
              </label>
            </div> */}

            <div className="mb-6 text-[#F472B6] text-start">
              <a href="/auth/forget-password" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              //   onClick={() => handleRoleChange("student")}
              type="submit"
              style={{
                background: "linear-gradient(225deg, #C407B9 0%, #DE0DD3 100%)",
              }}
              className="text-white font-semibold rounded-md py-2 px-4 w-full "
            >
              Login
            </button>
          </form>

          <div className="p-4 rounded-md text-gray-400 text-center">
            <Link href="/magicScientistHeaderSidebar/dashboard-signup" className="hover:underline">
              Don't have an account?{" "}
              <span className="text-[#F472B6]">Register</span>
            </Link>
          </div>
        </div>

        
      </div>
     
    </>
  );
};

export default LoginForm;
