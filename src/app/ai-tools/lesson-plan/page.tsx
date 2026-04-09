"use client";
import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "../../components/DashboardLayout";
import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";

export default function LessonPlan() {
  const [isEditorOpen, setIsEditorOpen] = useState(true);
  const [gradeLevel, setGradeLevel] = useState("9th grade");
  const [topic, setTopic] = useState("");
  const [additionalCriteria, setAdditionalCriteria] = useState("");
  const [standards, setStandards] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  // --- NEW STATE FOR LINKING ---
  const [generatedLesson, setGeneratedLesson] = useState("");

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
    if (!topic) {
      alert("Please enter a topic or standard.");
      return;
    }

    setIsGenerating(true);
    setGeneratedLesson(""); // Clear previous result

    try {
      const response = await fetch(
        "https://api.iamscientist.ai/api/lesson/generate-lesson",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gradeLevel: gradeLevel,
            topic: topic,
            slo: standards, // Mapping 'standards' field to 'slo' backend key
            context: additionalCriteria,
            language: "English",
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        setGeneratedLesson(data.lessonPlan);
        setIsEditorOpen(false); // Close editor to show results
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Linking Error:", error);
      alert(
        "Failed to connect to the AI server. Make sure your Flask backend is running on port 5328.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <DashboardLayout activeTab="All Magic Tools">
      <div className="lp-page">
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
        <div className="lp-breadcrumb">
          <Link href="/teacher/tools" style={{ textDecoration: "none" }}>
            <span className="lp-breadcrumb-tools">Tools</span>
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
          <span className="lp-breadcrumb-current">Lesson Plan</span>
        </div>
        <div className="lp-container">
          {/* Prompt Editor Panel */}
          <div className="lp-panel">
            {/* Collapsible Prompt Editor Header */}
            <button
              className="lp-editor-toggle"
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
              <div className="lp-form">
                {/* Title Row */}
                <div className="lp-title-row">
                  <div className="lp-title-left">
                    <h1 className="lp-title">Lesson Plan</h1>
                    <button className="lp-refresh-btn" title="Reset">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                      </svg>
                    </button>
                  </div>
                  <button className="lp-exemplar-btn">Show exemplar</button>
                </div>

                <p className="lp-subtitle">
                  Generate a lesson plan based on a standard, topic, or
                  objective.
                </p>

                {/* Grade Level */}
                <div className="lp-field">
                  <label className="lp-label">
                    Grade level <span className="lp-required">*</span>
                  </label>
                  <div className="lp-select-wrapper">
                    <select
                      className="lp-select"
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
                      className="lp-select-arrow"
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

                {/* Topic / Standard / Objective */}
                <div
                  className="lp-field"
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <label className="lp-label">
                    Topic, Standard, or Objective{" "}
                    <span className="lp-required">*</span>
                  </label>
                  <div
                    className="lp-textarea-wrapper"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="lp-textarea-hint">
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
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      topic, standard, or longer description of what you're
                      teaching.
                    </div>
                    <textarea
                      className="lp-textarea"
                      placeholder=""
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      rows={2}
                      style={{ height: "100%", flex: 1 }}
                    />
                    <p className="lp-textarea-hint-text">
                      If you include the full description, you can use any
                      standard worldwide. For example, "HS-PS1-1 Use the
                      periodic table as a model to predict the relative
                      properties of elements based on the patterns of electrons
                      in the outermost energy level of atoms."
                    </p>
                  </div>
                  <div className="lp-field-footer">
                    <label className="lp-file-btn">
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
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
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
                    <span className="lp-word-count">
                      total word limit: {wordCount(topic)}/75,000
                    </span>
                    <button className="lp-prompt-assistant-btn">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                      Prompt assistant
                    </button>
                  </div>
                </div>

                {/* Additional Criteria */}
                <div className="lp-field">
                  <label className="lp-label">Additional Criteria:</label>
                  <div className="lp-textarea-wrapper">
                    <div className="lp-textarea-hint">
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
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      Students are in a unit about world regions, students last
                      lesson was on the geography of the United States, have the
                      lesson include group work, etc.
                    </div>
                    <textarea
                      className="lp-textarea"
                      placeholder=""
                      value={additionalCriteria}
                      onChange={(e) => setAdditionalCriteria(e.target.value)}
                      rows={2}
                    />
                  </div>
                  <div className="lp-field-footer">
                    <label className="lp-file-btn">
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
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
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
                    <span className="lp-word-count">
                      total word limit: {wordCount(additionalCriteria)}/75,000
                    </span>
                    <button className="lp-prompt-assistant-btn">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                      Prompt assistant
                    </button>
                  </div>
                </div>

                {/* Standards Set to Align to */}
                <div className="lp-field">
                  <label className="lp-label">Standards Set to Align to:</label>
                  <div className="lp-textarea-wrapper">
                    <div className="lp-textarea-hint">
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
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      Any standards worldwide (CCSS, TEKS, Ontario, Florida)
                    </div>
                    <textarea
                      className="lp-textarea"
                      placeholder=""
                      value={standards}
                      onChange={(e) => setStandards(e.target.value)}
                      rows={2}
                    />
                  </div>
                  <div className="lp-field-footer">
                    <label className="lp-file-btn">
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
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
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
                    <span className="lp-word-count">
                      total word limit: {wordCount(standards)}/75,000
                    </span>
                  </div>
                </div>

                {/* Generate Button Row */}
                <div className="lp-generate-row">
                  <button
                    className={`lp-generate-btn ${isGenerating ? "generating" : ""}`}
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

                  <button className="lp-web-btn">
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

            {/* --- NEW OUTPUT AREA --- */}
            {!isEditorOpen && generatedLesson && (
              <div
                className="lp-output-area"
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
                  Generated Lesson Plan:
                </h2>
                <div
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                  }}
                >
                  {generatedLesson}
                </div>
                <button
                  className="lp-generate-btn"
                  style={{ marginTop: "20px" }}
                  onClick={() => setIsEditorOpen(true)}
                >
                  Edit Prompt
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
                .lp-page {
                    min-height: 100%;
                    padding-bottom: 4rem;
                }

                .lp-header {
                    display: flex;
                    align-items: center;
                    padding: 1.2rem 2rem;
                    border-bottom: 1px solid rgba(135, 45, 230, 0.3);
                    background: rgba(17, 1, 41, 0.5);
                }

                .lp-back-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: rgba(255,255,255,0.7);
                    text-decoration: none;
                    font-size: 0.85rem;
                    transition: color 0.2s;
                }
                .lp-back-btn:hover { color: #ffffff; }

                .lp-container {
                    max-width: 760px;
                    margin: 0.5rem auto;
                    min-height: calc(100vh - 60px);
                    display: flex;
                    flex-direction: column;
    gap: 0.5rem;
                }
                .lp-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 0 1rem 1rem;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.85rem;
                }
                .lp-breadcrumb-tools {
                    color: rgba(255,255,255,0.6);
                    cursor: pointer;
                    transition: color 0.2s;
                }
                .lp-breadcrumb-tools:hover { color: #fff; }
                .lp-breadcrumb svg { color: rgba(255,255,255,0.4); width: 12px; height: 12px; }
                .lp-breadcrumb-current {
                    color: rgba(255,255,255,0.9);
                    font-weight: 500;
                }

                .lp-panel {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(135, 45, 230, 0.35);
                    border-radius: 14px;
                    overflow: hidden;
                }

                .lp-editor-toggle {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    width: 100%;
                    padding: 0.75rem 1.5rem;
                    background: rgba(255,255,255,0.05);
                    border: none;
                    border-bottom: 1px solid rgba(135, 45, 230, 0.3);
                    color: rgba(255,255,255,0.7);
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.8rem;
                    cursor: pointer;
                    text-align: left;
                    transition: background 0.2s;
                }
                .lp-editor-toggle:hover { background: rgba(255,255,255,0.08); }

                .lp-form {
                    padding: 1rem 1.2rem 0.8rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    flex: 1;
                }

                .lp-title-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .lp-title-left {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                }
                .lp-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                }
                .lp-refresh-btn {
                    background: transparent;
                    border: none;
                    color: rgba(255,255,255,0.5);
                    cursor: pointer;
                    padding: 4px;
                    display: flex;
                    align-items: center;
                    border-radius: 6px;
                    transition: color 0.2s, background 0.2s;
                }
                .lp-refresh-btn:hover { color: #ffffff; background: rgba(255,255,255,0.1); }

                .lp-exemplar-btn {
                    background: transparent;
                    border: none;
                    color: #a855f7;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.82rem;
                    cursor: pointer;
                    text-decoration: underline;
                    transition: color 0.2s;
                }
                .lp-exemplar-btn:hover { color: #c084fc; }

                .lp-subtitle {
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.55);
                    margin-top: -0.4rem;
                }

                .lp-field {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                }

                .lp-label {
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.85);
                }
                .lp-required { color: #E01CF4; margin-left: 2px; }

                /* Select */
                .lp-select-wrapper {
                    position: relative;
                }
                .lp-select {
                    width: 100%;
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(135, 45, 230, 0.45);
                    border-radius: 8px;
                    padding: 0.4rem 2.2rem 0.4rem 0.8rem;
                    color: #ffffff;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.8rem;
                    appearance: none;
                    cursor: pointer;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .lp-select:focus { border-color: #872de6; }
                .lp-select option { background: #1f0545; color: #ffffff; }
                .lp-select-arrow {
                    position: absolute;
                    right: 0.9rem;
                    top: 50%;
                    transform: translateY(-50%);
                    pointer-events: none;
                    color: rgba(255,255,255,0.5);
                }

                /* Textarea */
                .lp-textarea-wrapper {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(135, 45, 230, 0.4);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: border-color 0.2s;
                }
                .lp-textarea-wrapper:focus-within { border-color: #872de6; }

                .lp-textarea-hint {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.4rem;
                    padding: 0.5rem 0.8rem 0.1rem;
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.4);
                    font-style: italic;
                }
                .lp-textarea-hint svg { flex-shrink: 0; margin-top: 1px; color: rgba(255,255,255,0.3); }

                .lp-textarea {
                    width: 100%;
                    background: transparent;
                    border: none;
                    color: #ffffff;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.8rem;
                    padding: 0 0.8rem 0.5rem;
                    outline: none;
                    resize: none;
                    line-height: 1.4;
                }
                .lp-textarea::placeholder { color: rgba(255,255,255,0.25); }

                .lp-textarea-hint-text {
                    font-size: 0.7rem;
                    color: rgba(255,255,255,0.35);
                    padding: 0 0.8rem 0.5rem;
                    line-height: 1.3;
                }

                /* Field footer */
                .lp-field-footer {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .lp-file-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    background: transparent;
                    border: 1px solid rgba(135, 45, 230, 0.4);
                    border-radius: 6px;
                    padding: 0.3rem 0.75rem;
                    color: rgba(255,255,255,0.7);
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.75rem;
                    cursor: pointer;
                    transition: background 0.2s, border-color 0.2s;
                }
                .lp-file-btn:hover { background: rgba(135,45,230,0.15); border-color: #872de6; color: #fff; }

                .lp-word-count {
                    font-size: 0.72rem;
                    color: rgba(255,255,255,0.35);
                    flex: 1;
                }

                .lp-prompt-assistant-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    background: transparent;
                    border: none;
                    color: #a855f7;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.75rem;
                    cursor: pointer;
                    margin-left: auto;
                    transition: color 0.2s;
                }
                .lp-prompt-assistant-btn:hover { color: #c084fc; }

                /* Generate row */
                .lp-generate-row {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-top: auto;
                    padding-top: 0.5rem;
                }

                .lp-generate-btn {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    background: linear-gradient(135deg, #7c3aed, #a21caf);
                    border: none;
                    border-radius: 8px;
                    padding: 0.5rem 1.5rem;
                    color: #ffffff;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s, transform 0.1s;
                }
                .lp-generate-btn:hover { opacity: 0.9; }
                .lp-generate-btn:active { transform: scale(0.98); }
                .lp-generate-btn.generating { opacity: 0.7; cursor: not-allowed; }

                .lp-web-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    background: transparent;
                    border: 1px solid rgba(135, 45, 230, 0.4);
                    border-radius: 8px;
                    padding: 0.5rem 1.2rem;
                    color: rgba(255,255,255,0.7);
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: background 0.2s, border-color 0.2s, color 0.2s;
                    white-space: nowrap;
                }
                .lp-web-btn:hover { background: rgba(135,45,230,0.15); border-color: #872de6; color: #fff; }

                @media (max-width: 600px) {
                    .lp-generate-row {
                        flex-direction: column;
                        gap: 0.75rem;
                    }

                    .lp-generate-btn, .lp-web-btn {
                        width: 100%;
                        justify-content: center;
                        padding: 0.75rem;
                        font-size: 0.9rem;
                    }
                }
            `}</style>
             {" "}
    </DashboardLayout>
  );
}
