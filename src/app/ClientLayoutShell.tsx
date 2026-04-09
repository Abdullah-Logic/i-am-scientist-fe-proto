"use client";

import React, { Suspense, useEffect } from "react";
import Navbar from "./components/navbar";
import WatsappIcon from "./components/WatsappIcon";
import Footer from "./components/Footer";
import ImagesComp from "./components/ImagesComp";
import NewsLetter from "./components/NewsLetter";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import Container from "./components/container/container";
import { AuthProvider } from "../context/AuthContext";
import { ContextProvider } from "../context/ContextProvider";

const shouldHideComponents = (path: string): boolean =>
  path.startsWith("/iasExamSystem") ||
  path.startsWith("/magicSchool") ||
  path.startsWith("/exam") ||
  path.startsWith("/teacher/tools") ||
  path.startsWith("/ai-tools") ||
  path.startsWith("/chatbot") ||
  path.startsWith("/upgrade");

function useDocumentMeta(pathname: string) {
  useEffect(() => {
    const title =
      pathname === "/"
        ? "AI Content & AI Course for Kids | Fun & Engaging Learning for Children"
        : `${pathname
            .replace(/^\//, "")
            .replace(/-/g, " ")
            .split(" ")
            .filter(Boolean)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")} | AI Content & Learning`;
    document.title = title;

    const description =
      pathname === "/"
        ? "Unlock your child's potential with our AI Content and AI Course for Kids. Explore fun, interactive lessons designed to make artificial intelligence easy and exciting for young learners!"
        : `Explore the ${pathname.replace("/", "").replace(/-/g, " ")} page. Learn more about its content, features, and offerings designed to help children engage with AI effectively.`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [pathname]);
}

export default function ClientLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/signup";
  const hideComponents = shouldHideComponents(pathname) || isAuthPage;

  useDocumentMeta(pathname);

  return (
    <>
      {!hideComponents && (
        <Container>
          <Navbar />
        </Container>
      )}
      <AuthProvider>
        <ToastContainer />
        <Suspense>
          <ContextProvider>{children}</ContextProvider>
        </Suspense>
      </AuthProvider>
      {!hideComponents && (
        <Container>
          <ImagesComp />
          <NewsLetter />
          <Footer />
          <WatsappIcon />
        </Container>
      )}
    </>
  );
}
