"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuAlarmClock } from "react-icons/lu";

interface Question {
  id: number;
  questionText: string;
  options: { id: string; text: string }[];
}

const QuizPage: React.FC = () => {
  const router = useRouter();
  const questions: Question[] = [
    {
      id: 1,
      questionText: "Which icon is the logo of IAS-ExamSystem?",
      options: [
        { id: "A", text: "Option 1" },
        { id: "B", text: "Option 2" },
        { id: "C", text: "Option 3" },
        { id: "D", text: "Option 4" },
      ],
    },
    {
      id: 2,
      questionText: "What is the primary color of IAS-ExamSystem logo?",
      options: [
        { id: "A", text: "Option 1" },
        { id: "B", text: "Option 2" },
        { id: "C", text: "Option 3" },
        { id: "D", text: "Option 4" },
      ],
    },
    {
      id: 3,
      questionText: "Which shape represents IAS-ExamSystem?",
      options: [
        { id: "A", text: "Option 1" },
        { id: "B", text: "Option 2" },
        { id: "C", text: "Option 3" },
        { id: "D", text: "Option 4" },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    if (timeLeft === 0) {
      if (currentQuestionIndex < questions.length - 1) {
        handleNextQuestion();
      } else {
        handleSubmit();
      }
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      setTimeLeft(120); // Reset timer for the next question
    }
  };

  const handleSubmit = () => {
    // Implement submission logic here
    router.push("/thankyou");
  };

  const currentQuestion = questions[currentQuestionIndex];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen flex justify-center items-center bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] p-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mx-auto py-8">
        {/* Timer Section */}
        <div className="md:w-3/5 h-fit py-6  bg-[rgba(255,255,255,0.04)] shadow-2xl rounded-lg flex flex-col justify-center gap-6 mb-8 mx-auto">
          <div className="px-4">
            <h1 className="text-base text-center items-start font-semibold mb-8">
              Sample: Introduction to IAS-ExamSystem
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
        <div className="w-full col-span-2 bg-[rgba(255,255,255,0.04)] rounded-lg shadow-2xl p-6 pt-10 mx-auto">
          <h1 className="text-sm font-bold ml-4">
            <span className="text-blue-500 font-bold  mx-2">
              {currentQuestion.id}.[Multiple Choice]
            </span>
            {currentQuestion.questionText}
            <span className="text-[rgba(196,7,185,1)] p-1"> (10 Points)</span>
          </h1>

          <div className="mt-3 space-y4">
            {currentQuestion.options.map((option, index) => (
              <div
                key={option.id}
                className="flex items-center gap-2 rounded-sm px-4 py-3 "
              >
                {/* Letter Section */}
                <span className="font-bold p-1 ">
                  {String.fromCharCode(65 + index)}
                </span>

                {/* Checkbox */}

                <input
                  type="radio"
                  name="quiz"
                  value={option.id}
                  id={`option-${option.id}`}
                  checked={selectedOption === option.id}
                  onChange={() => handleOptionChange(option.id)}
                  className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full checked:bg-blue-600 focus:outline-none"
                />

                {/* Option Text */}

                <div className="p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md w-full">
                  <div className="bg-[#401671] rounded-md px-6   w-full py-4">
                    <label
                      htmlFor={`option-${option.id}`}
                      className={`flex-1 font-bold ml-4 rounded-md ${
                        selectedOption === option.id
                          ? "text-green-600"
                          : "text-white"
                      }`}
                    >
                      {option.text}
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2 px-14">
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="font-bold bg-[rgba(196,7,185,1)] hover:bg-[#ba33b3] rounded-sm transition text-white py-3 w-4/5"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="font-bold bg-green-700 hover:bg-green-600 rounded-sm transition text-white py-3 w-4/5"
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
