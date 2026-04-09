"use client";

import { ReactNode, createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextValue {
  tokens: string | null;
  setTokens: (tokens: string | null) => void;
  nameLetter: string;
  setNameLetter: (nameLetter: string) => void;
  id: string | null;
  setId: (id: string) => void;
  role: string | null;
  setRole: (role: string| null) => void;
} 

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [tokens, setToken] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [nameLetter, setNameLetter] = useState<string>("");
  const [role, setRole] = useState<string| null>(null);

  const setTokens = (tokens: string | null) => {
    if (tokens) {
      setToken(tokens);
      if (tokens !== null) {
        localStorage.setItem("tokens", tokens);
      } else {
        localStorage.removeItem("tokens");
      }
    } 
  };

  useEffect(() => {
    const storedTokens = localStorage.getItem("tokens");
    const localTokens = localStorage.getItem("tokens");
    const storedNameLetter = localStorage.getItem("nameLetter");
    const NameLetter = localStorage.getItem("nameLetter");
    if (storedTokens) setToken(storedTokens);
    if (localTokens) setToken(localTokens);
    if (storedNameLetter) setNameLetter(storedNameLetter);
    if (NameLetter) setNameLetter(NameLetter);
  }, []);

  const value: AuthContextValue = {
    tokens,
    setTokens,
    nameLetter,
    setNameLetter,
    id,
    setId,
    role,
    setRole
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
