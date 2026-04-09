import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuAlarmClock } from "react-icons/lu";
import Webcam from "react-webcam";
import TabSwitchAlert from "./Alert";
import CustomAlert from "./CustomAlert";
import FaceDetect from "./FaceDetect";
import { question } from "../constant/data";

interface Question {
  id: number;
  questionText: string;
  studentAnswer: string;
  options?: string[]; // Only for objective questions
}

type QuizProps = {
  handleSubmitMain: (switchTabs: Boolean, showCamera: Boolean) => void;
  questions: Array<any>; // Or the appropriate question type
  handleNext: () => void;
  isFinal: boolean;
  totalQuestions: number; // Make sure this matches
  index: number;
};

const Quiz: React.FC<QuizProps> = ({
  handleSubmitMain,
  questions,
  handleNext,
  isFinal,
  totalQuestions,
  index,
}) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [showCamera, setShowCamera] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // For disabling submit button after submit
  const [showAlert, setShowAlert] = useState(false);
  const [switchTabs, setSwitchTabs] = useState<Boolean>(false);
  const [customAlert, setCustomAlert] = useState({
    isVisible: false,
    message: "",
  });

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setShowAlert(true);
        setSwitchTabs(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Timer logic
  useEffect(() => {
    if (timeLeft === 0) {
      if (currentQuestionIndex === questions.length - 1) {
        handleSubmit(); // Call handleSubmit on the last question when time is over
      } else {
        handleNextQuestion(false); // Automatically go to the next question
      }
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, currentQuestionIndex]);

  // Camera permission
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => setShowCamera(true))
      .catch(() => setShowCamera(false));
  }, []);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleOptionChange = (option: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const checkSubjectiveQuestion = async (question: string, answer: string) => {
    // Check if the question is subjective
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/exam_auto`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question, answer }),
        }
      );
      const data = await response.json();
      console.log("data", data.response.slice(7, 9));
      return parseInt(data.response.slice(7, 9));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const handleNextQuestion = async (isManual = false) => {
  //   if (isManual && !answers[currentQuestionIndex]) {
  //     // Show the alert only for manual clicks and if the field is empty
  //     setCustomAlert({
  //       isVisible: true,
  //       message:
  //         "Please fill your answer before proceeding to the next question.",
  //     });
  //     return;
  //   }

  //   // if(){

  //   // }
  //   if (questions[currentQuestionIndex]) {
  //     questions[currentQuestionIndex].studentAnswer =
  //       answers[currentQuestionIndex];

  //     if (questions[currentQuestionIndex].questionType === "objective") {
  //       questions[currentQuestionIndex].StudentSelectedOption =
  //         questions[currentQuestionIndex].options[
  //           parseInt(questions[currentQuestionIndex].correctAnswer)
  //         ] === answers[currentQuestionIndex]
  //           ? true
  //           : false;
  //     }

  //     if(questions[currentQuestionIndex].questionType === "subjective"){
  //       questions[currentQuestionIndex].StudentSelectedOption = await checkSubjectiveQuestion(questions[currentQuestionIndex].questionText, answers[currentQuestionIndex]);
  //     }
  //   }

  //   setTimeLeft(120); // Reset the timer

  //   setCurrentQuestionIndex((prevIndex) => {
  //     const nextIndex = prevIndex + 1;
  //     return nextIndex < questions.length ? nextIndex : prevIndex; // Prevent overflow
  //   });

  //   handleNext();
  // };

  const handleNextQuestion = async (isManual = false) => {
    if (isProcessing) return; // ❌ Already running → ignore clicks
    setIsProcessing(true); // 🔒 Lock button

    if (isManual && !answers[currentQuestionIndex]) {
      setCustomAlert({
        isVisible: true,
        message: "Please fill your answer before proceeding.",
      });
      setIsProcessing(false); // unlock
      return;
    }

    try {
      questions[currentQuestionIndex].studentAnswer =
        answers[currentQuestionIndex];

      if (questions[currentQuestionIndex].questionType === "objective") {
        questions[currentQuestionIndex].StudentSelectedOption =
          questions[currentQuestionIndex].options[
            parseInt(questions[currentQuestionIndex].correctAnswer)
          ] === answers[currentQuestionIndex];
      }

      if (questions[currentQuestionIndex].questionType === "subjective") {
        // ⏳ Loader starts only when API call runs
        const score = await checkSubjectiveQuestion(
          questions[currentQuestionIndex].questionText,
          answers[currentQuestionIndex]
        );
        questions[currentQuestionIndex].StudentSelectedOption = score;
      }

      setTimeLeft(120);

      setCurrentQuestionIndex((prev) => {
        const next = prev + 1;
        return next < questions.length ? next : prev;
      });

      handleNext();
    } finally {
      setIsProcessing(false); // 🔓 Unlock when question fully loaded
    }
  };

  const handleNextButtonClick = () => {
    handleNextQuestion(true); // Pass true to indicate manual action
  };

  const handleAutoNext = () => {
    handleNextQuestion(false); // Pass false to skip alert
  };

  const handleSubmit = async () => {
    console.log("Submit", questions);
    if (!answers[currentQuestionIndex]) {
      setCustomAlert({
        isVisible: true,
        message: "Please fill your answer before submitting.",
      });
      return;
    }

    try {
      // Save the current answer
      questions[currentQuestionIndex].studentAnswer =
        answers[currentQuestionIndex];

      // Call the parent submission logic
      await handleSubmitMain(switchTabs, showCamera);

      setIsSubmitted(true); // Prevent further interaction
      router.push("/exam/thankyou"); // Redirect on successful submission
    } catch (error) {
      console.error("Submission failed:", error);
      setCustomAlert({
        isVisible: true,
        message: "Failed to submit the quiz. Please try again.",
      });
    }
  };

  const closeAlert = () => setShowAlert(false);
  const closeCustomAlert = () =>
    setCustomAlert({ isVisible: false, message: "" });
  const selectedOption = answers[currentQuestionIndex];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <TabSwitchAlert
        message="You have switched tabs during the quiz. As a result, 5 marks have been deducted from your score. Please stay on the quiz page to avoid further penalties."
        isVisible={showAlert}
        onClose={closeAlert}
      />
      {/* Custom Alert */}
      <CustomAlert
        message={customAlert.message}
        isVisible={customAlert.isVisible}
        onClose={closeCustomAlert}
      />
      <div className="h-fit flex justify-center items-start text-white">
        <div className="w-full flex flex-col md:flex-row gap-7">
          {/* Sidebar Section */}
          <div className="md:w-[60%] h-fit lg:w-2/5 p-4 bg-[rgba(255,255,255,0.04)] shadow-2xl rounded-lg flex flex-col justify-center gap-6 mb-8 mx-auto">
            <div className="px-4">
              <h1 className="text-base text-center items-start font-semibold mb-6">
                Welcome to IAS-Exam System
              </h1>
              <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)]"></div>
            </div>
            {/* Camera Section */}
            {/* <div className="flex flex-col items-center mb-2">
            <h2 className="text-lg text-blue-400 font-semibold">
              Camera Monitoring
            </h2>
            {showCamera ? (
              <Webcam
                className="w-full h-full rounded-lg bg-black mt-2"
                videoConstraints={{ facingMode: "user" }}
              />
            ) : (
              <div className="w-[95%] h-[145px] rounded-lg bg-black mt-2 flex items-center justify-center">
                <p className="text-white">Camera is off</p>
              </div>
            )}
          </div> */}
            <FaceDetect />
            <div className="h-[2px] bg-gradient-to-r mx-4 -mt-2 from-blue-600 to-[rgba(196,7,185,1)]"></div>
            {/* Timer Section */}
            <div className="flex flex-col items-center mb-2 justify-center gap-4 -mt-2">
              <div className="flex items-center justify-center gap-2">
                <LuAlarmClock className="w-5 h-5 text-blue-400" />
                <p className="font-bold">Time Left</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-4xl text-center text-blue-400">
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full h-fit space-y-5 bg-[rgba(255,255,255,0.04)] rounded-lg shadow-2xl p-6 mx-auto">
            <h1 className="text-sm font-bold text-left">
              {/* Current Question Index {currentQuestionIndex} */}
              <span className="text-blue-500 font-bold text-base mx-2">
                {/* Question {currentQuestion?.id || 0}. */}
                Question {index}
              </span>
              <span className="text-base">{currentQuestion?.questionText}</span>
              <span className="text-[rgba(196,7,185,1)] p-1"> (10 Points)</span>
            </h1>
            {currentQuestion?.options ? (
              <div className="flex flex-col gap-1">
                {currentQuestion.options.map((option: any, index: any) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-sm py-3"
                  >
                    <span className="font-bold p-1">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <input
                      type="radio"
                      name="quiz"
                      value={option}
                      id={`option-${option}`}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                      className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full checked:bg-blue-600 focus:outline-none"
                    />
                    {/* <div className="p-[2px]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md w-full"> */}
                    <div
                      className={`${
                        selectedOption === option
                          ? "p-[2px] border-4 border-[white] rounded-md w-full"
                          : "p-[2px]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md w-full"
                      }`}
                    >
                      <div className="bg-[#401671] rounded-md w-full py-3 px-4 text-start">
                        <label
                          htmlFor={`option-${option}`}
                          className={`flex-1 font-bold rounded-md ${
                            selectedOption === option
                              ? "text-green-600 "
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
            ) : (
              <div className="p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
                <div className="bg-[#401671] rounded-md">
                  <textarea
                    value={answers[currentQuestionIndex] || ""}
                    onChange={handleAnswerChange}
                    placeholder="Answer..."
                    maxLength={1000}
                    className="w-full min-h-[45vh] 2xl:min-h-[40vh] p-4 bg-[#401671] text-white focus:outline-none rounded-md"
                  ></textarea>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-center items-center gap-2">
              {currentQuestionIndex < questions.length - 1 ? (
                // <button
                //   onClick={() => handleNextQuestion(true)}
                //   className="font-bold bg-[rgba(196,7,185,1)] hover:bg-[#ba33b3] rounded-sm transition text-white py-3 w-full md:w-4/5"
                // >
                //   Next Question
                // </button>
                <button
                  onClick={() => handleNextQuestion(true)}
                  disabled={isProcessing}
                  className={`font-bold rounded-sm transition text-white py-3 w-full md:w-4/5 
    ${
      isProcessing
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-[rgba(196,7,185,1)] hover:bg-[#ba33b3]"
    }`}
                >
                  {isProcessing ? "Loading..." : "Next Question"}
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="font-bold bg-green-700 hover:bg-green-600 rounded-sm transition text-white py-3 w-full md:w-4/5"
                  disabled={isSubmitted}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
