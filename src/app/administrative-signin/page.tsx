





"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault(); // Prevent page reload
       try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/login`,
        { username: email, password }
      );

      if (response) {
        localStorage.setItem('IASADMIN',response.data.admin.username)
        localStorage.setItem('IASADMINID',response.data.admin.id)
        console.log(await response.data)
        router.push("/iasExamSystem/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* Using Head component for metadata */}
      <Head>
        <title>Admin Login - IAS Exam System</title>
        <meta
          name="description"
          content="Admin login for the IAS Exam System."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full items-center font-inter py-2 justify-center min-h-screen bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] text-white px-4">
        {/* Blur elements */}
        <div className="w-44 h-40 2xl:w-80 overflow-hidden 2xl:h-80 bg-[#6C0988] absolute top-0 left-0 blur-xl rounded-tr-full rounded-b-full rounded-bl-full opacity-60 z-10"></div>
        <div className="w-44 h-40 2xl:w-80 overflow-hidden 2xl:h-80 bg-[#6C0988] absolute bottom-0 right-0 blur-xl rounded-tr-full rounded-b-full rounded-bl-full opacity-60 z-10"></div>
        <div className="z-50">
          <div className="text-center mb-8">
            <div className="mb-8">
              <Image
                src="/navbar/logo.png"
                width={214}
                height={75}
                alt="Iamscientist logo"
                className="cursor-pointer mx-auto"
              />
            </div>
            <div className="mb-8">
              <hr className="w-full max-w-md mx-auto border-0 h-[1px] bg-gradient-to-r from-blue-500 to-pink-500" />
            </div>
          </div>

          {/* Gradient border div */}
          <div className="p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
            <div className="md:w-[550px] xl:w-[600px] bg-[#3D0C74] rounded-md">
              <div>
                <div className="p-[0.5px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-md">
                  <h1 className="text-2xl font-bold rounded-t-md text-white bg-[#431E6C] font-inter p-4 flex justify-center items-center text-center">
                    Admin Sign in
                  </h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 p-4">
                  <div>
                    <label
                      className="block text-sm mb-2 font-medium text-white"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <div className="p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
                      <div className="bg-[#431E6C] rounded-md">
                        <input
                          type="text"
                          id="email"
                          placeholder="Enter Your Username or email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          aria-label="Email address"
                          className="w-full px-4 py-3 text-sm rounded-md bg-[#431E6C] text-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label
                        className="block text-sm font-medium text-white"
                        htmlFor="password"
                      >
                        Password
                      </label>
                    </div>
                    <div className="p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
                      <div className="bg-[#431E6C] rounded-md relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          aria-label="Password"
                          className="w-full px-4 py-3 text-sm rounded-md bg-[#431E6C] text-white focus:outline-none pr-10"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute  right-3 top-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                          aria-label="Toggle password visibility"
                        >
                          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-start w-full bg-transparent mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-white hover:underline hover:text-blue-500"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  {error && (
                    <p className="text-sm text-red-500 font-medium">{error}</p>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#C407B9] text-white font-semibold py-2 my-8 rounded-md hover:bg-pink-600 transition-colors"
                    >
                      SIGN IN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center my-4">
          <div className="mb-2">
            <p className="md:text-sm text-xs text-white">
              Please Contact{" "}
              <a
                href="mailto:support@iamscientist.ai"
                className="font-medium hover:underline text-[#C407B9]"
              >
                support@iamscientist.ai
              </a>{" "}
              in case of any query.
            </p>
          </div>
          <div className="md:text-sm text-xs text-white">
            <p>
              Don't have an I Am Scientist account?{" "}
              <a
                href="#"
                className="text-[#C407B9] font-medium hover:underline"
              >
                Create for free
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

