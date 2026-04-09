"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FiEdit, FiTrash } from "react-icons/fi";
import { FaFileAlt, FaFileUpload, FaFileInvoice } from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";
import * as XLSX from "xlsx";

type Question = {
  id?: string;
  questionText: string;
  type: string;
  answer?: string;
  options?: string[];
  correctAnswer?: number;
};

type SubjectiveRow = {
  Question: string;
};

type ObjectiveRow = {
  Question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctoption: number;
};

export default function Home() {
  const [questionType, setQuestionType] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<Partial<Question>>({});
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      const testId = searchParams.get("testId");
      if (testId) {
        try {
          setLoading(true);
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/question/getAllByTestId/${testId}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch questions.");
          }

          const result = await response.json();
          console.log("result", result);

          // Handle `options` safely
          const parsedQuestions = result.map((res: any) => ({
            ...res,
            options: Array.isArray(res.options) ? res.options : [], // Ensure options is always an array
          }));

          console.log("questions", parsedQuestions);
          setQuestions(parsedQuestions);
        } catch (err) {
          console.error(err);
          setError("Error fetching questions. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchQuestions();
  }, [searchParams]);

  const handleAddQuestion = async () => {
    if (!currentQuestion.questionText) return;

    const testParam = searchParams.get("testId");
    if (!testParam) {
      setError("Test ID is required.");
      return;
    }

    const data = {
      testId: testParam,
      questionText: currentQuestion.questionText,
      questionType:
        questionType === "Multiple Choice" ? "objective" : "subjective",
      options:
        questionType === "Multiple Choice"
          ? currentQuestion.options
          : undefined,
      correctAnswer:
        questionType === "Multiple Choice"
          ? currentQuestion.correctAnswer
          : undefined,
    };

    console.log(data);

    try {
      setLoading(true);

      const response = currentQuestion.id
        ? await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/question/update/${currentQuestion.id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            }
          )
        : await fetch(`${process.env.NEXT_PUBLIC_API_URL}/question/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

      if (!response.ok) {
        throw new Error("Failed to create or update question.");
      }

      const result = await response.json();

      // Update local state with the new or updated question
      if (currentQuestion.id) {
        setQuestions((prevQuestions) =>
          prevQuestions.map((q) =>
            q.id === currentQuestion.id ? { ...q, ...result } : q
          )
        );
      } else {
        setQuestions((prevQuestions) => [
          ...prevQuestions,
          {
            id: result.id,
            questionText: result.questionText,
            type: result.questionType,
            options: result.options,
            correctAnswer: result.correctAnswer,
          },
        ]);
      }

      // Reset states
      setShowModal(false);
      setCurrentQuestion({});
      setQuestionType("");
      setError(""); // Clear error messages
    } catch (err) {
      setError("Error creating or updating question. Please try again.");
      console.error(err); // Log the error for debugging
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (index: number) => {
    const questionId = questions[index].id; // Assuming the question has an 'id' field
    const testId = searchParams.get("testId");

    if (questionId && testId) {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/question/delete/${questionId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete question.");
        }

        setQuestions(questions.filter((_, i) => i !== index)); // Remove from local state
      } catch (err) {
        setError("Error deleting question. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEdit = (index: number) => {
    setCurrentQuestion(questions[index]);
    setShowModal(true); // Open modal for editing
    setQuestionType(questions[index].type);
  };

  // const handleFileUpload = async (e, type: any) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   setLoading(true);

  //   try {
  //     const data = await file.arrayBuffer();
  //     const workbook = XLSX.read(data);
  //     const sheet = workbook.Sheets[workbook.SheetNames[0]];
  //     let json = XLSX.utils.sheet_to_json(sheet) as any[];

  //     const testId = searchParams.get("testId");

  //     for (const row of json) {
  //       let payload: any = {
  //         testId,
  //         questionType: type,
  //       };

  //       if (type === "subjective") {
  //         payload.questionText = row?.Question;
  //       }

  //       if (type === "objective") {
  //         payload.questionText = row.Question;
  //         payload.options = [
  //           row.option1,
  //           row.option2,
  //           row.option3,
  //           row.option4,
  //         ];
  //         payload.correctAnswer = Number(row.correctoption);
  //       }

  //       await fetch(`${process.env.NEXT_PUBLIC_API_URL}/question/create`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(payload),
  //       });
  //     }

  //     alert("Questions uploaded successfully!");
  //     window.location.reload(); // refresh UI after upload
  //   } catch (error) {
  //     console.error(error);
  //     alert("Invalid file or format.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleFileUpload = async (e, type: "subjective" | "objective") => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      let json = XLSX.utils.sheet_to_json(sheet) as any[];

      if (!json || json.length === 0) {
        alert("File is empty!");
        return;
      }

      // -------------------------
      // REQUIRED COLUMN VALIDATION
      // -------------------------
      const firstRow = json[0];

      // Subjective requires: Question
      if (type === "subjective") {
        const required = ["Question"];

        const missing = required.filter((col) => !(col in firstRow));

        if (missing.length > 0) {
          alert(
            "❌ Invalid Subjective File!\nMissing columns: " +
              missing.join(", ")
          );
          return;
        }
      }

      // Objective requires: Question, option1-4, correctoption
      if (type === "objective") {
        const required = [
          "Question",
          "option1",
          "option2",
          "option3",
          "option4",
          "correctoption",
        ];

        const missing = required.filter((col) => !(col in firstRow));

        if (missing.length > 0) {
          alert(
            "❌ Invalid Objective File!\nMissing columns: " + missing.join(", ")
          );
          return;
        }
      }

      // -------------------------
      // PROCESS ROWS
      // -------------------------
      const testId = searchParams.get("testId");

      for (const row of json) {
        let payload: any = {
          testId,
          questionType: type,
        };

        if (type === "subjective") {
          payload.questionText = row.Question;
        }

        if (type === "objective") {
          payload.questionText = row.Question;
          payload.options = [
            row.option1,
            row.option2,
            row.option3,
            row.option4,
          ];
          payload.correctAnswer = Number(row.correctoption);
        }

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/question/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      alert("Questions uploaded successfully!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Invalid file or format.");
    } finally {
      setLoading(false);
    }
  };

  const filteredQuestions = questionType
    ? questions.filter(
        (q) =>
          (questionType === "Paragraph" && q.type === "subjective") ||
          (questionType === "Multiple Choice" && q.type === "objective")
      )
    : questions;

  return (
    <div className="min-h-screen py-6 w-full font-inter flex flex-col items-center">
      <div className="flex w-[90%] justify-start items-center text-left">
        <h1 className="text-white text-3xl font-bold mb-4">
          IAS Exam System...
        </h1>
      </div>

      {/* Toolbar */}
      <div className=" bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] text-white w-[90%] rounded-lg flex justify-between items-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-between p-4 md:gap-10 gap-4 w-full rounded-lg bg-[hsl(269,77%,19%,90%)]">
          <h1 className="text-lg flex items-center justify-center text-center md:text-left">
            IAS Exam System
          </h1>
          <div className="flex flex-wrap items-center  gap-4">
            <div className=" bg-gradient-to-r  from-[#2E98FC] to-[#C407B9] p-[1.5px] text-white  rounded-lg flex justify-between items-center">
              <select
                className="bg-[hsl(269,77%,19%,90%)] outline-none text-white px-4 py-2 rounded-lg"
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
              >
                <option value="" disabled>
                  Question Type
                </option>
                <option value="Paragraph">Paragraph</option>
                <option value="Multiple Choice">Multiple Choice</option>
              </select>
            </div>
            <button
              disabled={!questionType}
              onClick={() => setShowModal(true)}
              className={`${
                questionType
                  ? "bg-[#C407B9] hover:bg-[#F407B9]"
                  : "bg-gray-500 cursor-not-allowed"
              } text-white px-4 py-2 rounded-lg`}
            >
              Add Question
            </button>
            <input
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              className="hidden"
              id="subjectiveUpload"
              onChange={(e) => handleFileUpload(e, "subjective")}
            />
            <label
              htmlFor="subjectiveUpload"
              className="cursor-pointer bg-[#2E98FC] text-white px-4 py-2 rounded-lg"
            >
              Upload Subjective
            </label>

            <input
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              className="hidden"
              id="objectiveUpload"
              onChange={(e) => handleFileUpload(e, "objective")}
            />
            <label
              htmlFor="objectiveUpload"
              className="cursor-pointer bg-[#C407B9] text-white px-4 py-2 rounded-lg"
            >
              Upload Objective
            </label>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r mt-4 from-[#2E98FC] to-[#C407B9] p-[1.5px] text-white w-[90%] rounded-lg flex justify-between items-center">
        <div className="flex flex-col justify-center p-4 gap-4 w-full rounded-lg bg-[hsl(269,77%,19%,90%)]">
          {loading ? (
            <div className="text-center text-white">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : filteredQuestions.length === 0 ? (
            <div className="flex flex-col w-full justify-center items-center p-10 gap-4">
              <FaFileAlt className="size-24 text-[#8A68AF]" />
              <div className="flex gap-5 text-[#B69ED1]">
                <RiFileEditFill className="size-9" />
                <FaFileUpload className="size-9" />
                <FaFileInvoice className="size-9" />
              </div>
              <div className="flex flex-col text-center justify-center">
                <h3 className="font-bold text-lg">No Questions Created yet</h3>
                <p className="text-sm w-full md:w-2/3 self-center">
                  All your questions are stored in the question bank. If you
                  edit a question somewhere, it will be updated everywhere.
                </p>
              </div>
            </div>
          ) : (
            filteredQuestions.map((question, index) => (
              <div
                key={index}
                className="rounded-lg text-white flex justify-between items-center"
              >
                <div className="flex-1">
                  <h3 className="font-bold">
                    {index + 1}. {question.questionText}
                  </h3>

                  {question.options && (
                    <ul className="list-disc ml-6 mt-2">
                      {question.options.map((option, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <input
                            type="radio"
                            disabled
                            name={`question-${index}`} // Ensure unique name for each question
                            value={idx}
                            className="form-radio h-4 w-4 text-green-400"
                            onChange={(e) => {
                              const updatedCorrectAnswer = idx;
                              setCurrentQuestion({
                                ...currentQuestion,
                                correctAnswer: updatedCorrectAnswer,
                              });
                            }}
                          />
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    className="text-blue-400 mt-2"
                    onClick={() =>
                      setShowAnswers((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                  >
                    {showAnswers[index] ? "Hide Answer" : "Show Answer"}
                  </button>
                  {showAnswers[index] && (
                    <p className="text-green-400 mt-2">
                      {question.type === "Paragraph"
                        ? ""
                        : question.options?.[question.correctAnswer || 0]}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(index)}>
                    <FiEdit className="text-blue-500 text-xl" />
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <FiTrash className="text-red-500 text-xl" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}

      {showModal && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center  justify-center z-50 p-6">
          <div className=" p-[1.5px] w-full max-w-3xl rounded-lg">
            <div className="bg-[hsl(269,77%,19%,98%)] text-white p-6   relative">
              {/* Title */}
              <div
                className="w-full bg-transparent border-2 rounded-full outline-none text-white py-1 z-50"
                style={{
                  borderImage:
                    "linear-gradient(to right, #007BFF, rgba(196,7,185,1)) 1",
                  borderImageSlice: 1,
                }}
              >
                <h1 className="p-4 text-3xl font-bold text-center">
                  IAS Exam System
                </h1>
              </div>
              <h2 className="text-xl font-bold my-4 mt-8">Question</h2>
              <input
                type="text"
                className="w-full  bg-[hsl(269,77%,19%)] text-white p-2 outline-none rounded-lg"
                placeholder="Enter Your Question"
                value={currentQuestion.questionText || ""}
                onChange={(e) =>
                  setCurrentQuestion({
                    ...currentQuestion,
                    questionText: e.target.value,
                  })
                }
              />
              <div className="my-2">
                <hr
                  style={{
                    height: "2px",
                    background:
                      "linear-gradient(to right, #007BFF, rgba(196,7,185,1))",
                    border: " none",
                  }}
                />
              </div>

              {questionType === "Multiple Choice" && (
                <>
                  {["Option 1", "Option 2", "Option 3", "Option 4"].map(
                    (label, idx) => (
                      <div key={idx} className="flex items-center gap-2 my-2">
                        <input
                          type="radio"
                          name="correctAnswer"
                          value={idx}
                          className="form-radio h-4 w-4 text-[#C407B9]"
                          checked={currentQuestion.correctAnswer === idx}
                          onChange={() => {
                            setCurrentQuestion({
                              ...currentQuestion,
                              correctAnswer: idx,
                            });
                          }}
                        />
                        <input
                          type="text"
                          placeholder={label}
                          className="flex-grow bg-[hsl(269,77%,19%)] text-white p-2 outline-none focus:outline-none"
                          onChange={(e) => {
                            const options = currentQuestion.options || [];
                            options[idx] = e.target.value;
                            setCurrentQuestion({ ...currentQuestion, options });
                          }}
                        />
                      </div>
                    )
                  )}
                  <div className="my-2">
                    <hr
                      style={{
                        height: "2px",
                        background:
                          "linear-gradient(to right, #007BFF, rgba(196,7,185,1))",
                        border: "none",
                      }}
                    />
                  </div>
                </>
              )}
              {error && <div className="text-red-500 mt-2">{error}</div>}
              <div className="flex justify-end gap-4 mt-6">
                <div className=" bg-gradient-to-r  from-[#2E98FC] to-[#C407B9] p-[1.5px] text-white  rounded-lg flex justify-between items-center">
                  <div className="rounded-lg bg-[hsl(269,77%,19%,90%)]">
                    <button
                      onClick={() => setShowModal(false)}
                      className=" text-white px-4 py-2 rounded-lg "
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleAddQuestion}
                  className={`${
                    loading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-[#C407B9] hover:bg-[#F407B9]"
                  } text-white px-4 py-2 rounded-lg`}
                  disabled={loading}
                >
                  {currentQuestion.id ? "Update Question" : "Add Question"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
