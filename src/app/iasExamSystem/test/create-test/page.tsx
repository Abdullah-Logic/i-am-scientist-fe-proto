"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [testName, setTestName] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [testTime, setTestTime] = useState("10:00");
  const [loading, setLoading] = useState(false); // For showing a loading state
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    const testParam = searchParams.get("test");
    if (testParam) {
      const test = JSON.parse(decodeURIComponent(testParam));
      setTestName(test.testName || "");
      setClassLevel(test.classLevel || "");
      setStartDate(new Date(test.testDate || Date.now()));
      setTestTime(test.testTime || "10:00");
      setShowUpdate(true);
    }
  }, [searchParams]);

  const handleUpdate = async () => {
    const testParam = searchParams.get("test");
    if (!testParam) {
      console.error("No test data found in the search parameters");
      return;
    }

    const test = JSON.parse(decodeURIComponent(testParam));
    const id = test.id; // Use the ID of the test to be updated
    const url = `${process.env.NEXT_PUBLIC_API_URL}/test/update/${id}`;

    const requestBody = {
      testName,
      classLevel,
      date: startDate.toISOString().split("T")[0], // Format date as YYYY-MM-DD
      time: testTime,
    };

    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Test updated successfully:", data);
      router.push("/iasExamSystem/test"); // Redirect to the list page after update
    } catch (error) {
      console.error("Failed to update test:", error);
      alert("An error occurred while updating the test. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const handleCreateTest = async () => {
    if (testName.trim() && classLevel.trim()) {
      setLoading(true);
      const newTest = {
        testName,
        classLevel,
        date: startDate.toISOString(), // Use ISO format for consistency
        time: testTime,
      };
      console.log(newTest);

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTest),
        });

        if (response.ok) {
          router.push("/iasExamSystem/test");
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message || "Failed to create test"}`);
        }
      } catch (error) {
        console.error("API Error:", error);
        alert("An error occurred while creating the test. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="w-full m-4 md:m-6 lg:m-10">
      <div className="flex flex-col justify-start gap-7 text-white">
        <h1 className="text-3xl font-bold text-start">
          {searchParams.get("test") ? "Edit Test" : "Create Test"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Test Name */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] rounded-xl">
              <div className="rounded-xl bg-[hsl(269,77%,19%,90%)]">
                <input
                  type="text"
                  required
                  placeholder="Enter Test Name"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  className="w-full bg-transparent outline-none text-white p-3 placeholder:text-white/85"
                />
              </div>
            </div>
          </div>

          {/* Class Level */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] rounded-xl">
              <div className="rounded-xl bg-[hsl(269,77%,19%,90%)]">
                <select
                  className="w-full bg-transparent outline-none text-white p-3 -mx-3 "
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                >
                  <option value="" className="bg-[#C407B9]  text-white/85">
                    Select Class Level
                  </option>
                  {Array.from({ length: 6 }, (_, i) => `${i * 2 + 1}-${i * 2 + 2}`).map(
                    (level, idx) => (
                      <option
                        key={idx}
                        value={level}
                        className="bg-[#C407B9] text-white/85"
                      >
                        {level}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* Test Date */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] rounded-xl">
              <div className="rounded-xl bg-[hsl(269,77%,19%,90%)]">
              
                <DatePicker
  className="w-full bg-transparent outline-none text-white p-3"
  selected={startDate}
  onChange={(date) => setStartDate(date ?? new Date())} // Ensure a default value if date is null
/>
              </div>
            </div>
          </div>

          {/* Test Time */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] rounded-xl">
              <div className="rounded-xl bg-[hsl(269,77%,19%,90%)]">
                <input
                  type="time"
                  value={testTime}
                  onChange={(e) => setTestTime(e.target.value)}
                  className="w-full bg-transparent outline-none text-white p-3"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          onClick={showUpdate ? handleUpdate : handleCreateTest}
          className="self-end px-10 py-3 bg-[#C407B9] rounded-xl hover:bg-[#F407B9]"
          disabled={loading}
        >
          {loading ? "Saving..." : searchParams.get("test") ? "Update Test" : "Create Test"}
        </button>

      </div>
    </div>
  );
};

export default Page;
