"use client";
import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "../../components/DashboardLayout";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function MathStoryWordProblems() {
  const [isEditorOpen, setIsEditorOpen] = useState(true);
  const [gradeLevel, setGradeLevel] = useState("9th grade");
  const [numQuestions, setNumQuestions] = useState("3");
  const [mathTopic, setMathTopic] = useState("");
  const [storyTopic, setStoryTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  // --- NEW STATE FOR LINKING ---
  const [generatedMath, setGeneratedMath] = useState("");

  const gradeOptions = [
    "Kindergarten",
    "1st grade",
    "2nd grade",
    "3rd grade",
    "4th grade",
    "5th grade",
    "6th grade",
    "7th grade",
    "8th grade",
    "9th grade",
    "10th grade",
    "11th grade",
    "12th grade",
    "College / University",
  ];

  const numberOptions = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "15",
    "20",
  ];

  const wordCount = (text: string) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // --- UPDATED GENERATE FUNCTION LINKED TO BACKEND ---
  const handleGenerate = async () => {
    if (!mathTopic || !storyTopic) {
      alert("Please provide both a math topic and a story topic.");
      return;
    }

    setIsGenerating(true);
    setGeneratedMath("");

    try {
      const response = await fetch(
        "https://api.iamscientist.ai/api/mathstories/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic: `${mathTopic} (Story theme: ${storyTopic})`,
            gradeLevel: gradeLevel,
            numQuestions: numQuestions,
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        setGeneratedMath(data.mathData);
        setIsEditorOpen(false); // Switch to the results view
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Math Story Linking Error:", error);
      alert("Failed to connect to the backend. Ensure Flask is running.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <DashboardLayout activeTab="All Magic Tools">
      <div className="ms-page">
        {/* --- BACK BUTTON CONTAINER --- */}
        <div
          className="cwd-back-container"
          style={{ padding: "1rem 1.2rem 0.5rem" }}
        >
          <button className="cwd-back-btn" onClick={() => router.back()}>
            <HiArrowLeft />
            Back
          </button>
        </div>
        {/* Breadcrumb */}
        <div className="ms-breadcrumb">
          <Link href="/teacher/tools" style={{ textDecoration: "none" }}>
            <span className="ms-breadcrumb-tools">Tools</span>
          </Link>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <span className="ms-breadcrumb-current">
            Math Story Word Problems
          </span>
        </div>
        <div className="ms-container">
          {/* Prompt Editor Panel */}
          <div className="ms-panel">
            {/* Collapsible Prompt Editor Header */}
            <button
              className="ms-editor-toggle"
              onClick={() => setIsEditorOpen(!isEditorOpen)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: isEditorOpen ? "rotate(0deg)" : "rotate(-90deg)",
                  transition: "transform 0.2s",
                }}
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              {isEditorOpen ? "Prompt Editor" : "View Generated Problems"}
            </button>

            {isEditorOpen ? (
              <div className="ms-form">
                {/* Title Row */}
                <div className="ms-title-row">
                  <h1 className="ms-title">Math Story Word Problems</h1>
                  <button className="ms-exemplar-btn">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "6px" }}
                    >
                      <polyline points="9 14 4 9 9 4"></polyline>
                      <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                    </svg>
                    Show exemplar
                  </button>
                </div>

                <p className="ms-subtitle">
                  Write custom math word problems based on what you're teaching
                  and any story topic.
                </p>

                {/* Grade Level */}
                <div className="ms-field">
                  <label className="ms-label">
                    Grade level: <span className="ms-required">*</span>
                  </label>
                  <div className="ms-select-wrapper">
                    <select
                      className="ms-select"
                      value={gradeLevel}
                      onChange={(e) => setGradeLevel(e.target.value)}
                    >
                      {gradeOptions.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="ms-select-arrow"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Number of Questions */}
                <div className="ms-field">
                  <label className="ms-label">
                    Number of Questions: <span className="ms-required">*</span>
                  </label>
                  <div className="ms-select-wrapper">
                    <select
                      className="ms-select"
                      value={numQuestions}
                      onChange={(e) => setNumQuestions(e.target.value)}
                    >
                      {numberOptions.map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="ms-select-arrow"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Math Standard / Objective / Topic */}
                <div
                  className="ms-field"
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <label className="ms-label">
                    Math Standard / Objective / Topic:{" "}
                    <span className="ms-required">*</span>
                  </label>

                  <div
                    className="ms-textarea-outer"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "140px",
                    }}
                  >
                    <div className="ms-textarea-wrapper" style={{ flex: 1 }}>
                      <div className="ms-textarea-icon">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                          <line x1="12" y1="19" x2="12" y2="22"></line>
                        </svg>
                      </div>
                      <textarea
                        className="ms-textarea"
                        placeholder="Volume of a Cone"
                        value={mathTopic}
                        onChange={(e) => setMathTopic(e.target.value)}
                        style={{ height: "100%", minHeight: "60px" }}
                        rows={3}
                      />
                      {/* Corner draggable handle icon placeholder area */}
                      <div className="ms-textarea-resize-handle">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="21" y1="21" x2="15" y2="21"></line>
                          <line x1="21" y1="15" x2="21" y2="21"></line>
                        </svg>
                      </div>
                    </div>

                    <div className="ms-field-footer-inner">
                      <label className="ms-file-btn">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: "6px" }}
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="12" y1="18" x2="12" y2="12"></line>
                          <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                        Add File
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginLeft: "4px" }}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              alert("File selected: " + e.target.files[0].name);
                            }
                          }}
                        />
                      </label>
                      <span className="ms-word-count">
                        Total word limit: {wordCount(mathTopic)}/75,000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Story Topic */}
                <div
                  className="ms-field"
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <label className="ms-label">
                    Story Topic: <span className="ms-required">*</span>
                  </label>

                  <div
                    className="ms-textarea-outer"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "140px",
                    }}
                  >
                    <div className="ms-textarea-wrapper" style={{ flex: 1 }}>
                      <div className="ms-textarea-icon">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                          <line x1="12" y1="19" x2="12" y2="22"></line>
                        </svg>
                      </div>
                      <textarea
                        className="ms-textarea"
                        placeholder="Beyonce concert"
                        value={storyTopic}
                        onChange={(e) => setStoryTopic(e.target.value)}
                        style={{ height: "100%", minHeight: "60px" }}
                        rows={3}
                      />
                      {/* Corner draggable handle icon placeholder area */}
                      <div className="ms-textarea-resize-handle">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="21" y1="21" x2="15" y2="21"></line>
                          <line x1="21" y1="15" x2="21" y2="21"></line>
                        </svg>
                      </div>
                    </div>

                    <div className="ms-field-footer-inner">
                      <label className="ms-file-btn">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: "6px" }}
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="12" y1="18" x2="12" y2="12"></line>
                          <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                        Add File
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginLeft: "4px" }}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              alert("File selected: " + e.target.files[0].name);
                            }
                          }}
                        />
                      </label>
                      <span className="ms-word-count">
                        Total word limit: {wordCount(storyTopic)}/75,000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Generate Button Row */}
                <div className="ms-generate-row">
                  <button
                    className={`ms-generate-btn ${isGenerating ? "generating" : ""}`}
                    onClick={handleGenerate}
                    disabled={isGenerating}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    {isGenerating ? "Creating Problems..." : "Generate"}
                  </button>

                  <button className="ms-web-btn">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "6px" }}
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Web
                  </button>
                </div>
              </div>
            ) : (
              /* --- NEW OUTPUT PANEL --- */
              <div
                className="ms-output-area"
                style={{ padding: "20px", color: "white", overflowY: "auto" }}
              >
                <h2
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                    color: "#a855f7",
                  }}
                >
                  Math Word Problems
                </h2>
                <div
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    background: "rgba(255,255,255,0.03)",
                    padding: "20px",
                    borderRadius: "12px",
                  }}
                >
                  {generatedMath}
                </div>
                <button
                  className="ms-generate-btn"
                  style={{ marginTop: "20px" }}
                  onClick={() => setIsEditorOpen(true)}
                >
                  Create New Problems
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        /* ... All previous styles kept ... */
        .ms-page {
          min-height: 100%;
          padding-bottom: 4rem;
          font-family: "Poppins", sans-serif;
        }

        .ms-container {
          max-width: 760px;
          margin: 0.5rem auto;
          min-height: calc(100vh - 60px);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .ms-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0 1rem 1rem;
          font-family: "Poppins", sans-serif;
          font-size: 0.85rem;
        }
        .ms-breadcrumb-tools {
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: color 0.2s;
        }
        .ms-breadcrumb-tools:hover {
          color: #fff;
        }
        .ms-breadcrumb svg {
          color: rgba(255, 255, 255, 0.4);
          width: 12px;
          height: 12px;
        }
        .ms-breadcrumb-current {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .ms-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(135, 45, 230, 0.35);
          border-radius: 14px;
          overflow: hidden;
          color: #fff;
        }

        .ms-editor-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: none;
          border-bottom: 1px solid rgba(135, 45, 230, 0.3);
          color: rgba(255, 255, 255, 0.7);
          font-family: "Poppins", sans-serif;
          font-size: 0.8rem;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .ms-editor-toggle:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .ms-form {
          padding: 1rem 1.2rem 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }

        .ms-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ms-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .ms-exemplar-btn {
          display: flex;
          align-items: center;
          background: transparent;
          border: none;
          color: #a855f7;
          font-family: "Poppins", sans-serif;
          font-size: 0.82rem;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ms-exemplar-btn:hover {
          color: #c084fc;
          text-decoration: underline;
        }

        .ms-subtitle {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.55);
          margin-top: -0.4rem;
        }

        .ms-field {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .ms-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
        }
        .ms-required {
          color: #e01cf4;
          margin-left: 2px;
        }

        .ms-select-wrapper {
          position: relative;
        }
        .ms-select {
          width: 100%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(135, 45, 230, 0.45);
          border-radius: 8px;
          padding: 0.5rem 2.2rem 0.5rem 1rem;
          color: #ffffff;
          font-family: "Poppins", sans-serif;
          font-size: 0.8rem;
          appearance: none;
          cursor: pointer;
          outline: none;
          transition: border-color 0.2s;
        }
        .ms-select:focus {
          border-color: #872de6;
        }
        .ms-select option {
          background: #1f0545;
          color: #ffffff;
        }
        .ms-select-arrow {
          position: absolute;
          right: 0.9rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: rgba(255, 255, 255, 0.5);
        }

        .ms-textarea-outer {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(135, 45, 230, 0.4);
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .ms-textarea-outer:focus-within {
          border-color: #872de6;
        }

        .ms-textarea-wrapper {
          position: relative;
          flex: 1;
        }

        .ms-textarea-icon {
          position: absolute;
          top: 1.1rem;
          left: 1rem;
          color: rgba(255, 255, 255, 0.4);
          pointer-events: none;
        }

        .ms-textarea {
          width: 100%;
          background: transparent;
          border: none;
          color: #ffffff;
          font-family: "Poppins", sans-serif;
          font-size: 0.8rem;
          padding: 1rem 1rem 0.6rem 2.5rem;
          outline: none;
          resize: none;
          line-height: 1.4;
          min-height: 50px;
        }
        .ms-textarea::placeholder {
          color: rgba(255, 255, 255, 0.25);
          white-space: pre-wrap;
        }

        .ms-textarea-resize-handle {
          position: absolute;
          bottom: 0.4rem;
          right: 0.4rem;
          color: rgba(255, 255, 255, 0.2);
          pointer-events: none;
        }

        .ms-field-footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(17, 1, 41, 0.4);
          border-top: 1px solid rgba(135, 45, 230, 0.2);
          padding: 0.4rem 1rem;
        }

        .ms-file-btn {
          display: flex;
          align-items: center;
          background: transparent;
          border: none;
          padding: 0.2rem;
          color: #a855f7;
          font-family: "Poppins", sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s;
        }
        .ms-file-btn:hover {
          color: #c084fc;
        }

        .ms-word-count {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.35);
        }

        .ms-generate-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 0.5rem;
        }

        .ms-generate-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #7c3aed, #a21caf);
          border: none;
          border-radius: 8px;
          padding: 0.6rem 1.5rem;
          color: #ffffff;
          font-family: "Poppins", sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition:
            opacity 0.2s,
            transform 0.1s;
        }
        .ms-generate-btn:hover {
          opacity: 0.9;
        }
        .ms-generate-btn:active {
          transform: scale(0.98);
        }
        .ms-generate-btn.generating {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .ms-web-btn {
          display: flex;
          align-items: center;
          background: transparent;
          border: 1px solid rgba(135, 45, 230, 0.4);
          border-radius: 8px;
          padding: 0.6rem 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          font-family: "Poppins", sans-serif;
          font-size: 0.85rem;
          appearance: none;
          cursor: pointer;
          transition:
            background 0.2s,
            border-color 0.2s,
            color 0.2s;
        }
        .ms-web-btn:hover {
          background: rgba(135, 45, 230, 0.15);
          border-color: #872de6;
          color: #fff;
        }

        @media (max-width: 600px) {
          .ms-generate-row {
            flex-direction: column;
            gap: 0.75rem;
          }

          .ms-generate-btn,
          .ms-web-btn {
            width: 100%;
            justify-content: center;
            padding: 0.75rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </DashboardLayout>
  );
}
