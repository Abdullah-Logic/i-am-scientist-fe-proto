"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const NewsLetter = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [subscribe, setSubscribe] = useState<Boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please provide a valid email address.");
      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }
    setSubscribe(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/email/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Send JSON data
          },
          body: JSON.stringify({ email }), // Use JSON instead of FormData
        },
      );
      setSubscribe(false);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Email submitted successfully:", data);
      toast.success(data);
      setEmail("");
      setError(""); // Clear any existing error
    } catch (err: any) {
      console.error("Submission failed:", err.message);
      // setError("Failed to submit email. Please try again.");
      toast.error("Failed to submit email. Please try again.");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  return (
    <>
      {/* <ToastContainer/> */}
      <div className="-mt-20 absolute flex justify-center items-center w-full h-auto bg-transparent max-w-[120rem]">
        <div className="max-w-[800px] 2xl:max-w-[1000px] w-full opacity-90 p-2 md:p-12 bg-gradient-to-r from-[#1C032F] to-[#0032AB] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-jost">
            <div>
              <h2 className="font-bold text-center md:text-left text-white text-2xl 2xl:text-3xl">
                Subscribe to our newsletter.
              </h2>
              <p className="text-gray-200 text-center md:text-left mt-2 text-xl font-normal">
                Get updates to news and events.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative flex items-center justify-center">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="p-3 w-full placeholder-[rgba(38,38,38,1)] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  onClick={handleSubmit}
                  className="absolute font-bold right-0 bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] text-white p-3 "
                >
                  {subscribe ? "Processing..." : "Subscribe"}
                </button>
              </div>
              <div>
                {error && (
                  <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
