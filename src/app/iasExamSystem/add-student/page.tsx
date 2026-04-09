// components/BulkStudentUploader.js
"use client";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

export default function BulkStudentUploader() {
  const [schools, setSchools] = useState([]);
  const [selectedSchoolId, setSelectedSchoolId] = useState("");
  const [students, setStudents] = useState([]);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/user/getAllDistinctEmails`)
      .then((res) => setSchools(res.data));
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const rawJson = XLSX.utils.sheet_to_json(worksheet);

    const allowedKeys = [
      "Student Name",
      "Father Name",
      "Class",
      "Date of Birth",
      "Gender",
      "Campus",
    ];

    const cleanedStudents = rawJson.map((row) => {
      const cleanedRow = {};

      allowedKeys.forEach((key) => {
        let value = row[key] ?? "";

        if (key === "Date of Birth") {
          const date = new Date(value);
          if (!isNaN(date)) {
            const yyyy = date.getFullYear();
            const mm = String(date.getMonth() + 1).padStart(2, "0");
            const dd = String(date.getDate()).padStart(2, "0");
            value = `${yyyy}-${mm}-${dd}`;
          } else {
            value = "";
          }
        }

        cleanedRow[key] = value;
      });

      return cleanedRow;
    });

    setStudents(cleanedStudents);
  };

  const handleFieldChange = (index, key, value) => {
    const updated = [...students];
    updated[index][key] =
      key === "Date of Birth"
        ? new Date(value).toISOString().split("T")[0]
        : value;
    setStudents(updated);
  };

  const handleSubmit = async () => {
    if (!selectedSchoolId || students.length === 0) {
      return alert("Please select school and upload student file");
    }

    console.log("Selected School ID:", selectedSchoolId, "Students:", students);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contest/registeredContestInBulk`, {
        email: selectedSchoolId,
        data : students,
      });
      alert("Students uploaded successfully");
      setStudents([]);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="w-full mx-auto p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Bulk Upload Students</h2>

      <label className="block mb-2">Select Registered Organization Email:</label>
      <select
        className="border w-full mb-4 p-2 text-black"
        onChange={(e) => setSelectedSchoolId(e.target.value)}
        value={selectedSchoolId}
      >
        <option value="">-- Select School --</option>
        {schools.map((email) => (
          <option key={email} value={email}>
            {email}
          </option>
        ))}
      </select>

      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileUpload}
        className="mb-4"
      />
      {fileName && <p className="mb-4">📄 {fileName} uploaded</p>}

      {students.length > 0 && (
        <>
          <h3 className="font-semibold mb-2">
            Preview ({students.length} students):
          </h3>
          <div className="overflow-auto max-h-96 border rounded mb-4">
            <table className="min-w-full text-sm text-black bg-white">
              <thead className="bg-gray-200 sticky top-0 z-10">
                <tr>
                  <th className="px-2 py-1 border">SR#</th>
                  {Object.keys(students[0]).map((key) => (
                    <th key={key} className="px-2 py-1 border">
                      {key === "Campus" ? "Campus (if any)" : key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td className="px-2 py-1 border text-center font-medium">
                      {index + 1}
                    </td>
                    {Object.entries(student).map(([key, value]) => (
                      <td key={key} className="px-2 py-1 border">
                        <input
                          className="w-full px-1 py-0.5 border rounded text-sm"
                          value={value}
                          type={key === "Date of Birth" ? "date" : "text"}
                          onChange={(e) =>
                            handleFieldChange(index, key, e.target.value)
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        disabled={!selectedSchoolId || students.length === 0}
      >
        Add Students
      </button>
    </div>
  );
}
