"use client";
import Link from "next/link";
import Objective from "@/app/components/Objective";
import Subjective from "@/app/components/Subjective";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<Array<any>>([]);
  const [displayQuestion, setDisplayQuestion] = useState<Array<any>>([]);
  const [start, setStart] = useState<Boolean>(false);
  const [objective, setObjective] = useState<Boolean>(false);
  const [subjective, setSubjective] = useState<Boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [isFinal, setIsFinal] = useState<Boolean>(false);
  const [answers, setAnswers] = useState<Array<any>>([]);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);

  const getQuestionsByClassName = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/test/getTestByClassLevel/${localStorage.getItem("classLevel")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch questions: ${response.status} ${response.statusText}`
        );
      }

      const { data } = await response.json();
      console.log("Fetched Questions:", data);


      if (data?.length > 0) {
        const questionsArray = data[0]?.Questions || [];

        // Parse options for each question in the array
        const updatedQuestions = questionsArray.map((question: any) => {
          if (question?.options) {
            try {
              return {
                ...question,
                options: JSON.parse(question.options),
              };
            } catch (error) {
              console.error(
                "Error parsing options for question:",
                question,
                error
              );
              return question; // Return the original question if parsing fails
            }
          }
          return question; // Return the question as is if no options property
        });

        setQuestions(updatedQuestions);
        setTotalQuestions(updatedQuestions.length);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    getQuestionsByClassName();
  }, []);

  const handleStartTest = () => {
    try {
      setStart(true);
      displayQuestion.push(questions[index]);
      if (questions[index].questionType === "objective") {
        setObjective(true);
        console.log("objective");
      } else {
        setSubjective(true);
        console.log("subjective");
      }
      setIndex(index + 1);
    } catch (error) {}
  };

  const handleNext = () => {
    console.log("count", index);
    displayQuestion.pop();
    if (questions.length > index + 1) {
      displayQuestion.push(questions[index]);
      if (questions[index].questionType === "objective") {
        setSubjective(false);
        setObjective(true);
        console.log("objective");
      } else {
        setObjective(false);
        setSubjective(true);
        console.log("subjective");
      }
    } else if (questions.length === index + 1) {
      displayQuestion.push(questions[index]);
      if (questions[index].questionType === "objective") {
        setSubjective(false);
        setObjective(true);
        console.log("objective");
      } else {
        setObjective(false);
        setSubjective(true);
        console.log("subjective");
      }
      setIsFinal(true);
    }
    setIndex(index + 1);
  };

  const handleSubmitMain = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/exam/update-answer`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answer: questions, username: "daniyal" }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Response:", data);
      router.push("/exam/thankyou");
    } catch (error: any) {
      console.error("Failed to update answer:", error.message);
    }
  };

  if (objective) {
    return (
      <Objective
      index={index}
        handleSubmitMain={handleSubmitMain}
        questions={displayQuestion}
        handleNext={handleNext}
        isFinal={isFinal}
        totalQuestions={totalQuestions}
      />
    );
  } else if (subjective) {
    return (
      <Subjective
      index={index}
        handleSubmitMain={handleSubmitMain}
        questions={displayQuestion}
        handleNext={handleNext}
        isFinal={isFinal}
        totalQuestions={totalQuestions}
      />
    );
  } else {
    return (
      <div className="min-h-screen bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] flex items-center justify-center">
        <div className="w-11/12 max-w-2xl bg-black bg-opacity-20 p-[2px] rounded-lg">
          <div className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] p-[1.5px] rounded-lg">
            <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] p-6 md:p-8 rounded-lg shadow-2xl">
              <div className="flex flex-col items-center">
                <img
                  src="/navbar/logo.png" // Replace with your logo file path
                  alt="Logo"
                  className="h-16 md:h-20"
                />
                <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-4"></div>
                <p className="text-xl font-bold text-center text-blue-400 px-4 md:px-8 mb-4 md:mb-8">
                  Sample: Introduction to OnlineExamMaker Quiz
                </p>
              </div>
              <div className="text-white text-center  px-4 md:px-14">
                <p className="text-lg font-semibold mb-4 md:mb-8">
                  Introduction
                </p>
                <div className="font-semibold space-y-2 md:space-y-4">
                  <div className="flex justify-between px-2 md:px-6">
                    <span className="font-bold">Taken Times:</span>
                    <span>Unlimited times</span>
                  </div>
                  <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 mx-4 "></div>

                  <div className="flex justify-between px-2 md:px-6">
                    <span className="font-bold">Time Limit:</span>
                    <span>30 Minutes</span>
                  </div>
                  <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 mx-4 "></div>

                  <div className="flex justify-between px-2 md:px-6">
                    <span className="font-bold">Pass Score:</span>
                    <span>60%</span>
                  </div>
                  <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 mx-4"></div>

                  <div className="flex justify-between px-2 md:px-6">
                    <span className="font-bold">Test Rule:</span>
                    <span>Allowed to modify the answer</span>
                  </div>
                  <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 mx-4"></div>
                </div>
                <p className="text-left font-semibold px-2 md:px-6 mt-6">
                  If the exam aborts, please exit and follow the same steps to
                  continue the exam.
                </p>
                <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-4 mx-4"></div>
              </div>
              {/* <Link href="/subjective"> */}
              <div
                onClick={handleStartTest}
                className="flex justify-center mt-6 md:mt-8"
              >
                <button className="bg-[rgba(196,7,185,1)] hover:bg-pink-600 text-white font-bold py-2 px-6 md:px-10 rounded transition-all">
                  Enter the test
                </button>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
