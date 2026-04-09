"use client"
import { useState } from "react";

type Question = 
  | { type: "Paragraph"; question: string; answer: string }
  | { type: "Multiple Choice"; question: string; options: string[] };

export default function QuestionManager() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [mcqOptions, setMcqOptions] = useState<string[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleAddQuestion = () => {
    if (selectedOption === "Paragraph") {
      setQuestions((prev) => [...prev, { type: "Paragraph", question, answer }]);
    } else if (selectedOption === "Multiple Choice") {
      setQuestions((prev) => [...prev, { type: "Multiple Choice", question, options: mcqOptions }]);
    }
    setShowPopup(false);
    setQuestion("");
    setAnswer("");
    setMcqOptions([]);
    setSelectedOption("");
  };

  const handleAddOption = (newOption: string) => {
    setMcqOptions((prev) => [...prev, newOption]);
  };

  const handleDeleteQuestion = (index: number) => {
    setQuestions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEditQuestion = (index: number) => {
    const questionToEdit = questions[index];
  
    // Set common properties
    setQuestion(questionToEdit.question);
    setSelectedOption(questionToEdit.type);
  
    // Handle specific types
    if (questionToEdit.type === "Paragraph") {
      setAnswer(questionToEdit.answer || "");
      setMcqOptions([]); // Clear options for non-MCQ questions
    } else if (questionToEdit.type === "Multiple Choice") {
      setAnswer(""); // Clear answer for MCQ questions
      setMcqOptions(questionToEdit.options || []);
    }
  
    setShowPopup(true);
    setQuestions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Buttons */}
      <div className="flex items-center space-x-4 mb-4">
        <select
          className="p-2 border rounded"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Select Option</option>
          <option value="Paragraph">Paragraph</option>
          <option value="Multiple Choice">Multiple Choice</option>
        </select>

        <button
          className={`px-4 py-2 text-white rounded ${
            selectedOption
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!selectedOption}
          onClick={() => setShowPopup(true)}
        >
          Add Question
        </button>
      </div>

      {/* Preview Field */}
      <div className="border p-4 rounded space-y-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className="p-3 border rounded shadow flex justify-between items-start"
          >
            <div>
              <h4 className="font-bold text-white">{q.question}</h4>
              {q.type === "Paragraph" ? (
                <p>{q.answer}</p>
              ) : (
                <ul className="list-disc pl-5">
                  {q.options.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex space-x-2">
              <button
                className="text-green-500 hover:text-green-700"
                onClick={() => handleEditQuestion(index)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteQuestion(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-96">
            <h3 className="font-bold mb-4">Add {selectedOption} Question</h3>

            <input
              type="text"
              placeholder="Enter your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            {selectedOption === "Paragraph" && (
              <textarea
                placeholder="Enter your answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
            )}

{selectedOption === "Multiple Choice" && (
  <div className="mb-4">
    <input
      type="text"
      placeholder="Add an option"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const target = e.target as HTMLInputElement; // Assert type here
          if (target.value) {
            handleAddOption(target.value);
            target.value = ""; // Reset input value
          }
        }
      }}
      className="w-full p-2 border rounded"
    />
    <ul className="list-disc pl-5 mt-2">
      {mcqOptions.map((opt, i) => (
        <li key={i}>{opt}</li>
      ))}
    </ul>
  </div>
)}


            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleAddQuestion}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
