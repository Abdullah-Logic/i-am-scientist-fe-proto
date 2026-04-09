"use client";

import FreeTools from "../utils/FreeTools";
import {
  ReactNode,
  createContext,
  useEffect,
  useContext,
  useRef,
  useState,
} from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface BlogProps {
  id: number;
  title: string;
  description: string;
  publishDate: string;
  image: string;
  slug: string;
  tags: string;
  category: string;
}

interface ContextProviderValue {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;

  getRespond: (prompt: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  response: any;
  setResponse: React.Dispatch<React.SetStateAction<any>>;
  emptyResponse: () => void;
  error: string | null;
  setCourseContentInfo: (
    subject: string,
    duration: string,
    level: string
  ) => void;
  courseContent: {
    subject: string;
    duration: string;
    level: string | undefined;
  };
  setError: (error: string | null) => void;
  apiSidebartoggle: boolean;
  setApiSidebartoggle: (apiSidebartoggle: boolean) => void;
  aboutRef: React.RefObject<HTMLDivElement> | null;
  pricingRef: React.RefObject<HTMLDivElement> | null;
  blogs: BlogProps[];
  setBlogs: React.Dispatch<React.SetStateAction<BlogProps[]>>;
  largeToggle: boolean;
  setLargeToggle: (largeToggle: boolean) => void;
}

const AppContext = createContext<ContextProviderValue | undefined>(undefined);

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [toggle, setToggle] = useState(false);
  const [largeToggle, setLargeToggle] = useState(true);
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [courseContent, setCourseContent] = useState({
    subject: "",
    duration: "",
    level: "",
  });

  const aboutRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const [apiSidebartoggle, setApiSidebartoggle] = useState<boolean>(false);

  const getRespond = async (prompt: string) => {
    try {
      clearResponse();
      setError(null);
      setLoading(true);
      const result = await FreeTools(prompt);
      if (result && typeof result === "object" && result.success === true) {
        const content =
          typeof result.data === "string"
            ? result.data
            : result.data != null
              ? String(result.data)
              : "";
        setResponse(content);
        setError(null);
      } else {
        const errMsg =
          result && typeof result === "object" && result.data != null
            ? String(result.data)
            : "Request failed. Please try again.";
        setError(errMsg);
      }
    } catch (err: unknown) {
      const axiosData = err && typeof err === "object" && "response" in err
        ? (err as { response?: { data?: { data?: string; message?: string } } }).response?.data
        : null;
      const message =
        axiosData?.data ?? axiosData?.message ?? (err instanceof Error ? err.message : "An unknown error occurred");
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const clearResponse = () => {
    setResponse(null);
  };

  const setCourseContentInfo = (
    subject: string,
    duration: string,
    level: string
  ) => {
    setCourseContent({
      subject,
      duration,
      level,
    });
  };

  const emptyResponse = () => {
    setResponse(null);
  };

  const value: ContextProviderValue = {
    toggle,
    setToggle,
    largeToggle,
    setLargeToggle,
    loading,
    setLoading,
    response,
    setResponse,

    getRespond,
    emptyResponse,
    error,
    setCourseContentInfo,
    courseContent,
    setError,
    apiSidebartoggle,
    setApiSidebartoggle,
    aboutRef,
    pricingRef,
    blogs,
    setBlogs,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useWebContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useWebContext must be used within an AppContext");
  }

  return context;
};
