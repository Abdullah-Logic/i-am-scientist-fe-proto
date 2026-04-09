"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Page: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
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

  const handleCheckboxChange = (id: number) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 50) {
          toast.warning("You can select a maximum of 50 students.");
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  const handleExport = async () => {
    if (selectedIds.length === 0) {
      toast.warning("Please select at least one student.");
      return;
    }

    try {
        setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/exam/export-exam-data`,
        { ids: selectedIds },
        { responseType: "blob" } // Important for file download
      );

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "students_export.xlsx";
      link.click();
      window.URL.revokeObjectURL(url);

      toast.success("Exported successfully!");
      setSelectedIds([]); // Clear selected IDs after export
      fetchStudents(); // Refresh the student list
      setLoading(false);
    } catch (err) {
      console.error("Export failed:", err);
      toast.error("Failed to export students.");
    }
  };

  return (
    <div className="p-6 font-inter text-white w-full">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          Exam Exports
        </h1>

        <div className="mb-4 text-right">
          <button
            onClick={handleExport}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
          >
            Export Selected ({selectedIds.length}/50)
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-[#C407B9] text-white">
                <th className="px-4 py-2 border">
                  <input
                    type="checkbox"
                    checked={
                      students.length > 0 &&
                      selectedIds.length === students.length
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        const allCompletedIds = students
                          .filter(
                            (student) =>
                              student.completed && !student.exam_exported
                          ) // First filter
                          .slice(0, 50) // Then take first 50 from filtered list
                          .map((student) => student.id);

                        setSelectedIds(allCompletedIds);
                      } else {
                        setSelectedIds([]);
                      }
                    }}
                    disabled={students.length === 0} // Disable if no students
                  />
                </th>
                <th className="px-4 py-2 border">Student Name</th>
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Class</th>
                <th className="px-4 py-2 border">Completed Exam</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="bg-[hsl(269,77%,19%,90%)] hover:bg-white/15"
                >
                  <td className="px-4 py-2 border text-center">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(student.id)}
                      onChange={() => handleCheckboxChange(student.id)}
                      disabled={!student.completed || student.exam_exported} // Disable checkbox if not completed
                    />
                  </td>
                  <td className="px-4 py-2 border">{student.student_name}</td>
                  <td className="px-4 py-2 border">{student.username}</td>
                  <td className="px-4 py-2 border">{student.class}</td>
                  <td className="px-4 py-2 border text-center">
                    {student.completed ? "Yes" : "No"}
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
