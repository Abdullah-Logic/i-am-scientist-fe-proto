"use client";

import type React from "react";

import { useState } from "react";
// import { verifyUsername } from "../actions"
import CertificateDisplay from "./CertificateDisplay";
import { motion } from "framer-motion";

export default function CertificateVerificationForm() {
  const [username, setUsername] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    certificateUrl?: string;
    message?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsVerifying(true);
    
    try {
      const getName = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/exam/getStudentName/${username}`,
        {
          method: "GET",
        }
      );

      // Check content type to determine if response is JSON (error) or image (success)
      const contentType = getName.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
        // Handle JSON error response
        const errorData = await getName.json();
        setResult({
          success: false,
          certificateUrl: "",
          message: errorData.error || "Result Not Found",
        });
        setIsVerifying(false);
        return;
      }

      if (!getName.ok) {
        setResult({
          success: false,
          certificateUrl: "",
          message: "Result Not Found",
        });
        setIsVerifying(false);
        return;
      }

      // The backend returns the certificate image directly
      // Convert the response to a blob and create an object URL
      const imageBlob = await getName.blob();
      
      if (!imageBlob || !imageBlob.type.includes('image')) {
        setResult({
          success: false,
          certificateUrl: "",
          message: "Invalid certificate format",
        });
        setIsVerifying(false);
        return;
      }

      // Create object URL from blob for display
      const imageUrl = URL.createObjectURL(imageBlob);

      setResult({
        success: true,
        certificateUrl: imageUrl,
      });
      setIsVerifying(false);
    } catch (error) {
      setResult({
        success: false,
        certificateUrl: "",
        message: "An error occurred while fetching the certificate",
      });
      setIsVerifying(false);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    // if (newUsername.toLowerCase() === "daniyal") {
    //   setResult({
    //     success: true,
    //     certificateUrl: "https://res.cloudinary.com/dtkxm4abz/image/upload/v1739962690/ne4w40t5nvlhayazip5s.jpg",
    //   })
    // } else {
    //   setResult(null)
    // }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          {/* <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Enter your username
          </label> */}
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            placeholder="Enter Your Username"
          />
        </div>
        <button
          type="submit"
          disabled={isVerifying}
          className="w-full bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isVerifying ? "Verifying..." : "Verify Certificate"}
        </button>
      </form>
      <CertificateDisplay result={result} isVerifying={isVerifying} />
    </motion.div>
  );
}
