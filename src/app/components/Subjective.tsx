"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuAlarmClock } from "react-icons/lu";
import Webcam from "react-webcam";

interface Question {
  id: number;
  questionText: string;
  studentAnswer: string;
}

interface SubjectiveProps {
  questions: Question[]; // Array of questions
  handleNext: () => void; // Function prop
  isFinal: Boolean; // Variable prop
  handleSubmitMain: () => void;
  totalQuestions: number; // Total number of questions
  index: number;
}

const Subjective: React.FC<SubjectiveProps> = ({
  questions,
  handleNext,
  isFinal,
  handleSubmitMain,
  totalQuestions, // Added totalQuestions prop
  index
}) => {
  const router = useRouter(); // Initialize the router

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);

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

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(updatedAnswers);
  };

  // const handleNextQuestion = () => {
  //   questions[currentQuestionId - 1].studentAnswer = answers[0]; // Save answer
  //   handleNext(); // Handle any additional logic
  //   setAnswers([""]); // Reset answer input

  //   if (currentQuestionId < questions.length) {
  //     setCurrentQuestionId((prevId) => prevId + 1);
  //     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  //   }

  //   setTimeLeft(120); // Reset the timer
  // };
  const handleNextQuestion = () => {
    questions[currentQuestionId - 1].studentAnswer =
      answers[currentQuestionIndex];
    handleNext();
    setAnswers([""]);
    if (currentQuestionId < questions.length) {
      setCurrentQuestionId((prevId) => prevId + 1); // Increment question ID
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Move to the next question
    }
    setTimeLeft(120);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setTimeLeft(120); // Reset timer for the previous question
    }
  };

  const handleSubmit = () => {
    questions[0].studentAnswer = answers[0];
    setAnswers([""]);
    handleSubmitMain();
    router.push("/exam/result-page"); // Update with your actual path
  };

  const currentQuestion = questions[currentQuestionIndex] || null;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen flex justify-center items-center bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] p-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mx-auto py-8">
        {/* Sidebar */}
        <div className="md:w-3/5 h-fit pt-4  bg-[rgba(255,255,255,0.04)] shadow-2xl rounded-lg flex flex-col justify-center gap-6 mb-8 mx-auto">
          <div className="px-4">
            <h1 className="text-sm text-center items-start font-bold mb-4">
              Sample: Introduction to IAS-ExamSystem Quiz
            </h1>
            <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)]"></div>
          </div>
          {/* Camera Monitoring Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-center text-blue-400 mb-2 font-semibold">
              Camera Monitoring
            </h2>
            {showCamera ? (
              <Webcam
                className="h-full rounded-lg bg-black mt-2 w-full"
                videoConstraints={{ facingMode: "user" }}
              />
            ) : (
              <div className="w-[95%] h-[145px] rounded-lg bg-black my-1 flex items-center justify-center">
                <p className="text-white">Camera is off</p>
              </div>
            )}
          </div>
          <div className="h-[2px] mx-2 -mt-2 bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)]"></div>

          {/* Quiz Navigation */}
          <div className=" text-center font-bold">
            Total Questions: {totalQuestions || 0}
            <h2 className="text-xl text-center text-[rgba(196,7,185,1)]  font-semibold">
              IAS Contest Test
            </h2>
          </div>
          {/* Map through the questions and render navigation buttons */}
          <div className="flex flex-wrap px-2 gap-2 justify-center">
            {Array.from({ length: totalQuestions }).map((_, index) => {
              const questionNumber = index + 1; // Human-readable question number
              return (
                <span
                  key={questionNumber}
                  onClick={() => {
                    // Update current question ID and index to reflect the clicked question
                    setCurrentQuestionId(questionNumber); // Set the question ID to the clicked number
                    setCurrentQuestionIndex(index); // Set the index of the clicked question
                    setTimeLeft(120); // Reset the timer when navigating to a new question
                  }}
                  aria-label={`Navigate to question ${questionNumber}`}
                  className={`w-8 h-8 flex justify-center items-center border-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                    currentQuestionId === questionNumber
                      ? "bg-[rgba(196,7,185,1)] text-white" // Highlight active question
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  {questionNumber}
                </span>
              );
            })}
          </div>
          {/* end quiz navigation  */}

          <div className="h-[2px] mx-4 bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)]"></div>

          {/* Timer Section */}
          <div className="flex items-center justify-center gap-4 -mt-2">
            <div className="flex items-center gap-2">
              <LuAlarmClock className="w-5 h-5 text-blue-400" />
              <p className="font-bold">Time left</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-3xl text-blue-400">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full h-fit col-span-2 bg-[rgba(255,255,255,0.04)] rounded-lg shadow-2xl p-6 mx-auto">
          <p className="text-[rgba(196,7,185,1)] p-1">[Subjective]</p>

          <h1 className="text-sm font-bold">
            <span className="text-blue-500 font-normal mx-2">
              {/* {currentQuestion?.id} */}
              {index+1}
            </span>
            {currentQuestion?.questionText}{" "}
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
                  className="w-full min-h-[50vh] p-4 bg-[#401671] text-white focus:outline-none rounded-md"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2 px-14">
            {!isFinal && (
              <button
                onClick={handleNextQuestion}
                className="font-bold bg-[rgba(196,7,185,1)] hover:bg-[#ba33b3] transition text-white py-3 w-full"
              >
                Next Question
              </button>
            )}
            {isFinal && (
              <button
                onClick={handleSubmit}
                className="font-bold bg-green-600 hover:bg-green-700 transition text-white py-3 w-full"
              >
                Submit
              </button>
            )}
          </div>
          <p className="text-center mt-6 font-semibold text-sm">
            IAS-ExamSystem provides technical support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subjective;
