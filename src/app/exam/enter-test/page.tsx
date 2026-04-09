"use client";
import { useState, useEffect } from "react";
import Quiz from "@/app/components/Quiz";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<Array<any>>([]);
  const [displayQuestion, setDisplayQuestion] = useState<Array<any>>([]);
  const [start, setStart] = useState<boolean>(false);
  const [isFinal, setIsFinal] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<any>>([]);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      // Displaying a custom message is no longer supported by most browsers, but we can still trigger a dialog
      event.preventDefault(); // Required to trigger the confirmation dialog
      event.returnValue = ""; // This is required for Chrome and most modern browsers

      // You can perform other actions here (like logging or sending data to an API)
      console.log("User is attempting to leave or refresh the page.");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const getQuestionsByClassName = async () => {
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/test/getTestByClassLevel/${localStorage.getItem("classLevel")}`,
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
      if (data?.length > 0) {
        const questionsArray = data[0]?.Questions || [];
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
              return question;
            }
          }
          return question;
        });

        setQuestions(updatedQuestions);
        setTotalQuestions(updatedQuestions.length);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    const completed = localStorage.getItem("completed");
    if (completed === "true") {
      router.push("/exam/thankyou");
    }
    getQuestionsByClassName();
  }, []);

  const handleStartTest = () => {
    setStart(true);
    setDisplayQuestion([questions[index]]);
    setIndex(index + 1);
  };

  const handleSubmitMain = async (switchTabs: Boolean, showCamera: Boolean) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/exam/update-answer`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            camera: showCamera,
            switchTabs: switchTabs,
            answer: questions,
            username: localStorage.getItem("examUsername"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      localStorage.setItem("completed", "true");
      // router.push("/exam/thankyou");
    } catch (error: any) {
      console.error("Failed to update answer:", error.message);
    }
  };

  const handleNext = () => {
    if (index < questions.length) {
      setDisplayQuestion([questions[index]]);
      setIndex((prevIndex) => prevIndex + 1);
    } else if (index === questions.length) {
      setIsFinal(true);
    }
  };

  if (start) {
    return (
      <div className="min-h-screen bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] flex items-center justify-center">
        <div className="w-11/12 max-w-4xl xl:max-w-5xl bg-black bg-opacity-20 p-1 rounded-lg">
          <div className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] p-[1.5px] rounded-lg">
            <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] p-6 md:p-8 rounded-lg shadow-2xl">
              <div className="text-white text-center space-y-7">
                {/* top bar  */}
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 py-4 bg-[rgba(255,255,255,0.04)] rounded-lg w-full">
                  <div className="flex flex-col justify-center items-center px-4 mb-4 md:mb-0">
                    <h2 className="text-xl text-center text-[rgba(196,7,185,1)] font-semibold">
                      IAS Contest Test
                    </h2>
                  </div>

                  {/* <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4 overflow-hidden px-4">
                    {Array.from({ length: totalQuestions }, (_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 flex items-center justify-center border-2 border-gray-100 rounded-lg 
          ${
            i === index - 1
              ? "bg-[rgba(196,7,185,1)] text-white"
              : "bg-white text-black"
          }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div> */}
                  <div
                    className="flex md:grid overflow-x-auto md:overflow-hidden gap-4 px-4 pb-2 
             md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 
             scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent"
                  >
                    {Array.from({ length: totalQuestions }, (_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 flex-shrink-0 flex items-center justify-center border-2 border-gray-100 rounded-lg 
        ${
          i === index - 1
            ? "bg-[rgba(196,7,185,1)] text-white"
            : "bg-white text-black"
        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>

                <Quiz
                  handleSubmitMain={handleSubmitMain}
                  questions={questions}
                  handleNext={handleNext}
                  isFinal={isFinal}
                  index={index}
                  totalQuestions={questions.length} // Ensure the correct value is passed here
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!start) {
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
                  Sample: Introduction to IAS-ExamSystem
                </p>
              </div>
              <div className="text-white text-center  px-4 md:px-14">
                <p className="text-lg font-semibold mb-4 md:mb-8">
                  Introduction
                </p>
                <div className="font-semibold space-y-2 md:space-y-4">
                  <div className="flex justify-between px-2 md:px-6">
                    <span className="font-bold text-start">Taken Times:</span>
                    <span className="text-end">1 time</span>
                  </div>
                  <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 md:mx-4 "></div>

                  <div className="flex justify-between px-2 md:px-6">
                    <span className="font-bold text-start">Time Limit:</span>
                    <span className="text-end">50 Minutes</span>
                  </div>
                  <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 md:mx-4 "></div>

                  <div className="flex justify-between px-2 md:px-6">
                    <span className="font-bold text-start">Pass Score:</span>
                    <span className="text-end">60%</span>
                  </div>
                  <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 md:mx-4"></div>

                  <div className="flex justify-between px-2 md:px-6">
                    <span className="font-bold text-start">Test Rule:</span>
                    <span className="text-end">
                      Allowed to modify the answer
                    </span>
                  </div>
                  <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-2 mx-4"></div>
                </div>
                <p className="text-center md:text-left font-semibold px-2 md:px-6 mt-6">
                  If the exam aborts, please exit and follow the same steps to
                  continue the exam.
                </p>
                <div className="h-[2px] bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] my-4 mx-4"></div>
              </div>

              <div
                onClick={handleStartTest}
                className="flex justify-center mt-6 md:mt-8"
              >
                <button className="bg-[rgba(196,7,185,1)] hover:bg-pink-600 text-white font-bold py-2 px-6 md:px-10 rounded transition-all">
                  Enter the test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Home;
