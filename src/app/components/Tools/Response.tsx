import React, { useState, useEffect, useRef } from "react";
import { useWebContext } from "../../../context/ContextProvider";

interface ContentResponseProps {}

const Response: React.FC<ContentResponseProps> = () => {
  const { loading, setLoading, response, error, emptyResponse } =
    useWebContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const [copyButtonText, setCopyButtonText] = useState<string>("Copy");

  const handleCopyClick = () => {
    const el = contentRef.current;
    if (!el) return;
    const data = el.innerText.replace(/\s+/g, " ").trim();
    setCopyButtonText("Copied");
    navigator.clipboard.writeText(data).catch((err) => {
      console.error("Failed to copy to clipboard: ", err);
    });
    setTimeout(() => setCopyButtonText("Copy"), 3000);
  };

  useEffect(() => {
    return () => {
      emptyResponse();
    };
    // Only clear when unmounting (e.g. leaving the page), not when context updates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      {loading ? (
        <div className="font-popins flex flex-col font-medium items-center justify-center border-4 border-dashed w-full h-full text-white/40 border-white/40 rounded">
          <span className="text-center">Please wait</span>
          <span>While your Request is being Processed</span>
          <div className="inline-block mt-5 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center border-4 border-dashed w-full h-full text-white/40 border-white/40 rounded">
          <p className="font-medium !text-red-600">Something went wrong!</p>
          {error && <p className="text-sm mt-2 text-white/70">{error}</p>}
        </div>
      ) : response !== null && response !== undefined ? (
        <div className="w-full h-full flex flex-col font-popins">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Generated results
            </h3>
            <button
              type="button"
              onClick={handleCopyClick}
              className="shrink-0 rounded-lg bg-gradient-to-r from-[#B150F7] to-[#EC459F] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
            >
              {copyButtonText}
            </button>
          </div>
          <div className="flex-1 min-h-[360px] rounded-xl border border-white/15 bg-[#0F2A5B]/90 shadow-xl overflow-hidden">
            <div
              ref={contentRef}
              className="free-tools-response-content h-full overflow-y-auto p-5 text-white [&_strong]:my-0 [&_strong]:mt-4 [&_strong]:first-of-type:mt-0 [&_strong]:block [&_strong]:rounded-lg [&_strong]:border-l-4 [&_strong]:border-[#B150F7] [&_strong]:bg-white/[0.06] [&_strong]:py-3.5 [&_strong]:px-4 [&_strong]:text-[15px] [&_strong]:font-medium [&_strong]:leading-relaxed [&_p]:mb-3 [&_p]:leading-relaxed [&_br]:hidden"
              style={{ lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{
                __html:
                  typeof response === "string"
                    ? response.replace(/\n/g, "<br/>")
                    : "",
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center border-4 border-dashed border-white/40 w-full h-full rounded">
          <p className="font-medium text-white/40">Start By Filling The Form</p>
        </div>
      )}
    </>
  );
};

export default Response;
