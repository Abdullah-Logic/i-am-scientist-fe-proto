"use client";
import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "../../components/DashboardLayout";
import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";


export default function VocabGenerator() {
    const [isEditorOpen, setIsEditorOpen] = useState(true);
    const [gradeLevel, setGradeLevel] = useState("9th grade");
    const [wordCountToDefine, setWordCountToDefine] = useState("5");
    const [topic, setTopic] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const router = useRouter();

    // --- NEW STATE FOR LINKING ---
    const [generatedVocab, setGeneratedVocab] = useState("");

    const wordCount = (text: string) => text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    // --- UPDATED GENERATE FUNCTION LINKED TO BACKEND ---
    const handleGenerate = async () => {
        if (!topic) {
            alert("Please enter a topic or text.");
            return;
        }

        setIsGenerating(true);
        setGeneratedVocab("");

        try {
            const response = await fetch("https://api.iamscientist.ai/api/vocabulary/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    topic: topic,
                    gradeLevel: gradeLevel,
                    count: wordCountToDefine, // Passing the requested count
                    targetLang: "English"    // Defaulting as per backend default
                }),
            });

            const data = await response.json();

            if (data.success) {
                setGeneratedVocab(data.vocabData);
                setIsEditorOpen(false); // Switch to view result
            } else {
                alert("Error: " + data.error);
            }
        } catch (error) {
            console.error("Vocabulary Linking Error:", error);
            alert("Failed to connect to the backend. Please check your Flask server.");
        } finally {
            setIsGenerating(false);
        }
    };

    const gradeOptions = [
        "Kindergarten", "1st grade", "2nd grade", "3rd grade",
        "4th grade", "5th grade", "6th grade", "7th grade",
        "8th grade", "9th grade", "10th grade", "11th grade", "12th grade",
        "College / University"
    ];

    const wordCountOptions = ["5", "10", "15", "20", "25"];

    return (
        <DashboardLayout activeTab="All Magic Tools">
            <div className="ts-page">                 
                                {/* --- BACK BUTTON CONTAINER --- */}
    <div className="cwd-back-container" style={{ padding: "1rem 1.2rem 0.5rem" }}>
      <button className="cwd-back-btn" onClick={() => router.back()}>
        <HiArrowLeft />
        Back
      </button>
    </div>
                   {/* Breadcrumb */}
                    <div className="ts-breadcrumb">
                        <Link href="/teacher/tools" style={{ textDecoration: "none" }}><span className="ts-breadcrumb-tools">Tools</span></Link>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                        <span className="ts-breadcrumb-current">Vocabulary List Generator</span>
                    </div>
<div className="ts-container">


                    {/* Prompt Editor Panel */}
                    <div className="ts-panel">

                        {/* Collapsible Prompt Editor Header */}
                        <button className="ts-editor-toggle" onClick={() => setIsEditorOpen(!isEditorOpen)}>
                            <svg
                                width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                style={{ transform: isEditorOpen ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.2s" }}
                            >
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                            Prompt Editor
                        </button>

                        {isEditorOpen && (
                            <div className="ts-form">

                                {/* Title Row */}
                                <div className="ts-title-row">
                                    <div className="ts-title-left">
                                        <h1 className="ts-title">Vocabulary List Generator</h1>
                                        <button className="ts-refresh-btn" title="Reset" onClick={() => { setTopic(""); setGradeLevel("9th grade"); setWordCountToDefine("5"); }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                                <path d="M3 3v5h5" />
                                            </svg>
                                        </button>
                                    </div>
                                    <button className="ts-exemplar-btn">Show exemplar</button>
                                </div>

                                <p className="ts-subtitle">Generate a list of vocabulary words based on a subject, topic, or text.</p>

                                {/* Grade Level */}
                                <div className="ts-field">
                                    <label className="ts-label">
                                        Grade level: <span className="ts-required">*</span>
                                    </label>
                                    <div className="ts-select-wrapper">
                                        <select
                                            className="ts-select"
                                            value={gradeLevel}
                                            onChange={(e) => setGradeLevel(e.target.value)}
                                        >
                                            {gradeOptions.map((g) => (
                                                <option key={g} value={g}>{g}</option>
                                            ))}
                                        </select>
                                        <svg className="ts-select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>

                                {/* Vocabulary Words to Define */}
                                <div className="ts-field">
                                    <label className="ts-label">
                                        Vocabulary Words to Define: <span className="ts-required">*</span>
                                    </label>
                                    <div className="ts-select-wrapper">
                                        <select
                                            className="ts-select"
                                            value={wordCountToDefine}
                                            onChange={(e) => setWordCountToDefine(e.target.value)}
                                        >
                                            {wordCountOptions.map((c) => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                        <svg className="ts-select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>

                                {/* Topic or text */}
                                <div className="ts-field" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <label className="ts-label">
                                        Topic or text: <span className="ts-required">*</span>
                                    </label>
                                    <div className="ts-textarea-outer" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div className="ts-textarea-wrapper" style={{ flex: 1 }}>
                                            <div className="ts-textarea-icon">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                                    <line x1="12" y1="19" x2="12" y2="22"></line>
                                                </svg>
                                            </div>
                                            <textarea
                                                className="ts-textarea"
                                                placeholder="Mitosis, Forces and Motion, Literary Devices, Algebra, etc. OR larger text where you'd like to extract words"
                                                value={topic}
                                                onChange={(e) => setTopic(e.target.value)}
                                                rows={2}
                                                style={{ height: '100%' }}
                                            />
                                            {/* Corner draggable handle icon placeholder area */}
                                            <div className="ts-textarea-resize-handle">
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="21" y1="21" x2="15" y2="21"></line>
                                                    <line x1="21" y1="15" x2="21" y2="21"></line>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ts-field-footer-inner">
                                            <label className="ts-file-btn">

                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                    <polyline points="14 2 14 8 20 8"></polyline>
                                                    <line x1="12" y1="18" x2="12" y2="12"></line>
                                                    <line x1="9" y1="15" x2="15" y2="15"></line>
                                                </svg>
                                                Add File
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            
                                                <input type="file" style={{ display: 'none' }} onChange={(e) => { if(e.target.files && e.target.files[0]) { alert('File selected: ' + e.target.files[0].name); } }} />
                                            </label>
                                            <span className="ts-word-count">Total word limit: {wordCount(topic)}/75,000</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Generate row */}
                                <div className="ts-generate-row">
                                    <button
                                        className={`ts-generate-btn ${isGenerating ? 'generating' : ''}`}
                                        onClick={handleGenerate}
                                        disabled={isGenerating}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2v20"></path>
                                            <path d="M12 12l2.5-2.5"></path>
                                            <path d="M14.5 9.5L12 12l2.5 2.5"></path>
                                        </svg>
                                        {isGenerating ? "Processing..." : "Generate"}
                                     </button>

                                     <button className="ts-web-btn">
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
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
                        {!isEditorOpen && generatedVocab && (
                            <div className="ts-output-area" style={{ padding: '20px', color: 'white', borderTop: '1px solid rgba(135,45,230,0.3)', overflowY: 'auto' }}>
                                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#a855f7' }}>Vocabulary List:</h2>
                                <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.9rem', lineHeight: '1.6', background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '8px' }}>
                                    {generatedVocab}
                                </div>
                                <button className="ts-generate-btn" style={{ marginTop: '20px' }} onClick={() => setIsEditorOpen(true)}>Edit Parameters</button>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <style jsx>{`
                .ts-page {
                    min-height: 100%;
                    padding-bottom: 4rem;
                    font-family: 'Poppins', sans-serif;
                }

                .ts-container {
                    max-width: 760px;
                    margin: 0.5rem auto;
                    
                    min-height: calc(100vh - 60px);
                    display: flex;
                    flex-direction: column;
    gap: 0.5rem;
                }
                .ts-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 0 1rem 1rem;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.85rem;
                }
                .ts-breadcrumb-tools {
                    color: rgba(255,255,255,0.6);
                    cursor: pointer;
                    transition: color 0.2s;
                }
                .ts-breadcrumb-tools:hover { color: #fff; }
                .ts-breadcrumb svg { color: rgba(255,255,255,0.4); width: 12px; height: 12px; }
                .ts-breadcrumb-current {
                    color: rgba(255,255,255,0.9);
                    font-weight: 500;
                }

                .ts-panel {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(135, 45, 230, 0.35);
                    border-radius: 14px;
                    overflow: hidden;
                    color: #fff;
                }

                .ts-editor-toggle {
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
                .ts-editor-toggle:hover { background: rgba(255,255,255,0.08); }

                .ts-form {
                    padding: 1rem 1.2rem 0.8rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    flex: 1;
                }

                .ts-title-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                @media (max-width: 600px) {
                    .ts-title-row {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }
                }
                .ts-title-left {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                }
                .ts-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                }
                .ts-refresh-btn {
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
                .ts-refresh-btn:hover { color: #ffffff; background: rgba(255,255,255,0.1); }

                .ts-exemplar-btn {
                    background: transparent;
                    border: none;
                    color: #a855f7;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.82rem;
                    cursor: pointer;
                    text-decoration: underline;
                    transition: color 0.2s;
                }
                .ts-exemplar-btn:hover { color: #c084fc; }

                .ts-subtitle {
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.55);
                    margin-top: -0.4rem;
                }

                .ts-field {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                }

                .ts-label {
                    font-size: 0.82rem;
                    font-weight: 500;
                    color: rgba(255,255,255,0.85);
                }
                .ts-required { color: #E01CF4; margin-left: 2px; }

                /* Select */
                .ts-select-wrapper {
                    position: relative;
                }
                .ts-select {
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
                .ts-select:focus { border-color: #872de6; }
                .ts-select option { background: #1f0545; color: #ffffff; }
                .ts-select-arrow {
                    position: absolute;
                    right: 0.9rem;
                    top: 50%;
                    transform: translateY(-50%);
                    pointer-events: none;
                    color: rgba(255,255,255,0.5);
                }

                /* Textarea Styles */
                .ts-textarea-outer {
                    display: flex;
                    flex-direction: column;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(135, 45, 230, 0.4);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: border-color 0.2s;
                }
                .ts-textarea-outer:focus-within { border-color: #872de6; }
                
                .ts-textarea-wrapper {
                    position: relative;
                    flex: 1;
                }

                .ts-textarea-icon {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    color: rgba(255,255,255,0.4);
                    pointer-events: none;
                }

                .ts-textarea {
                    width: 100%;
                    background: transparent;
                    border: none;
                    color: #ffffff;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.8rem;
                    padding: 0.5rem 1rem 0.6rem 2.5rem;
                    outline: none;
                    resize: vertical;
                    line-height: 1.4;
                    min-height: 50px;
                }
                .ts-textarea::placeholder { color: rgba(255,255,255,0.25); }

                .ts-textarea-resize-handle {
                    position: absolute;
                    bottom: 0.4rem;
                    right: 0.4rem;
                    color: rgba(255,255,255,0.2);
                    pointer-events: none;
                }

                /* Textarea inner footer (Add File + word count) */
                .ts-field-footer-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: rgba(17, 1, 41, 0.4);
                    border-top: 1px solid rgba(135, 45, 230, 0.2);
                    padding: 0.4rem 1rem;
                }

                .ts-file-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    background: transparent;
                    border: none;
                    padding: 0.2rem;
                    color: #a855f7;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.75rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: color 0.2s;
                }
                .ts-file-btn:hover { color: #c084fc; }

                .ts-word-count {
                    font-size: 0.72rem;
                    color: rgba(255,255,255,0.35);
                }

                /* Generate row */
                .ts-generate-row {
                    display: flex;
                    align-items: center;
                    margin-top: 0.5rem;
                }

                .ts-generate-btn {
                    width: 100%;
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
                .ts-generate-btn:hover { opacity: 0.9; }
                .ts-generate-btn:active { transform: scale(0.98); }
                .ts-generate-btn.generating { opacity: 0.7; cursor: not-allowed; }

                .ts-web-btn {
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
                .ts-web-btn:hover { background: rgba(135,45,230,0.15); border-color: #872de6; color: #fff; }

                @media (max-width: 600px) {
                    .ts-generate-row {
                        flex-direction: column;
                        gap: 0.75rem;
                    }
                    .ts-generate-btn, .ts-web-btn {
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