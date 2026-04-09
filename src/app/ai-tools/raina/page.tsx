"use client";
import { useState, useRef, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RainaChat() {
  // --- NEW STATE FOR LINKING ---
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // --- UPDATED SEND FUNCTION LINKED TO BACKEND ---
  const handleSend = async (text: string) => {
    const query = text || input;
    if (!query.trim()) return;

    const userMessage = { role: "user", content: query };
    const newHistory = [...messages, userMessage];

    setMessages(newHistory);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.iamscientist.ai//api/raina/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newHistory }),
        },
      );

      const data = await response.json();
      if (data.success) {
        setMessages([
          ...newHistory,
          { role: "assistant", content: data.answer },
        ]);
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Raina Linking Error:", error);
      alert(
        "Failed to connect to Raina. Make sure your Flask backend is running on port 5328.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout activeTab="All Magic Tools">
      <div className="raina-page">
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
        <div className="raina-container">
        

          {/* Header Section */}
          {messages.length === 0 && (
            <div className="raina-header-section">
              <div className="avatar-wrapper">
                <img
                  src="/raina_avatar.png"
                  alt="Raina Avatar"
                  className="raina-avatar"
                />
              </div>
              <h1 className="raina-title">
                Hi! I'm Kiswa
                <svg
                  className="info-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </h1>
              <p className="raina-subtitle">
                I'm built for education. Ask me anything!
              </p>
            </div>
          )}

          {/* Chat Display Area */}
          {messages.length > 0 && (
            <div
              ref={scrollRef}
              style={{
                width: "100%",
                flex: 1,
                overflowY: "auto",
                marginBottom: "80px",
                padding: "10px",
              }}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent:
                      msg.role === "user" ? "flex-end" : "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "80%",
                      padding: "12px 16px",
                      borderRadius: "15px",
                      background:
                        msg.role === "user"
                          ? "#7c3aed"
                          : "rgba(255,255,255,0.1)",
                      color: "#fff",
                      fontSize: "0.9rem",
                      border:
                        msg.role === "assistant"
                          ? "1px solid rgba(135,45,230,0.3)"
                          : "none",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}
                >
                  Kiswa is thinking...
                </div>
              )}
            </div>
          )}

          {/* Prompt Grid Component - Only show if no messages */}
          {messages.length === 0 && (
            <div className="prompt-grid">
              <button
                className="prompt-card"
                onClick={() =>
                  handleSend(
                    "Suggest icebreaker questions for first-day middle school social studies",
                  )
                }
              >
                Suggest icebreaker questions for first-day middle school social
                studies
              </button>
              <button
                className="prompt-card"
                onClick={() =>
                  handleSend(
                    "Provide tips for managing screen time in remote learning",
                  )
                }
              >
                Provide tips for managing screen time in remote learning
              </button>
              <button
                className="prompt-card"
                onClick={() =>
                  handleSend(
                    "Recommend 5 accessible video resources for social studies",
                  )
                }
              >
                Recommend 5 accessible video resources for social studies
              </button>
              <button
                className="prompt-card"
                onClick={() =>
                  handleSend(
                    "List 5 engaging closure activities for a high school English class",
                  )
                }
              >
                List 5 engaging closure activities for a high school English
                class
              </button>
            </div>
          )}
        </div>

        {/* Fixed bottom input mimicking a chat app */}
        <div className="chat-input-section">
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Ask Raina anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
            />
            <button className="chat-send-btn" onClick={() => handleSend(input)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .raina-page {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          font-family: "Poppins", sans-serif;
          position: relative;
        }

        .raina-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1.5rem 2rem;
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }

        .raina-header-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 1.2rem;
        }

        .avatar-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 16px;
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            rgba(46, 152, 252, 0.2),
            rgba(224, 28, 244, 0.2)
          );
          box-shadow: 0 8px 24px rgba(224, 28, 244, 0.15);
          border: 1px solid rgba(224, 28, 244, 0.4);
          padding: 3px;
        }

        .raina-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 13px;
        }

        .raina-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.3rem;
        }

        .info-icon {
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: color 0.2s;
        }
        .info-icon:hover {
          color: #fff;
        }

        .raina-subtitle {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .prompt-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
          width: 100%;
        }

        .prompt-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(135, 45, 230, 0.3);
          border-radius: 10px;
          padding: 0.6rem 1rem;
          color: rgba(255, 255, 255, 0.85);
          font-family: "Poppins", sans-serif;
          font-size: 0.82rem;
          line-height: 1.3;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .prompt-card:hover {
          background: rgba(135, 45, 230, 0.15);
          border-color: #872de6;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(135, 45, 230, 0.15);
        }

        .chat-input-section {
          position: sticky;
          bottom: 0;
          width: 100%;
          padding: 0.5rem 1.5rem 1.5rem;
          background: linear-gradient(to top, #110129 60%, transparent);
          display: flex;
          justify-content: center;
        }

        .chat-input-container {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 800px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(135, 45, 230, 0.4);
          border-radius: 999px;
          padding: 0.4rem 0.4rem 0.4rem 1.2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .chat-input {
          flex: 1;
          background: transparent;
          border: none;
          color: #ffffff;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
          outline: none;
        }

        .chat-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .chat-send-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #7c3aed, #a21caf);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition:
            opacity 0.2s,
            transform 0.1s;
        }

        .chat-send-btn:hover {
          opacity: 0.9;
        }

        .chat-send-btn:active {
          transform: scale(0.95);
        }

        @media (max-width: 768px) {
          .prompt-grid {
            grid-template-columns: 1fr;
          }

          .raina-title {
            font-size: 1.8rem;
          }

          .raina-subtitle {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </DashboardLayout>
  );
}
