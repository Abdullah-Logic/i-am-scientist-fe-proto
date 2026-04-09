"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const positionOptions = [
  "Gold",
  "Silver",
  "Bronze",
  "Passed",
  "Failed",
  "Not Attempted",
];

const Page: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/exam/getAllContests`
      );
      setStudents(response.data);
    } catch (err) {
      console.error("Error fetching students:", err);
      setError("Failed to fetch students. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (
    studentId: number,
    total_marks: number,
    position: string,
    obtained_marks: string,
    percentage: string
  ) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/exam/update/${studentId}`, {
        total_marks,
        obtained_marks,
        percentage,
        position,
      });
      toast.success("Updated successfully!");
    //   fetchStudents();
    } catch (err) {
      console.error("Error updating result:", err);
      toast.error("Failed to update result.");
    }
  };

  //   const handleInputChange = (index: number, field: string, value: any) => {
  //     const updatedStudents = [...students];
  //     updatedStudents[index][field] = value;
  //     setStudents(updatedStudents);
  //   };

  const handleInputChange = (index: number, field: string, value: any) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;

    const total = parseFloat(updatedStudents[index].total_marks);
    const obtained = parseFloat(updatedStudents[index].obtained_marks);

    if (!isNaN(total) && !isNaN(obtained) && total > 0) {
      updatedStudents[index].percentage = ((obtained / total) * 100).toFixed(2);
    } else {
      updatedStudents[index].percentage = "";
    }

    setStudents(updatedStudents);
  };

  return (
    <div className="p-6 font-inter text-white">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        Final Results
      </h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-[#C407B9] text-white">
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Student Name</th>
                <th className="px-4 py-2 border">Class</th>
                <th className="px-4 py-2 border">Total Marks</th>
                <th className="px-4 py-2 border">Obtained Marks</th>
                <th className="px-4 py-2 border">Position</th>
                <th className="px-4 py-2 border">Percentage</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className="bg-[hsl(269,77%,19%,90%)] hover:bg-white/15"
                >
                  <td className="px-4 py-2 border">{student.username}</td>
                  <td className="px-4 py-2 border">{student.student_name}</td>
                  <td className="px-4 py-2 border">{student.class}</td>
                  <td className="px-4 py-2 border">
                    <input
                      type="number"
                      className="w-20 px-2 py-1 text-black rounded"
                      value={student.total_marks ?? ""}
                      onChange={(e) =>
                        handleInputChange(index, "total_marks", e.target.value)
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      type="number"
                      className="w-20 px-2 py-1 text-black rounded"
                      value={student.obtained_marks ?? ""}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "obtained_marks",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <select
                      className="text-black rounded px-2 py-1"
                      value={student.position || "Not Attempted"}
                      onChange={(e) =>
                        handleInputChange(index, "position", e.target.value)
                      }
                    >
                      {positionOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      type="number"
                      className="w-20 px-2 py-1 text-black rounded"
                      value={student.percentage ?? ""}
                      onChange={(e) =>
                        handleInputChange(index, "percentage", e.target.value)
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      className="px-3 py-1 bg-[#C407B9] text-white rounded hover:bg-[#9b0693]"
                      onClick={() =>
                        handleUpdate(
                          student.id,
                          student.total_marks,
                          student.position,
                          student.obtained_marks,
                          student.percentage
                        )
                      }
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Page;
