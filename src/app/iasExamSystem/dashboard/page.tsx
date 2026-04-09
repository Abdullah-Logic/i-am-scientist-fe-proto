"use client";
import Image from "next/image";
import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [contestDates, setContestDates] = useState({
    contestRegistrationStart: "",
    contestRegistrationEnd: "",
    contestConfirmationStart: "",
    contestConfirmationEnd: "",
    contestsDateStart: "",
    contestsDateEnd: "",
    contestResultStart: "",
    contestResultEnd: "",
  });

  const [courseDates, setCourseDates] = useState({
    courseRegistrationStart: "",
    courseRegistrationEnd: "",
    courseConfirmationStart: "",
    courseConfirmationEnd: "",
    courseClassesStart: "",
    courseClassesEnd: "",
  });

   useEffect(() => {
  const fetchDates = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dates/raw-dates`);
      const {data} = await res.json();

      // Update contestDates
      setContestDates({
        contestRegistrationStart: data.contestRegistrationStart || "",
        contestRegistrationEnd: data.contestRegistrationEnd || "",
        contestConfirmationStart: data.contestConfirmationStart || "",
        contestConfirmationEnd: data.contestConfirmationEnd || "",
        contestsDateStart: data.contestsDateStart || "",
        contestsDateEnd: data.contestsDateEnd || "",
        contestResultStart: data.contestResultStart || "",
        contestResultEnd: data.contestResultEnd || "",
      });

      // Update courseDates
      setCourseDates({
        courseRegistrationStart: data.courseRegistrationStart || "",
        courseRegistrationEnd: data.courseRegistrationEnd || "",
        courseConfirmationStart: data.courseConfirmationStart || "",
        courseConfirmationEnd: data.courseConfirmationEnd || "",
        courseClassesStart: data.courseClassesStart || "",
        courseClassesEnd: data.courseClassesEnd || "",
      });
    } catch (err) {
      console.error("Failed to fetch dates", err);
      toast.error("Failed to load dates.");
    }
  };

  fetchDates();
}, []);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "contest" | "course"
  ) => {
    const { name, value } = e.target;
    if (type === "contest") {
      setContestDates((prev) => ({ ...prev, [name]: value }));
    } else {
      setCourseDates((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    const fullDates = {
      ...contestDates,
      ...courseDates,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dates/update-dates`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullDates),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Course dates updated successfully!");
      } else {
        toast.error(data.message || "Failed to update course dates.");
      }
    } catch (error) {
      console.error("Error updating dates:", error);
      toast.error("Error updating course dates.");
    }
  };

  return (
    <div className="w-full m-4 md:m-6 lg:m-10 font-Croissant">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#2E98FC] to-[#C407B9] pb-[1.5px] px-[1.5px] rounded-xl border-t-4 border-[#C407B9]">
        <div className="flex justify-center md:gap-10 p-5 rounded-xl bg-[hsl(269,77%,19%,90%)]">
          <div className="self-end">
            <Image src={"/iasExamSystem/Stars.svg"} width={50} height={100} alt="stars" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white text-center">
              Welcome to I Am Scientist
            </h1>
            <p className="text-white mt-3 text-center capitalize font-light">
              an online exam system
            </p>
          </div>
          <div className="self-start">
            <Image src={"/iasExamSystem/Stars.svg"} width={50} height={100} alt="stars" />
          </div>
        </div>
      </div>

      {/* Contest Dates */}
      <div className="mt-10 bg-[hsl(269,77%,19%,90%)] p-6 rounded-xl shadow-md text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#2E98FC]">Contests Schedule</h2>

        {[
          { label: "Contest Registration", name: "contestRegistration" },
          { label: "Registration Confirmation", name: "contestConfirmation" },
          { label: "Contests Date", name: "contestsDate" },
          { label: "Contests Result", name: "contestResult" },
        ].map(({ label, name }) => (
          <div key={name} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div className="md:col-span-1 flex items-center font-medium">{label}</div>
            <div>
              <label className="block text-sm mb-1">Start Date</label>
              <input
                type="date"
                name={`${name}Start`}
                value={contestDates[`${name}Start` as keyof typeof contestDates]}
                onChange={(e) => handleChange(e, "contest")}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">End Date</label>
              <input
                type="date"
                name={`${name}End`}
                value={contestDates[`${name}End` as keyof typeof contestDates]}
                onChange={(e) => handleChange(e, "contest")}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Course Dates */}
      <div className="mt-10 bg-[hsl(269,77%,19%,90%)] p-6 rounded-xl shadow-md text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#2E98FC]">Course Schedule</h2>

        {[
          { label: "Course Registration", name: "courseRegistration" },
          { label: "Registration Confirmation", name: "courseConfirmation" },
          { label: "Course Classes", name: "courseClasses" },
        ].map(({ label, name }) => (
          <div key={name} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div className="md:col-span-1 flex items-center font-medium">{label}</div>
            <div>
              <label className="block text-sm mb-1">Start Date</label>
              <input
                type="date"
                name={`${name}Start`}
                value={courseDates[`${name}Start` as keyof typeof courseDates]}
                onChange={(e) => handleChange(e, "course")}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">End Date</label>
              <input
                type="date"
                name={`${name}End`}
                value={courseDates[`${name}End` as keyof typeof courseDates]}
                onChange={(e) => handleChange(e, "course")}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            className="bg-[#2E98FC] hover:bg-[#1a7fd3] text-white px-6 py-2 rounded-xl mr-4"
          >
            Update All Dates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
