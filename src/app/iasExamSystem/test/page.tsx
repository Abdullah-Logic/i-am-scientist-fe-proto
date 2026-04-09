"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BiPlus } from "react-icons/bi";
import { FaFileAlt } from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";
import { FaFileUpload } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import Link from "next/link";

interface TestData {
  id: number;
  date: string;
  time: string;
  classLevel: string;
  testName: string;
}

const Page = () => {
  const [tableData, setTableData] = useState<TestData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(12);
  const [testData, setTestData] = useState<TestData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Calculate the index range for slicing
  const indexOfLastTest = currentPage * rowsPerPage;
  const indexOfFirstTest = indexOfLastTest - rowsPerPage;
  const currentTests = testData.slice(indexOfFirstTest, indexOfLastTest);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/test/getAll`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: TestData[] = await response.json();
        setTableData(data);
        setTestData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const displayedData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleEdit = (index: number) => {
    const selectedTest = testData[index];
    router.push(
      `/iasExamSystem/test/create-test?test=${encodeURIComponent(
        JSON.stringify(selectedTest)
      )}`
    );
  };

  const handleDelete = async (index: number) => {
    const selectedTest = testData[index];

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/test/delete/${selectedTest.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete test");
      }

      const updatedData = testData.filter(
        (test) => test.id !== selectedTest.id
      );
      setTestData(updatedData);
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting the test.");
    }
  };

  // Function to handle viewing the questions related to the selected test
  const handleViewQuestions = (index: number) => {
    const selectedTest = testData[index];
    // Redirect to the question page for the selected test
    router.push(`/iasExamSystem/test/question?testId=${selectedTest.id}`);
  };

  return (
    <div className="w-full m-4 md:m-6 lg:m-10 overflow-hidden font-inter">
      <div className="flex flex-col justify-start gap-5 text-white">
        <h1 className="text-3xl font-bold text-center md:text-left">
          IAS Exam System Test
        </h1>

        <div className="w-full bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] rounded-xl">
          <div className="flex flex-col md:flex-row justify-center md:justify-between p-4 md:gap-10 gap-4 rounded-xl bg-[hsl(269,77%,19%,90%)]">
            <h2 className="text-lg flex items-center justify-center text-center md:text-left">
              IAS Exam System
            </h2>
            <div className="flex justify-center gap-7">
              <Link href="/iasExamSystem/test/create-test">
                <button className="flex gap-2 items-center bg-[#C407B9] hover:bg-[#F407B9] px-4 py-2 rounded-xl">
                  <BiPlus className="size-5 bg-white rounded-full text-[#C407B9]" />{" "}
                  Create New Test
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] rounded-xl">
          <div className="flex justify-between p-4 gap-10 rounded-xl bg-[hsl(269,77%,19%,90%)]">
            {testData.length === 0 ? (
              <div className="flex flex-col w-full justify-center items-center gap-4">
                <FaFileAlt className="size-24 text-[#8A68AF]" />
                <div className="flex gap-5 text-[#B69ED1]">
                  <RiFileEditFill className="size-9" />
                  <FaFileUpload className="size-9" />
                  <FaFileInvoice className="size-9" />
                </div>
                <div className="flex flex-col text-center justify-center">
                  <h3 className="font-bold text-lg">No Tests Created yet</h3>
                  <p className="text-sm w-full md:w-2/3 self-center">
                    All your tests are stored in the IAS Exam System System. If
                    you edit a test somewhere, it will be updated everywhere.
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full">
                <div className="flex gap-3">
                  Show{" "}
                  <select
                    className="border border-[#1D013C] bg-gray-100 text-[#1c032f]"
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                  >
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </select>{" "}
                  entries
                </div>
                <div className="overflow-x-auto w-full iasScroll">
                  <table className="table-fixed w-full border-collapse my-3">
                    <thead>
                      <tr className="bg-[#C407B9]">
                        <th className="w-20 border border-slate-400 py-3 px-2">
                          ID
                        </th>
                        <th className="w-52 border border-slate-400 py-3 px-2">
                          Test Name
                        </th>
                        <th className="w-28 border border-slate-400 py-3 px-2">
                          Class Level
                        </th>
                        <th className="w-32 border border-slate-400 py-3 px-2">
                          Test Date
                        </th>
                        <th className="w-32 border border-slate-400 py-3 px-2">
                          Test Time
                        </th>
                        <th className="w-40 border border-slate-400 py-3 px-2">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentTests.map((test, index) => (
                        <tr key={index} className="py-3 hover:bg-white/15">
                          <td className="text-center border border-slate-400 p-2 py-3 before:content-['STD-']">
                            {indexOfFirstTest + index + 1}
                          </td>
                          <td className="text-center border border-slate-400 p-2 py-3">
                            {test.testName}
                          </td>
                          <td className="text-center border border-slate-400 p-2 py-3">
                            {test.classLevel}
                          </td>
                          <td className="text-center border border-slate-400 p-2 py-3">
                            {test.date}
                          </td>
                          <td className="text-center border border-slate-400 p-2 py-3">
                            {test.time}
                          </td>
                          <td className="flex items-center justify-center border border-slate-400 p-2 py-3">
                            <div className="flex gap-5">
                              <FaClipboardList
                                className="size-6 hover:text-[#C407B9] cursor-pointer"
                                onClick={() => handleViewQuestions(index)}
                              />
                              <FaEdit
                                className="size-6 hover:text-[#C407B9] cursor-pointer"
                                onClick={() => handleEdit(index)}
                              />
                              <MdDelete
                                className="size-6 hover:text-[#C407B9] cursor-pointer"
                                onClick={() => handleDelete(index)}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center my-4">
                  <button
                    className="px-3 py-1 bg-[#C407B9] text-white rounded hover:bg-[#9b0693]"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Prev
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    className="px-3 py-1 bg-[#C407B9] text-white rounded hover:bg-[#9b0693]"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
