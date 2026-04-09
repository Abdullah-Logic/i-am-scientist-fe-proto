"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle, FcPhone } from "react-icons/fc";
import logo from "../../../public/navbar/logo.png";
import { FaLock, FaEnvelope, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { FaPhone } from "react-icons/fa6";

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

const SignUpPage: React.FC = () => {
  const referral =
    typeof window !== "undefined" ? localStorage.getItem("referralCode") : "";
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    referral:""
  });
  const [errors, setErrors] = useState<Errors>({});
  const router = useRouter();

  const validate = (): boolean => {
    let tempErrors: Errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!formData.name) tempErrors.name = "Username is required.";
    if (!formData.phone) tempErrors.phone = "Phone is required.";
    if (!formData.email || !emailPattern.test(formData.email))
      tempErrors.email = "Valid email is required.";
    if (!formData.password || !passwordPattern.test(formData.password))
      tempErrors.password =
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent, user: string) => {
    e.preventDefault();
    formData.role = user;
    formData.referral = referral
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
          router.push("/auth/login");
        }
      } catch (error: any) {
        console.error("Error:", error.response.data.message);
        toast.error(`${error.response.data.message}`);
        // toast.error("Registration failed. Please try again.");
      }
    }
  };

  const goBack = () => {
    // Go to the previous page
    router.back();
  };

  return (
    <div className=" bg-[#280253] flex min-h-screen justify-center items-center p-4 py-8">
  <ToastContainer />
  <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute -top-12 left-0 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60"></div>
  <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80"></div>
  <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60"></div>
  <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full opacity-60"></div>
  <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 left-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 z-10"></div>
  <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-4 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full opacity-80 z-10"></div>
  <div
    style={{
      background: "linear-gradient(191.13deg, #200339 8.76%, #2F0851 51.41%, #2F0851 92.39%)",
    }}
    className="w-full max-w-md p-8 rounded-lg shadow-2xl z-10 "
  >
    <div className="text-center mb-6">
      <Link href="/">
        <Image
          src={logo}
          width={214}
          height={75}
          alt={"Snapcheck logo"}
          className="cursor-pointer mx-auto"
        />
      </Link>
    </div>
    <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-2">Register</h1>
    <div className="my-8 space-y-6 ">
      <p className="text-sm md:text-[20px] text-gray-300 leading-normal font-semibold">
        <span className="font-semibold">Faysal Bank:</span>
        <br />
        Account#: 3716301000003525
        <br />
        IBAN#: PK62FAYS3716301000003525
        <br/>
        Account Title: I AM SCIENTIST
      </p>

      <p className="text-sm text-center md:text-[20px] text-gray-300 leading-normal font-semibold">OR</p>

      <p className="text-sm md:text-[20px] text-gray-300 leading-normal font-semibold">
        <span className="font-semibold">Mobilink/Jazzcash:</span>
        <br />
        Account#: 141408593
        <br />
        IBAN#: PK66JCMA0000000141408593
        <br/>
        Account Title: I AM SCIENTIST
      </p>
      

      <p className="bg-yellow-300 p-3">When you deposit your fee through any source please whatsapp on 03310001900. <br />Student Name, Father Name, City.</p>
    </div>
    <div className="mt-14">
    <Link href={"/auth/signup-form?role=student"}>
    <button
        type="button"
        style={{
          background: "linear-gradient(225deg, #C407B9 0%, #DE0DD3 100%)",
        }}
        className="w-full py-2 px-4 mb-4 font-semibold text-white rounded-md hover:opacity-90"
      >
        Register as a Student
      </button>
      </Link>
      <Link href={"/auth/signup-form?role=organization"}>
      <button
        type="button"
        className="w-full py-2 px-4 font-semibold text-white border-2 border-purple-700 rounded-md hover:bg-purple-700"
      >
        Register as an Organization
      </button>
      </Link>
    </div>
    <div className="text-gray-500 text-center mt-4">
      <Link href="/auth/login" className="hover:underline">
        Already have an account?{" "}
        <span className="text-pink-400">Login</span>
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

  );
};

export default SignUpPage;
