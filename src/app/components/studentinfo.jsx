"use client";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import InputMask from "react-input-mask";

const Table = ({ studentData, onDelete }) => {
  const router = useRouter();
  const [data, setData] = useState(studentData);
  // const [showEditModal, setShowEditModal] = useState(false); // For edit modal
  const [showDeleteModal, setShowDeleteModal] = useState(false); // For delete modal
  const [currentIndex, setCurrentIndex] = useState(null); // Index of the current record being edited or deleted
  const [formData, setFormData] = useState({}); // Data for editing

  useEffect(() => {
    console.log("Student Data Updated:", data);
    setData(studentData);
  }, [studentData]);

  // Open Edit Modal
  const openEditModal = (index) => {
    setCurrentIndex(index);
    setFormData(data[index]);
    setShowEditModal(true);
  };

  // Save Edited Record
  const saveEdit = () => {
    const updatedData = [...data];
    updatedData[currentIndex] = formData;
    setData(updatedData);
    setShowEditModal(false);
    setCurrentIndex(null);
  };

  // Cancel Edit
  const cancelEdit = () => {
    setShowEditModal(false);
    setFormData({});
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Open Delete Modal
  const openDeleteModal = (index) => {
    setCurrentIndex(index);
    setShowDeleteModal(true);
  };

  // Delete Record
  const handleDelete = () => {
    const updatedData = data.filter((_, index) => index !== currentIndex);
    setData(updatedData);
    onDelete(currentIndex);
    setShowDeleteModal(false);
    setCurrentIndex(null);
  };

  const handleNext = async (type) => {
    try {
      // Assuming data is defined somewhere, e.g., in useState
      if (!data || data.length === 0) {
        throw new Error("Please add at least one student.");
      }

      const newArray = [];

      data.forEach((obj) => {
        const newobj = {
          student_name: obj.studentName,
          parent_name: obj.fatherName,
          class: obj.class,
          dob: obj.dateOfBirth,
          gender: obj.gender,
          level: obj.level,
          userId: localStorage.getItem("IASID"),
        };

        newArray.push(newobj);
      });

      localStorage.setItem("data", JSON.stringify(newArray));

      const id = localStorage.getItem("IASID");
      const role = localStorage.getItem("IASROLE");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contest/multiple-student`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: newArray }),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to save subscription");
      }

      const result = await response.json();

      // Show success toast
      toast.success("Next step successfully processed!");

      router.push("/user/dashboard");
    } catch (error) {
      // Handle error and show error toast
      toast.error(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="overflow-x-auto text-white shadow-lg font-popins border border-[#452178]">
        {/* <ToastContainer/> */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#31185F] text-base text-[#CFA8F5]">
              <th className="p-3">SR#</th>
              <th className="p-3">Student Name</th>
              <th className="p-3">Father Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Date of Birth</th>
              <th className="p-3">Gender</th>
              {/* <th className="p-3">Contest</th> */}
              {/* <th className="p-3">Level</th> */}
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr
                key={index}
                className="text-center border-b border-gray-300 font-popins"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{student.studentName}</td>
                <td className="p-3">{student.fatherName}</td>
                <td className="p-3">{student.class}</td>
                <td className="p-3">{student.dateOfBirth}</td>
                <td className="p-3">{student.gender}</td>

                <td className="p-3 flex justify-center space-x-2">
                  <button
                    className="text-red-400 hover:text-red-500"
                    onClick={() => openDeleteModal(index)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this record?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                onClick={() => setShowDeleteModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end mt-4 gap-4 md:mt-8">
        <button
          onClick={() => handleNext("online")}
          className="bg-[#C407B9] hover:bg-[#d259cc] text-white font-normal py-2 px-4 rounded-md"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Table;
