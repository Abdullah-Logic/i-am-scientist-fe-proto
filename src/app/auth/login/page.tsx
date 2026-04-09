"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

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

const LoginPage: React.FC = () => {
  const { id, setId, role, setRole } = useAuth();
  const [btnRole, setBtnRole] = useState("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
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
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
          formData
        );
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
      <Navbar />

      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 left-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>

      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute top-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80"></div>
      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2 left-0  mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>
      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#1F3174] absolute top-1/2  right-0 mx-auto blur-xl backdrop-blur-4xl rounded-bl-full rounded-br-full  opacity-60"></div>

      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-0 left-0  blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>
      <div className="w-32 h-32 2xl:w-40 2xl:h-40 bg-[#6C0988] absolute bottom-0 right-0 blur-xl backdrop-blur-2xl rounded-tr-full rounded-br-full  opacity-80 z-10"></div>

      <div className="text-center flex w-full  justify-center bg-[#280253] ">
        <div
          style={{
            background:
              "linear-gradient(191.13deg, #200339 8.76%, #2F0851 51.41%, #2F0851 92.39%)",
          }}
          className="w-full max-w-md p-8 rounded-lg shadow-2xl z-10 my-5">
          <Link href="/">
            <Image
              src="/navbar/logo.png"
              width={214}
              height={75}
              alt="Iamscientist logo"
              className="cursor-pointer mx-auto"
            />
          </Link>

          <h1 className="text-2xl md:text-4xl font-bold text-white text-center my-5">
            Login
          </h1>

          <p className="bg-yellow-300 p-3 text-justify my-3">
            When you deposit your fee through any source please whatsapp on
            03310001900<br />
            Student Name, Father Name, City.
          </p>

          <form onSubmit={handleSubmit}>
            <Link href={"/auth/login-form?role=student"}>
              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(225deg, #C407B9 0%, #DE0DD3 100%)",
                }}
                className="text-white font-semibold rounded-md py-2 px-4 w-full mb-4"
              >
                Login as a Student
              </button>
            </Link>
            <Link href={"/auth/login-form?role=organization"}>
              <button
                type="submit"
                className="border-2 border-[#cc09c1] text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                Login as an Organization
              </button>
            </Link>
            <div className="mt-6 text-[#F472B6] text-start">
              <a href="/auth/forget-password" className="hover:underline">
                Forgot Password?
              </a>
            </div>
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

      <Footer />
    </>
  );
};

export default LoginPage;
