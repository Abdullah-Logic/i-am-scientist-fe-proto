"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuAlarmClock } from "react-icons/lu";
import Webcam from "react-webcam";
interface Question {
  id: number;
  questionText: string;
  StudentSelectedOption: string;
  // options: { id: string; option: string }[];
  options: string[];
}

interface SubjectiveProps {
  questions: Question[]; // Array of questions
  handleNext: () => void; // Function prop
  isFinal: Boolean; // Variable prop
  // FinalAnswers: any[];
  handleSubmitMain: () => void;
  totalQuestions: number; // Total number of questions
  index: number;
}

const Objective: React.FC<SubjectiveProps> = ({
  questions,
  handleNext,
  isFinal,
  handleSubmitMain,
  totalQuestions, // Added totalQuestions prop
  index
}) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  useEffect(() => {
    if (timeLeft === 0) {
      if (currentQuestionIndex < questions.length - 1) {
        handleNextQuestion();
        console.log("objective", totalQuestions);
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
  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (stream) {
          setShowCamera(true);
          setIsCameraActive(true);
        }
      } catch (error) {
        console.error("Camera permission denied or unavailable.", error);
      }
    };

    getCameraPermission();
  }, []);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    questions[0].StudentSelectedOption = selectedOption;
    // FinalAnswers.push({ selectedOption });
    handleNext();
    setSelectedOption("");
  };

  const handleSubmit = () => {
    questions[0].StudentSelectedOption = selectedOption;
    setSelectedOption("");
    handleSubmitMain();
    // Implement submission logic here
    router.push("/exam/result-page");
  };

  const currentQuestion = questions[currentQuestionIndex];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // Alert when the camera is off
  const handleCameraToggle = () => {
    if (isCameraActive) {
      setAlertVisible(true); // Show custom alert
    } else {
      setShowCamera(true);
      setIsCameraActive(true);
    }
  };
  const handleAlertConfirm = () => {
    setIsCameraActive(false);
    setShowCamera(false);
    setAlertVisible(false);
  };

  const handleAlertCancel = () => {
    setAlertVisible(false);
  };

  // quiz navigation
  const [currentQuestions, setCurrentQuestions] = useState(null);

  const handleQuestionClick = (questionNumber: any) => {
    setCurrentQuestions(questionNumber);
    console.log(`You are solving question ${questionNumber}`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] p-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mx-auto py-8">
        {/* Timer Section */}
        <div className="md:w-3/5 h-fit pt-6  bg-[rgba(255,255,255,0.04)] shadow-2xl rounded-lg flex flex-col justify-center gap-6 mb-8 mx-auto">
          <div className="px-4">
            <h1 className="text-base text-center items-start font-semibold mb-6">
              Sample: Introduction to IAS-ExamSystem
            </h1>
            <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)]"></div>
          </div>
          {/* Camera Section */}
          <div className="flex flex-col items-center mb-2">
            <h2 className="text-lg text-blue-400 font-semibold">
              Camera Monitoring
            </h2>
            {showCamera ? (
              <Webcam
                className="w-full h-full rounded-lg bg-black mt-2 "
                videoConstraints={{ facingMode: "user" }}
              />
            ) : (
              <div className="w-[95%] h-[145px] rounded-lg bg-black mt-2  flex items-center justify-center">
                <p className="text-white">Camera is off</p>
              </div>
            )}
          </div>
          <div className="h-[2px] bg-gradient-to-r mx-4 -mt-2 from-blue-600 to-[rgba(196,7,185,1)]"></div>
          {/* Quiz Navigation  */}
          {/* <div className="flex flex-col justify-center items-center px-4">
            <h2 className="text-xl text-center text-[rgba(196,7,185,1)] mb-2 font-semibold">IAS Contest Test</h2>
            <div className="grid grid-cols-4 gap-3 justify-center items-center">
              {[...Array(8).keys()].map((num) => {
                const questionNumber = num + 1;
                return (
                  <span
                    key={questionNumber}
                    onClick={() => handleQuestionClick(questionNumber)}
                    className={`w-8 h-8 flex justify-center items-center border-2 rounded-lg cursor-pointer ${currentQuestions === questionNumber ? 'bg-[rgba(196,7,185,1)] text-white' : 'bg-white text-black'
                      }`}
                  >
                    {questionNumber}
                  </span>
                );
              })}
            </div>
          </div> */}

          {/* Quiz Navigation  */}

          <div className="flex flex-col justify-center items-center px-4">
            <h2 className="text-xl text-center text-[rgba(196,7,185,1)] mb-2 font-semibold">
              IAS Contest Test
            </h2>
            Total Questions: {totalQuestions || 0}
            {/* Display totalQuestions here */}
            <div className="grid grid-cols-4 gap-3 justify-center items-center">
              {Array.from({ length: totalQuestions }).map((_, index) => {
                const questionNumber = index + 1;
                return (
                  <span
                    key={questionNumber}
                    onClick={() => handleQuestionClick(questionNumber)}
                    className={`w-8 h-8 flex justify-center items-center border-2 rounded-lg cursor-pointer ${
                      currentQuestions === questionNumber
                        ? "bg-[rgba(196,7,185,1)] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {questionNumber}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="h-[2px] bg-gradient-to-r mx-4 from-blue-600 to-[rgba(196,7,185,1)]"></div>

          {/* Timer Section */}
          <div className="flex items-center mb-2 justify-center gap-4 -mt-2">
            <div className="flex items-center justify-center gap-2 ">
              <LuAlarmClock className="w-5 h-5 text-blue-400" />
              <p className="font-bold">Time left</p>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <p className="text-3xl text-center text-blue-400">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full h-fit col-span-2 bg-[rgba(255,255,255,0.04)] rounded-lg shadow-2xl p-6 pt-10 mx-auto">
          <h1
            onMouseDown={(e) => e.preventDefault()}
            onSelect={(e) => e.preventDefault()}
            style={{ userSelect: "none" }}
            className="text-sm font-bold ml-4"
          >
            <span className="text-blue-500 font-bold  mx-2">
              {/* {currentQuestion.id}.[Multiple Choice] */}
              {/* {index+1} */}
              12
            </span>
            {/* {currentQuestion.questionText} */}
            <span className="text-[rgba(196,7,185,1)] p-1"> (10 Points)</span>
          </h1>

          <div className="mt-3 space-y4">
            {currentQuestion.options.length > 1 &&
              currentQuestion.options.map((option, index) => (
                <div
                  key={index}
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
                    value={option}
                    id={`option-${option}`}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                    className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full checked:bg-blue-600 focus:outline-none"
                  />

                  {/* Option Text */}
                  <div className="p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md w-full">
                    <div className="bg-[#401671] rounded-md px-6   w-full py-4">
                      <label
                        htmlFor={`option-${option}`}
                        className={`flex-1 font-bold ml-4 rounded-md ${
                          selectedOption === option
                            ? "text-green-600"
                            : "text-white"
                        }`}
                      >
                        {option}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-6 flex justify-center gap-2 px-14">
            {/* {currentQuestionIndex < questions.length - 1 ? ( */}
            {!isFinal ? (
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

export default Objective;
