"use client";
import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "../../components/DashboardLayout";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function MultipleExplanations() {
  const [isEditorOpen, setIsEditorOpen] = useState(true);
  const [gradeLevel, setGradeLevel] = useState("9th grade");
  const [concept, setConcept] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  // --- NEW STATE FOR LINKING ---
  const [explanationResult, setExplanationResult] = useState("");

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

  const wordCount = (text: string) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // --- UPDATED GENERATE FUNCTION LINKED TO BACKEND ---
  const handleGenerate = async () => {
    if (!concept) {
      alert("Please enter a concept to explain.");
      return;
    }

    setIsGenerating(true);
    setExplanationResult("");

    try {
      const response = await fetch(
        "https://api.iamscientist.ai/api/multiple_explanations/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic: concept,
            gradeLevel: gradeLevel,
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        setExplanationResult(data.explanationData);
        setIsEditorOpen(false); // Switch to view result
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Explanation Linking Error:", error);
      alert(
        "Failed to connect to the backend. Please check your Flask server.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <DashboardLayout activeTab="All Magic Tools">
      <div className="me-page">
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
        <div className="me-breadcrumb">
          <Link href="/teacher/tools" style={{ textDecoration: "none" }}>
            <span className="me-breadcrumb-tools">Tools</span>
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
          <span className="me-breadcrumb-current">Multiple Explanations</span>
        </div>
        <div className="me-container">
          {/* Prompt Editor Panel */}
          <div className="me-panel">
            {/* Collapsible Prompt Editor Header */}
            <button
              className="me-editor-toggle"
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
              Prompt Editor
            </button>

            {isEditorOpen && (
              <div className="me-form">
                {/* Title Row */}
                <div className="me-title-row">
                  <h1 className="me-title">Multiple Explanations</h1>
                  <button className="me-exemplar-btn">
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

                <p className="me-subtitle">
                  Generate additional explanations of topics that you're
                  teaching.
                </p>

                {/* Grade Level */}
                <div className="me-field">
                  <label className="me-label">
                    Grade level: <span className="me-required">*</span>
                  </label>
                  <div className="me-select-wrapper">
                    <select
                      className="me-select"
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
                      className="me-select-arrow"
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

                {/* Concept Being Taught */}
                <div
                  className="me-field"
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <label className="me-label">
                    Concept Being Taught: <span className="me-required">*</span>
                  </label>

                  <div
                    className="me-textarea-outer"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "180px",
                    }}
                  >
                    <div className="me-textarea-wrapper" style={{ flex: 1 }}>
                      <div className="me-textarea-icon">
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
                        className="me-textarea"
                        placeholder="opportunity cost"
                        value={concept}
                        onChange={(e) => setConcept(e.target.value)}
                        style={{ height: "100%" }}
                        rows={5}
                      />
                      {/* Corner draggable handle icon placeholder area */}
                      <div className="me-textarea-resize-handle">
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

                    <div className="me-field-footer-inner">
                      <label className="me-file-btn">
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
                      <span className="me-word-count">
                        Total word limit: {wordCount(concept)}/75,000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Generate Button Row */}
                <div className="me-generate-row">
                  <button
                    className={`me-generate-btn ${isGenerating ? "generating" : ""}`}
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
                    {isGenerating ? "Generating..." : "Generate"}
                  </button>

                  <button className="me-web-btn">
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
            )}

            {/* --- NEW OUTPUT VIEW --- */}
            {!isEditorOpen && explanationResult && (
              <div
                className="me-output-area"
                style={{
                  padding: "20px",
                  color: "white",
                  borderTop: "1px solid rgba(135,45,230,0.3)",
                  overflowY: "auto",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                    color: "#a855f7",
                  }}
                >
                  Alternative Explanations:
                </h2>
                <div
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    background: "rgba(255,255,255,0.02)",
                    padding: "15px",
                    borderRadius: "8px",
                  }}
                >
                  {explanationResult}
                </div>
                <button
                  className="me-generate-btn"
                  style={{ marginTop: "20px" }}
                  onClick={() => setIsEditorOpen(true)}
                >
                  Back to Editor
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .me-page {
          min-height: 100%;
          padding-bottom: 4rem;
          font-family: "Poppins", sans-serif;
        }

        .me-container {
          max-width: 760px;
          margin: 0.5rem auto;
          min-height: calc(100vh - 60px);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .me-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0 1rem 1rem;
          font-family: "Poppins", sans-serif;
          font-size: 0.85rem;
        }
        .me-breadcrumb-tools {
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: color 0.2s;
        }
        .me-breadcrumb-tools:hover {
          color: #fff;
        }
        .me-breadcrumb svg {
          color: rgba(255, 255, 255, 0.4);
          width: 12px;
          height: 12px;
        }
        .me-breadcrumb-current {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .me-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(135, 45, 230, 0.35);
          border-radius: 14px;
          overflow: hidden;
          color: #fff;
        }

        .me-editor-toggle {
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
        .me-editor-toggle:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .me-form {
          padding: 1rem 1.2rem 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .me-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        @media (max-width: 600px) {
          .me-title-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }

        .me-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .me-exemplar-btn {
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
        .me-exemplar-btn:hover {
          color: #c084fc;
          text-decoration: underline;
        }

        .me-subtitle {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.55);
          margin-top: -0.6rem;
        }

        .me-field {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .me-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 0.2rem;
        }
        .me-required {
          color: #e01cf4;
          margin-left: 2px;
        }

        /* Select */
        .me-select-wrapper {
          position: relative;
        }
        .me-select {
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
        .me-select:focus {
          border-color: #872de6;
        }
        .me-select option {
          background: #1f0545;
          color: #ffffff;
        }
        .me-select-arrow {
          position: absolute;
          right: 0.9rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Textarea Styles */
        .me-textarea-outer {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(135, 45, 230, 0.4);
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .me-textarea-outer:focus-within {
          border-color: #872de6;
        }

        .me-textarea-wrapper {
          position: relative;
          flex: 1;
        }

        .me-textarea-icon {
          position: absolute;
          top: 1.1rem;
          left: 1rem;
          color: rgba(255, 255, 255, 0.4);
          pointer-events: none;
        }

        .me-textarea {
          width: 100%;
          background: transparent;
          border: none;
          color: #ffffff;
          font-family: "Poppins", sans-serif;
          font-size: 0.8rem;
          padding: 1rem 1rem 0.6rem 2.5rem; /* left padding for icon */
          outline: none;
          resize: none;
          line-height: 1.4;
          min-height: 50px;
        }
        .me-textarea::placeholder {
          color: rgba(255, 255, 255, 0.25);
        }

        .me-textarea-resize-handle {
          position: absolute;
          bottom: 0.4rem;
          right: 0.4rem;
          color: rgba(255, 255, 255, 0.2);
          pointer-events: none;
        }

        /* Textarea inner footer (Add File + word count) */
        .me-field-footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(17, 1, 41, 0.4);
          border-top: 1px solid rgba(135, 45, 230, 0.2);
          padding: 0.4rem 1rem;
        }

        .me-file-btn {
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
        .me-file-btn:hover {
          color: #c084fc;
        }

        .me-word-count {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.35);
        }

        /* Generate row */
        .me-generate-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 0.5rem;
        }

        .me-generate-btn {
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
        .me-generate-btn:hover {
          opacity: 0.9;
        }
        .me-generate-btn:active {
          transform: scale(0.98);
        }
        .me-generate-btn.generating {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .me-web-btn {
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
        .me-web-btn:hover {
          background: rgba(135, 45, 230, 0.15);
          border-color: #872de6;
          color: #fff;
        }

        @media (max-width: 600px) {
          .me-generate-row {
            flex-direction: column;
            gap: 0.75rem;
          }

          .me-generate-btn,
          .me-web-btn {
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
