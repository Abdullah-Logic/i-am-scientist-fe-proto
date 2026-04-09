"use client";
import React, { useState } from "react";
import StudentHeader from "../../components/studentHeader";
import Table from "../../components/studentinfo";
import Papa from "papaparse";
import { useRouter } from "next/navigation"; // Updated import for Next.js router
import { parse, format, isValid as valid } from "date-fns";
import {
  CloudUpload,
  Upload,
  ChartColumn,
  UsersRound,
  Search,
} from "lucide-react";
import { SquarePen } from "lucide-react";

interface CSVRow {
  "SR#": string;
  "Student Name": string;
  "Father Name": string;
  Class: string;
  "Date of Birth": string;
  Gender: string;
  Contest: string;
  Level: string;
}
export default function Home() {
  // const {id,setId,role} = useAuth();
  const [value, setValue] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState("");
  const maxDate = "2020/12/31";
  const [flag, setFlag] = useState(false);
  const router = useRouter();

  const requiredHeaders = [
    "SR#",
    "Student Name",
    "Father Name",
    "Class",
    "Date of Birth",
    "Gender",
    // "Contest",
    // "Level",
  ];

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (!file) {
      setError("Please select a file");
      return;
    }

    if (file.type !== "text/csv") {
      setError("Only CSV files are allowed");
      return;
    }

    setError("");

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const { data: parsedData, errors } = results;

        if (errors.length > 0) {
          setError("Error parsing the file");
          return;
        }

        // Validate headers
        const headers = Object.keys(parsedData[0] as Record<string, string>);
        const isValid = requiredHeaders.every((header) =>
          headers.includes(header),
        );

        if (!isValid) {
          setError(
            "Invalid CSV structure. Required columns: " +
              requiredHeaders.join(", "),
          );
          return;
        }

        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Matches YYYY-MM-DD format
        const transformedData: any[] = [];

        for (const row of parsedData) {
          if (typeof row !== "object" || row === null) {
            setError("Invalid row format in CSV file");
            return;
          }

          const typedRow = row as Record<string, string>; // Safely cast row

          let dateOfBirth = typedRow["Date of Birth"];
          if (!dateRegex.test(dateOfBirth)) {
            // Try to parse the date and reformat it
            const parsedDate =
              parse(dateOfBirth, "MM/dd/yyyy", new Date()) ||
              parse(dateOfBirth, "dd-MM-yyyy", new Date());

            if (parsedDate && valid(parsedDate)) {
              dateOfBirth = format(parsedDate, "yyyy-MM-dd");
            } else {
              setError(
                `Invalid date format for "Date of Birth". Unable to parse the date.`,
              );
              return;
            }
          }

          transformedData.push({
            id: typedRow["SR#"],
            studentName: typedRow["Student Name"],
            fatherName: typedRow["Father Name"],
            class: typedRow["Class"],
            dateOfBirth: dateOfBirth,
            gender: typedRow["Gender"],
          });
        }

        setData([...data, ...transformedData]); // Append new data
      },
      error: (err) => {
        setError(`Error reading file: ${err.message}`);
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (input.length > 8) {
      input = input.slice(0, 8); // Limit input to 8 digits (YYYYMMDD)
    }

    // Add formatting (YYYY-MM-DD)
    const formattedValue = input
      .replace(/^(\d{4})(\d)/, "$1-$2") // Add hyphen after year
      .replace(/-(\d{2})(\d)/, "-$1-$2"); // Add hyphen after month

    setValue(formattedValue);
  };

  const handleCustomAdd = (event: any) => {
    event.preventDefault();

    let inputValue = event.target.value;

    if (inputValue > maxDate) {
      inputValue = maxDate; // Set to maximum if exceeded
    }
    // }
    const formData = new FormData(event.target);

    const newStudent = {
      id: data.length + 1, // Generate a new ID based on the data length
      studentName: formData.get("studentName"),
      fatherName: formData.get("fatherName"),
      class: formData.get("class"),
      dateOfBirth: value,
      gender: formData.get("gender"),
    };

    // Validate required fields
    if (
      !newStudent.studentName ||
      !newStudent.fatherName ||
      !newStudent.class
    ) {
      setError("Please fill out all required fields");
      return;
    }

    setData([...data, newStudent]); // Append the new student
    event.target.reset(); // Clear the form
    setError(""); // Clear any previous errors
  };

  const handlePreview = () => {
    // Scroll down by a specific amount (e.g., 500px)
    if (typeof window !== "undefined") {
      window.scrollBy({
        top: 500, // Adjust this value to set how much to scroll
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  const handleDelete = (currentIndex: any) => {
    const updatedData = data.filter((_, index) => index !== currentIndex);
    setData(updatedData);
  };

  const classLabels = [
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
  ];

  const getClassCount = (classNum: number) => {
    const normalized = (value: any) =>
      String(value ?? "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();

    const candidates = [
      String(classNum),
      `class ${classNum}`,
      `${classNum}th`,
      `class ${classNum}th`,
      `${classNum}th class`,
    ].map((item) => item.toLowerCase());

    return data.filter((student) =>
      candidates.includes(normalized(student.class)),
    ).length;
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans bg-[radial-gradient(1100px_circle_at_15%_-10%,#6b2aa5_0%,#3c0a6b_45%,#25033f_100%)]">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-28 top-12 h-80 w-80 rounded-full bg-[#6C0988]/70 blur-[80px]" />
        <div className="absolute -right-28 top-12 h-80 w-80 rounded-full bg-[#6C0988]/70 blur-[80px]" />
        <div className="absolute -left-32 top-[24rem] h-[22rem] w-[22rem] rounded-full bg-[#1F3174]/70 blur-[85px]" />
        <div className="absolute -right-32 top-[24rem] h-[22rem] w-[22rem] rounded-full bg-[#1F3174]/70 blur-[85px]" />
        <div className="absolute -left-28 top-[46rem] h-80 w-80 rounded-full bg-[#6C0988]/65 blur-[80px]" />
        <div className="absolute -right-28 top-[46rem] h-80 w-80 rounded-full bg-[#6C0988]/65 blur-[80px]" />
        <div className="absolute -left-32 top-[68rem] h-[22rem] w-[22rem] rounded-full bg-[#1F3174]/65 blur-[85px]" />
        <div className="absolute -right-32 top-[68rem] h-[22rem] w-[22rem] rounded-full bg-[#1F3174]/65 blur-[85px]" />
      </div>

      <div className="relative z-10">
        <StudentHeader />

        <main className="px-4 md:px-6 py-10 md:py-14 md:w-[82%] mx-auto space-y-8">
          {/* ── Bulk Upload ── */}
          <section className="rounded-2xl border border-[#3C1E6C] bg-[#180B38] shadow-[0_25px_70px_rgba(10,4,30,0.6)] backdrop-blur-md p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 grid place-items-center text-[#C279F9]">
                <Upload size={20} />
              </div>
              <h2 className="font-misri font-semibold text-lg md:text-xl">
                Bulk Upload Students
              </h2>
            </div>

            <div className="text-sm text-white/80">
              Please download template to upload students{" "}
              <a
                href="/Iamscientist.csv"
                className="text-[#C279F9] underline"
                download="iamscientist.csv"
              >
                here
              </a>
              .
            </div>

            <div className="mt-6">
              <label className="font-normal text-sm text-white/80">
                Students File
              </label>
              <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center">
                <label
                  htmlFor="studentsFile"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-dashed border-[#A163FF]/40 bg-[#1F1A43] px-4 py-4 text-sm text-white/70 cursor-pointer hover:border-[#BE8FE4] transition"
                >
                  <CloudUpload size={16} className="text-[#BE8FE4]" />
                  Choose file or drag here
                </label>
                <input
                  id="studentsFile"
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  onClick={handlePreview}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#9D4DF6] to-[#E43D7A] text-white font-semibold py-2.5 px-6 rounded-lg shadow-[0_10px_25px_rgba(196,7,185,0.4)]"
                >
                  <Upload size={15} />
                  Upload
                </button>
              </div>
            </div>
            {error && <p className="text-red-400 mt-4">{error}</p>}
          </section>

          {/* ── Student Summary by Class ── */}
          <section className="rounded-2xl border border-[#3C1E6C] bg-[#180B38] shadow-[0_25px_70px_rgba(10,4,30,0.6)] backdrop-blur-md p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 grid place-items-center text-[#C279F9]">
                <ChartColumn size={20} />
              </div>
              <h2 className="font-misri font-semibold text-lg md:text-xl">
                Student Summary by Class
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-4">
              {classLabels.map((label, index) => {
                const classNum = index + 1;
                return (
                  <div
                    key={label}
                    className="rounded-xl border border-[#3C1E6C] bg-[#2B1455] px-4 py-3 text-center shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
                  >
                    <div className="text-lg font-semibold text-[#C279F9]">
                      {getClassCount(classNum)}
                    </div>
                    <div className="text-xs text-white/60">{label}</div>
                  </div>
                );
              })}
              <div className="rounded-xl bg-gradient-to-br from-[#9D4DF6] to-[#E43D7A] px-4 py-3 text-center shadow-[0_10px_30px_rgba(196,7,185,0.35)]">
                <div className="text-lg font-semibold text-white">
                  {data.length}
                </div>
                <div className="text-xs text-white/80">Total</div>
              </div>
            </div>
          </section>

          {/* ── Student Registration ── */}
          <section className="rounded-2xl border border-[#3C1E6C] bg-[#180B38] shadow-[0_25px_70px_rgba(10,4,30,0.6)] backdrop-blur-md p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 grid place-items-center text-[#C279F9]">
                  <SquarePen size={20} />
                </div>
                <h2 className="font-misri font-semibold text-lg md:text-xl">
                  Student Registration
                </h2>
              </div>
              <button
                type="submit"
                form="student-registration"
                className="flex items-center gap-1.5 bg-gradient-to-r from-[#9D4DF6] to-[#E43D7A] text-white py-2 px-5 rounded-lg shadow-[0_8px_20px_rgba(196,7,185,0.35)] text-sm"
              >
                <span className="text-lg leading-none">+</span> Save
              </button>
            </div>
            <form
              id="student-registration"
              onSubmit={handleCustomAdd}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {/* Student Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="studentName"
                  className="text-xs text-white/60 mb-2"
                >
                  Student Name
                </label>
                <input
                  name="studentName"
                  type="text"
                  className="rounded-lg border border-[#3C1E6C] bg-[#1F1A43] focus:outline-none focus:border-[#BE8FE4] py-2.5 px-4 text-white placeholder:text-white/30 text-sm"
                  placeholder="Enter student name"
                />
              </div>

              {/* Father Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="fatherName"
                  className="text-xs text-white/60 mb-2"
                >
                  Father Name
                </label>
                <input
                  name="fatherName"
                  type="text"
                  className="rounded-lg border border-[#3C1E6C] bg-[#1F1A43] focus:outline-none focus:border-[#BE8FE4] py-2.5 px-4 text-white placeholder:text-white/30 text-sm"
                  placeholder="Enter father name"
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col">
                <label
                  htmlFor="dateOfBirth"
                  className="text-xs text-white/60 mb-2"
                >
                  Date of Birth
                </label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={value}
                  onChange={handleInputChange}
                  className="rounded-lg border border-[#3C1E6C] bg-[#1F1A43] px-4 py-2.5 focus:outline-none focus:border-[#BE8FE4] text-white placeholder:text-white/30 text-sm"
                  placeholder="YYYY-MM-DD"
                  maxLength={10}
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col">
                <label htmlFor="gender" className="text-xs text-white/60 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="rounded-lg border border-[#3C1E6C] bg-[#1F1A43] focus:outline-none focus:border-[#BE8FE4] py-2.5 px-4 text-white/60 text-sm"
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                    className="text-gray-500 bg-[#280253]"
                  >
                    Select Gender
                  </option>
                  <option value="male" className="bg-[#280253]">
                    Male
                  </option>
                  <option value="female" className="bg-[#280253]">
                    Female
                  </option>
                </select>
              </div>

              {/* Class */}
              <div className="flex flex-col">
                <label htmlFor="class" className="text-xs text-white/60 mb-2">
                  Class
                </label>
                <select
                  name="class"
                  className="rounded-lg border border-[#3C1E6C] bg-[#1F1A43] focus:outline-none focus:border-[#BE8FE4] py-2.5 px-4 text-white/60 text-sm"
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                    className="text-gray-500 bg-[#280253]"
                  >
                    Select Class
                  </option>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(
                    (classNum) => (
                      <option
                        key={classNum}
                        value={classNum}
                        className="bg-[#280253]"
                      >
                        Class {classNum}
                      </option>
                    ),
                  )}
                </select>
              </div>

              {/* Level */}
              <div className="flex flex-col">
                <label htmlFor="level" className="text-xs text-white/60 mb-2">
                  Level
                </label>
                <input
                  name="level"
                  type="text"
                  className="rounded-lg border border-[#3C1E6C] bg-[#1F1A43] focus:outline-none focus:border-[#BE8FE4] py-2.5 px-4 text-white placeholder:text-white/30 text-sm"
                  placeholder="Enter Level"
                />
              </div>
            </form>
          </section>

          {/* ── Registered Students ── */}
          <section className="rounded-2xl border border-[#3C1E6C] bg-[#180B38] shadow-[0_25px_70px_rgba(10,4,30,0.6)] backdrop-blur-md p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 grid place-items-center text-[#C279F9]">
                  <UsersRound size={20} />
                </div>
                <h2 className="font-misri font-semibold text-lg md:text-xl">
                  Registered Students
                </h2>
              </div>
              <div className="relative max-w-xs w-full">
                <input
                  type="text"
                  placeholder="Search students..."
                  className="w-full rounded-lg border border-[#3C1E6C] bg-[#1E1944] py-2 pl-9 pr-4 text-sm text-white/80 placeholder:text-white/40 focus:outline-none focus:border-[#BE8FE4]"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/70" />
              </div>
            </div>

            <div className="rounded-xl border border-[#3C1E6C] bg-black/10 overflow-hidden">
              <Table studentData={data} onDelete={handleDelete} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
