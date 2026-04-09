"use client";
import React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import the router hook
import { LuAlarmClock } from "react-icons/lu";

interface Question {
  id: number;
  questionText: string;
}

const QuizPage: React.FC = () => {
  const router = useRouter(); // Initialize the router
  const questions: Question[] = [
    {
      id: 1,
      questionText: "Describe the primary features of IAS-ExamSystem",
    },
    {
      id: 2,
      questionText: "What is the primary color of IAS-ExamSystem logo?",
    },
    {
      id: 3,
      questionText: "Explain how IAS-ExamSystem supports educators.",
    },
    {
      id: 4,
      questionText: "List the benefits of using IAS-ExamSystem",
    },
    {
      id: 5,
      questionText: "Suggest improvements for IAS-ExamSystem",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  // Timer logic (decreases every second)
  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion(); // Automatically move to next question when time is up
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Clean up interval on unmount
  }, [timeLeft]);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(120); // Reset timer for the next question
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setTimeLeft(120); // Reset timer for the previous question
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted!", answers);
    // Redirect to the Thank You page
    router.push("/thankyou"); // Update with your actual path
  };

  const currentQuestion = questions[currentQuestionIndex];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen flex justify-center items-center bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] p-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mx-auto py-8">
        {/* Sidebar */}
        <div className="md:w-3/5 h-fit py-6  bg-[rgba(255,255,255,0.04)] shadow-2xl rounded-lg flex flex-col justify-center gap-6 mb-8 mx-auto">
          <div className="px-4">
            <h1 className="text-sm text-center items-start font-bold mb-8">
              Sample: Introduction to IAS-ExamSystem Quiz
            </h1>
            <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)]"></div>
          </div>

          {/* Timer Section */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <p className="text-4xl text-center text-blue-400">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            <LuAlarmClock className="w-5 h-5 text-blue-400" />
            <p className="font-bold">Time left</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full col-span-2 bg-[rgba(255,255,255,0.04)] rounded-lg shadow-2xl p-6 mx-auto">
          <p className="text-[rgba(196,7,185,1)] p-1"> [Subjective]</p>

          <h1 className="text-sm font-bold">
            <span className="text-blue-500 font-normal mx-2">
              {currentQuestion.id}
            </span>
            {currentQuestion.questionText}{" "}
            <span className="text-[rgba(196,7,185,1)]">(10Points)</span>
          </h1>

          <div className="mt-4">
            <div className="p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
              <div className="bg-[#401671] rounded-md">
                <textarea
                  value={answers[currentQuestionIndex]}
                  onChange={handleAnswerChange}
                  placeholder="Answer..."
                  maxLength={300}
                  className="w-full min-h-[50vh] p-4 bg-[#401671]  text-white focus:outline-none  rounded-md"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2 px-14">
            {currentQuestionIndex < questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className={`font-bold bg-[rgba(196,7,185,1)] hover:bg-[#ba33b3] transition text-white py-3 w-full`}
              >
                Next Question
              </button>
            )}
            {currentQuestionIndex === questions.length - 1 && (
              <button
                onClick={handleSubmit}
                className="font-bold bg-green-600 hover:bg-green-700 transition text-white py-3 w-full"
              >
                Submit
              </button>
            )}
          </div>

          <p className="text-center mt-6 font-semibold text-sm">
            OnlineExamMaker provides technical support
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
