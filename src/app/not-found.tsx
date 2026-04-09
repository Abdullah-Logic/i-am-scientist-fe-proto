// pages/404.js
"use client"
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#280253]  text-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link className="px-4 py-2 bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer  ease-in-out hover:opacity-90 text-white rounded  transition duration-300" href="/">
    
          Go back to Home
        
      </Link>
    </div>
  );
};

export default page;
