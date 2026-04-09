"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [actionType, setActionType] = useState(""); // "delete" or "approve"
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contest/getAllContests`);
                const data = await response.json();
                setStudents(data.contests);
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };

        fetchStudents();
    }, []);

    const confirmAction = (id, type) => {
        setSelectedId(id);
        setActionType(type);
        setShowModal(true);
    };

    const handleConfirmedAction = async () => {
        try {
            if (actionType === "delete") {
                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contest/deleteContest/${selectedId}`, {
                    method: "DELETE",
                });
                setStudents((prev) => prev.filter((student) => student.id !== selectedId));
            } else if (actionType === "approve") {
                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contest/updateContest/${selectedId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ status: "Approved" }),
                });
                setStudents((prev:any) =>
                    prev.map((student:any) =>
                        student.id === selectedId ? { ...student, status: "Approved" } : student
                    )
                );
            }
        } catch (error) {
            console.error(`Error performing ${actionType}:`, error);
        } finally {
            setShowModal(false);
            setSelectedId(null);
            setActionType("");
        }
    };

    // Filter students by email
    const filteredStudents = students.filter((student) =>
        student?.User?.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full m-4 md:m-6 lg:m-10">
            <input
                type="text"
                placeholder="Search by email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full max-w-md"
            />

            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-[#C407B9] text-white">
                        <th className="px-4 py-2 border">SR#</th>
                        <th className="px-4 py-2 border">Student Name</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Class</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student, index) => (
                        <tr
                            key={student.id}
                            className="bg-[hsl(269,77%,19%,90%)] text-white hover:bg-white/15 text-sm"
                        >
                            <td className="px-4 py-2 border">{index + 1}</td>
                            <td className="px-4 py-2 border">{student.student_name}</td>
                            <td className="px-4 py-2 border">{student.User.email}</td>
                            <td className="px-4 py-2 border">{student.class}</td>
                            <td className="px-4 py-2 border">{student.status}</td>
                            <td className="px-4 py-2 border">
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={() => confirmAction(student.id, "delete")}
                                >
                                    Delete
                                </button>
                                <button
                                    className="bg-green-500 text-white px-2 py-1 rounded"
                                    onClick={() => confirmAction(student.id, "approve")}
                                >
                                    Approve
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-md text-black w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">
                            Confirm {actionType === "delete" ? "Deletion" : "Approval"}
                        </h2>
                        <p className="mb-6">
                            Are you sure you want to {actionType} this contest?
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-gray-300 text-black px-4 py-2 rounded"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className={`px-4 py-2 rounded text-white ${actionType === "delete" ? "bg-red-500" : "bg-green-500"}`}
                                onClick={handleConfirmedAction}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
