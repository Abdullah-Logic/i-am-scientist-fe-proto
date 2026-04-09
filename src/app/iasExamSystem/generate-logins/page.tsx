// // import React from 'react';

// // const Page: React.FC = () => {
// //     return (
// //         <div className="p-6 font-inter text-white ">
// //             <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
// //                 Generate Credentials
// //             </h1>
// //             <div className="overflow-x-auto">
// //                 <table className="min-w-full ">
// //                     <thead>
// //                         <tr className="bg-[#C407B9] ">
// //                             <th className="px-4 py-2 border">Student Name</th>
// //                             <th className="px-4 py-2 border">Student Class</th>
// //                             <th className="px-4 py-2 border">Student Email</th>
// //                             <th className="px-4 py-2 border">Parent Name</th>
// //                             <th className="px-4 py-2 border">Phone Number</th>
// //                             <th className="px-4 py-2 border">Action</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {Array.from({ length: 5 }).map((_, index) => (
// //                             <tr key={index} className="bg-[hsl(269,77%,19%,90%)] text-white hover:bg-white/15">
// //                                 <td className="px-4 py-2 border ">John Doe</td>
// //                                 <td className="px-4 py-2 border">10th Grade</td>
// //                                 <td className="px-4 py-2 border">johndoe@example.com</td>
// //                                 <td className="px-4 py-2 border">Jane Doe</td>
// //                                 <td className="px-4 py-2 border">123-456-7890</td>
// //                                 <td className="px-4 py-2 border text-center">
// //                                     <button className="px-3 py-1 bg-[#C407B9] text-white rounded hover:bg-[#9b0693]">
// //                                         Generate
// //                                     </button>
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Page;


// import React from 'react';

// const Page: React.FC = () => {
//     return (
//         <div className="p-6 font-inter text-white">
//             <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
//                 Generate Credentials
//             </h1>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full border-collapse border border-gray-300">
//                     <thead>
//                         <tr className="bg-[#C407B9] text-white">
//                             <th className="px-4 py-2 border">Student Name</th>
//                             <th className="px-4 py-2 border">Student Class</th>
//                             <th className="px-4 py-2 border">Student Email</th>
//                             <th className="px-4 py-2 border">Parent Name</th>
//                             <th className="px-4 py-2 border">Phone Number</th>
//                             <th className="px-4 py-2 border">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Array.from({ length: 5 }).map((_, index) => (
//                             <tr
//                                 key={index}
//                                 className="bg-[hsl(269,77%,19%,90%)] text-white hover:bg-white/15"
//                             >
//                                 <td className="px-4 py-2 border">John Doe</td>
//                                 <td className="px-4 py-2 border">10th Grade</td>
//                                 <td className="px-4 py-2 border">
//                                     johndoe@example.com
//                                 </td>
//                                 <td className="px-4 py-2 border">Jane Doe</td>
//                                 <td className="px-4 py-2 border">123-456-7890</td>
//                                 <td className="px-4 py-2 border text-center">
//                                     <button className="px-3 py-1 bg-[#C407B9] text-white rounded hover:bg-[#9b0693]"
//                                         aria-label={`Generate credentials for row ${index + 1}`}
//                                     >
//                                         Generate
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Page;


"use client";


import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Page: React.FC = () => {
    const [students, setStudents] = useState<any[]>([]); // Store student data
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    // Fetch student data
    const fetchStudents = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/exam/getAllContests`);
            setStudents(response.data); // Assuming the API returns an array of students
        } catch (err) {
            console.error("Error fetching students:", err);
            setError("Failed to fetch students. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    // Generate login credentials
    const generateLogin = async (contestId: string) => {
        console.log("Hello",contestId)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/exam/generateLogin`, {
                contestId,
            });
            // toast.success(`Credentials generated successfully`);
            // fetchStudents();
        } catch (err) {
            console.error("Error generating login:", err);
            toast.error("Failed to generate credentials. Please try again.");
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="p-6 font-inter text-white">
            <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Generate Credentials</h1>
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-[#C407B9] text-white">
                                <th className="px-4 py-2 border">Username</th>
                                <th className="px-4 py-2 border">Password</th>
                                <th className="px-4 py-2 border">Student Name</th>
                                <th className="px-4 py-2 border">Class</th>
                                <th className="px-4 py-2 border">Email</th>
                                <th className="px-4 py-2 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr
                                    key={student.contestId}
                                    className="bg-[hsl(269,77%,19%,90%)] text-white hover:bg-white/15 text-sm"
                                >
                                    <td className="px-4 py-2 border">{student.username}</td>
                                    <td className="px-4 py-2 border">{student.password}</td>
                                    <td className="px-4 py-2 border">{student.student_name}</td>
                                    <td className="px-4 py-2 border">{student.class}</td>
                                    <td className="px-4 py-2 border">{student.email}</td>
                                    <td className="px-4 py-2 border text-center">
                                        <button
                                            className="px-3 py-1 bg-[#C407B9] text-white rounded hover:bg-[#9b0693]"
                                            onClick={() => generateLogin(student.contestId)}
                                            aria-label={`Generate credentials for ${student.student_name}`}
                                        >
                                            Generate
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
